import React from "react";

export default function ResultModal({
  isCorrect,
  onNext,
  timeOut = false,
}: {
  isCorrect: boolean;
  onNext: () => void;
  timeOut?: boolean;
}) {
  return (
    <div className="mt-6 p-4 bg-green-100 border rounded text-center text-black">
      <h4 className="text-xl font-bold mb-2">
        {timeOut
          ? "⏰ Süre doldu! Cevaplayamadınız."
          : isCorrect
          ? "🎉 Tebrikler, 0.5 XLM kazandınız!"
          : "❌ Üzgünüm, yanlış cevap."}
      </h4>
      <button
        onClick={onNext}
        className="mt-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Sonraki soruya
      </button>
    </div>
  );
}
