import { Language } from "../lesson/lesson.types";
import { calculateLevelFromXP } from "../gamification/rules";

export interface CheckpointResult {
  score: number;
  totalQuestions: number;
  passed: boolean;
  date: string;
}

export interface AssessmentResult {
  score: number;
  totalQuestions: number;
  passed: boolean;
  date: string;
}

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
  completedSections: string[];
  unlockedAchievements: string[];
  languageProgress: Record<Language, number>;
  // Onboarding & Assessment Persistence
  onboardingCompleted: boolean;
  targetLanguage?: Language;
  goal?: string;
  skillLevel?: string;
  learningStyle?: string;
  dailyTargetMinutes?: number;
  placementScore?: number;
  recommendedLevel?: string;
  checkpointResults: Record<string, CheckpointResult>;
  assessmentResults: Record<string, AssessmentResult>;
}

export const FRESH_USER_INITIAL_STATE: UserEntity = {
  username: "Pebisnis Koding",
  avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=CodeQuestUser",
  level: 1,
  xp: 0,
  streak: 1,
  lastActiveDate: new Date().toISOString().split("T")[0],
  hearts: 5,
  maxHearts: 5,
  dailyGoal: 50,
  dailyXP: 0,
  lastLessonId: undefined,
  lastLanguage: "typescript",
  completedLessons: [],
  completedSections: [],
  unlockedAchievements: [],
  languageProgress: {
    typescript: 0,
    tsx: 0,
    python: 0,
  },
  onboardingCompleted: false,
  checkpointResults: {},
  assessmentResults: {},
};

export const MOCK_INITIAL_USER: UserEntity = FRESH_USER_INITIAL_STATE;

export function checkAndIncrementStreak(user: UserEntity): UserEntity {
  const today = new Date().toISOString().split("T")[0];
  const lastActive = user.lastActiveDate;

  if (lastActive === today) {
    return user;
  }

  const lastDate = new Date(lastActive);
  const currentDate = new Date(today);
  const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let newStreak = user.streak;
  if (diffDays === 1) {
    newStreak = user.streak + 1;
  } else if (diffDays > 1) {
    newStreak = 1;
  }

  return {
    ...user,
    streak: newStreak,
    lastActiveDate: today,
    dailyXP: diffDays >= 1 ? 0 : user.dailyXP,
  };
}

export function awardUserXP(user: UserEntity, amount: number): UserEntity {
  const userWithStreak = checkAndIncrementStreak(user);
  const newXP = userWithStreak.xp + amount;
  const newDailyXP = userWithStreak.dailyXP + amount;
  const newLevel = calculateLevelFromXP(newXP).level;

  return {
    ...userWithStreak,
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
  const userWithStreak = checkAndIncrementStreak(user);
  const completed = new Set(userWithStreak.completedLessons);
  completed.add(lessonId);

  const langPrefixes: Record<Language, string> = { typescript: "ts_", tsx: "tsx_", python: "py_" };
  const totalLessons: Record<Language, number> = { typescript: 65, tsx: 65, python: 65 };
  const completedInLang = Array.from(completed).filter((id) => id.startsWith(langPrefixes[language])).length;
  const newProgress = Math.min(100, Math.round((completedInLang / (totalLessons[language] || 65)) * 100));

  return {
    ...userWithStreak,
    lastLessonId: lessonId,
    lastLanguage: language,
    completedLessons: Array.from(completed),
    languageProgress: {
      ...userWithStreak.languageProgress,
      [language]: newProgress,
    },
  };
}
