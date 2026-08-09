export const XP_RULES = {
  CORRECT_ANSWER: 5,
  CODE_CHALLENGE: 15,
  LESSON_COMPLETED: 30,
  PERFECT_LESSON: 20,
  DAILY_GOAL: 50,
  PRACTICE_EASY: 10,
  PRACTICE_MEDIUM: 20,
  PRACTICE_HARD: 35,
} as const;

export interface LevelInfo {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
}

export const LEVEL_TABLE: LevelInfo[] = [
  { level: 1, title: "Pemula", minXP: 0, maxXP: 250 },
  { level: 2, title: "Pendatang Baru", minXP: 250, maxXP: 600 },
  { level: 3, title: "Programmer", minXP: 600, maxXP: 1100 },
  { level: 4, title: "Pengembang", minXP: 1100, maxXP: 1800 },
  { level: 5, title: "Pembuat", minXP: 1800, maxXP: 2600 },
  { level: 6, title: "Tingkat Lanjut", minXP: 2600, maxXP: 3600 },
  { level: 7, title: "Ahli", minXP: 3600, maxXP: 5000 },
  { level: 8, title: "Master", minXP: 5000, maxXP: 7000 },
  { level: 9, title: "Arsitek", minXP: 7000, maxXP: 10000 },
  { level: 10, title: "Grandmaster", minXP: 10000, maxXP: 15000 },
];

export function calculateLevelFromXP(xp: number): LevelInfo {
  for (let i = LEVEL_TABLE.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_TABLE[i].minXP) return LEVEL_TABLE[i];
  }
  return LEVEL_TABLE[0];
}

export function calculateLevelProgress(xp: number) {
  const current = calculateLevelFromXP(xp);
  const xpInLevel = xp - current.minXP;
  const totalInLevel = current.maxXP - current.minXP;
  const percentage = Math.min(100, Math.max(0, Math.floor((xpInLevel / totalInLevel) * 100)));

  return {
    level: current.level,
    title: current.title,
    xp,
    xpInLevel,
    totalInLevel,
    percentage,
  };
}
