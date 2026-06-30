'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { loginFormSchema } from '@/lib/schemas';
import { Mail, Lock, ArrowRight, Chrome } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      // Simulate login - in production, verify with backend
      localStorage.setItem('user', JSON.stringify(data));
      toast.success('Logged in successfully!');
      router.push('/');
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    toast.info('Google login coming soon!');
  };

  const handlePhoneLogin = () => {
    toast.info('Phone login coming soon!');
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-light">
        <div className="max-w-md mx-auto px-4 py-20">
          <div className="glass rounded-2xl p-8 shadow-2xl">
            <h1 className="text-3xl font-bold gradient-text mb-2 text-center">Welcome Back</h1>
            <p className="text-center text-foreground/70 mb-8">Login to your account</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="form-input"
                  {...register('email')}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="form-input"
                  {...register('password')}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="text-foreground/70">Remember me</span>
                </label>
                <Link href="#" className="link-primary">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="button-gradient w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? 'Logging in...' : 'Login'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-main"></div>
              <span className="text-sm text-foreground/50">OR</span>
              <div className="flex-1 h-px bg-gradient-main"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-sky-200 dark:border-sky-700 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors font-semibold"
              >
                <Chrome className="w-5 h-5" />
                Login with Google
              </button>
            </div>

            {/* Signup Link */}
            <p className="text-center mt-8 text-foreground/70">
              Don&apos;t have an account?{' '}
              <Link href="/auth/signup" className="link-primary">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
