import { Language } from "../lesson/lesson.types";
import { calculateLevelFromXP } from "../gamification/rules";

export interface UserEntity {
  username: string;
  avatar: string;
  level: number;
  xp: number;
  streak: number;
  lastActiveDate: string;
  hearts: number;
  maxHearts: number;
  dailyGoal: number;
  dailyXP: number;
  lastLessonId?: string;
  lastLanguage?: Language;
  completedLessons: string[];
  unlockedAchievements: string[];
  languageProgress: Record<Language, number>;
}

export const MOCK_INITIAL_USER: UserEntity = {
  username: "Kadez",
  avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Kadez",
  level: 7,
  xp: 2450,
  streak: 12,
  lastActiveDate: new Date().toISOString().split("T")[0],
  hearts: 5,
  maxHearts: 5,
  dailyGoal: 100,
  dailyXP: 75,
  lastLessonId: "ts_lesson_2",
  lastLanguage: "typescript",
  completedLessons: ["ts_lesson_1", "tsx_lesson_1", "py_lesson_1"],
  unlockedAchievements: ["first_code", "python_beginner"],
  languageProgress: {
    typescript: 72,
    tsx: 45,
    python: 31,
  },
};

export function awardUserXP(user: UserEntity, amount: number): UserEntity {
  const newXP = user.xp + amount;
  const newDailyXP = user.dailyXP + amount;
  const newLevel = calculateLevelFromXP(newXP).level;

  return {
    ...user,
    xp: newXP,
    dailyXP: newDailyXP,
    level: newLevel,
  };
}

export function deductUserHeart(user: UserEntity): UserEntity {
  if (user.hearts <= 0) return user;
  return {
    ...user,
    hearts: user.hearts - 1,
  };
}

export function refillUserHearts(user: UserEntity): UserEntity {
  return {
    ...user,
    hearts: user.maxHearts,
  };
}

export function markLessonCompleted(
  user: UserEntity,
  lessonId: string,
  language: Language
): UserEntity {
  const completed = new Set(user.completedLessons);
  completed.add(lessonId);

  // Update progress percentage
  const prevProgress = user.languageProgress[language] || 0;
  const newProgress = Math.min(100, prevProgress + 15);

  return {
    ...user,
    lastLessonId: lessonId,
    lastLanguage: language,
    completedLessons: Array.from(completed),
    languageProgress: {
      ...user.languageProgress,
      [language]: newProgress,
    },
  };
}
