"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ShieldCheck, CheckCircle2, ArrowRight, Award, Zap, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "@/lib/infrastructure/audio";
import { useGamification } from "@/lib/application/GamificationContext";
import { Language } from "@/lib/domain/lesson/lesson.types";

const CHECKPOINT_QUESTIONS: Record<string, Array<{ prompt: string; options: string[]; correctAnswer: number }>> = {
  ts_sec_1: [
    {
      prompt: "Manakah sintaks yang benar untuk menentukan tipe data variabel umur bertipe angka di TypeScript?",
      options: ["let umur: number = 25;", "number umur = 25;", "let umur = int(25);", "var umur := 25;"],
      correctAnswer: 0,
    },
    {
      prompt: "Apakah keunggulan utama menggunakan fitur Type Inference di TypeScript?",
      options: [
        "TypeScript menebak tipe variabel secara otomatis dari nilai awal",
        "Menghapus kebutuhan kompilasi tsc",
        "Mengubah kode menjadi bahasa Python",
        "Membuat aplikasi berjalan 100x lebih cepat",
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Apakah hasil kompilasi dari kode TypeScript?",
      options: ["Kode JavaScript standar", "File binary .exe", "File HTML", "Kode C++"],
      correctAnswer: 0,
    },
  ],
  ts_sec_2: [
    {
      prompt: "Bagaimana cara membuat array angka bertipe number[] di TypeScript?",
      options: ["let angka: number[] = [1, 2, 3];", "let angka = (1, 2, 3);", "array angka = [1, 2, 3];", "let angka: tuple = [1, 2, 3];"],
      correctAnswer: 0,
    },
    {
      prompt: "Manakah yang mendefinisikan tipe Tuple berurutan string dan number?",
      options: ["let data: [string, number] = ['Budi', 25];", "let data: Array = ['Budi', 25];", "let data: (string, number);", "let data: tuple;"],
      correctAnswer: 0,
    },
    {
      prompt: "Bagaimana menentukan return type number pada fungsi tambah(a: number, b: number)?",
      options: ["function tambah(a: number, b: number): number { return a + b; }", "function tambah(a, b) -> number", "tambah(a number, b number) number", "def tambah(a, b): int"],
      correctAnswer: 0,
    },
  ],
  tsx_sec_1: [
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
      prompt: "Extension file apakah yang digunakan untuk membuat komponen React berbasis TypeScript?",
      options: [".tsx", ".jsx", ".ts", ".react"],
      correctAnswer: 0,
    },
    {
      prompt: "Bagaimana menentukan tipe state angka pada useState hook di React TSX?",
      options: ["const [count, setCount] = useState<number>(0);", "const count = number(0);", "let state = useState(number);", "const count: state = 0;"],
      correctAnswer: 0,
    },
  ],
  py_sec_1: [
    {
      prompt: "Bagaimana cara melakukan cetakan nilai teks ke layar di Python?",
      options: ["print('Teks')", "console.log('Teks')", "echo 'Teks'", "System.out.println('Teks')"],
      correctAnswer: 0,
    },
    {
      prompt: "Apakah Python membutuhkan tanda titik koma (;) di akhir setiap baris?",
      options: ["Tidak butuh titik koma", "Wajib di setiap akhir baris", "Hanya jika ada variabel", "Wajib di dalam fungsi"],
      correctAnswer: 0,
    },
    {
      prompt: "Manakah sintaks penulisan perulangan for yang benar di Python?",
      options: ["for i in range(5):", "for (int i=0; i<5; i++)", "foreach i in 5", "loop i to 5"],
      correctAnswer: 0,
    },
  ],
};

export default function SectionCheckpointPage() {
  const params = useParams();
  const router = useRouter();
  const { saveCheckpointResult, user } = useGamification();
  const sectionId = (params.sectionId as string) || "ts_sec_1";

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = CHECKPOINT_QUESTIONS[sectionId] || CHECKPOINT_QUESTIONS.ts_sec_1;

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    soundManager.playClickSound();
  };

  const handleNext = () => {
    const isRight = selectedOption === questions[currentIdx].correctAnswer;
    const finalScore = score + (isRight ? 1 : 0);

    if (isRight) {
      soundManager.playCorrectSound();
    } else {
      soundManager.playWrongSound();
    }

    if (currentIdx + 1 < questions.length) {
      setScore(finalScore);
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setScore(finalScore);
      const passed = finalScore >= 2; // Pass threshold: 66%+ (2 out of 3)
      setIsCompleted(true);

      const lang: Language = sectionId.startsWith("tsx")
        ? "tsx"
        : sectionId.startsWith("py")
        ? "python"
        : "typescript";

      saveCheckpointResult(sectionId, lang, finalScore, questions.length, passed);

      if (passed) {
        soundManager.playCompleteSound();
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }
    }
  };

  const currentQ = questions[currentIdx];

  if (isCompleted) {
    const passed = score >= 2;
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
        <div className="card-duo w-full max-w-md bg-white border-4 border-slate-200 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
          <div
            className={`w-20 h-20 mx-auto rounded-3xl border-b-4 flex items-center justify-center shadow-md ${
              passed
                ? "bg-emerald-100 border-emerald-300 text-[#58cc02]"
                : "bg-red-100 border-red-300 text-red-500"
            }`}
          >
            <ShieldCheck className="w-12 h-12" />
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#4b4b4b] uppercase tracking-tight">
              {passed ? "Section Lulus!" : "Coba Ulangi Checkpoint"}
            </h2>
            <p className="text-sm font-bold text-slate-400 mt-1">
              Skor kamu: {score} dari {questions.length} Benar {passed ? "(Bonus +50 XP!)" : "(Minimal 2 Benar)"}
            </p>
          </div>

          <button
            onClick={() => router.push("/learn")}
            className="btn-3d btn-primary-3d w-full py-4 text-lg tracking-wider flex items-center justify-center gap-2"
          >
            {passed ? "Buka Section Berikutnya" : "Ulangi Checkpoint"}
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
            Soal {currentIdx + 1} dari {questions.length}
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
          {currentIdx + 1 < questions.length ? "Lanjut Checkpoint" : "Kirim Checkpoint"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
