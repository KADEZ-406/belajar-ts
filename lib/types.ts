export type Language = "typescript" | "tsx" | "python";

export type ExerciseType =
  | "multiple_choice"
  | "code_completion"
  | "predict_output"
  | "fix_code"
  | "true_false"
  | "arrange_code"
  | "code_challenge";

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  explanation: string;
  xpReward: number;
  initialCode?: string;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: "multiple_choice";
  options: string[];
  correctAnswer: number;
}

export interface CodeCompletionExercise extends BaseExercise {
  type: "code_completion";
  template: string;
  options: string[];
  correctAnswer: string;
}

export interface PredictOutputExercise extends BaseExercise {
  type: "predict_output";
  code: string;
  options: string[];
  correctAnswer: string;
}

export interface FixCodeExercise extends BaseExercise {
  type: "fix_code";
  buggyCode: string;
  correctCode: string;
  hint: string;
}

export interface TrueFalseExercise extends BaseExercise {
  type: "true_false";
  statement: string;
  correctAnswer: boolean;
}

export interface ArrangeCodeExercise extends BaseExercise {
  type: "arrange_code";
  codeSnippets: string[];
  correctOrder: string[];
}

export interface CodeChallengeExercise extends BaseExercise {
  type: "code_challenge";
  starterCode: string;
  expectedOutput: string;
  testCases?: { input: string; expected: string }[];
}

export type Exercise =
  | MultipleChoiceExercise
  | CodeCompletionExercise
  | PredictOutputExercise
  | FixCodeExercise
  | TrueFalseExercise
  | ArrangeCodeExercise
  | CodeChallengeExercise;

export type LessonStatus = "LOCKED" | "AVAILABLE" | "IN_PROGRESS" | "COMPLETED";

export interface LessonStep {
  id: string;
  type: "learn" | "exercise";
  title?: string;
  content?: string;
  exercise?: Exercise;
}

export interface Lesson {
  id: string;
  language: Language;
  sectionId: string;
  sectionTitle: string;
  title: string;
  description: string;
  icon: string;
  xp: number;
  prerequisites: string[];
  steps: LessonStep[];
}

export interface LearningSection {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface LearningPath {
  language: Language;
  title: string;
  description: string;
  icon: string;
  sections: LearningSection[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "streak" | "xp" | "lessons" | "perfect" | "language";
  xpReward: number;
  requiredValue: number;
  currentValue?: number;
  unlockedAt?: string;
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  username: string;
  avatar: string;
  xp: number;
  streak: number;
  isCurrentUser?: boolean;
}

export interface PracticeChallenge {
  id: string;
  title: string;
  language: Language;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  starterCode: string;
  expectedOutput: string;
  xpReward: number;
  hint: string;
}

export interface UserProfile {
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
