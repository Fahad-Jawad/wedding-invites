'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Heart,
  Users,
  FileText,
  LogOut,
  Menu,
  X,
  User,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardSidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', label: 'My Templates', icon: FileText },
    { href: '/dashboard/guests', label: 'Guest List', icon: Users },
  ];

  const isActive = (path) => pathname === path;

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  const NavContent = () => (
    <>
      {/* User Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-primary text-white font-bold text-lg">
            {session?.user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 truncate">
              {session?.user?.name || 'User'}
            </p>
            <p className="text-sm text-gray-600 truncate">
              {session?.user?.email || ''}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const active = isActive(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
                ${active
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-purple-50'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sign Out Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-purple-50 transition-all"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-gray-800">Wedding Invites</h1>
            </div>
          </Link>
        </div>
        <NavContent />
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="font-serif font-bold text-xl text-gray-800">Wedding Invites</h1>
                  </div>
                </Link>
              </div>
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
