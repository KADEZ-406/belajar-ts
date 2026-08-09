"use client";

import React, { useState } from "react";
import { PRACTICE_CHALLENGES } from "@/lib/data/practice";
import { Language, PracticeChallenge } from "@/lib/domain/lesson/lesson.types";
import { CodeEditor } from "@/components/code-editor/CodeEditor";
import { useGamification } from "@/lib/application/GamificationContext";
import { Dumbbell, Star, Lightbulb, CheckCircle2, ShieldAlert } from "lucide-react";

export default function PracticePage() {
  const [selectedLang, setSelectedLang] = useState<Language | "all">("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [activeChallenge, setActiveChallenge] = useState<PracticeChallenge | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  const { addXP } = useGamification();

  const filteredChallenges = PRACTICE_CHALLENGES.filter((c) => {
    const langMatch = selectedLang === "all" || c.language === selectedLang;
    const diffMatch = selectedDifficulty === "all" || c.difficulty === selectedDifficulty;
    return langMatch && diffMatch;
  });

  const handleChallengeSuccess = (challenge: PracticeChallenge) => {
    setIsPassed(true);
    addXP(challenge.xpReward);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="card-duo p-6 md:p-8 bg-gradient-to-r from-purple-900 to-indigo-900 text-white border-4 border-purple-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border-2 border-purple-400 text-purple-300 flex items-center justify-center text-3xl shrink-0">
            <Dumbbell className="w-9 h-9" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-black">Practice Arena</h1>
              <span className="px-3 py-0.5 rounded-full bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider">
                No Heart Penalties
              </span>
            </div>
            <p className="text-purple-200 text-sm font-medium mt-1">
              Sharpen your coding skills risk-free! Unlimited tries, zero streak loss.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 card-duo p-4 bg-white border-2 border-slate-200 rounded-2xl">
        {/* Language Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase text-slate-400">Language:</span>
          {(["all", "typescript", "tsx", "python"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase transition-all ${
                selectedLang === lang
                  ? "bg-[#1cb0f6] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase text-slate-400">Difficulty:</span>
          {(["all", "Easy", "Medium", "Hard"] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase transition-all ${
                selectedDifficulty === diff
                  ? "bg-purple-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Challenge Detail Modal / Playground */}
      {activeChallenge ? (
        <div className="card-duo p-6 md:p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 bg-purple-100 text-purple-700 rounded-full">
                  {activeChallenge.language} • {activeChallenge.difficulty}
                </span>
                <span className="flex items-center gap-1 text-xs font-extrabold text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" /> +{activeChallenge.xpReward} XP
                </span>
              </div>
              <h2 className="text-2xl font-black text-[#4b4b4b] mt-1">{activeChallenge.title}</h2>
            </div>

            <button
              onClick={() => {
                setActiveChallenge(null);
                setIsPassed(false);
                setShowHint(false);
              }}
              className="btn-3d btn-outline-3d px-4 py-2 text-xs"
            >
              Back to Challenges
            </button>
          </div>

          <p className="text-base font-medium text-slate-700 leading-relaxed">
            {activeChallenge.description}
          </p>

          {/* Hint Drawer */}
          {showHint ? (
            <div className="p-4 bg-amber-50 border-2 border-amber-200 text-amber-900 rounded-xl text-sm font-medium flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>{activeChallenge.hint}</span>
            </div>
          ) : (
            <button
              onClick={() => setShowHint(true)}
              className="text-xs font-extrabold text-amber-600 hover:underline inline-flex items-center gap-1"
            >
              <Lightbulb className="w-4 h-4" /> Need a Hint?
            </button>
          )}

          {/* Playground Code Editor */}
          <CodeEditor
            initialCode={activeChallenge.starterCode}
            language={activeChallenge.language}
            expectedOutput={activeChallenge.expectedOutput}
            onRun={(output) => {
              if (output.trim() === activeChallenge.expectedOutput.trim()) {
                handleChallengeSuccess(activeChallenge);
              }
            }}
          />

          {isPassed && (
            <div className="p-4 bg-emerald-100 border-2 border-emerald-400 text-emerald-900 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-2 font-black text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#58cc02]" />
                Challenge Solved! +{activeChallenge.xpReward} XP Awarded!
              </div>
              <button
                onClick={() => {
                  setActiveChallenge(null);
                  setIsPassed(false);
                }}
                className="btn-3d btn-primary-3d px-6 py-2 text-xs"
              >
                Next Challenge
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Challenges Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((c) => (
            <div
              key={c.id}
              className="card-duo card-duo-interactive p-6 bg-white border-2 border-slate-200 rounded-3xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {c.language}
                  </span>
                  <span
                    className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                      c.difficulty === "Easy"
                        ? "bg-emerald-100 text-emerald-700"
                        : c.difficulty === "Medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#4b4b4b]">{c.title}</h3>
                <p className="text-xs font-medium text-slate-500 line-clamp-2">{c.description}</p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="flex items-center gap-1 text-xs font-extrabold text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" /> +{c.xpReward} XP
                </span>

                <button
                  onClick={() => setActiveChallenge(c)}
                  className="btn-3d btn-secondary-3d px-4 py-2 text-xs"
                >
                  Solve Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
