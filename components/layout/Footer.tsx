import Link from "next/link";
import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-slate-200 py-12 px-6 mt-auto text-[#4b4b4b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#58cc02] border-b-2 border-[#46a302] flex items-center justify-center text-white font-extrabold text-sm">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg tracking-tight">CodeQuest</span>
          <span className="text-xs text-slate-400 font-medium">
            © 2026 CodeQuest — Learn Programming by Playing & Building.
          </span>
        </div>

        {/* Supported Language Chips in Footer */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">
            Languages:
          </span>
          <Link
            href="/learn?lang=typescript"
            className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-[#1cb0f6] hover:text-[#1cb0f6] transition-colors"
          >
            TypeScript 📘
          </Link>
          <Link
            href="/learn?lang=tsx"
            className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-[#1cb0f6] hover:text-[#1cb0f6] transition-colors"
          >
            TSX / React ⚛️
          </Link>
          <Link
            href="/learn?lang=python"
            className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-[#1cb0f6] hover:text-[#1cb0f6] transition-colors"
          >
            Python 🐍
          </Link>
        </div>
      </div>
    </footer>
  );
}
