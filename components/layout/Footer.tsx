import Link from "next/link";
import { Code2, BookOpen, Atom, FileCode } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-slate-200 py-10 px-6 mt-auto text-[#4b4b4b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#58cc02] border-b-2 border-[#46a302] flex items-center justify-center text-white font-extrabold text-sm">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg tracking-tight">CodeQuest</span>
          <span className="text-xs text-slate-400 font-medium">
            © 2026 CodeQuest. Platform Belajar Pemrograman Interaktif.
          </span>
        </div>

        {/* Clean Language Links (No pill badges) */}
        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <span className="uppercase text-slate-400 tracking-wider">Bahasa Pemrograman:</span>
          <Link
            href="/learn?lang=typescript"
            className="flex items-center gap-1 hover:text-[#1cb0f6] transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#1cb0f6]" /> TypeScript
          </Link>
          <Link
            href="/learn?lang=tsx"
            className="flex items-center gap-1 hover:text-purple-600 transition-colors"
          >
            <Atom className="w-3.5 h-3.5 text-purple-600" /> TSX / React
          </Link>
          <Link
            href="/learn?lang=python"
            className="flex items-center gap-1 hover:text-[#58cc02] transition-colors"
          >
            <FileCode className="w-3.5 h-3.5 text-[#58cc02]" /> Python
          </Link>
        </div>
      </div>
    </footer>
  );
}
