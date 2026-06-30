'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { signupFormSchema } from '@/lib/schemas';
import { Mail, Phone, Lock, User, ArrowRight, Chrome } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [otp, setOtp] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setUserEmail(data.email);

      // Send OTP
      const otpResponse = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, action: 'send' }),
      });

      if (!otpResponse.ok) throw new Error('Failed to send OTP');

      setShowOTP(true);
      toast.success('OTP sent to your email');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerification = async () => {
    if (otp.length !== 6) {
      toast.error('Please enter 6-digit OTP');
      return;
    }

    try {
      setIsLoading(true);
      const otpResponse = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, otp, action: 'verify' }),
      });

      if (!otpResponse.ok) throw new Error('Invalid OTP');

      // Save user data
      localStorage.setItem('user', JSON.stringify({ email: userEmail }));
      toast.success('Account created successfully!');
      router.push('/');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    // Google OAuth implementation
    toast.info('Google signup coming soon!');
  };

  const handlePhoneSignup = () => {
    // Phone authentication
    toast.info('Phone signup coming soon!');
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-light">
        <div className="max-w-md mx-auto px-4 py-20">
          <div className="glass rounded-2xl p-8 shadow-2xl">
            <h1 className="text-3xl font-bold gradient-text mb-2 text-center">Create Account</h1>
            <p className="text-center text-foreground/70 mb-8">Join The Universe Computer Institute</p>

            {!showOTP ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="form-label flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                    {...register('name')}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

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

                {/* Phone Field */}
                <div>
                  <label className="form-label flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="form-input"
                    {...register('phone')}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
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

                {/* Confirm Password Field */}
                <div>
                  <label className="form-label flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="form-input"
                    {...register('confirmPassword')}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="button-gradient w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? 'Verifying...' : 'Continue'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-sky-50 dark:bg-sky-950 p-4 rounded-lg text-center">
                  <p className="text-sm text-foreground/70">OTP sent to</p>
                  <p className="font-semibold text-foreground">{userEmail}</p>
                </div>

                <div>
                  <label className="form-label">Enter 6-Digit OTP</label>
                  <input
                    type="text"
                    placeholder="000000"
                    maxLength={6}
                    className="form-input text-center text-2xl tracking-widest"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  />
                </div>

                <button
                  onClick={handleOTPVerification}
                  disabled={isLoading || otp.length !== 6}
                  className="button-gradient w-full disabled:opacity-50"
                >
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </button>

                <button
                  onClick={() => setShowOTP(false)}
                  className="w-full text-sky-600 dark:text-sky-400 hover:underline"
                >
                  Back to form
                </button>
              </div>
            )}

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-main"></div>
              <span className="text-sm text-foreground/50">OR</span>
              <div className="flex-1 h-px bg-gradient-main"></div>
            </div>

            {/* Social Signup */}
            <div className="space-y-3">
              <button
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-sky-200 dark:border-sky-700 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors font-semibold"
              >
                <Chrome className="w-5 h-5" />
                Sign up with Google
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center mt-8 text-foreground/70">
              Already have an account?{' '}
              <Link href="/auth/login" className="link-primary">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
