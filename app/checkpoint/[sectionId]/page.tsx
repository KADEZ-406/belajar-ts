"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ShieldCheck, CheckCircle2, ArrowRight, Award, Zap, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "@/lib/infrastructure/audio";

export default function SectionCheckpointPage() {
  const params = useParams();
  const router = useRouter();
  const sectionId = params.sectionId as string;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const checkpointQuestions = [
    {
      prompt: "Manakah sintaks yang paling tepat untuk mendefinisikan interface props di React TSX?",
      options: [
        "interface CardProps { title: string; count: number; }",
        "type CardProps = (title string, count number)",
        "cardProps = { title: string }",
        "interface CardProps: title string",
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Apa fungsi utama dari tipe data number pada TypeScript?",
      options: [
        "Menyimpan nilai angka baik bulat maupun desimal",
        "Hanya menyimpan nilai teks string angka",
        "Menyimpan nilai boolean true/false",
        "Menyimpan daftar larik array",
      ],
      correctAnswer: 0,
    },
  ];

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    soundManager.playClickSound();
  };

  const handleNext = () => {
    const isRight = selectedOption === checkpointQuestions[currentIdx].correctAnswer;
    const nextScore = score + (isRight ? 1 : 0);

    if (isRight) {
      soundManager.playCorrectSound();
    } else {
      soundManager.playWrongSound();
    }

    if (currentIdx + 1 < checkpointQuestions.length) {
      setScore(nextScore);
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setScore(nextScore);
      setIsCompleted(true);
      soundManager.playCompleteSound();
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  const currentQ = checkpointQuestions[currentIdx];

  if (isCompleted) {
    const passed = score >= 1;
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="card-duo w-full max-w-md bg-white border-4 border-slate-200 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-100 border-b-4 border-emerald-300 flex items-center justify-center text-[#58cc02] shadow-md">
            <ShieldCheck className="w-12 h-12" />
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#4b4b4b] uppercase tracking-tight">
              {passed ? "Section Lulus!" : "Coba Ulangi Checkpoint"}
            </h2>
            <p className="text-sm font-bold text-slate-400 mt-1">
              Skor kamu: {score} dari {checkpointQuestions.length} Benar
            </p>
          </div>

          <button
            onClick={() => router.push("/learn")}
            className="btn-3d btn-primary-3d w-full py-4 text-lg tracking-wider flex items-center justify-center gap-2"
          >
            Buka Section Berikutnya
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="card-duo w-full max-w-xl bg-white border-4 border-slate-200 p-6 md:p-10 rounded-3xl space-y-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Section Checkpoint ({sectionId})
          </span>
          <span className="text-xs font-bold text-slate-400">
            Soal {currentIdx + 1} dari {checkpointQuestions.length}
          </span>
        </div>

        {/* Question Prompt */}
        <div className="card-duo p-6 bg-slate-50 border-2 border-slate-200 rounded-2xl">
          <h2 className="text-xl font-extrabold text-[#4b4b4b] leading-tight">
            {currentQ.prompt}
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`card-duo p-4 rounded-2xl text-left font-mono font-bold text-sm transition-all ${
                  isSelected
                    ? "bg-emerald-50 border-2 border-[#58cc02] text-[#58cc02]"
                    : "bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className="btn-3d btn-primary-3d w-full py-4 text-base tracking-wider flex items-center justify-center gap-2"
        >
          {currentIdx + 1 < checkpointQuestions.length ? "Lanjut Checkpoint" : "Kirim Checkpoint"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
