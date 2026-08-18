'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Lock, Mail, Loader2, AlertCircle, ArrowRight, Building2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@yoffices.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Invalid credentials');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0E12] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-[#14171F] border border-[#222634] rounded-2xl p-8 shadow-2xl relative z-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#C91D24] text-white flex items-center justify-center mx-auto shadow-lg">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-white font-sans">Yoffices Admin Portal</h1>
          <p className="text-xs text-gray-400">Single Unified Control Center & CMS</p>
        </div>

        {error && (
          <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2.5 text-xs text-red-400 font-medium animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@yoffices.com"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#1B202B] border border-[#2A3040] focus:border-[#C91D24] focus:ring-1 focus:ring-[#C91D24] text-sm text-white outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#1B202B] border border-[#2A3040] focus:border-[#C91D24] focus:ring-1 focus:ring-[#C91D24] text-sm text-white outline-none transition-all"
              />
            </div>
          </div>

          <div className="p-3 bg-[#1B202B] rounded-xl border border-[#2A3040] text-[11px] text-gray-400 space-y-1">
            <p className="font-semibold text-gray-300">Default Super Admin Credentials:</p>
            <p>Email: <code className="text-[#C5A880]">admin@yoffices.com</code></p>
            <p>Password: <code className="text-[#C5A880]">admin123</code></p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Secure Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <a href="/" className="text-xs text-gray-400 hover:text-white transition-colors">
            ← Return to public website
          </a>
        </div>
      </div>
    </div>
  );
}
