"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Trophy, Star, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "@/lib/infrastructure/audio";

function SkillAssessmentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scoreStr = searchParams.get("score") || "2";
  const lang = searchParams.get("lang") || "typescript";
  const score = parseInt(scoreStr, 10);

  React.useEffect(() => {
    soundManager.playCompleteSound();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }, []);

  const getRecommendedLevel = () => {
    if (score >= 3) return "Tingkat Menengah (Pemahaman Bagus)";
    if (score === 2) return "Tingkat Dasar (Pengenalan & Sintaks)";
    return "Tingkat Pemula Total (Fondasi Awal)";
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="card-duo w-full max-w-lg bg-white border-4 border-slate-200 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
        {/* Trophy Header */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 border-b-4 border-amber-300 flex items-center justify-center text-amber-500 shadow-md">
          <Trophy className="w-12 h-12" />
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-black text-[#4b4b4b] uppercase tracking-tight">
            Skill Assessment Selesai!
          </h1>
          <p className="text-sm font-bold text-slate-400 mt-1">
            Alur belajar kamu telah disesuaikan secara otomatis.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="card-duo p-5 bg-sky-50 border-2 border-sky-200 rounded-2xl space-y-3 text-left">
          <div className="flex items-center justify-between text-xs font-black uppercase text-[#1cb0f6]">
            <span>Hasil Evaluasi Penempatan</span>
            <span>{score} / 3 Benar</span>
          </div>

          <div className="p-3 bg-white rounded-xl border border-sky-200 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#58cc02] shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-400 block">Rekomendasi Level:</span>
              <span className="text-sm font-extrabold text-[#4b4b4b]">
                {getRecommendedLevel()}
              </span>
            </div>
          </div>
        </div>

        {/* Start Learning Button */}
        <button
          onClick={() => router.push(`/learn?lang=${lang}`)}
          className="btn-3d btn-primary-3d w-full py-4 text-lg tracking-wider flex items-center justify-center gap-2"
        >
          Buka Personalized Learning Path
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function SkillAssessmentPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading assessment...</div>}>
      <SkillAssessmentContent />
    </Suspense>
  );
}
