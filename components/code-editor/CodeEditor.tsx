"use client";

import React, { useState } from "react";
import { Play, RotateCcw, CheckCircle2, AlertCircle, Terminal } from "lucide-react";
import { Language } from "@/lib/domain/lesson/lesson.types";

interface CodeEditorProps {
  initialCode: string;
  language: Language;
  onRun?: (output: string, code: string) => void;
  expectedOutput?: string;
  readOnly?: boolean;
}

export function CodeEditor({
  initialCode,
  language,
  onRun,
  expectedOutput,
  readOnly = false,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isMatch, setIsMatch] = useState<boolean | null>(null);

  const lines = code.split("\n");

  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
    setIsMatch(null);
  };

  const handleRunCode = () => {
    setIsExecuting(true);
    setOutput("Menjalankan kode...");

    setTimeout(() => {
      let simulatedOutput = "";
      try {
        if (language === "python") {
          const matches = [...code.matchAll(/print\((.*?)\)/g)];
          if (matches.length > 0) {
            simulatedOutput = matches
              .map((m) => {
                const expr = m[1].trim();
                if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
                  return expr.slice(1, -1);
                }
                try {
                  return String(eval(expr));
                } catch {
                  return expr;
                }
              })
              .join("\n");
          } else {
            simulatedOutput = "Kode berhasil dijalankan (tanpa cetakan stdout).";
          }
        } else {
          const logs: string[] = [];
          const customConsole = {
            log: (...args: any[]) => logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ")),
            error: (...args: any[]) => logs.push("Kesalahan: " + args.join(" ")),
          };

          // Sanitize TypeScript type annotations for browser execution
          let executableCode = code
            .replace(/interface\s+\w+[\s\S]*?\}/g, "")
            .replace(/:\s*(number|string|boolean|any|void|string\[\]|number\[\]|\w+)\b/g, "");

          const execFn = new Function("console", executableCode);
          execFn(customConsole);
          simulatedOutput = logs.join("\n") || "Kode berhasil dijalankan.";
        }
      } catch (err: any) {
        simulatedOutput = `Kesalahan Eksekusi: ${err.message || err}`;
      }

      setOutput(simulatedOutput);
      setIsExecuting(false);

      if (expectedOutput !== undefined) {
        const matchesExpected = simulatedOutput.trim() === expectedOutput.trim();
        setIsMatch(matchesExpected);
      }

      if (onRun) {
        onRun(simulatedOutput, code);
      }
    }, 400);
  };

  return (
    <div className="card-duo overflow-hidden bg-slate-900 text-slate-100 border-2 border-slate-700 rounded-2xl shadow-md">
      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          <span className="ml-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Editor {language}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            disabled={readOnly}
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-bold text-slate-200 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Atur Ulang
          </button>
          <button
            onClick={handleRunCode}
            disabled={isExecuting}
            className="btn-3d btn-primary-3d text-xs px-4 py-1.5 flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isExecuting ? "Menjalankan..." : "Jalankan Kode"}
          </button>
        </div>
      </div>

      {/* Code Textarea Area */}
      <div className="relative font-mono text-sm flex min-h-[160px] bg-slate-950">
        <div className="select-none py-3 px-3 text-right bg-slate-900/60 text-slate-500 border-r border-slate-800 text-xs leading-6 min-w-[40px]">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          readOnly={readOnly}
          spellCheck={false}
          className="w-full py-3 px-4 bg-transparent text-emerald-300 outline-none resize-none font-mono text-sm leading-6 focus:ring-0 border-0"
          rows={Math.max(6, lines.length)}
        />
      </div>

      {/* Console Output Panel */}
      {output !== null && (
        <div className="border-t border-slate-800 bg-slate-900 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Terminal className="w-4 h-4 text-sky-400" />
              Keluaran Konsol
            </div>

            {isMatch !== null && (
              <div
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg ${
                  isMatch
                    ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                    : "bg-red-950 text-red-400 border border-red-800"
                }`}
              >
                {isMatch ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" /> Hasil Sesuai!
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3.5 h-3.5" /> Hasil Belum Sesuai
                  </>
                )}
              </div>
            )}
          </div>

          <pre className="font-mono text-xs text-slate-200 bg-slate-950 p-3 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
