"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGamification } from "@/lib/application/GamificationContext";
import { Flame, Heart, Star, BookOpen, Dumbbell, Trophy, Award, User, Code2 } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { user } = useGamification();

  if (pathname.startsWith("/learn/") && pathname.split("/").length > 3) {
    return null;
  }

  const navItems = [
    { href: "/learn", label: "Belajar", icon: BookOpen },
    { href: "/practice", label: "Latihan", icon: Dumbbell },
    { href: "/leaderboard", label: "Peringkat", icon: Trophy },
    { href: "/achievements", label: "Lencana", icon: Award },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b-2 border-slate-200 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#58cc02] border-b-4 border-[#46a302] flex items-center justify-center text-white font-extrabold text-xl shadow-xs transition-transform group-hover:scale-105">
            <Code2 className="w-6 h-6 stroke-[3]" />
          </div>
          <span className="text-2xl font-black tracking-tight text-[#4b4b4b] font-sans">
            Code<span className="text-[#58cc02]">Quest</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all ${
                  isActive
                    ? "bg-slate-100 text-[#1cb0f6] border-2 border-slate-200"
                    : "text-[#4b4b4b] hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#1cb0f6]" : "text-slate-400"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Gamification Stats Display (Clean Text Labels, NO pill badges) */}
        <div className="flex items-center gap-4">
          {/* Streak */}
          <div className="flex items-center gap-1.5 text-xs font-black text-orange-600" title="Streak Belajar Harian">
            <Flame className="w-5 h-5 fill-orange-500 text-orange-500" />
            <span>{user.streak} Hari</span>
          </div>

          {/* Nyawa / Hearts */}
          <div className="flex items-center gap-1.5 text-xs font-black text-red-500" title="Sisa Nyawa">
            <Heart className="w-5 h-5 fill-red-500 text-red-500" />
            <span>{user.hearts}</span>
          </div>

          {/* XP */}
          <div className="flex items-center gap-1.5 text-xs font-black text-amber-600" title="Total Poin Pengalaman">
            <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
            <span>{user.xp} XP</span>
          </div>

          {/* Profil & Auth */}
          <div className="flex items-center gap-2 ml-1 pl-3 border-l-2 border-slate-200">
            <Link
              href="/auth"
              className="text-xs font-black uppercase text-[#1cb0f6] hover:underline px-2 py-1"
            >
              Masuk
            </Link>
            <Link
              href="/profile"
              title="Lihat Profil"
              className="hover:opacity-85 transition-opacity"
            >
              <img
                src={user.avatar}
                alt={user.username}
                className="w-9 h-9 rounded-full bg-slate-100 border-2 border-[#1cb0f6] p-0.5 object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-slate-200 px-4 py-2 flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg ${
                isActive ? "text-[#1cb0f6] font-extrabold" : "text-slate-500 font-medium"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
        <Link
          href="/profile"
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg ${
            pathname.startsWith("/profile") ? "text-[#1cb0f6] font-extrabold" : "text-slate-500 font-medium"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider">Profil</span>
        </Link>
      </div>
    </header>
  );
}
