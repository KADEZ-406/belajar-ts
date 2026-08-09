"use client";

import React, { useState } from "react";
import { ACHIEVEMENTS_DATA } from "@/lib/data/achievements";
import { useGamification } from "@/lib/application/GamificationContext";
import { Award, Lock, CheckCircle2, Star, Flame, Zap, Rocket, Code2, BookOpen, Laptop, Trophy, Atom } from "lucide-react";

export default function AchievementsPage() {
  const { user } = useGamification();
  const [filter, setFilter] = useState<string>("all");

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "flame":
        return <Flame className="w-7 h-7 text-orange-500 fill-orange-500" />;
      case "zap":
        return <Zap className="w-7 h-7 text-amber-500" />;
      case "rocket":
        return <Rocket className="w-7 h-7 text-sky-500" />;
      case "code-2":
        return <Code2 className="w-7 h-7 text-[#58cc02]" />;
      case "book-open":
        return <BookOpen className="w-7 h-7 text-[#1cb0f6]" />;
      case "laptop":
        return <Laptop className="w-7 h-7 text-purple-600" />;
      case "trophy":
        return <Trophy className="w-7 h-7 text-amber-500" />;
      case "star":
        return <Star className="w-7 h-7 text-amber-400 fill-amber-400" />;
      case "atom":
        return <Atom className="w-7 h-7 text-purple-600" />;
      default:
        return <Award className="w-7 h-7 text-slate-500" />;
    }
  };

  const achievements = ACHIEVEMENTS_DATA.map((item) => {
    const isUnlocked = user.unlockedAchievements.includes(item.id);
    return {
      ...item,
      isUnlocked,
    };
  });

  const filtered = achievements.filter((a) => {
    if (filter === "unlocked") return a.isUnlocked;
    if (filter === "locked") return !a.isUnlocked;
    return true;
  });

  const unlockedCount = achievements.filter((a) => a.isUnlocked).length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Banner */}
      <div className="card-duo p-6 md:p-8 bg-gradient-to-r from-purple-900 to-indigo-900 text-white border-4 border-purple-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border-2 border-purple-400 text-purple-300 flex items-center justify-center text-3xl shrink-0">
            <Award className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Daftar Lencana Pencapaian</h1>
            <p className="text-purple-200 text-sm font-medium mt-1">
              Dapatkan lencana bergengsi dengan mencapai berbagai target selama alur belajar kamu.
            </p>
          </div>
        </div>

        <div className="px-5 py-3 bg-white/10 rounded-2xl border border-white/20 text-center shrink-0">
          <span className="text-xs font-bold text-purple-200 uppercase tracking-wider block">
            Lencana Terbuka
          </span>
          <span className="text-2xl font-black text-amber-300">
            {unlockedCount} / {achievements.length}
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-black uppercase text-slate-400 mr-2">Filter:</span>
        {(["all", "unlocked", "locked"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase transition-all ${
              filter === tab
                ? "bg-[#1cb0f6] text-white"
                : "bg-white text-slate-600 border-2 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {tab === "all" ? "Semua" : tab === "unlocked" ? "Terbuka" : "Terkunci"}
          </button>
        ))}
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`card-duo p-6 rounded-3xl flex flex-col justify-between space-y-4 transition-all ${
              item.isUnlocked
                ? "bg-white border-2 border-amber-300"
                : "bg-slate-50 border-2 border-slate-200 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border-b-4 ${
                    item.isUnlocked
                      ? "bg-amber-100 border-amber-300"
                      : "bg-slate-200 border-slate-300"
                  }`}
                >
                  {getAchievementIcon(item.icon)}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#4b4b4b] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">{item.description}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-3">
              <span className="flex items-center gap-1 text-xs font-extrabold text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" /> +{item.xpReward} XP
              </span>

              {item.isUnlocked ? (
                <span className="flex items-center gap-1 text-xs font-extrabold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" /> Terbuka
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-bold text-slate-400">
                  <Lock className="w-4 h-4" /> Terkunci
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
