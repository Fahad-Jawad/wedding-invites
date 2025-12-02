'use client';

import { Heart, Sparkles, Edit, Eye, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  const features = [
    {
      icon: <Edit className="w-8 h-8" />,
      title: 'Easy Editing',
      description: 'Customize every detail of your invitation with our intuitive editor',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Live Preview',
      description: 'See your changes in real-time as you edit',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Share with Guests',
      description: 'Get a shareable link to send to your wedding guests',
    },
  ];

  const templates = [
    { name: 'Classic Romance', color: 'from-rose-400 to-pink-400' },
    { name: 'Modern Elegance', color: 'from-emerald-400 to-teal-400' },
    { name: 'Vintage Floral', color: 'from-amber-400 to-pink-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-800">Wedding Invites</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-lg font-semibold hover:from-rose-500 hover:to-pink-500 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mb-8">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-serif font-bold text-gray-800 mb-6">
              Create Beautiful<br />Wedding Invitations
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose from our stunning templates, customize every detail, and share your special day with loved ones
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-xl font-bold text-lg hover:from-rose-500 hover:to-pink-500 transition-all shadow-xl hover:shadow-2xl"
            >
              <Heart className="w-6 h-6" />
              Start Creating
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Why Choose Wedding Invites?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mb-4 text-rose-500">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Beautiful Templates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`h-48 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
                  <Heart className="w-20 h-20 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 text-center">{template.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-400 to-pink-400">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Create Your Invitation?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of couples who trust Wedding Invites for their special day
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-500 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 Wedding Invites. Made with ❤️ for couples everywhere</p>
        </div>
      </footer>
    </div>
  );
}
