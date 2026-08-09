"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { Star, Flame, Trophy, CheckCircle2, ArrowRight } from "lucide-react";

interface RewardModalProps {
  xpEarned: number;
  streakDays: number;
  totalExercises: number;
  correctAnswers: number;
  onContinue: () => void;
}

export function RewardModal({
  xpEarned,
  streakDays,
  totalExercises,
  correctAnswers,
  onContinue,
}: RewardModalProps) {
  useEffect(() => {
    // Trigger festive confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const percentage = Math.round((correctAnswers / Math.max(1, totalExercises)) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="card-duo w-full max-w-md bg-white border-4 border-slate-200 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
        {/* Trophy Header Icon */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 border-b-4 border-amber-300 flex items-center justify-center text-amber-500 shadow-md">
          <Trophy className="w-12 h-12" />
        </div>

        {/* Title */}
        <div>
          <h2 className="text-3xl font-black text-[#4b4b4b] uppercase tracking-wide">
            Lesson Complete!
          </h2>
          <p className="text-sm font-bold text-slate-400 mt-1">
            Awesome progress! Keep up the momentum.
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* XP Card */}
          <div className="card-duo p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl flex flex-col items-center">
            <Star className="w-7 h-7 fill-amber-400 text-amber-500 mb-1" />
            <span className="text-xs font-extrabold uppercase text-amber-600">Total XP</span>
            <span className="text-2xl font-black text-amber-600">+{xpEarned} XP</span>
          </div>

          {/* Streak Card */}
          <div className="card-duo p-4 bg-orange-50 border-2 border-orange-200 rounded-2xl flex flex-col items-center">
            <Flame className="w-7 h-7 fill-orange-500 text-orange-500 mb-1" />
            <span className="text-xs font-extrabold uppercase text-orange-600">Streak</span>
            <span className="text-2xl font-black text-orange-600">{streakDays} Days</span>
          </div>
        </div>

        {/* Accuracy Progress */}
        <div className="card-duo p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl space-y-2 text-left">
          <div className="flex items-center justify-between text-xs font-bold text-[#4b4b4b]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#58cc02]" /> Perfect Answers
            </span>
            <span className="font-extrabold">{correctAnswers} / {totalExercises}</span>
          </div>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#58cc02] rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="btn-3d btn-primary-3d w-full py-4 text-lg tracking-wider flex items-center justify-center gap-2"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
