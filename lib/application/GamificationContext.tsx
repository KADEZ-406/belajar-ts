"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { UserEntity, MOCK_INITIAL_USER, awardUserXP, deductUserHeart, refillUserHearts, markLessonCompleted } from "../domain/user/user.entity";
import { StorageRepository } from "../infrastructure/storage";
import { Language } from "../domain/lesson/lesson.types";
import { XP_RULES } from "../domain/gamification/rules";

interface GamificationContextType {
  user: UserEntity;
  isLoaded: boolean;
  addXP: (amount: number) => void;
  deductHeart: () => void;
  refillHearts: () => void;
  completeLesson: (lessonId: string, language: Language) => void;
  unlockAchievement: (achievementId: string) => void;
  resetProgress: () => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserEntity>(MOCK_INITIAL_USER);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = StorageRepository.loadUser();
    setUser(loaded);
    setIsLoaded(true);
  }, []);

  const updateUser = (updater: (prev: UserEntity) => UserEntity) => {
    setUser((prev) => {
      const next = updater(prev);
      StorageRepository.saveUser(next);
      return next;
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
