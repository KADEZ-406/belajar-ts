"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { ArrowRight, Lock, Mail, ShieldCheck, Sparkles } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSocialAuth = async (provider: "google" | "facebook") => {
    setLoading(true);
    setError(null);
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/onboarding",
      });
    } catch (err: any) {
      setError(`Gagal melakukan autentikasi dengan ${provider}.`);
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        await authClient.signIn.email({
          email,
          password,
          callbackURL: "/onboarding",
        });
      } else {
        await authClient.signUp.email({
          email,
          password,
          name: name || "Pengguna CodeQuest",
          callbackURL: "/onboarding",
        });
      }
      router.push("/onboarding");
    } catch (err: any) {
      setError(err?.message || "Gagal melakukan autentikasi. Silakan periksa email dan password kamu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="card-duo w-full max-w-md bg-white border-4 border-slate-200 p-8 rounded-3xl space-y-6 shadow-xl">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black text-[#4b4b4b] uppercase tracking-tight">
            {isLogin ? "Masuk ke CodeQuest" : "Buat Akun Baru"}
          </h1>
          <p className="text-sm font-bold text-slate-400">
            {isLogin
              ? "Lanjutkan perjalanan belajar dan pertahankan Streak harianmu."
              : "Mulai petualangan koding gratis hari ini!"}
          </p>
        </div>

        {/* Social Auth Buttons (Google & Facebook) */}
        <div className="space-y-3">
          <button
            onClick={() => handleSocialAuth("google")}
            disabled={loading}
            className="w-full py-3.5 px-4 bg-white border-2 border-slate-200 hover:border-slate-300 rounded-2xl font-bold text-slate-700 flex items-center justify-center gap-3 transition-all shadow-xs"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Lanjutkan dengan Google
          </button>

          <button
            onClick={() => handleSocialAuth("facebook")}
            disabled={loading}
            className="w-full py-3.5 px-4 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xs"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Lanjutkan dengan Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-200 w-full" />
          <span className="bg-white px-3 text-xs font-bold text-slate-400 uppercase tracking-wider absolute">
            atau Email
          </span>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold text-center">
            {error}
          </div>
        )}

        {/* Email & Password Form */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-black uppercase text-slate-500 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu"
                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl font-medium focus:outline-hidden focus:border-[#1cb0f6]"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-black uppercase text-slate-500 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl font-medium focus:outline-hidden focus:border-[#1cb0f6]"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-slate-500 mb-1">
              Kata Sandi
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl font-medium focus:outline-hidden focus:border-[#1cb0f6]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-3d btn-primary-3d w-full py-4 text-base tracking-wider flex items-center justify-center gap-2 mt-2"
          >
            {loading ? "Memproses..." : isLogin ? "Masuk Sekarang" : "Daftar Akun"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Toggle Login / Register */}
        <div className="text-center pt-2">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs font-bold text-[#1cb0f6] hover:underline"
          >
            {isLogin
              ? "Belum punya akun? Daftar gratis di sini"
              : "Sudah punya akun? Masuk di sini"}
          </button>
        </div>
      </div>
    </div>
  );
}
