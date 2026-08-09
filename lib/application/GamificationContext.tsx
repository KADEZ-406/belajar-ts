"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  UserEntity,
  FRESH_USER_INITIAL_STATE,
  awardUserXP,
  deductUserHeart,
  refillUserHearts,
  markLessonCompleted,
  checkAndIncrementStreak,
} from "../domain/user/user.entity";
import { StorageRepository } from "../infrastructure/storage";
import { Language } from "../domain/lesson/lesson.types";
import { XP_RULES } from "../domain/gamification/rules";

interface OnboardingPreferences {
  targetLanguage: Language;
  goal: string;
  skillLevel: string;
  learningStyle: string;
  dailyTargetMinutes: number;
}

interface GamificationContextType {
  user: UserEntity;
  isLoaded: boolean;
  addXP: (amount: number) => void;
  deductHeart: () => void;
  refillHearts: () => void;
  completeLesson: (lessonId: string, language: Language) => void;
  saveOnboarding: (prefs: OnboardingPreferences) => void;
  savePlacementResult: (
    language: Language,
    score: number,
    totalQuestions: number,
    recommendedLevel: string
  ) => void;
  saveCheckpointResult: (
    sectionId: string,
    language: Language,
    score: number,
    totalQuestions: number,
    passed: boolean
  ) => void;
  saveAssessmentResult: (
    title: string,
    type: string,
    language: Language,
    score: number,
    totalQuestions: number,
    passed: boolean
  ) => void;
  unlockAchievement: (achievementId: string) => void;
  resetProgress: () => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserEntity>(FRESH_USER_INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = StorageRepository.loadUser();
    const checkedUser = checkAndIncrementStreak(loaded);
    setUser(checkedUser);
    StorageRepository.saveUser(checkedUser);
    setIsLoaded(true);
  }, []);

  const checkAchievements = (currentUser: UserEntity): UserEntity => {
    const unlocked = new Set(currentUser.unlockedAchievements);

    if (currentUser.completedLessons.length >= 1) unlocked.add("first_code");
    if (currentUser.streak >= 3) unlocked.add("streak_3");
    if (currentUser.level >= 5) unlocked.add("level_5");
    if (currentUser.languageProgress.typescript >= 100) unlocked.add("ts_master");
    if (currentUser.completedSections.length >= 1) unlocked.add("checkpoint_master");
    if (Object.keys(currentUser.assessmentResults).length >= 1) unlocked.add("course_master");

    return {
      ...currentUser,
      unlockedAchievements: Array.from(unlocked),
    };
  };

  const updateUser = (updater: (prev: UserEntity) => UserEntity) => {
    setUser((prev) => {
      const next = updater(prev);
      const nextWithAchievements = checkAchievements(next);
      StorageRepository.saveUser(nextWithAchievements);
      return nextWithAchievements;
    });
  };

  const addXP = (amount: number) => {
    updateUser((prev) => awardUserXP(prev, amount));
  };

  const deductHeart = () => {
    updateUser((prev) => deductUserHeart(prev));
  };

  const refillHearts = () => {
    updateUser((prev) => refillUserHearts(prev));
  };

  const completeLesson = (lessonId: string, language: Language) => {
    updateUser((prev) => {
      const step1 = markLessonCompleted(prev, lessonId, language);
      return awardUserXP(step1, XP_RULES.LESSON_COMPLETED);
    });
  };

  const saveOnboarding = (prefs: OnboardingPreferences) => {
    updateUser((prev) => ({
      ...prev,
      onboardingCompleted: true,
      targetLanguage: prefs.targetLanguage,
      goal: prefs.goal,
      skillLevel: prefs.skillLevel,
      learningStyle: prefs.learningStyle,
      dailyTargetMinutes: prefs.dailyTargetMinutes,
      dailyGoal: prefs.dailyTargetMinutes * 10,
    }));
  };

  const savePlacementResult = (
    language: Language,
    score: number,
    totalQuestions: number,
    recommendedLevel: string
  ) => {
    updateUser((prev) => ({
      ...prev,
      targetLanguage: language,
      placementScore: score,
      recommendedLevel,
    }));
  };

  const saveCheckpointResult = (
    sectionId: string,
    language: Language,
    score: number,
    totalQuestions: number,
    passed: boolean
  ) => {
    updateUser((prev) => {
      const today = new Date().toISOString().split("T")[0];
      const completedSecs = new Set(prev.completedSections);
      if (passed) completedSecs.add(sectionId);

      const step1: UserEntity = {
        ...prev,
        completedSections: Array.from(completedSecs),
        checkpointResults: {
          ...prev.checkpointResults,
          [sectionId]: { score, totalQuestions, passed, date: today },
        },
      };

      return passed ? awardUserXP(step1, 50) : step1;
    });
  };

  const saveAssessmentResult = (
    title: string,
    type: string,
    language: Language,
    score: number,
    totalQuestions: number,
    passed: boolean
  ) => {
    updateUser((prev) => {
      const today = new Date().toISOString().split("T")[0];
      const key = `${type}_${language}`;

      const step1: UserEntity = {
        ...prev,
        assessmentResults: {
          ...prev.assessmentResults,
          [key]: { score, totalQuestions, passed, date: today },
        },
      };

      return passed ? awardUserXP(step1, 100) : step1;
    });
  };

  const unlockAchievement = (achievementId: string) => {
    updateUser((prev) => {
      if (prev.unlockedAchievements.includes(achievementId)) return prev;
      return {
        ...prev,
        unlockedAchievements: [...prev.unlockedAchievements, achievementId],
      };
    });
  };

  const resetProgress = () => {
    const reset = StorageRepository.resetUser();
    setUser(reset);
  };

  return (
    <GamificationContext.Provider
      value={{
        user,
        isLoaded,
        addXP,
        deductHeart,
        refillHearts,
        completeLesson,
        saveOnboarding,
        savePlacementResult,
        saveCheckpointResult,
        saveAssessmentResult,
        unlockAchievement,
        resetProgress,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error("useGamification must be used within GamificationProvider");
  }
  return context;
}
