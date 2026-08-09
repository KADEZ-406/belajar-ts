"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Atom, FileCode, Target, Briefcase, GraduationCap, Code, Rocket, Eye, Cpu, Coffee, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

import { useGamification } from "@/lib/application/GamificationContext";
import { Language } from "@/lib/domain/lesson/lesson.types";

export default function OnboardingPage() {
  const router = useRouter();
  const { saveOnboarding } = useGamification();
  const [step, setStep] = useState(1);

  const [language, setLanguage] = useState<Language>("typescript");
  const [goal, setGoal] = useState("karir");
  const [skillLevel, setSkillLevel] = useState("pemula");
  const [learningStyle, setLearningStyle] = useState("praktik");
  const [dailyTarget, setDailyTarget] = useState(10);

  const handleFinish = () => {
    saveOnboarding({
      targetLanguage: language,
      goal,
      skillLevel,
      learningStyle,
      dailyTargetMinutes: dailyTarget,
    });
    router.push(`/placement-test?lang=${language}`);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="card-duo w-full max-w-xl bg-white border-4 border-slate-200 p-6 md:p-10 rounded-3xl space-y-8 shadow-2xl">
        {/* Progress Bar Header */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-black uppercase tracking-wider text-slate-400">
            <span>Langkah Onboarding {step} dari 5</span>
            <span>{step * 20}%</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-[#58cc02] rounded-full transition-all duration-500"
              style={{ width: `${step * 20}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Mau Belajar Apa? */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#4b4b4b]">
                Bahasa apa yang mau kamu kuasai pertama kali?
              </h2>
              <p className="text-sm font-bold text-slate-400 mt-1">
                Pilih fokus bahasa pemrograman kamu.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { id: "typescript", name: "TypeScript", desc: "Bahasa terpopuler untuk Fullstack & Web Modern", icon: BookOpen },
                { id: "tsx", name: "TSX / React", desc: "Bikin antarmuka web interaktif dengan React & TSX", icon: Atom },
                { id: "python", name: "Python", desc: "Sintaks simpel untuk Data Science, Backend & AI", icon: FileCode },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = language === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setLanguage(item.id as Language)}
                    className={`card-duo p-5 rounded-2xl flex items-center justify-between text-left transition-all ${
                      isSelected
                        ? "bg-sky-50 border-2 border-[#1cb0f6] shadow-sm"
                        : "bg-white border-2 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <Icon className="w-6 h-6 text-[#1cb0f6]" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base text-[#4b4b4b]">{item.name}</h4>
                        <p className="text-xs font-medium text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 className="w-6 h-6 text-[#1cb0f6] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Tujuan Belajar? */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#4b4b4b]">
                Apa tujuan utama kamu belajar pemrograman?
              </h2>
              <p className="text-sm font-bold text-slate-400 mt-1">
                Kami akan menyesuaikan materi dengan target kamu.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "karir", title: "Karir & Pekerjaan", desc: "Menjadi Software Engineer", icon: Briefcase },
                { id: "kuliah", title: "Kuliah & Sekolah", desc: "Menghadapi ujian & tugas", icon: GraduationCap },
                { id: "projek", title: "Bikin Projek / Startup", desc: "Membangun produk sendiri", icon: Rocket },
                { id: "hobi", title: "Hobi & Eksplorasi", desc: "Mengisi waktu luang", icon: Code },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = goal === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setGoal(item.id)}
                    className={`card-duo p-5 rounded-2xl flex flex-col justify-between text-left transition-all ${
                      isSelected
                        ? "bg-sky-50 border-2 border-[#1cb0f6] shadow-sm"
                        : "bg-white border-2 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon className="w-7 h-7 text-[#1cb0f6] mb-3" />
                    <div>
                      <h4 className="font-extrabold text-sm text-[#4b4b4b]">{item.title}</h4>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Level Kemampuan? */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#4b4b4b]">
                Seberapa jauh pengalaman koding kamu?
              </h2>
              <p className="text-sm font-bold text-slate-400 mt-1">
                Jangan khawatir, kami punya alur untuk semua tingkatan.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { id: "pemula", title: "Pemula Total", desc: "Belum pernah nulis kode pemrograman sama sekali." },
                { id: "menengah", title: "Paham Dasar", desc: "Pernah belajar sintaks dasar variabel & fungsi." },
                { id: "mahir", title: "Developer Berpengalaman", desc: "Sudah sering bikin aplikasi & paham arsitektur." },
              ].map((item) => {
                const isSelected = skillLevel === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSkillLevel(item.id)}
                    className={`card-duo p-5 rounded-2xl flex items-center justify-between text-left transition-all ${
                      isSelected
                        ? "bg-sky-50 border-2 border-[#1cb0f6] shadow-sm"
                        : "bg-white border-2 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <h4 className="font-extrabold text-base text-[#4b4b4b]">{item.title}</h4>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                    {isSelected && <CheckCircle2 className="w-6 h-6 text-[#1cb0f6] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Metode Belajar? */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#4b4b4b]">
                Metode belajar apa yang paling kamu sukai?
              </h2>
              <p className="text-sm font-bold text-slate-400 mt-1">
                Pilih gaya belajar yang bikin kamu cepat paham.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "praktik", title: "Banyak Praktik Koding", desc: "Langsung ketik kode & latihan", icon: Cpu },
                { id: "visual", title: "Visual & Ilustrasi", desc: "Penjelasan diagram & contoh", icon: Eye },
                { id: "santai", title: "Santai & Bertahap", desc: "Materi pendek & konsisten", icon: Coffee },
                { id: "cepat", title: "Tantangan Cepat", desc: "Langsung ke kuis & ujian", icon: Zap },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = learningStyle === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setLearningStyle(item.id)}
                    className={`card-duo p-5 rounded-2xl flex flex-col justify-between text-left transition-all ${
                      isSelected
                        ? "bg-sky-50 border-2 border-[#1cb0f6] shadow-sm"
                        : "bg-white border-2 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon className="w-7 h-7 text-[#1cb0f6] mb-3" />
                    <div>
                      <h4 className="font-extrabold text-sm text-[#4b4b4b]">{item.title}</h4>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Target Harian? */}
        {step === 5 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#4b4b4b]">
                Berapa lama target belajar harian kamu?
              </h2>
              <p className="text-sm font-bold text-slate-400 mt-1">
                Konsistensi kecil setiap hari adalah kunci utama.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { minutes: 5, label: "5 Menit / Hari", desc: "Ringan & Santai" },
                { minutes: 10, label: "10 Menit / Hari", desc: "Standar & Efektif" },
                { minutes: 15, label: "15 Menit / Hari", desc: "Serius & Cepat" },
                { minutes: 20, label: "20 Menit / Hari", desc: "Intensif & Maksimal" },
              ].map((item) => {
                const isSelected = dailyTarget === item.minutes;
                return (
                  <button
                    key={item.minutes}
                    onClick={() => setDailyTarget(item.minutes)}
                    className={`card-duo p-5 rounded-2xl flex flex-col justify-between text-left transition-all ${
                      isSelected
                        ? "bg-emerald-50 border-2 border-[#58cc02] shadow-sm"
                        : "bg-white border-2 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <h4 className="font-extrabold text-base text-[#4b4b4b]">{item.label}</h4>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="btn-3d btn-outline-3d px-6 py-3 text-sm"
            >
              Kembali
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="btn-3d btn-primary-3d px-8 py-3 text-sm flex items-center gap-2"
            >
              Lanjutkan
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="btn-3d btn-primary-3d px-8 py-3 text-sm flex items-center gap-2"
            >
              Mulai Placement Test
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
