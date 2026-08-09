"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
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

  const getMonacoLanguage = (lang: Language) => {
    switch (lang) {
      case "typescript":
      case "tsx":
        return "typescript";
      case "python":
        return "python";
      default:
        return "javascript";
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
    setIsMatch(null);
  };

  const sanitizeTypeScript = (tsCode: string): string => {
    let clean = tsCode;
    // Strip interface definitions multi-line
    clean = clean.replace(/interface\s+\w+[\s\S]*?\n\}/g, "");
    // Strip type definitions
    clean = clean.replace(/type\s+\w+\s*=[\s\S]*?;/g, "");
    // Strip return type annotations on functions like ): number { or ): string {
    clean = clean.replace(/\):\s*[\w\[\]<>]+\s*\{/g, ") {");
    // Strip variable/parameter type annotations like : number, : string, : number[], : boolean, : UserItem[]
    clean = clean.replace(/:\s*([a-zA-Z_]\w*(\[\])?|\[[\s\S]*?\]|<[\s\S]*?>)/g, "");
    // Strip TSX JSX simple elements if TSX mode
    clean = clean.replace(/<[A-Z]\w*[^>]*>([\s\S]*?)<\/[A-Z]\w*>/g, '"$1"');

    return clean;
  };

  const executePythonSimulation = (pyCode: string): string => {
    const logs: string[] = [];

    // Polyfill Python functions in JS execution scope
    const pyScope = `
      function print(...args) {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
      }
      function len(obj) {
        if (typeof obj === 'string' || Array.isArray(obj)) return obj.length;
        if (typeof obj === 'object') return Object.keys(obj).length;
        return 0;
      }
      function range(start, stop, step = 1) {
        if (stop === undefined) { stop = start; start = 0; }
        const arr = [];
        for (let i = start; step > 0 ? i < stop : i > stop; i += step) arr.push(i);
        return arr;
      }
    `;

    // Transpile Python syntax to JS for simulation
    let jsCode = pyCode
      // Convert def func(arg): to JS function func(arg) {
      .replace(/def\s+(\w+)\((.*?)\):/g, "function $1($2) {")
      // Convert if condition: to JS if (condition) {
      .replace(/elif\s+(.*?):/g, "} else if ($1) {")
      .replace(/if\s+(.*?):/g, "if ($1) {")
      .replace(/else:/g, "} else {")
      // Convert for x in y: to JS for (let x of y) {
      .replace(/for\s+(\w+)\s+in\s+(.*?):/g, "for (let $1 of $2) {")
      // Convert True / False / None to true / false / null
      .replace(/\bTrue\b/g, "true")
      .replace(/\bFalse\b/g, "false")
      .replace(/\bNone\b/g, "null")
      // Convert print statements
      .replace(/print\((.*?)\)/g, "print($1)");

    try {
      const runner = new Function("logs", `${pyScope}\n${jsCode}`);
      runner(logs);
      return logs.join("\n") || "Kode Python berhasil dijalankan.";
    } catch (err: any) {
      // Fallback regex extractor for simple prints if transpiler hits edge case
      const matches = [...pyCode.matchAll(/print\((.*?)\)/g)];
      if (matches.length > 0) {
        return matches
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
      }
      return `Kesalahan Eksekusi Python: ${err.message || err}`;
    }
  };

  const handleRunCode = () => {
    setIsExecuting(true);
    setOutput("Menjalankan kode...");

    setTimeout(() => {
      let simulatedOutput = "";
      try {
        if (language === "python") {
          simulatedOutput = executePythonSimulation(code);
        } else {
          const logs: string[] = [];
          const customConsole = {
            log: (...args: any[]) =>
              logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ")),
            error: (...args: any[]) => logs.push("Kesalahan: " + args.join(" ")),
          };

          const executableCode = sanitizeTypeScript(code);
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
        if (onRun) {
          onRun(simulatedOutput, code);
        }
      } else if (onRun) {
        onRun(simulatedOutput, code);
      }
    }, 300);
  };

  return (
    <div className="card-duo bg-slate-900 border-4 border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
      {/* Editor Top Bar */}
      <div className="bg-slate-800 px-5 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono font-bold text-slate-400 ml-2 uppercase">
            {language} Editor
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!readOnly && (
            <button
              onClick={handleReset}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-all"
              title="Reset Kode"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleRunCode}
            disabled={isExecuting}
            className="btn-3d btn-primary-3d text-xs py-2 px-4 flex items-center gap-2 font-bold"
          >
            <Play className="w-4 h-4 fill-white" />
            {isExecuting ? "Menjalankan..." : "Jalankan Kode"}
          </button>
        </div>
      </div>

      {/* Monaco Code Editor Container */}
      <div className="h-64 sm:h-72 w-full">
        <Editor
          height="100%"
          language={getMonacoLanguage(language)}
          theme="vs-dark"
          value={code}
          onChange={(val) => setCode(val || "")}
          options={{
            readOnly,
            fontSize: 14,
            fontFamily: "Fira Code, monospace",
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            lineNumbers: "on",
            glyphMargin: false,
            folding: true,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 3,
          }}
        />
      </div>

      {/* Output Console Box */}
      {output !== null && (
        <div className="bg-slate-950 border-t border-slate-800 p-4 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 font-bold uppercase tracking-wider text-[10px]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-400" /> Konsol Output
            </span>

            {isMatch !== null && (
              <span
                className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black ${
                  isMatch
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {isMatch ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" /> JAWABAN BENAR!
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3 h-3" /> OUTPUT TIDAK COCOK
                  </>
                )}
              </span>
            )}
          </div>

          <pre className="text-slate-200 whitespace-pre-wrap font-mono leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800 max-h-36 overflow-y-auto">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
