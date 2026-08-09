"use client";

import React, { useState } from "react";
import { Exercise } from "@/lib/domain/lesson/lesson.types";
import { CodeEditor } from "@/components/code-editor/CodeEditor";
import { HelpCircle, GripVertical, Lightbulb, BookOpen } from "lucide-react";

interface ExerciseRendererProps {
  exercise: Exercise;
  onAnswer: (isCorrect: boolean, xp: number) => void;
  disabled?: boolean;
  isExamMode?: boolean;
}

export function ExerciseRenderer({ 
  exercise, 
  onAnswer, 
  disabled = false,
  isExamMode = false,
}: ExerciseRendererProps) {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [showFixHint, setShowFixHint] = useState(false);
  const [editorState, setEditorState] = useState<{ output: string; code: string } | null>(null);
  const [arrangedItems, setArrangedItems] = useState<string[]>(
    exercise.type === "arrange_code" ? [...exercise.codeSnippets] : []
  );

  const checkCodeCorrectness = (output: string, code: string): boolean => {
    const cleanOutput = output.trim();
    if (exercise.type === "fix_code") {
      const hasQuotes = code.includes('"25"') || code.includes("'25'");
      return !hasQuotes && (cleanOutput === "25" || cleanOutput.includes("25"));
    }
    if (exercise.type === "code_challenge") {
      return cleanOutput === exercise.expectedOutput.trim();
    }
    return false;
  };

  const handleCodeRun = (output: string, code: string) => {
    setEditorState({ output, code });
    const isCorrect = checkCodeCorrectness(output, code);
    if (isCorrect) {
      onAnswer(true, isExamMode ? exercise.xpReward * 2 : exercise.xpReward);
    }
  };

  const handleCodeSubmit = () => {
    if (!editorState) return;
    const isCorrect = checkCodeCorrectness(editorState.output, editorState.code);
    onAnswer(isCorrect, isExamMode ? exercise.xpReward * 2 : exercise.xpReward);
  };

  const handleSubmit = (answerValue: any) => {
    let isCorrect = false;

    switch (exercise.type) {
      case "multiple_choice":
        isCorrect = Number(answerValue) === exercise.correctAnswer;
        break;

      case "code_completion":
        isCorrect = String(answerValue).trim() === exercise.correctAnswer.trim();
        break;

      case "predict_output":
        isCorrect = String(answerValue).trim() === exercise.correctAnswer.trim();
        break;

      case "true_false":
        isCorrect = Boolean(answerValue) === exercise.correctAnswer;
        break;

      case "arrange_code":
        isCorrect = JSON.stringify(arrangedItems) === JSON.stringify(exercise.correctOrder);
        break;
    }

    onAnswer(isCorrect, isExamMode ? exercise.xpReward * 2 : exercise.xpReward);
  };

  const moveSnippet = (index: number, direction: "up" | "down") => {
    const newItems = [...arrangedItems];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    setArrangedItems(newItems);
  };

  const getExerciseLabel = (type: string) => {
    switch (type) {
      case "multiple_choice":
        return "Latihan Pilihan Ganda";
      case "code_completion":
        return "Latihan Melengkapi Kode";
      case "predict_output":
        return "Latihan Prediksi Hasil";
      case "fix_code":
        return "Latihan Perbaiki Kode";
      case "true_false":
        return "Latihan Benar atau Salah";
      case "arrange_code":
        return "Latihan Menyusun Kode";
      case "code_challenge":
        return "Tantangan Koding";
      default:
        return "Latihan Koding";
    }
  };

  return (
    <div className="space-y-6">
      {/* Pelajari Dulu (Guided explanation before challenge in Learn Mode) */}
      {!isExamMode && (
        <div className="card-duo p-6 bg-sky-50 border-2 border-sky-200 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1cb0f6]">
            <BookOpen className="w-4 h-4" /> Pelajari Dulu:
          </div>
          <p className="text-base font-semibold text-slate-800 leading-relaxed">
            {exercise.conceptGuide || "Perhatikan aturan sintaks dan tata cara penulisan kode di bawah sebelum kamu mencoba kuis."}
          </p>
        </div>
      )}

      {/* Exercise Question Prompt Header */}
      <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-2xl shadow-xs space-y-2">
        {isExamMode && (
          <div className="text-[10px] font-black uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-1 rounded-full w-max">
            ⚡ Soal Ujian: Tanpa Bimbingan (Bonus 2x XP)
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-extrabold text-[#4b4b4b] leading-tight">
          {exercise.prompt}
        </h3>
      </div>

      {/* Multiple Choice Exercise */}
      {exercise.type === "multiple_choice" && (
        <div className="grid grid-cols-1 gap-3">
          {exercise.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            return (
              <button
                key={idx}
                disabled={disabled}
                onClick={() => {
                  setSelectedOption(idx);
                  handleSubmit(idx);
                }}
                className={`card-duo card-duo-interactive p-4 text-left font-bold text-base md:text-lg flex items-center justify-between transition-all ${
                  isSelected
                    ? "border-[#1cb0f6] bg-sky-50 text-[#1cb0f6] shadow-md"
                    : "border-slate-200 text-[#4b4b4b] hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-300 text-slate-600 flex items-center justify-center text-sm font-extrabold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Code Completion Exercise */}
      {exercise.type === "code_completion" && (
        <div className="space-y-6">
          <div className="p-5 bg-slate-900 text-emerald-400 font-mono rounded-2xl border-2 border-slate-800 text-lg">
            {exercise.template.split("_____").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="inline-block mx-1 px-3 py-1 bg-sky-950 text-sky-400 border border-sky-800 rounded-lg font-bold">
                    {selectedOption || "_____"}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {exercise.options.map((option, idx) => (
              <button
                key={idx}
                disabled={disabled}
                onClick={() => {
                  setSelectedOption(option);
                  handleSubmit(option);
                }}
                className="btn-3d btn-outline-3d py-3 text-sm font-mono"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Predict Output Exercise */}
      {exercise.type === "predict_output" && (
        <div className="space-y-6">
          <pre className="p-5 bg-slate-900 text-emerald-400 font-mono rounded-2xl border-2 border-slate-800 text-sm md:text-base leading-relaxed overflow-x-auto">
            {exercise.code}
          </pre>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {exercise.options.map((option, idx) => (
              <button
                key={idx}
                disabled={disabled}
                onClick={() => {
                  setSelectedOption(option);
                  handleSubmit(option);
                }}
                className="card-duo card-duo-interactive p-4 font-mono font-bold text-center border-2 border-slate-200 hover:border-[#1cb0f6]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Fix Code Exercise */}
      {exercise.type === "fix_code" && (
        <div className="space-y-4">
          {!isExamMode && exercise.hint && (
            showFixHint ? (
              <div className="p-4 bg-amber-50 border-2 border-amber-200 text-amber-900 rounded-xl text-sm font-medium">
                Petunjuk: {exercise.hint}
              </div>
            ) : (
              <button
                onClick={() => setShowFixHint(true)}
                className="text-xs font-extrabold text-amber-600 hover:underline flex items-center gap-1"
              >
                <Lightbulb className="w-4 h-4" /> Butuh Petunjuk?
              </button>
            )
          )}
          <CodeEditor
            initialCode={exercise.buggyCode}
            language="typescript"
            expectedOutput="25"
            onRun={(output: string, code: string) => handleCodeRun(output, code)}
          />
          {editorState && (
            <button
              onClick={handleCodeSubmit}
              disabled={disabled}
              className="btn-3d btn-primary-3d w-full py-3 text-sm"
            >
              Periksa Jawaban
            </button>
          )}
        </div>
      )}

      {/* True / False Exercise */}
      {exercise.type === "true_false" && (
        <div className="grid grid-cols-2 gap-4">
          <button
            disabled={disabled}
            onClick={() => handleSubmit(true)}
            className="btn-3d btn-primary-3d py-5 text-xl tracking-wider"
          >
            BENAR
          </button>
          <button
            disabled={disabled}
            onClick={() => handleSubmit(false)}
            className="btn-3d btn-danger-3d py-5 text-xl tracking-wider"
          >
            SALAH
          </button>
        </div>
      )}

      {/* Arrange Code Exercise */}
      {exercise.type === "arrange_code" && (
        <div className="space-y-4">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Urutkan potongan kode di bawah ini dengan benar:
          </p>
          <div className="space-y-2">
            {arrangedItems.map((snippet, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-900 text-emerald-400 font-mono rounded-xl border-2 border-slate-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <GripVertical className="w-5 h-5 text-slate-600" />
                  <span className="text-sm">{snippet}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => moveSnippet(idx, "up")}
                    disabled={idx === 0}
                    className="px-2 py-1 bg-slate-800 text-xs font-bold text-slate-300 rounded hover:bg-slate-700 disabled:opacity-30"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveSnippet(idx, "down")}
                    disabled={idx === arrangedItems.length - 1}
                    className="px-2 py-1 bg-slate-800 text-xs font-bold text-slate-300 rounded hover:bg-slate-700 disabled:opacity-30"
                  >
                    ▼
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleSubmit(arrangedItems)}
            disabled={disabled}
            className="btn-3d btn-secondary-3d w-full py-3 mt-4"
          >
            Kirim Urutan Kode
          </button>
        </div>
      )}

      {/* Code Challenge Exercise */}
      {exercise.type === "code_challenge" && (
        <div className="space-y-4">
          <CodeEditor
            initialCode={exercise.starterCode}
            language="typescript"
            expectedOutput={exercise.expectedOutput}
            onRun={(output: string, code: string) => handleCodeRun(output, code)}
          />
          {editorState && (
            <button
              onClick={handleCodeSubmit}
              disabled={disabled}
              className="btn-3d btn-primary-3d w-full py-3 text-sm"
            >
              Periksa Jawaban
            </button>
          )}
        </div>
      )}
    </div>
  );
}
