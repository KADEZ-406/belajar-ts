"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Trophy, Award, CheckCircle2, ArrowRight, Star, Flame, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "@/lib/infrastructure/audio";

export default function FinalAssessmentPage() {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const finalQuestions = [
    {
      prompt: "Manakah perbedaan utama antara TypeScript dan JavaScript biasa?",
      options: [
        "TypeScript memiliki sistem pemeriksaan tipe data statis saat kompilasi",
        "JavaScript tidak bisa dijalankan di dalam browser",
        "TypeScript tidak mendukung sintaks ES6+",
        "TypeScript hanya bisa dipakai untuk pembuatan game 3D",
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Bagaimana cara mendefinisikan interface props pada komponen React TSX?",
      options: [
        "interface Props { title: string } lalu digunakan pada parameter komponen",
        "props.type = string",
        "const props = React.string()",
        "export props = { title }",
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Bagaimana cara melakukan cetakan nilai di bahasa Python?",
      options: ["print(\"Teks\")", "console.log(\"Teks\")", "echo \"Teks\"", "System.out.println(\"Teks\")"],
      correctAnswer: 0,
    },
  ];

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    soundManager.playClickSound();
  };

  const handleNext = () => {
    const isRight = selectedOption === finalQuestions[currentIdx].correctAnswer;
    const nextScore = score + (isRight ? 1 : 0);

    if (isRight) {
      soundManager.playCorrectSound();
    } else {
      soundManager.playWrongSound();
    }

    if (currentIdx + 1 < finalQuestions.length) {
      setScore(nextScore);
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setScore(nextScore);
      setIsCompleted(true);
      soundManager.playCompleteSound();
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="card-duo w-full max-w-lg bg-white border-4 border-slate-200 p-8 md:p-10 rounded-3xl text-center space-y-6 shadow-2xl">
          <div className="w-24 h-24 mx-auto rounded-3xl bg-amber-100 border-b-4 border-amber-300 flex items-center justify-center text-amber-500 shadow-lg">
            <Trophy className="w-14 h-14" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-[#4b4b4b] uppercase tracking-tight">
              Selamat! Kursus Selesai!
            </h1>
            <p className="text-sm font-bold text-slate-400 mt-1">
              Kamu berhasil menyelesaikan Final Assessment dengan skor {score} dari {finalQuestions.length}!
            </p>
          </div>

          <div className="card-duo p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-600 shrink-0" />
              <div>
                <h4 className="font-black text-base text-amber-900">Sertifikat Kelulusan CodeQuest</h4>
                <p className="text-xs font-semibold text-amber-700">Telah Menguasai TypeScript, TSX & Python</p>
              </div>
            </div>
            <Star className="w-6 h-6 fill-amber-400 text-amber-500 shrink-0" />
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="btn-3d btn-primary-3d w-full py-4 text-lg tracking-wider flex items-center justify-center gap-2"
          >
            Kembali ke Dashboard
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
          <span className="text-xs font-black uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
            <Trophy className="w-4 h-4" /> Final Assessment (Ujian Akhir Kursus)
          </span>
          <span className="text-xs font-bold text-slate-400">
            Soal {currentIdx + 1} dari {finalQuestions.length}
          </span>
        </div>

        {/* Question Prompt */}
        <div className="card-duo p-6 bg-slate-50 border-2 border-slate-200 rounded-2xl">
          <h2 className="text-xl font-extrabold text-[#4b4b4b] leading-tight">
            {finalQuestions[currentIdx].prompt}
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {finalQuestions[currentIdx].options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`card-duo p-4 rounded-2xl text-left font-mono font-bold text-sm transition-all ${
                  isSelected
                    ? "bg-amber-50 border-2 border-amber-400 text-amber-900"
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
          {currentIdx + 1 < finalQuestions.length ? "Lanjut Ujian Akhir" : "Kirim Ujian Akhir"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
