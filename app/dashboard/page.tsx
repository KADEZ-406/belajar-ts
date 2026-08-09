"use client";

import Link from "next/link";
import { useGamification } from "@/lib/application/GamificationContext";
import { calculateLevelProgress } from "@/lib/domain/gamification/rules";
import { Play, Flame, Star, Trophy, Award, CheckCircle2, Lock, ArrowRight, Target, Rocket, Tag, Settings, Shuffle, Repeat, Box, Building, Zap, Crown } from "lucide-react";

export default function DashboardPage() {
  const { user } = useGamification();
  const levelProgress = calculateLevelProgress(user.xp);

  const skillTreeNodes = [
    { title: "Dasar Pemrograman", status: "COMPLETED", icon: Rocket },
    { title: "Variabel dan Tipe Data", status: "IN_PROGRESS", icon: Tag },
    { title: "Fungsi dan Lingkup", status: "AVAILABLE", icon: Settings },
    { title: "Kondisi dan Logika", status: "LOCKED", icon: Shuffle },
    { title: "Perulangan dan Iterasi", status: "LOCKED", icon: Repeat },
    { title: "Array dan Koleksi", status: "LOCKED", icon: Box },
    { title: "Objek dan Skema", status: "LOCKED", icon: Building },
    { title: "Asinkron dan Promise", status: "LOCKED", icon: Zap },
    { title: "Arsitektur Lanjut", status: "LOCKED", icon: Crown },
  ];

  const xpRemaining = Math.max(0, user.dailyGoal - user.dailyXP);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Welcome & Level Overview Banner */}
      <div className="card-duo p-6 md:p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white border-4 border-slate-700 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-5">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-16 h-16 rounded-2xl bg-white/10 border-2 border-[#1cb0f6] p-1"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-black">Selamat datang kembali, {user.username}!</h1>
            </div>
            <p className="text-slate-400 text-sm font-medium mt-1">
              Tingkat {levelProgress.level}: {levelProgress.title} (Total {user.xp} XP).
            </p>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="w-full md:w-72 bg-slate-950/60 p-4 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-300">
            <span>Tingkat {levelProgress.level}</span>
            <span>{levelProgress.xpInLevel} / {levelProgress.totalInLevel} XP</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#58cc02] rounded-full transition-all duration-500"
              style={{ width: `${levelProgress.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Continue Learning & Skill Tree */}
        <div className="lg:col-span-2 space-y-8">
          {/* Continue Learning Card */}
          <div className="card-duo p-6 md:p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-6 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#1cb0f6]">
                Lanjutkan Belajar
              </span>
              <span className="text-xs font-bold text-slate-400">Pelajaran 2 dari 10</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 border-b-4 border-sky-300 text-[#1cb0f6] flex items-center justify-center shrink-0">
                <Tag className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  Alur TypeScript
                </span>
                <h3 className="text-2xl font-black text-[#4b4b4b] leading-tight">
                  Variabel dan Tipe Data Primitif
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  Kuasai string, number, boolean, dan anotasi tipe data pada TypeScript.
                </p>
              </div>
            </div>

            <Link
              href="/learn/typescript/ts_lesson_2"
              className="btn-3d btn-primary-3d w-full py-4 text-base tracking-wider flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Lanjutkan Pelajaran (+50 XP)
            </Link>
          </div>

          {/* Skill Tree Section */}
          <div className="card-duo p-6 md:p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-6">
            <div>
              <h3 className="text-xl font-black text-[#4b4b4b] uppercase tracking-tight">
                Pohon Kemampuan
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-0.5">
                Selesaikan modul prasyarat untuk membuka tingkat pemrograman berikutnya.
              </p>
            </div>

            {/* Tree Nodes List */}
            <div className="flex flex-col items-center space-y-4 relative py-4">
              {skillTreeNodes.map((node, i) => {
                const IconComponent = node.icon;
                const isCompleted = node.status === "COMPLETED";
                const isInProgress = node.status === "IN_PROGRESS";
                const isAvailable = node.status === "AVAILABLE";
                const isLocked = node.status === "LOCKED";

                return (
                  <div key={i} className="flex flex-col items-center w-full max-w-sm">
                    {i > 0 && (
                      <div
                        className={`w-1.5 h-6 rounded-full my-1 ${
                          isCompleted || isInProgress ? "bg-[#58cc02]" : "bg-slate-200"
                        }`}
                      />
                    )}

                    <div
                      className={`w-full card-duo p-4 rounded-2xl flex items-center justify-between transition-all ${
                        isCompleted
                          ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs"
                          : isInProgress
                          ? "bg-sky-50 border-2 border-[#1cb0f6] text-[#1cb0f6]"
                          : isAvailable
                          ? "bg-white border-2 border-slate-200 text-[#4b4b4b]"
                          : "bg-slate-100 border-2 border-slate-200 text-slate-400 opacity-60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-6 h-6" />
                        <div>
                          <h4 className="font-extrabold text-sm">{node.title}</h4>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                            {node.status === "COMPLETED"
                              ? "Selesai"
                              : node.status === "IN_PROGRESS"
                              ? "Sedang Berlangsung"
                              : node.status === "AVAILABLE"
                              ? "Tersedia"
                              : "Terkunci"}
                          </span>
                        </div>
                      </div>

                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-[#58cc02]" />
                      ) : isLocked ? (
                        <Lock className="w-5 h-5 text-slate-400" />
                      ) : (
                        <span className="w-3 h-3 rounded-full bg-[#1cb0f6]" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Daily Goal, Streak Card, Shortcuts */}
        <div className="space-y-6">
          {/* Prominent Streak Card */}
          <div className="card-duo p-6 bg-gradient-to-b from-orange-50 to-amber-50 border-2 border-orange-200 rounded-3xl space-y-4 shadow-xs text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-500 border-b-4 border-orange-600 text-white flex items-center justify-center shadow-md">
              <Flame className="w-10 h-10 fill-white" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-orange-600 uppercase tracking-tight">
                Streak {user.streak} Hari!
              </h3>
              <p className="text-xs font-bold text-orange-700/80 mt-1">
                Berlatih setiap hari untuk menjaga streak belajar kamu.
              </p>
            </div>

            {/* Week Indicators */}
            <div className="flex justify-between items-center gap-1 pt-2">
              {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Ming"].map((day, idx) => (
                <div key={day} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold border-b-2 ${
                      idx < 5
                        ? "bg-orange-500 text-white border-orange-600"
                        : "bg-white text-slate-300 border-slate-200"
                    }`}
                  >
                    {idx < 5 ? "✓" : ""}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Goal Card */}
          <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#4b4b4b]">
                <Target className="w-4 h-4 text-[#58cc02]" /> Target Harian
              </div>
              <span className="text-xs font-extrabold text-[#58cc02]">
                {user.dailyXP} / {user.dailyGoal} XP
              </span>
            </div>

            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-[#58cc02] rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (user.dailyXP / user.dailyGoal) * 100)}%` }}
              />
            </div>

            <p className="text-xs font-bold text-slate-400">
              {xpRemaining > 0 ? `Tersisa ${xpRemaining} XP lagi untuk mencapai target hari ini!` : "Target Harian Tercapai!"}
            </p>
          </div>

          {/* Shortcuts */}
          <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Pintasan Cepat
            </h4>
            <Link
              href="/practice"
              className="w-full btn-3d btn-outline-3d py-3 text-xs flex items-center justify-between px-4"
            >
              <span>Mode Latihan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/leaderboard"
              className="w-full btn-3d btn-outline-3d py-3 text-xs flex items-center justify-between px-4"
            >
              <span>Papan Peringkat</span>
              <Trophy className="w-4 h-4 text-amber-500" />
            </Link>
            <Link
              href="/achievements"
              className="w-full btn-3d btn-outline-3d py-3 text-xs flex items-center justify-between px-4"
            >
              <span>Daftar Lencana</span>
              <Award className="w-4 h-4 text-purple-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
