"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LEARNING_PATHS } from "@/lib/data/lessons";
import { Language, LessonStatus } from "@/lib/domain/lesson/lesson.types";
import { useGamification } from "@/lib/application/GamificationContext";
import { Lock, CheckCircle2, Star, BookOpen, Atom, FileCode, Rocket, Tag, Settings, Box, Building, Zap, Trophy, ShieldCheck, Flame, ArrowRight } from "lucide-react";

function LearnPathContent() {
  const searchParams = useSearchParams();
  const initialLang = (searchParams.get("lang") as Language) || "typescript";
  const [selectedLang, setSelectedLang] = useState<Language>(initialLang);
  const [selectedLessonModal, setSelectedLessonModal] = useState<any | null>(null);
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
        return <BookOpen className="w-6 h-6 text-[#1cb0f6]" />;
      case "tsx":
        return <Atom className="w-6 h-6 text-purple-600" />;
      case "python":
        return <FileCode className="w-6 h-6 text-[#58cc02]" />;
    }
  };

  const getLessonIcon = (iconName: string) => {
    switch (iconName) {
      case "rocket":
        return <Rocket className="w-7 h-7" />;
      case "tag":
        return <Tag className="w-7 h-7" />;
      case "settings":
        return <Settings className="w-7 h-7" />;
      case "box":
        return <Box className="w-7 h-7" />;
      case "building":
        return <Building className="w-7 h-7" />;
      case "zap":
        return <Zap className="w-7 h-7" />;
      default:
        return <BookOpen className="w-7 h-7" />;
    }
  };

  // Alternating offsets to create a winding Duolingo-style quest map path
  const getWindingOffset = (idx: number) => {
    const pattern = ["items-center", "items-start pl-8 sm:pl-24", "items-center", "items-end pr-8 sm:pr-24"];
    return pattern[idx % pattern.length];
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Page Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-[#4b4b4b] uppercase tracking-tight">
          Peta Petualangan Koding
        </h1>
        <p className="text-slate-500 font-bold text-sm">
          Selesaikan setiap node tantangan untuk membuka section baru dan mengumpulkan XP!
        </p>
      </div>

      {/* Language Selector Switcher Tabs */}
      <div className="flex justify-center items-center gap-3">
        {[
          { id: "typescript", label: "TypeScript", icon: BookOpen },
          { id: "tsx", label: "TSX / React", icon: Atom },
          { id: "python", label: "Python", icon: FileCode },
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = selectedLang === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedLang(tab.id as Language)}
              className={`btn-3d px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all ${
                isSelected ? "btn-secondary-3d scale-105" : "btn-outline-3d"
              }`}
            >
              <Icon className="w-4 h-4" /> {tab.label}
            </button>
          );
        })}
      </div>

      {/* Winding Quest Map Section */}
      <div className="space-y-16 py-6 relative">
        {currentPath.sections.map((section, secIdx) => (
          <div key={section.id} className="space-y-10 relative">
            {/* Section Header Card */}
            <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl shadow-sm text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#1cb0f6] bg-sky-50 px-3 py-1 rounded-full">
                SECTION {secIdx + 1}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#4b4b4b] uppercase">
                {section.title}
              </h2>
              <p className="text-xs font-bold text-slate-400">{section.description}</p>
            </div>

            {/* Winding Map Nodes */}
            <div className="flex flex-col space-y-12 items-center relative">
              {section.lessons.map((lesson, lessonIdx) => {
                const status = getLessonStatus(lesson.id, lesson.prerequisites, lessonIdx);
                const isCompleted = status === "COMPLETED";
                const isAvailable = status === "AVAILABLE" || status === "IN_PROGRESS";
                const isLocked = status === "LOCKED";
                const alignmentClass = getWindingOffset(lessonIdx);

                return (
                  <div key={lesson.id} className={`w-full flex flex-col ${alignmentClass} relative group`}>
                    {/* Floating Tooltip for Active Node */}
                    {isAvailable && (
                      <div className="mb-2 animate-bounce bg-[#58cc02] text-white px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-md">
                        MULAI SINI!
                      </div>
                    )}

                    {/* Circular Quest Node Button */}
                    <button
                      onClick={() => {
                        if (!isLocked) {
                          setSelectedLessonModal(lesson);
                        }
                      }}
                      disabled={isLocked}
                      className={`w-20 h-20 rounded-full border-b-8 flex flex-col items-center justify-center transition-all duration-300 shadow-lg relative ${
                        isCompleted
                          ? "bg-[#58cc02] border-[#46a302] text-white hover:scale-110"
                          : isAvailable
                          ? "bg-[#1cb0f6] border-[#1899d6] text-white hover:scale-110 ring-4 ring-sky-200"
                          : "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-9 h-9 stroke-[3]" />
                      ) : isLocked ? (
                        <Lock className="w-8 h-8 stroke-[2.5]" />
                      ) : (
                        getLessonIcon(lesson.icon)
                      )}
                    </button>

                    {/* Node Title & XP Badge */}
                    <div className="mt-3 text-center max-w-[160px] space-y-0.5">
                      <h4 className="font-extrabold text-sm text-[#4b4b4b] leading-tight">
                        {lesson.title}
                      </h4>
                      <span className="text-[10px] font-black text-amber-500 flex items-center justify-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400" /> +{lesson.xp} XP
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Section Checkpoint Chest Node */}
              <div className="pt-6 text-center">
                <Link
                  href={`/checkpoint/${section.id}`}
                  className="card-duo px-6 py-4 bg-amber-50 border-2 border-amber-300 hover:border-amber-400 rounded-3xl flex items-center gap-3 transition-all hover:scale-105 shadow-md"
                >
                  <div className="p-3 bg-amber-400 text-slate-900 rounded-2xl">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider block">
                      SECTION CHECKPOINT
                    </span>
                    <span className="text-sm font-extrabold text-amber-900">
                      Uji Kelulusan {section.title}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog Choice for Mode Belajar vs Mode Ujian */}
      {selectedLessonModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="card-duo bg-white border-4 border-slate-200 p-6 sm:p-8 rounded-3xl max-w-md w-full space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase text-[#1cb0f6] bg-sky-50 px-3 py-1 rounded-full">
                Pilih Mode Latihan
              </span>
              <h3 className="text-2xl font-black text-[#4b4b4b]">
                {selectedLessonModal.title}
              </h3>
              <p className="text-xs font-bold text-slate-400">
                {selectedLessonModal.description}
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href={`/learn/${selectedLang}/${selectedLessonModal.id}?mode=learn`}
                onClick={() => setSelectedLessonModal(null)}
                className="btn-3d btn-primary-3d w-full py-4 text-base tracking-wider flex items-center justify-center gap-3"
              >
                <BookOpen className="w-5 h-5" />
                Mode Belajar (Materi + Kuis)
              </Link>

              <Link
                href={`/learn/${selectedLang}/${selectedLessonModal.id}?mode=exam`}
                onClick={() => setSelectedLessonModal(null)}
                className="btn-3d btn-secondary-3d w-full py-4 text-base tracking-wider flex items-center justify-center gap-3"
              >
                <Zap className="w-5 h-5 text-amber-400" />
                Mode Ujian (45s Timer + 2x XP)
              </Link>
            </div>

            <button
              onClick={() => setSelectedLessonModal(null)}
              className="btn-3d btn-outline-3d w-full py-3 text-xs font-bold"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LearnPathPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center font-bold">Memuat peta petualangan...</div>}>
      <LearnPathContent />
    </Suspense>
  );
}
