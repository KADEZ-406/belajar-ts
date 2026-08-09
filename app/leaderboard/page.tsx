"use client";

import React from "react";
import { LEADERBOARD_DATA } from "@/lib/data/leaderboard";
import { useGamification } from "@/lib/application/GamificationContext";
import { Trophy, Flame, Star, Crown, Medal } from "lucide-react";

export default function LeaderboardPage() {
  const { user } = useGamification();

  const entries = LEADERBOARD_DATA.map((entry) => {
    if (entry.isCurrentUser) {
      return {
        ...entry,
        xp: user.xp,
        streak: user.streak,
      };
    }
    return entry;
  }).sort((a, b) => b.xp - a.xp);

  const rankedEntries = entries.map((item, index) => ({
    ...item,
    rank: index + 1,
  }));

  const top3 = rankedEntries.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="card-duo p-6 md:p-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-4 border-amber-600 rounded-3xl text-center space-y-3 shadow-xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center text-3xl">
          <Trophy className="w-10 h-10 fill-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
          Papan Peringkat Mingguan
        </h1>
        <p className="text-amber-100 text-sm font-bold max-w-md mx-auto">
          Programmer teratas minggu ini. Dapatkan XP dari pelajaran dan tantangan koding untuk naik peringkat.
        </p>
      </div>

      {/* Podium Top 3 Coders (Using Lucide Icons, NO emoticons) */}
      <div className="grid grid-cols-3 gap-4 items-end pt-6 pb-2">
        {/* Rank 2 (Silver) */}
        {top3[1] && (
          <div className="card-duo p-4 bg-slate-100 border-2 border-slate-300 rounded-2xl text-center space-y-2">
            <Medal className="w-8 h-8 text-slate-400 mx-auto" />
            <span className="text-xs font-black text-slate-500 uppercase block">Peringkat 2</span>
            <img
              src={top3[1].avatar}
              alt={top3[1].username}
              className="w-12 h-12 mx-auto rounded-full bg-white border-2 border-slate-300 p-0.5"
            />
            <div className="font-extrabold text-sm text-[#4b4b4b] truncate">{top3[1].username}</div>
            <div className="text-xs font-black text-amber-600">{top3[1].xp} XP</div>
          </div>
        )}

        {/* Rank 1 (Gold) */}
        {top3[0] && (
          <div className="card-duo p-6 bg-amber-50 border-4 border-amber-300 rounded-3xl text-center space-y-3 shadow-md -translate-y-4">
            <Crown className="w-9 h-9 text-amber-500 mx-auto" />
            <span className="text-xs font-black text-amber-600 uppercase block">Juara 1</span>
            <img
              src={top3[0].avatar}
              alt={top3[0].username}
              className="w-16 h-16 mx-auto rounded-full bg-white border-4 border-amber-300 p-1"
            />
            <div className="font-black text-base text-[#4b4b4b] truncate">{top3[0].username}</div>
            <div className="text-sm font-black text-amber-600">{top3[0].xp} XP</div>
          </div>
        )}

        {/* Rank 3 (Bronze) */}
        {top3[2] && (
          <div className="card-duo p-4 bg-amber-900/10 border-2 border-amber-800/30 rounded-2xl text-center space-y-2">
            <Medal className="w-8 h-8 text-amber-700 mx-auto" />
            <span className="text-xs font-black text-amber-800 uppercase block">Peringkat 3</span>
            <img
              src={top3[2].avatar}
              alt={top3[2].username}
              className="w-12 h-12 mx-auto rounded-full bg-white border-2 border-amber-700/30 p-0.5"
            />
            <div className="font-extrabold text-sm text-[#4b4b4b] truncate">{top3[2].username}</div>
            <div className="text-xs font-black text-amber-600">{top3[2].xp} XP</div>
          </div>
        )}
      </div>

      {/* Full Leaderboard Table (Clean Labels, NO pill badges) */}
      <div className="card-duo p-4 bg-white border-2 border-slate-200 rounded-3xl space-y-2">
        {rankedEntries.map((entry) => {
          const isUser = entry.isCurrentUser;
          return (
            <div
              key={entry.id}
              className={`p-4 rounded-2xl flex items-center justify-between transition-all ${
                isUser
                  ? "bg-sky-50 border-2 border-[#1cb0f6]"
                  : "bg-white border border-slate-100 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="w-8 font-black text-center text-sm text-slate-600">
                  #{entry.rank}
                </span>

                <img
                  src={entry.avatar}
                  alt={entry.username}
                  className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 p-0.5"
                />

                <div>
                  <h4 className="font-extrabold text-sm text-[#4b4b4b] flex items-center gap-2">
                    {entry.username}
                    {isUser && (
                      <span className="text-[10px] font-black uppercase text-[#1cb0f6]">
                        (Kamu)
                      </span>
                    )}
                  </h4>
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                    Streak {entry.streak} Hari
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 font-black text-amber-500 text-sm md:text-base">
                <Star className="w-4 h-4 fill-amber-400" /> {entry.xp} XP
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
