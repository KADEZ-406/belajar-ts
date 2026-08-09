"use client";

import React from "react";
import { useGamification } from "@/lib/application/GamificationContext";
import { calculateLevelProgress } from "@/lib/domain/gamification/rules";
import { Flame, Star, Trophy, Award, CheckCircle2, RotateCcw, BookOpen } from "lucide-react";

export default function ProfilePage() {
  const { user, resetProgress } = useGamification();
  const levelProgress = calculateLevelProgress(user.xp);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Profile Header Card */}
      <div className="card-duo p-8 bg-white border-2 border-slate-200 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-24 h-24 rounded-full bg-slate-100 border-4 border-[#1cb0f6] p-1 shadow-md"
          />

          <div className="space-y-1">
            <h1 className="text-3xl font-black text-[#4b4b4b]">{user.username}</h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#1cb0f6] font-extrabold text-xs uppercase tracking-wider">
              Level {levelProgress.level} — {levelProgress.title}
            </div>
            <p className="text-xs font-bold text-slate-400">
              Member since 2026 • Active Daily Learner
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <button
          onClick={() => {
            if (confirm("Reset all learning progress and stats?")) {
              resetProgress();
            }
          }}
          className="btn-3d btn-outline-3d px-4 py-2 text-xs text-red-500 border-red-200 hover:bg-red-50"
        >
          <RotateCcw className="w-3.5 h-3.5 mr-1 inline-block" /> Reset Progress
        </button>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total XP */}
        <div className="card-duo p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl text-center space-y-1">
          <Star className="w-6 h-6 text-amber-500 fill-amber-400 mx-auto" />
          <span className="text-[10px] font-extrabold uppercase text-amber-600 block">Total XP</span>
          <span className="text-2xl font-black text-amber-600">{user.xp}</span>
        </div>

        {/* Streak */}
        <div className="card-duo p-5 bg-orange-50 border-2 border-orange-200 rounded-2xl text-center space-y-1">
          <Flame className="w-6 h-6 text-orange-500 fill-orange-500 mx-auto" />
          <span className="text-[10px] font-extrabold uppercase text-orange-600 block">Day Streak</span>
          <span className="text-2xl font-black text-orange-600">{user.streak} Days</span>
        </div>

        {/* Completed Lessons */}
        <div className="card-duo p-5 bg-emerald-50 border-2 border-emerald-200 rounded-2xl text-center space-y-1">
          <BookOpen className="w-6 h-6 text-[#58cc02] mx-auto" />
          <span className="text-[10px] font-extrabold uppercase text-emerald-600 block">
            Lessons Done
          </span>
          <span className="text-2xl font-black text-emerald-600">
            {user.completedLessons.length}
          </span>
        </div>

        {/* Achievements */}
        <div className="card-duo p-5 bg-purple-50 border-2 border-purple-200 rounded-2xl text-center space-y-1">
          <Award className="w-6 h-6 text-purple-600 mx-auto" />
          <span className="text-[10px] font-extrabold uppercase text-purple-600 block">
            Badges
          </span>
          <span className="text-2xl font-black text-purple-600">
            {user.unlockedAchievements.length}
          </span>
        </div>
      </div>

      {/* Language Proficiency Progress Section */}
      <div className="card-duo p-6 md:p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-6">
        <h2 className="text-xl font-black text-[#4b4b4b] uppercase tracking-wide">
          Language Proficiency
        </h2>

        <div className="space-y-4">
          {/* TypeScript */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-extrabold text-[#4b4b4b]">
              <span className="flex items-center gap-2">📘 TypeScript</span>
              <span className="text-[#1cb0f6]">{user.languageProgress.typescript || 0}%</span>
            </div>
            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-[#1cb0f6] rounded-full transition-all duration-500"
                style={{ width: `${user.languageProgress.typescript || 0}%` }}
              />
            </div>
          </div>

          {/* TSX / React */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-extrabold text-[#4b4b4b]">
              <span className="flex items-center gap-2">⚛️ TSX / React</span>
              <span className="text-purple-600">{user.languageProgress.tsx || 0}%</span>
            </div>
            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${user.languageProgress.tsx || 0}%` }}
              />
            </div>
          </div>

          {/* Python */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-extrabold text-[#4b4b4b]">
              <span className="flex items-center gap-2">🐍 Python</span>
              <span className="text-[#58cc02]">{user.languageProgress.python || 0}%</span>
            </div>
            <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-[#58cc02] rounded-full transition-all duration-500"
                style={{ width: `${user.languageProgress.python || 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
