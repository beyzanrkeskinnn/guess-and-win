# 🎯 Quiz and Win 
 
## About Me

I'm Beyzanur Keskin, a 2020 BÖTE graduate from Ondokuz Mayıs University. I started as a Jr. Full Stack Developer in 2024 and discovered Web3 in 2025. After the Rise Bootcamp, I built my first blockchain project on MultiversX. Now, I'm developing smart contract projects on Stellar and Stacks to create simple, transparent decentralized solutions.

## Description

Quiz and Win is a decentralized quiz game built on the Scroll blockchain. Users answer a series of multiple-choice Web3-related questions. The smart contract evaluates each answer, tracks the number of correct responses, and rewards users with tokens based on their score. All quiz logic and reward mechanisms run on-chain, ensuring full transparency, fairness, and trustless execution. Whether you're new to blockchain or a seasoned developer, Quiz and Win offers a fun, educational way to earn while you learn.

## Vision
Our mission is to make learning Web3 interactive, rewarding, and fully decentralized. Quiz and Win transforms traditional quizzes into an on-chain experience where every interaction is provable and every correct answer has real value. By gamifying education with blockchain technology, we aim to inspire mass adoption, foster curiosity, and reward knowledge. The future of learning is decentralized — and it starts with answering a few questions.

## 🛠️ Project Roadmap / Future Plans

### 🔧 Smart Contract Design

#### 📦 Data Structures
- **`questions[]`**: List of all quiz questions (`QuizQuestion` struct)
- **`reward_pool`**: Token balance reserved for rewarding correct answers
- **(Planned)** `player_answers`: Mapping of player responses (`address → Vec<u32>`)
- **(Planned)** `score_board`: Mapping of number of correct answers per player (`address → u32`)
- **(Planned)** `entry_fee`: Fixed token amount required to participate in the quiz

---

### 🧠 Core Contract Functions

#### ✅ `add_question(admin, question, options, correct_index, reward)`
- Admin-only function
- Adds a new question to the quiz with its correct answer and reward amount

#### ✅ `answer_question(user, question_index, answer_index) -> bool`
- Verifies the user's answer to a specific question
- Transfers reward to the user if the answer is correct
- Returns `false` for incorrect answers

---

### 🔄 Planned Functions

#### 📝 `submit_answers(address, answers[])`
- Allows users to submit all answers at once
- Stores user responses in `player_answers`

#### 📊 `evaluate_score(address)`
- Compares user answers with correct answers
- Updates the `score_board` accordingly

#### 🎁 `distribute_rewards(address)`
- Sends token rewards based on the number of correct answers
- Rewards are distributed from the `reward_pool`

#### 🧑‍💼 `reset_quiz()`
- Resets the quiz for a new round
- Clears previous user submissions and scores

---

### 🔐 Security & Fairness

- ❌ Only one submission per user per game round (Planned)
- 🔒 Questions remain immutable during an active quiz round (Planned)
- ⚖️ Reward distribution is fully transparent and executed on-chain

---

🎯 The long-term goal is to expand `Quiz and Win` into a fully trustless, on-chain learning platform that rewards knowledge and drives Web3 adoption.


### Front-End Development
- Build a clean and simple React-based UI to:

   - Connect wallets

   - Display quiz questions

   - Submit answers

   - Show results and rewards

   - View past scores

- Integrate with the smart contract using Scroll-compatible SDKs.

### Testing
- Unit testing for all smart contract functions

- End-to-end testing for UI/UX and blockchain interaction

- Testnet deployment and debugging

### Deployment
- Deploy the smart contract on the Scroll mainnet.

- Launch the front-end on decentralized hosting platforms (e.g., IPFS or Vercel).

## Setup Environment

### 🛠️ Installation Guide

Follow these steps to set up the project locally and start development.

---

### ✅ Prerequisites

Make sure you have the following tools installed:

- [Rust](https://www.rust-lang.org/tools/install) (with `rustup`)
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/soroban-cli)
- [Node.js and npm](https://nodejs.org/)

---

### ⚙️ Setup Steps

1️⃣ **Clone the Repository:**

```bash
git clone https://github.com/beyzanrkeskinnn/quiz-and-win.git
cd quiz-and-win-contract
```
2️⃣ **Install Rust (if not installed):**
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
3️⃣ **Install Soroban CLI:**
```bash
cargo install --locked soroban-cli
```
4️⃣ **Install Frontend Dependencies:**
```bash
cd quiz-and-win-frontend
npm install
```
### ▶️ Run the project locally

5️⃣ **Start Soroban Test Network (optional for local testing)**
```bash
soroban network start
```

 6️⃣ **Build the smart contract:**
 ```bash
soroban contract build
```
7️⃣ **Deploy the contract to the test network (replace <network> with your network):**
 ```bash
soroban contract deploy --network <network> --wasm target/wasm32-unknown-unknown/release/contract.wasm
 ```
8️⃣Start the frontend development server:
 ```bash
npm start
```
---

## 🚀 Features

- 🔐 📚 Web3-based multiple choice quiz

- 🧠 On-chain answer validation

- 🪙 Token rewards based on correct answers

- 🔒 Immutable quiz logic for fairness

- 👤 Admin dashboard for managing questions

- 🔍 Transparent and verifiable gameplay on the blockchain

---

## 🛠 Tech Stack

- **Blockchain**: Stellar + Soroban
- **Language**: Rust
- **Smart Contracts**: Soroban SDK
- **Tooling**: Cargo, Soroban CLI
- **Frontend**: React + Web3

---

## 📁 Project Structure
```bash
quiz-and-win-contract/
├── src/
│ ├── lib.rs 
│ ├── admin.rs 
│ ├── balance.rs 
│ ├── quiz.rs 
│ ├── storage_types.rs 
│ └── contract.rs 

├── Cargo.toml 
├── README.md
```


## 📌 Gameplay Logic
- Player connects wallet and pays entry fee

- Questions are fetched from smart contract

- Player submits answers via the UI

- Contract evaluates responses on-chain

- Player receives tokens based on correct answers
  
