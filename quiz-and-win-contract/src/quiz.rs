use soroban_sdk::{Env, Address, String, Vec, contracttype};
use crate::storage_types::DataKey;
use crate::balance::receive_balance;

#[derive(Clone)]
#[contracttype]
pub struct QuizQuestion {
    pub question: String,
    pub options: Vec<String>,
    pub correct_index: u32,
    pub reward: i128,
}

pub fn add_question(e: &Env, admin: Address, question: String, options: Vec<String>, correct_index: u32, reward: i128) {
    admin.require_auth();

    let mut questions = read_questions(e);
    questions.push_back(QuizQuestion {
        question,
        options,
        correct_index,
        reward,
    });

    e.storage().instance().set(&DataKey::Questions, &questions);
}

pub fn answer_question(e: &Env, user: Address, question_index: u32, answer_index: u32) -> bool {
    let questions = read_questions(e);
    let question = questions.get(question_index).unwrap();

    if question.correct_index == answer_index {
        receive_balance(e, user, question.reward);
        true
    } else {
        false
    }
}

fn read_questions(e: &Env) -> Vec<QuizQuestion> {
    e.storage().instance().get(&DataKey::Questions).unwrap_or(Vec::new(e))
}
