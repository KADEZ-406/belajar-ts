"use client";

import Link from "next/link";
import { useGamification } from "@/lib/application/GamificationContext";
import { calculateLevelProgress } from "@/lib/domain/gamification/rules";
import { Play, Flame, Star, Trophy, Award, CheckCircle2, Lock, ArrowRight, Zap, Target } from "lucide-react";

export default function DashboardPage() {
  const { user } = useGamification();
  const levelProgress = calculateLevelProgress(user.xp);

  // Skill Tree Progression Nodes
  const skillTreeNodes = [
    { title: "Programming Fundamentals", status: "COMPLETED", icon: "🚀" },
    { title: "Variables & Types", status: "IN_PROGRESS", icon: "🏷️" },
    { title: "Functions & Scope", status: "AVAILABLE", icon: "⚙️" },
    { title: "Conditions & Logic", status: "LOCKED", icon: "🔀" },
    { title: "Loops & Iteration", status: "LOCKED", icon: "🔄" },
    { title: "Arrays & Collections", status: "LOCKED", icon: "📦" },
    { title: "Objects & Schemas", status: "LOCKED", icon: "🏗️" },
    { title: "Async & Promises", status: "LOCKED", icon: "⚡" },
    { title: "Advanced Architecture", status: "LOCKED", icon: "👑" },
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
              <h1 className="text-2xl md:text-3xl font-black">Welcome back, {user.username}!</h1>
              <span className="px-3 py-0.5 rounded-full bg-[#1cb0f6] text-white font-extrabold text-xs uppercase tracking-wider">
                Level {levelProgress.level} — {levelProgress.title}
              </span>
            </div>
            <p className="text-slate-400 text-sm font-medium mt-1">
              You've earned <span className="text-amber-400 font-bold">{user.xp} XP</span> so far. Keep pushing forward!
            </p>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="w-full md:w-72 bg-slate-950/60 p-4 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-300">
            <span>Level {levelProgress.level}</span>
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
          <div className="card-duo p-6 md:p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#1cb0f6] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Continue Learning
              </span>
              <span className="text-xs font-bold text-slate-400">Lesson 2 of 10</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 border-b-4 border-sky-300 text-[#1cb0f6] flex items-center justify-center text-3xl font-extrabold shrink-0">
                📘
              </div>
              <div>
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  TypeScript Path
                </span>
                <h3 className="text-2xl font-black text-[#4b4b4b] leading-tight">
                  Variables & Primitive Types
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  Master string, number, boolean, and type annotations in TypeScript.
                </p>
              </div>
            </div>

            <Link
              href="/learn/typescript/ts_lesson_2"
              className="btn-3d btn-primary-3d w-full py-4 text-base tracking-wider flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              Continue Lesson (+50 XP)
            </Link>
          </div>

          {/* Skill Tree Section */}
          <div className="card-duo p-6 md:p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-6">
            <div>
              <h3 className="text-xl font-black text-[#4b4b4b] uppercase tracking-tight">
                Skill Progression Tree
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-0.5">
                Complete prerequisites to unlock advanced programming modules.
              </p>
            </div>

            {/* Tree Nodes List with Connectors */}
            <div className="flex flex-col items-center space-y-4 relative py-4">
              {skillTreeNodes.map((node, i) => {
                const isCompleted = node.status === "COMPLETED";
                const isInProgress = node.status === "IN_PROGRESS";
                const isAvailable = node.status === "AVAILABLE";
                const isLocked = node.status === "LOCKED";

                return (
                  <div key={i} className="flex flex-col items-center w-full max-w-sm">
                    {/* Visual Connector Line */}
                    {i > 0 && (
                      <div
                        className={`w-1.5 h-6 rounded-full my-1 ${
                          isCompleted || isInProgress ? "bg-[#58cc02]" : "bg-slate-200"
                        }`}
                      />
                    )}

                    {/* Skill Node Card */}
                    <div
                      className={`w-full card-duo p-4 rounded-2xl flex items-center justify-between transition-all ${
                        isCompleted
                          ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs"
                          : isInProgress
                          ? "bg-sky-50 border-2 border-[#1cb0f6] text-[#1cb0f6] ring-4 ring-sky-100"
                          : isAvailable
                          ? "bg-white border-2 border-slate-200 text-[#4b4b4b]"
                          : "bg-slate-100 border-2 border-slate-200 text-slate-400 opacity-60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{node.icon}</span>
                        <div>
                          <h4 className="font-extrabold text-sm">{node.title}</h4>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider">
                            {node.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>

                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-[#58cc02] fill-emerald-100" />
                      ) : isLocked ? (
                        <Lock className="w-5 h-5 text-slate-400" />
                      ) : (
                        <span className="w-3 h-3 rounded-full bg-[#1cb0f6] animate-ping" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Daily Goal, Streak Prominent Card, Stats Overview */}
        <div className="space-y-6">
          {/* Prominent Streak Card */}
          <div className="card-duo p-6 bg-gradient-to-b from-orange-50 to-amber-50 border-2 border-orange-200 rounded-3xl space-y-4 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-500 border-b-4 border-orange-600 text-white flex items-center justify-center shadow-md animate-bounce">
              <Flame className="w-10 h-10 fill-white" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-orange-600 uppercase tracking-tight">
                {user.streak} Day Streak!
              </h3>
              <p className="text-xs font-bold text-orange-700/80 mt-1">
                You're on fire! Practice daily to keep your flame alive.
              </p>
            </div>

            {/* Week Indicators */}
            <div className="flex justify-between items-center gap-1 pt-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
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

          {/* Daily Goal Progress Card */}
          <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#4b4b4b]">
                <Target className="w-4 h-4 text-[#58cc02]" /> Daily Goal
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
              {xpRemaining > 0 ? `${xpRemaining} XP left to hit today's target!` : "🎉 Daily Goal Achieved!"}
            </p>
          </div>

          {/* Fast Navigation Shortcuts */}
          <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Quick Shortcuts
            </h4>
            <Link
              href="/practice"
              className="w-full btn-3d btn-outline-3d py-3 text-xs flex items-center justify-between px-4"
            >
              <span>Practice Mode</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/leaderboard"
              className="w-full btn-3d btn-outline-3d py-3 text-xs flex items-center justify-between px-4"
            >
              <span>Weekly Leaderboard</span>
              <Trophy className="w-4 h-4 text-amber-500" />
            </Link>
            <Link
              href="/achievements"
              className="w-full btn-3d btn-outline-3d py-3 text-xs flex items-center justify-between px-4"
            >
              <span>Badges & Achievements</span>
              <Award className="w-4 h-4 text-purple-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
