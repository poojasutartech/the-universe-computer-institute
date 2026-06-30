'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, LogOut, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    // { href: '/gallery', label: 'Gallery' },
    // { href: '/career', label: 'Career' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/contact', label: 'Contact' },
  ];

  const hiddenLinks = [
    { href: '/certifications', label: 'Certifications' },
    { href: '/feedback', label: 'Feedback' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-sky-200 dark:border-sky-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
               <Link href="/" className="flex flex-col items-start gap-3">
                <Image src="/images/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
              </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-main group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle, Auth & Mobile Menu */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-sky-200 dark:hover:bg-sky-900 transition-colors duration-200"
                title="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-sky-600" />
                )}
              </button>
            )}

            {/* Auth Buttons */}
            {/* {mounted && (
              isLoggedIn ? (
                <div className="hidden md:flex items-center gap-3">
                  <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-lg text-foreground hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors">
                    <User className="w-4 h-4" />
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-3">
                  <Link href="/auth/login" className="button-outline text-sm">
                    Login
                  </Link>
                  <Link href="/auth/signup" className="button-gradient text-sm">
                    Sign Up
                  </Link>
                </div>
              )
            )} */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-sky-200 dark:hover:bg-sky-900 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-sky-200 dark:border-sky-800 animate-in fade-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-lg text-foreground/70 hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {mounted && !isLoggedIn && (
              <div className="flex gap-2 px-4 py-2 border-t border-sky-200 dark:border-sky-800">
                <Link href="/auth/login" className="flex-1 text-center button-outline text-sm">
                  Login
                </Link>
                <Link href="/auth/signup" className="flex-1 text-center button-gradient text-sm">
                  Sign Up
                </Link>
              </div>
            )}
            {mounted && isLoggedIn && (
              <button
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="w-full px-4 py-2 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg transition-colors font-medium"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
