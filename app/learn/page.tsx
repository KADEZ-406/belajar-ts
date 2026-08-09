"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LEARNING_PATHS } from "@/lib/data/lessons";
import { Language, LessonStatus } from "@/lib/domain/lesson/lesson.types";
import { useGamification } from "@/lib/application/GamificationContext";
import { Lock, Play, Star } from "lucide-react";

function LearnPathContent() {
  const searchParams = useSearchParams();
  const initialLang = (searchParams.get("lang") as Language) || "typescript";
  const [selectedLang, setSelectedLang] = useState<Language>(initialLang);
  const { user } = useGamification();

  const currentPath = LEARNING_PATHS[selectedLang] || LEARNING_PATHS.typescript;

  const getLessonStatus = (lessonId: string, prerequisites: string[], index: number): LessonStatus => {
    if (user.completedLessons.includes(lessonId)) {
      return "COMPLETED";
    }
    if (prerequisites.length === 0 || prerequisites.every((p) => user.completedLessons.includes(p))) {
      return index === 0 || user.completedLessons.length > 0 ? "AVAILABLE" : "IN_PROGRESS";
    }
    return "LOCKED";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-[#4b4b4b] uppercase tracking-tight">
          Choose Your Learning Path
        </h1>
        <p className="text-slate-500 font-bold text-sm">
          Select a programming language and master it step-by-step.
        </p>
      </div>

      {/* Language Selector Switcher Tabs */}
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => setSelectedLang("typescript")}
          className={`btn-3d px-6 py-3 text-sm flex items-center gap-2 ${
            selectedLang === "typescript" ? "btn-secondary-3d" : "btn-outline-3d"
          }`}
        >
          <span>📘</span> TypeScript
        </button>

        <button
          onClick={() => setSelectedLang("tsx")}
          className={`btn-3d px-6 py-3 text-sm flex items-center gap-2 ${
            selectedLang === "tsx" ? "btn-secondary-3d" : "btn-outline-3d"
          }`}
        >
          <span>⚛️</span> TSX / React
        </button>

        <button
          onClick={() => setSelectedLang("python")}
          className={`btn-3d px-6 py-3 text-sm flex items-center gap-2 ${
            selectedLang === "python" ? "btn-secondary-3d" : "btn-outline-3d"
          }`}
        >
          <span>🐍</span> Python
        </button>
      </div>

      {/* Learning Path Hero Card */}
      <div className="card-duo p-6 sm:p-8 bg-white border-2 border-slate-200 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-sky-100 border-b-4 border-sky-300 text-[#1cb0f6] flex items-center justify-center text-4xl font-bold shrink-0">
            {currentPath.icon}
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#4b4b4b]">{currentPath.title}</h2>
            <p className="text-slate-500 text-sm font-medium mt-1">{currentPath.description}</p>
          </div>
        </div>

        <div className="px-5 py-3 bg-slate-50 rounded-2xl border border-slate-200 text-center shrink-0">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Path Progress
          </span>
          <span className="text-2xl font-black text-[#1cb0f6]">
            {user.languageProgress[selectedLang] || 0}%
          </span>
        </div>
      </div>

      {/* Sections & Lessons Accordion List */}
      <div className="space-y-8">
        {currentPath.sections.map((section) => (
          <div key={section.id} className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl space-y-6">
            <div className="border-b-2 border-slate-100 pb-4">
              <h3 className="text-xl font-black text-[#4b4b4b] uppercase tracking-wide">
                {section.title}
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1">{section.description}</p>
            </div>

            {/* Lessons Cards in Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.lessons.map((lesson, idx) => {
                const status = getLessonStatus(lesson.id, lesson.prerequisites, idx);
                const isCompleted = status === "COMPLETED";
                const isAvailable = status === "AVAILABLE" || status === "IN_PROGRESS";
                const isLocked = status === "LOCKED";

                return (
                  <div
                    key={lesson.id}
                    className={`card-duo p-5 rounded-2xl flex flex-col justify-between space-y-4 transition-all ${
                      isCompleted
                        ? "bg-emerald-50/60 border-emerald-200"
                        : isAvailable
                        ? "bg-white border-2 border-slate-200 hover:border-[#1cb0f6]"
                        : "bg-slate-50 border-2 border-slate-200 opacity-60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lesson.icon}</span>
                        <div>
                          <h4 className="font-extrabold text-base text-[#4b4b4b] leading-snug">
                            {lesson.title}
                          </h4>
                          <p className="text-xs font-medium text-slate-400 line-clamp-2 mt-0.5">
                            {lesson.description}
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border shrink-0 ${
                          isCompleted
                            ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                            : isAvailable
                            ? "bg-sky-100 text-sky-700 border-sky-300"
                            : "bg-slate-200 text-slate-500 border-slate-300"
                        }`}
                      >
                        {status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="flex items-center gap-1 text-xs font-extrabold text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" /> +{lesson.xp} XP
                      </span>

                      {isLocked ? (
                        <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                          <Lock className="w-4 h-4" /> Locked
                        </div>
                      ) : (
                        <Link
                          href={`/learn/${selectedLang}/${lesson.id}`}
                          className={`btn-3d px-4 py-2 text-xs flex items-center gap-1.5 ${
                            isCompleted ? "btn-outline-3d" : "btn-primary-3d"
                          }`}
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          {isCompleted ? "Review" : "Start"}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LearnPathPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-bold">Loading paths...</div>}>
      <LearnPathContent />
    </Suspense>
  );
}
