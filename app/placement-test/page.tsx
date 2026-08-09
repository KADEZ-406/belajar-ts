"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { HelpCircle, CheckCircle2, ArrowRight, Award, Zap } from "lucide-react";
import { soundManager } from "@/lib/infrastructure/audio";
import { useGamification } from "@/lib/application/GamificationContext";
import { Language } from "@/lib/domain/lesson/lesson.types";

const PLACEMENT_QUESTIONS: Record<Language, Array<{ prompt: string; options: string[]; correctAnswer: number }>> = {
  typescript: [
    {
      prompt: "Manakah sintaks yang benar untuk mendeklarasikan variabel bertipe string di TypeScript?",
      options: [
        "const nama: string = 'Kadez';",
        "string nama = 'Kadez';",
        "var nama := 'Kadez';",
        "const nama = string('Kadez');",
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Apa kata kunci tipe data untuk nilai logika benar/salah di TypeScript?",
      options: ["boolean", "bool", "bit", "logic"],
      correctAnswer: 0,
    },
    {
      prompt: "Bagaimana cara mendefinisikan tipe data parameter fungsi di TypeScript?",
      options: [
        "function sapa(nama: string)",
        "function sapa(string: nama)",
        "function sapa(nama as string)",
        "sapa(nama string)",
      ],
      correctAnswer: 0,
    },
  ],
  tsx: [
    {
      prompt: "Extension file apakah yang digunakan untuk menulis komponen React dengan TypeScript?",
      options: [".tsx", ".jsx", ".ts", ".react"],
      correctAnswer: 0,
    },
    {
      prompt: "Manakah cara yang benar mendefinisikan interface props komponen React TSX?",
      options: [
        "interface CardProps { title: string; }",
        "type CardProps = (title: string)",
        "const CardProps = { title: string }",
        "interface CardProps: title string",
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Bagaimana cara menentukan tipe state angka pada useState hook di React TSX?",
      options: [
        "const [count, setCount] = useState<number>(0);",
        "const [count, setCount] = useState(number: 0);",
        "const count: number = useState();",
        "const useState = number(0);",
      ],
      correctAnswer: 0,
    },
  ],
  python: [
    {
      prompt: "Bagaimana cara mencetak kalimat 'Halo Python' ke konsol di Python?",
      options: [
        "print('Halo Python')",
        "console.log('Halo Python')",
        "System.out.println('Halo Python')",
        "echo 'Halo Python'",
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Apakah Python membutuhkan tanda titik koma (;) di akhir setiap baris kode?",
      options: [
        "Tidak butuh titik koma",
        "Wajib titik koma di setiap baris",
        "Hanya di akhir fungsi",
        "Wajib titik koma jika ada variabel",
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Manakah sintaks penulisan perulangan for yang benar di Python?",
      options: [
        "for i in range(5):",
        "for (int i=0; i<5; i++)",
        "foreach i in 5",
        "loop i from 1 to 5",
      ],
      correctAnswer: 0,
    },
  ],
};

function PlacementTestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { savePlacementResult } = useGamification();
  const lang = (searchParams.get("lang") as Language) || "typescript";

  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions = PLACEMENT_QUESTIONS[lang] || PLACEMENT_QUESTIONS.typescript;

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    soundManager.playClickSound();
  };

  const handleNextQuestion = () => {
    const isRight = selectedOption === questions[currentIdx].correctAnswer;
    const finalScore = score + (isRight ? 1 : 0);

    if (currentIdx + 1 < questions.length) {
      setScore(finalScore);
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      let recLevel = "Tingkat Pemula Total (Fondasi Awal)";
      if (finalScore >= 3) recLevel = "Tingkat Menengah (Pemahaman Bagus)";
      else if (finalScore === 2) recLevel = "Tingkat Dasar (Pengenalan & Sintaks)";

      savePlacementResult(lang, finalScore, questions.length, recLevel);
      router.push(`/skill-assessment?score=${finalScore}&lang=${lang}`);
    }
  };

  const currentQ = questions[currentIdx];

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="card-duo w-full max-w-xl bg-white border-4 border-slate-200 p-6 md:p-10 rounded-3xl space-y-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="text-xs font-black uppercase tracking-wider text-[#1cb0f6] flex items-center gap-1.5">
            <Zap className="w-4 h-4" /> Placement Test ({lang.toUpperCase()})
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
                    ? "bg-sky-50 border-2 border-[#1cb0f6] text-[#1cb0f6]"
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
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
          className="btn-3d btn-primary-3d w-full py-4 text-base tracking-wider flex items-center justify-center gap-2"
        >
          {currentIdx + 1 < questions.length ? "Soal Berikutnya" : "Lihat Hasil Skill Assessment"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function PlacementTestPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading test...</div>}>
      <PlacementTestContent />
    </Suspense>
  );
}
