"use client";

import React, { useEffect, useState } from "react";
import ResultModal from "./result-modal";
import { useWalletStore } from "@/lib/stores/wallet-store";


const sampleQuestionData = [{
  question: "What is Web3?",
  options: ["Web browser", "Blockchain-based internet", "Email protocol", "Social media platform"],
  correctIndex: 1,
}, {
  question: "On which platform are smart contracts popular?",
  options: ["Facebook", "Ethereum", "Netflix", "Google Drive"],
  correctIndex: 1,
},
{
  question: "Which protocol forms the foundation of Web3?",
  options: ["HTTP", "WebSocket", "IPFS", "Ethereum"],
  correctIndex: 3,
},
{
  question: "What does NFT stand for?",
  options: ["New Finance Tool", "Non-Financial Token", "Non-Fungible Token", "Next Future Token"],
  correctIndex: 2,
},
{
  question: "What is the purpose of the Stellar network?",
  options: [
    "File storage",
    "Fast and low-cost cross-border payments",
    "Social media application",
    "Data analytics"
  ],
  correctIndex: 1,
},
{
  question: "What is a DAO?",
  options: [
    "Decentralized Autonomous Organization",
    "Secret software project",
    "Blockchain wallet",
    "Smart contract programming language"
  ],
  correctIndex: 0,
},
{
  question: "What is Proof of Stake (PoS) related to?",
  options: [
    "Cryptocurrency mining",
    "Consensus mechanism",
    "Data encryption",
    "Central server"
  ],
  correctIndex: 1,
},
{
  question: "What is Freighter Wallet?",
  options: [
    "A wallet application for the Stellar network",
    "A smart contract tool for the Ethereum network",
    "Centralized exchange platform",
    "Bitcoin mining hardware"
  ],
  correctIndex: 0,
}];


export default function QuestionCard() {
  const { isConnected } = useWalletStore();
  const [started, setStarted] = useState(false); 
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeOut, setTimeOut] = useState(false); 

  const [emptyCount, setEmptyCount] = useState(0);

  const currentQuestion = sampleQuestionData[currentQuestionIndex];


  useEffect(() => {
    if (!isConnected || !started || showResult) return;

    if (timeLeft <= 0) {
      setTimeOut(true);
      setIsCorrect(false);
      setShowResult(true);
      setWrongCount((prev) => prev + 1);
      setEmptyCount((prev) => prev + 1);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, isConnected, started, showResult]);

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeOut(false); 

    const correct = index === currentQuestion.correctIndex;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setCorrectCount((prev) => prev + 1);
      
    } else {
      setWrongCount((prev) => prev + 1);
    }


    // TODO: doğruysa akıllı sözleşmeye ödül işlemini tetikle
  };

  const handleNext = () => {
    setTimeOut(false);
    if (currentQuestionIndex + 1 >= sampleQuestionData.length) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelected(null);
      setShowResult(false);
      setTimeLeft(15);
    }
  };


  if (!isConnected) {
    return (
      <div className="bg-yellow-100 text-black text-center p-6 rounded shadow mt-6 max-w-xl mx-auto">
        <p className="text-lg font-semibold">🦊 Lütfen önce cüzdanınızı bağlayın.</p>
      </div>
    );
  }
  if (!started) {
    return (
      <div className="bg-white rounded shadow p-6 max-w-xl mx-auto mt-6 text-center text-black">
        <p className="text-lg font-semibold mb-4">🧠 Web3 Quiz'ine hoş geldiniz!</p>
        <button
          onClick={() => setStarted(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Başla
        </button>
      </div>
    );
  }
  if (quizCompleted) {
    return (
      <div className="bg-green-100 text-black text-center p-6 rounded shadow mt-6 max-w-xl mx-auto">
        <p className="text-xl font-bold">🎉 Tebrikler! Tüm soruları tamamladınız.</p>
        <div className="text-left text-sm">
          <p>✅ Doğru cevap sayısı: <strong>{correctCount}</strong></p>
          <p>❌ Yanlış cevap sayısı: <strong>{wrongCount}</strong></p>
          <p>⚪ Boş (cevap verilmemiş) soru sayısı: <strong>{emptyCount}</strong></p>
          <p>💰 Toplam kazanç: <strong>{(correctCount * 0.5).toFixed(1)} XLM</strong></p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded shadow p-6 max-w-xl mx-auto mt-6 text-black">
      <p className="text-lg font-semibold mb-4">
        ⏳ Süre: {timeLeft} saniye | Soru {currentQuestionIndex + 1} / {sampleQuestionData.length}
      </p>
      <h3 className="text-xl font-bold mb-4">{currentQuestion.question}</h3>
      <div className="space-y-3">
        {currentQuestion.options.map((option, i) => (
          <button
            key={i}
            disabled={selected !== null}
            onClick={() => handleAnswer(i)}
            className={`w-full text-left px-4 py-2 rounded border ${selected === i ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showResult && (
        <ResultModal
          isCorrect={isCorrect}
          onNext={handleNext}
          timeOut={timeOut}
        />
      )}
    </div>
  );
}
