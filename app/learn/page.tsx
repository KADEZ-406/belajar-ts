"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LEARNING_PATHS } from "@/lib/data/lessons";
import { Language, LessonStatus } from "@/lib/domain/lesson/lesson.types";
import { useGamification } from "@/lib/application/GamificationContext";
import { Lock, Play, Star, BookOpen, Atom, FileCode, Rocket, Tag, Settings, Box, Building, Zap } from "lucide-react";

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

  const getPathIcon = (lang: Language) => {
    switch (lang) {
      case "typescript":
        return <BookOpen className="w-8 h-8 text-[#1cb0f6]" />;
      case "tsx":
        return <Atom className="w-8 h-8 text-purple-600" />;
      case "python":
        return <FileCode className="w-8 h-8 text-[#58cc02]" />;
    }
  };

  const getLessonIcon = (iconName: string) => {
    switch (iconName) {
      case "rocket":
        return <Rocket className="w-6 h-6 text-sky-500" />;
      case "tag":
        return <Tag className="w-6 h-6 text-[#58cc02]" />;
      case "settings":
        return <Settings className="w-6 h-6 text-purple-500" />;
      case "box":
        return <Box className="w-6 h-6 text-[#1cb0f6]" />;
      case "building":
        return <Building className="w-6 h-6 text-amber-500" />;
      case "zap":
        return <Zap className="w-6 h-6 text-[#58cc02]" />;
      default:
        return <BookOpen className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-[#4b4b4b] uppercase tracking-tight">
          Pilih Alur Pemrograman Kamu
        </h1>
        <p className="text-slate-500 font-bold text-sm">
          Pilih bahasa pemrograman dan kuasai materi secara bertahap.
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
          <BookOpen className="w-4 h-4" /> TypeScript
        </button>

        <button
          onClick={() => setSelectedLang("tsx")}
          className={`btn-3d px-6 py-3 text-sm flex items-center gap-2 ${
            selectedLang === "tsx" ? "btn-secondary-3d" : "btn-outline-3d"
          }`}
        >
          <Atom className="w-4 h-4" /> TSX / React
        </button>

        <button
          onClick={() => setSelectedLang("python")}
          className={`btn-3d px-6 py-3 text-sm flex items-center gap-2 ${
            selectedLang === "python" ? "btn-secondary-3d" : "btn-outline-3d"
          }`}
        >
          <FileCode className="w-4 h-4" /> Python
        </button>
      </div>

      {/* Learning Path Hero Card */}
      <div className="card-duo p-6 sm:p-8 bg-white border-2 border-slate-200 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-sky-100 border-b-4 border-sky-300 flex items-center justify-center shrink-0">
            {getPathIcon(selectedLang)}
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#4b4b4b]">{currentPath.title}</h2>
            <p className="text-slate-500 text-sm font-medium mt-1">{currentPath.description}</p>
          </div>
        </div>

        <div className="px-5 py-3 bg-slate-50 rounded-2xl border border-slate-200 text-center shrink-0">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Kemajuan Alur
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
                        <div className="p-2 bg-slate-100 rounded-xl">
                          {getLessonIcon(lesson.icon)}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-base text-[#4b4b4b] leading-snug">
                            {lesson.title}
                          </h4>
                          <p className="text-xs font-medium text-slate-400 line-clamp-2 mt-0.5">
                            {lesson.description}
                          </p>
                        </div>
                      </div>

                      {/* Clean Text Status (NO pill badges) */}
                      <span className="text-[10px] font-extrabold uppercase text-slate-500 shrink-0">
                        {status === "COMPLETED"
                          ? "Selesai"
                          : status === "AVAILABLE" || status === "IN_PROGRESS"
                          ? "Tersedia"
                          : "Terkunci"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="flex items-center gap-1 text-xs font-extrabold text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" /> +{lesson.xp} XP
                      </span>

                      {isLocked ? (
                        <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                          <Lock className="w-4 h-4" /> Terkunci
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/learn/${selectedLang}/${lesson.id}?mode=learn`}
                            className={`btn-3d px-3 py-1.5 text-xs flex items-center gap-1 ${
                              isCompleted ? "btn-outline-3d" : "btn-primary-3d"
                            }`}
                            title="Mode Belajar: Penjelasan materi baru latihan"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Belajar
                          </Link>
                          <Link
                            href={`/learn/${selectedLang}/${lesson.id}?mode=exam`}
                            className="btn-3d btn-secondary-3d px-3 py-1.5 text-xs flex items-center gap-1"
                            title="Mode Ujian: Langsung ke tantangan koding"
                          >
                            <Zap className="w-3.5 h-3.5" />
                            Ujian
                          </Link>
                        </div>
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
    <Suspense fallback={<div className="p-8 text-center font-bold">Memuat alur belajar...</div>}>
      <LearnPathContent />
    </Suspense>
  );
}
