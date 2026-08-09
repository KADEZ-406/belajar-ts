import { LearningPath } from "../types";

export const PYTHON_PATH: LearningPath = {
  language: "python",
  title: "Python Mastery",
  description: "Learn clean Python syntax, data structures, control flow, functions, and OOP.",
  icon: "🐍",
  sections: [
    {
      id: "py_sec_1",
      title: "01 Python Fundamentals",
      description: "Get started with Python syntax, variables, print statements, and types.",
      lessons: [
        {
          id: "py_lesson_1",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Python Fundamentals",
          title: "Introduction to Python",
          description: "Learn Python's clean syntax, dynamic typing, and indentation rules.",
          icon: "🐍",
          xp: 45,
          prerequisites: [],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Welcome to Python!",
              content: `Python is a high-level, readable programming language known for clean code.

Key concepts:
- **No curly braces \`{}\` or semicolons \`;\`** for code blocks.
- **Indentation matters!** (4 spaces per block level).
- **Dynamically typed**: variables infer types automatically.

\`\`\`python
name = "Kadez"
level = 7
print(f"Hello {name}, Level {level}!")
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_1",
                type: "true_false",
                prompt: "Python uses curly braces {} to define code blocks like functions and loops.",
                statement: "Code blocks are defined with curly braces.",
                correctAnswer: false,
                explanation: "False! Python uses whitespace indentation (colon `:` and 4 spaces) instead of curly braces.",
                xpReward: 5,
              },
            },
            {
              id: "step_3",
              type: "exercise",
              exercise: {
                id: "py_ex_2",
                type: "predict_output",
                prompt: "What will this Python code output?",
                code: `x = 10\ny = 5\nprint(x + y)`,
                options: ["15", "105", "x + y", "SyntaxError"],
                correctAnswer: "15",
                explanation: "10 + 5 equals 15.",
                xpReward: 5,
              },
            },
            {
              id: "step_4",
              type: "exercise",
              exercise: {
                id: "py_ex_3",
                type: "code_challenge",
                prompt: "Write a Python script that prints 'Python CodeQuest'",
                starterCode: `print("Python CodeQuest")`,
                expectedOutput: "Python CodeQuest",
                explanation: "The `print()` function displays output to the screen.",
                xpReward: 15,
              },
            },
          ],
        },
        {
          id: "py_lesson_2",
          language: "python",
          sectionId: "py_sec_1",
          sectionTitle: "01 Python Fundamentals",
          title: "Lists & Dictionaries",
          description: "Store collections of items in ordered lists and key-value dictionaries.",
          icon: "📦",
          xp: 50,
          prerequisites: ["py_lesson_1"],
          steps: [
            {
              id: "step_1",
              type: "learn",
              title: "Lists and Dicts",
              content: `Lists store ordered items, while dictionaries store key-value mappings:

\`\`\`python
skills = ["Python", "TypeScript", "SQL"]
user = {"name": "Kadez", "xp": 2450}

print(skills[0])      # Output: Python
print(user["xp"])     # Output: 2450
\`\`\``,
            },
            {
              id: "step_2",
              type: "exercise",
              exercise: {
                id: "py_ex_4",
                type: "predict_output",
                prompt: "What is the output of this Python dictionary access?",
                code: `hero = {"name": "Alex", "level": 5}\nprint(hero["level"])`,
                options: ["5", "level", "Alex", "KeyError"],
                correctAnswer: "5",
                explanation: "Accessing `hero[\"level\"]` returns the numeric value 5.",
                xpReward: 5,
              },
            },
          ],
        },
      ],
    },
  ],
};
