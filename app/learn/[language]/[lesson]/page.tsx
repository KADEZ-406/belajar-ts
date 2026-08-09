"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getLessonById, getNextLesson } from "@/lib/data/lessons";
import { Language } from "@/lib/domain/lesson/lesson.types";
import { useGamification } from "@/lib/application/GamificationContext";
import { ExerciseRenderer } from "@/components/exercises/ExerciseRenderer";
import { RewardModal } from "@/components/lesson/RewardModal";
import { X, Heart, Star, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function LessonPlayerPage() {
  const params = useParams();
  const router = useRouter();
  const language = params.language as Language;
  const lessonId = params.lesson as string;

  const { user, deductHeart, addXP, completeLesson } = useGamification();

  const lesson = getLessonById(lessonId);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  if (!lesson) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 text-center card-duo bg-white space-y-4">
        <h2 className="text-xl font-bold">Lesson Not Found</h2>
        <button onClick={() => router.push("/learn")} className="btn-3d btn-primary-3d px-6 py-2">
          Back to Learn
        </button>
      </div>
    );
  }

  const steps = lesson.steps;
  const currentStep = steps[currentStepIndex];
  const progressPercentage = Math.round(((currentStepIndex + 1) / steps.length) * 100);

  const handleExerciseAnswer = (isCorrect: boolean, xpReward: number) => {
    if (isCorrect) {
      setFeedback({
        isCorrect: true,
        message: "Excellent! You got it right!",
      });
      setCorrectAnswersCount((prev) => prev + 1);
      setEarnedXP((prev) => prev + xpReward);
      addXP(xpReward);
    } else {
      setFeedback({
        isCorrect: false,
        message: "Not quite right. Give it another try or check the explanation!",
      });
      deductHeart();
    }
  };

  const handleNextStep = () => {
    setFeedback(null);
    if (currentStepIndex + 1 < steps.length) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Completed all steps in this lesson
      completeLesson(lesson.id, lesson.language);
      setIsCompleted(true);
    }
  };

  const handleModalContinue = () => {
    const next = getNextLesson(lesson.id);
    if (next) {
      router.push(`/learn/${next.language}/${next.id}`);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Top Header Bar with Progress Indicator */}
      <header className="bg-white border-b-2 border-slate-200 px-4 sm:px-8 py-4 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Close Button */}
          <button
            onClick={() => router.push("/learn")}
            className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            title="Exit Lesson"
          >
            <X className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Progress Bar & Dots */}
          <div className="flex-1 max-w-md space-y-1.5">
            <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Step {currentStepIndex + 1} of {steps.length}</span>
              <span>{progressPercentage}%</span>
            </div>

            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-[#58cc02] rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Hearts Display */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-red-200 bg-red-50 text-red-500 font-extrabold text-sm">
            <Heart className="w-5 h-5 fill-red-500 text-red-500" />
            <span>{user.hearts}</span>
          </div>
        </div>
      </header>

      {/* Main Step Content Area */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8 space-y-6">
        {currentStep.type === "learn" ? (
          <div className="card-duo p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1cb0f6] bg-sky-50 px-3 py-1 rounded-full w-fit">
              <Sparkles className="w-4 h-4" /> Concept Overview
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-[#4b4b4b]">
              {currentStep.title}
            </h2>

            <div className="prose prose-slate max-w-none text-[#4b4b4b] font-medium leading-relaxed whitespace-pre-line text-base md:text-lg">
              {currentStep.content}
            </div>

            <button
              onClick={handleNextStep}
              className="btn-3d btn-primary-3d w-full py-4 text-lg tracking-wider flex items-center justify-center gap-2"
            >
              Got it, Next Step
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          currentStep.exercise && (
            <ExerciseRenderer
              exercise={currentStep.exercise}
              onAnswer={handleExerciseAnswer}
              disabled={feedback !== null && feedback.isCorrect}
            />
          )
        )}
      </main>

      {/* Bottom Sticky Feedback Bar */}
      {feedback && (
        <footer
          className={`sticky bottom-0 z-40 p-6 border-t-4 transition-all ${
            feedback.isCorrect
              ? "bg-emerald-100 border-emerald-500 text-emerald-900"
              : "bg-red-100 border-red-500 text-red-900"
          }`}
        >
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {feedback.isCorrect ? (
                <CheckCircle2 className="w-8 h-8 text-[#58cc02] shrink-0" />
              ) : (
                <AlertCircle className="w-8 h-8 text-red-500 shrink-0" />
              )}
              <div>
                <h4 className="font-extrabold text-lg">
                  {feedback.isCorrect ? "Correct!" : "Keep Trying!"}
                </h4>
                <p className="text-sm font-medium">{feedback.message}</p>
              </div>
            </div>

            <button
              onClick={handleNextStep}
              className={`btn-3d w-full sm:w-auto px-8 py-3 text-base ${
                feedback.isCorrect ? "btn-primary-3d" : "btn-danger-3d"
              }`}
            >
              Continue
            </button>
          </div>
        </footer>
      )}

      {/* Completion Modal */}
      {isCompleted && (
        <RewardModal
          xpEarned={earnedXP + 30}
          streakDays={user.streak}
          totalExercises={steps.filter((s) => s.type === "exercise").length}
          correctAnswers={correctAnswersCount}
          onContinue={handleModalContinue}
        />
      )}
    </div>
  );
}
