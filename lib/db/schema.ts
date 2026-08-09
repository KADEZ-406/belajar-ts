import { pgTable, text, integer, boolean, timestamp, uuid } from "drizzle-orm/pg-core";

// Users Table (Integrated with Better Auth & CodeQuest Gamification)
export const users = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  // Gamification fields
  xp: integer("xp").notNull().default(0),
  streak: integer("streak").notNull().default(1),
  hearts: integer("hearts").notNull().default(5),
  level: integer("level").notNull().default(1),
  onboardingCompleted: boolean("onboarding_completed").notNull().default(false),
});

// Better Auth Sessions Table
export const sessions = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

// Better Auth Accounts Table (Google, Facebook, Credentials)
export const accounts = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Better Auth Verification Tokens Table
export const verifications = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User Onboarding Survey Table
export const onboarding = pgTable("user_onboarding", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  language: text("language").notNull(), // typescript | tsx | python
  goal: text("goal").notNull(), // karir | hobi | kuliah | projek
  skillLevel: text("skill_level").notNull(), // pemula | menengah | mahir
  learningStyle: text("learning_style").notNull(), // visual | praktik | santai | cepat
  dailyTargetMinutes: integer("daily_target_minutes").notNull().default(10), // 5, 10, 15, 20
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Placement Test Results Table
export const placementTests = pgTable("placement_test", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  language: text("language").notNull(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  recommendedLevel: text("recommended_level").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Lesson Progress Table (Learning Loop)
export const lessonProgress = pgTable("lesson_progress", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  lessonId: text("lesson_id").notNull(),
  language: text("language").notNull(),
  status: text("status").notNull(), // COMPLETED | IN_PROGRESS
  score: integer("score").notNull().default(0),
  mode: text("mode").notNull().default("learn"), // learn | exam
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

// Section Checkpoints Table
export const sectionCheckpoints = pgTable("section_checkpoint", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  sectionId: text("section_id").notNull(),
  language: text("language").notNull(),
  score: integer("score").notNull(),
  passed: boolean("passed").notNull().default(false),
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

// Mastery & Final Assessments Table
export const assessments = pgTable("assessment", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  type: text("type").notNull(), // section_mastery | final_assessment
  language: text("language").notNull(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  passed: boolean("passed").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
