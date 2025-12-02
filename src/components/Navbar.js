'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Sparkles, LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Templates', href: '#templates' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-purple-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200"
            >
              <Heart className="w-7 h-7 text-white fill-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                WeddingInvites
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Create magical moments</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="flex items-center gap-2 px-6 py-3 text-purple-600 hover:text-purple-700 font-semibold transition-all hover:bg-purple-50 rounded-xl"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </Link>
            <Link
              href="/register"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 px-6 py-3 text-purple-600 hover:text-purple-700 font-semibold transition-all hover:bg-purple-50 rounded-xl border-2 border-purple-200"
                  >
                    <LogIn className="w-5 h-5" />
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-200"
                  >
                    <Sparkles className="w-5 h-5" />
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
