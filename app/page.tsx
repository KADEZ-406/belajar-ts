import Link from "next/link";
import { Code2, Flame, Heart, Star, Trophy, Zap, CheckCircle2, ArrowRight, Sparkles, Terminal, Cpu } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Messaging */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border-2 border-emerald-200 text-[#58cc02] font-extrabold text-xs tracking-wider uppercase">
            <Sparkles className="w-4 h-4 fill-[#58cc02]" />
            Gamified Developer Education
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#4b4b4b] leading-[1.1] tracking-tight font-sans">
            Learn programming by <span className="text-[#58cc02]">playing</span>, practicing, and building.
          </h1>

          <p className="text-lg md:text-xl font-medium text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Master **TypeScript**, **TSX / React**, and **Python** through interactive bite-sized lessons, coding challenges, streaks, and XP rewards.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/dashboard"
              className="btn-3d btn-primary-3d w-full sm:w-auto px-8 py-4 text-lg tracking-wider flex items-center justify-center gap-2"
            >
              Start Learning
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </Link>

            <Link
              href="/learn"
              className="btn-3d btn-secondary-3d w-full sm:w-auto px-8 py-4 text-lg tracking-wider flex items-center justify-center gap-2"
            >
              Explore Lessons
            </Link>
          </div>
        </div>

        {/* Right Column: Gamified Mascot Card Illustration */}
        <div className="relative flex justify-center">
          <div className="card-duo p-8 bg-slate-900 border-4 border-slate-800 rounded-3xl w-full max-w-md shadow-2xl relative">
            <div className="absolute -top-5 -right-5 w-14 h-14 rounded-2xl bg-amber-400 border-b-4 border-amber-500 flex items-center justify-center text-slate-900 font-black shadow-lg">
              <Star className="w-8 h-8 fill-slate-900" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] flex items-center justify-center text-white font-extrabold text-2xl">
                  <Code2 className="w-7 h-7 stroke-[3]" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-lg">CodeQuest Platform</div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Interactive Engine
                  </div>
                </div>
              </div>

              {/* Code Preview Box */}
              <div className="p-4 bg-slate-950 rounded-xl font-mono text-sm border border-slate-800 space-y-1">
                <div className="text-slate-500">// TypeScript Type Safety</div>
                <div>
                  <span className="text-sky-400">const</span>{" "}
                  <span className="text-amber-300">hero</span>:{" "}
                  <span className="text-emerald-400">Coder</span> = &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  level: <span className="text-purple-400">7</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  xp: <span className="text-amber-400">2450</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  streak: <span className="text-orange-400">12</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Badges Pill preview */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full font-extrabold text-xs">
                  <Flame className="w-4 h-4 fill-orange-500" /> 12 Day Streak
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full font-extrabold text-xs">
                  <Heart className="w-4 h-4 fill-red-500" /> 5 Hearts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <section className="py-16 bg-slate-50 border-y-2 border-slate-200 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#4b4b4b] uppercase tracking-tight">
              Supported Languages
            </h2>
            <p className="text-slate-500 font-bold mt-2">
              Focus deeply on the most in-demand modern development stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TypeScript Card */}
            <div className="card-duo card-duo-interactive p-8 text-left bg-white border-2 border-slate-200 rounded-3xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 border-b-4 border-sky-300 text-[#1cb0f6] flex items-center justify-center text-3xl font-bold">
                📘
              </div>
              <h3 className="text-2xl font-black text-[#4b4b4b]">TypeScript</h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                Learn strong static typing, interfaces, generics, union types, and modern async patterns.
              </p>
              <Link
                href="/learn?lang=typescript"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1cb0f6] uppercase tracking-wider hover:underline"
              >
                Start TypeScript Path →
              </Link>
            </div>

            {/* TSX / React Card */}
            <div className="card-duo card-duo-interactive p-8 text-left bg-white border-2 border-slate-200 rounded-3xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 border-b-4 border-purple-300 text-purple-600 flex items-center justify-center text-3xl font-bold">
                ⚛️
              </div>
              <h3 className="text-2xl font-black text-[#4b4b4b]">TSX / React</h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                Build modern UI components, typed props, hooks state management, and JSX syntax.
              </p>
              <Link
                href="/learn?lang=tsx"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-purple-600 uppercase tracking-wider hover:underline"
              >
                Start TSX Path →
              </Link>
            </div>

            {/* Python Card */}
            <div className="card-duo card-duo-interactive p-8 text-left bg-white border-2 border-slate-200 rounded-3xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border-b-4 border-emerald-300 text-[#58cc02] flex items-center justify-center text-3xl font-bold">
                🐍
              </div>
              <h3 className="text-2xl font-black text-[#4b4b4b]">Python</h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                Master clean Python syntax, lists & dicts data structures, functions, and OOP logic.
              </p>
              <Link
                href="/learn?lang=python"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#58cc02] uppercase tracking-wider hover:underline"
              >
                Start Python Path →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Explanation Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#4b4b4b] uppercase tracking-tight">
            How Gamification Drives Learning
          </h2>
          <p className="text-slate-500 font-bold mt-2">
            Fun, bite-sized challenges keep you motivated every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-100 border-b-4 border-amber-300 text-amber-500 flex items-center justify-center">
              <Star className="w-7 h-7 fill-amber-400" />
            </div>
            <h4 className="text-lg font-black text-[#4b4b4b]">Earn XP</h4>
            <p className="text-xs font-medium text-slate-500">
              Gain experience points for every completed question, exercise, and practice challenge.
            </p>
          </div>

          <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-100 border-b-4 border-orange-300 text-orange-500 flex items-center justify-center">
              <Flame className="w-7 h-7 fill-orange-500" />
            </div>
            <h4 className="text-lg font-black text-[#4b4b4b]">Build Streaks</h4>
            <p className="text-xs font-medium text-slate-500">
              Practice daily to maintain your streak flame and build unbreakable coding habits.
            </p>
          </div>

          <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-red-100 border-b-4 border-red-300 text-red-500 flex items-center justify-center">
              <Heart className="w-7 h-7 fill-red-500" />
            </div>
            <h4 className="text-lg font-black text-[#4b4b4b]">Heart System</h4>
            <p className="text-xs font-medium text-slate-500">
              Stay sharp on tests or switch to Practice Mode whenever you want pressure-free practice.
            </p>
          </div>

          <div className="card-duo p-6 bg-white border-2 border-slate-200 rounded-3xl text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-100 border-b-4 border-purple-300 text-purple-600 flex items-center justify-center">
              <Trophy className="w-7 h-7 text-purple-600" />
            </div>
            <h4 className="text-lg font-black text-[#4b4b4b]">Leaderboard</h4>
            <p className="text-xs font-medium text-slate-500">
              Compete weekly against other learners to rank in the top 3 gold podium spots.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Footer Banner */}
      <section className="bg-[#58cc02] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Ready to level up your code?
          </h2>
          <p className="text-lg font-bold opacity-90">
            Join thousands of developers mastering TypeScript, TSX, and Python today.
          </p>
          <div>
            <Link
              href="/dashboard"
              className="btn-3d bg-white text-[#58cc02] border-b-4 border-slate-200 hover:bg-slate-50 px-10 py-4 text-xl tracking-wider inline-flex items-center gap-2"
            >
              Start Learning Now
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
