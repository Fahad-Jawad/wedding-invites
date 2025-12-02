'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Sparkles,
  Zap,
  Palette,
  Users,
  Share2,
  CheckCircle,
  ArrowRight,
  Star,
  MessageSquare,
  Smartphone,
  Lock,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function LandingPage() {

  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Beautiful Templates',
      description: 'Choose from stunning, professionally designed templates that match your wedding theme perfectly.',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Setup',
      description: 'Create your wedding invitation in minutes with our intuitive drag-and-drop editor.',
      gradient: 'from-violet-500 to-indigo-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guest Management',
      description: 'Easily manage your guest list, track RSVPs, and send personalized invitations.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Easy Sharing',
      description: 'Share your invitation via email, social media, or generate a unique link for each guest.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Responsive',
      description: 'Your invitations look stunning on all devices - desktop, tablet, and mobile.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and secure. Control who sees your invitation with privacy settings.',
      gradient: 'from-rose-500 to-purple-500',
    },
  ];

  const templates = [
    {
      name: 'Classic Romance',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      theme: 'Elegant & Timeless',
      color: 'from-rose-400 to-pink-500',
    },
    {
      name: 'Modern Elegance',
      image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80',
      theme: 'Sleek & Sophisticated',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      name: 'Vintage Floral',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
      theme: 'Botanical & Charming',
      color: 'from-amber-400 to-orange-500',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Your Template',
      description: 'Browse our collection of beautiful wedding invitation templates and select your favorite. Each template is professionally designed with stunning layouts and animations.',
      icon: <Palette className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      number: '02',
      title: 'Customize Your Details',
      description: 'Add your wedding details, photos, and personalize colors to match your theme. Our intuitive editor makes customization a breeze.',
      icon: <MessageSquare className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
      gradient: 'from-violet-500 to-indigo-500',
    },
    {
      number: '03',
      title: 'Add Your Guests',
      description: 'Import or manually add your guest list with names, emails, and contact information. Organize and manage your guests effortlessly.',
      icon: <Users className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      number: '04',
      title: 'Share & Track',
      description: 'Send invitations and track RSVPs in real-time from your personalized dashboard. Get instant notifications when guests respond.',
      icon: <Share2 className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const testimonials = [
    {
      name: 'Emma & James',
      text: 'This platform made our wedding invitations so easy! The templates are gorgeous and our guests loved the interactive experience.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=150&q=80',
      rating: 5,
    },
    {
      name: 'Sarah & Michael',
      text: 'We saved so much time and money compared to traditional invitations. The RSVP tracking feature is a game-changer!',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=150&q=80',
      rating: 5,
    },
    {
      name: 'Olivia & David',
      text: 'The customization options are endless! We created a unique invitation that perfectly represented our love story.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=150&q=80',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      <Navbar />

      {/* Floating Wedding Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating hearts */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
        />

        {/* Floating heart icons */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 right-1/4"
        >
          <Heart className="w-8 h-8 text-rose-300/30 fill-rose-300/30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -15, 0],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 left-1/3"
        >
          <Heart className="w-6 h-6 text-purple-300/30 fill-purple-300/30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/3 right-1/3"
        >
          <Sparkles className="w-7 h-7 text-violet-300/30" />
        </motion.div>
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center px-6 py-32 overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%238B5CF6' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}></div>
        </div>

        {/* Decorative rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 border-2 border-purple-200/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 border-2 border-rose-200/30 rounded-full"
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 relative"
            >
              {/* Decorative element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-16 -left-16 w-32 h-32 opacity-10"
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-50 via-purple-50 to-violet-50 rounded-full text-purple-700 font-semibold text-sm border-2 border-purple-200/50 shadow-lg shadow-purple-100">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  The Future of Wedding Invitations
                  <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Create Magical
                </span>
                <br />
                <span className="text-gray-800">Wedding Invitations</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="inline-block ml-3"
                >
                  <Heart className="w-12 h-12 text-rose-500 fill-rose-500 inline" />
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Design stunning, personalized wedding invitations in minutes. Share them instantly with your guests and track RSVPs effortlessly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/register"
                  className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-300 hover:shadow-3xl hover:shadow-purple-400 transition-all hover:scale-105 overflow-hidden"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                  <Sparkles className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Start Creating Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
                <a
                  href="#templates"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-gray-700 rounded-2xl font-bold text-lg shadow-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all hover:scale-105"
                >
                  View Templates
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Free forever plan
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Cancel anytime
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Hero Image with Wedding Decoratives */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Decorative frame elements */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-br from-purple-200 via-violet-200 to-pink-200 rounded-[2.5rem] blur-2xl opacity-30"
              />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-300/50 border-8 border-white ring-4 ring-purple-100">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
                  alt="Wedding invitation preview"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>

                {/* Corner decoratives */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-8 h-8 text-white/80" />
                  </motion.div>
                </div>
              </div>

              {/* Floating stats cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 hidden lg:block border-2 border-purple-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-base">150+ RSVPs</p>
                    <p className="text-xs text-gray-500">Received today</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-2xl p-5 hidden lg:block border-2 border-rose-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-white fill-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-base">98% Happy</p>
                    <p className="text-xs text-gray-500">Couples love it</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating hearts around image */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/4 -right-8 hidden lg:block"
              >
                <Heart className="w-10 h-10 text-rose-300/60 fill-rose-300/60" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 -left-8 hidden lg:block"
              >
                <Heart className="w-8 h-8 text-purple-300/60 fill-purple-300/60" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Wedding ring decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-64 h-64 border border-purple-200/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-80 h-80 border border-rose-200/20 rounded-full"
        />

        {/* Floating hearts */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4"
        >
          <Heart className="w-12 h-12 text-purple-200/40 fill-purple-200/40" />
        </motion.div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full text-purple-700 font-semibold text-sm mb-6">
              <Zap className="w-4 h-4" />
              Powerful Features
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Everything You Need for{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Perfect Invitations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to delivery, we've got you covered with features that make wedding planning a breeze.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover heart decoration */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity"
                >
                  <Heart className="w-8 h-8 text-purple-500 fill-purple-500" />
                </motion.div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-32 px-6 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50z' fill='%238B5CF6' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}></div>
        </div>

        {/* Floating sparkles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-1/4"
        >
          <Sparkles className="w-10 h-10 text-purple-300/30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-1/4"
        >
          <Sparkles className="w-8 h-8 text-rose-300/30" />
        </motion.div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full text-purple-700 font-semibold text-sm mb-6">
              <Palette className="w-4 h-4" />
              Beautiful Designs
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Perfect Template
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionally designed templates that capture the essence of your love story.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${template.color} text-white text-sm font-semibold rounded-full mb-3`}>
                      {template.theme}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">{template.name}</h3>
                    <Link
                      href={`/template${index + 1}`}
                      className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all"
                    >
                      Preview Template
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/register"
              className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-purple-300 hover:shadow-3xl hover:scale-105 transition-all"
            >
              <Sparkles className="w-6 h-6" />
              Start Designing Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Alternating Layout */}
      <section id="how-it-works" className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-20"></div>

        {/* Floating wedding bells/hearts */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 20, 0],
          }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-1/4 left-1/4"
        >
          <Heart className="w-14 h-14 text-rose-200/30 fill-rose-200/30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 35, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-1/3 right-1/3"
        >
          <Sparkles className="w-12 h-12 text-violet-200/30" />
        </motion.div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full text-purple-700 font-semibold text-sm mb-6">
              <TrendingUp className="w-4 h-4" />
              Simple Process
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Create Your Invitation in{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                4 Easy Steps
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From template to guest, we make it incredibly simple to create and share your wedding invitations.
            </p>
          </motion.div>

          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  >
                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                      {/* Floating number badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                        className={`absolute ${index % 2 === 0 ? '-right-6 -top-6' : '-left-6 -top-6'} w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12`}
                      >
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg text-white`}>
                      {step.icon}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center gap-3 text-purple-600 font-semibold text-lg group cursor-pointer"
                    >
                      Learn more
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Connecting line between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} bottom-0 w-0.5 h-32 bg-gradient-to-b ${step.gradient} origin-top transform translate-y-full`}
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br ${step.gradient} rounded-full`}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Wedding Theme */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-purple-50/50 to-rose-50/30 relative overflow-hidden">
        {/* Elegant background elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L50 30 L70 30 L55 42 L60 62 L40 50 L20 62 L25 42 L10 30 L30 30 Z' fill='%23a855f7' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}></div>
        </div>

        {/* Floating romantic elements */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 right-20"
        >
          <div className="w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </motion.div>
        <motion.div
          animate={{
            y: [0, 40, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 left-20"
        >
          <div className="w-52 h-52 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 rounded-full text-purple-700 font-semibold text-sm border-2 border-rose-200/50 shadow-lg">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                Loved by Couples
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Love Stories from{' '}
              <span className="bg-gradient-to-r from-rose-500 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                Real Couples
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of happy couples who created their dream invitations and started their journey with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Decorative corner hearts */}
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute -top-3 -right-3 z-20"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                </motion.div>

                {/* Card with gradient border effect */}
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full"
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-[2rem] blur-sm opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

                  {/* Main card */}
                  <div className="relative bg-white rounded-[2rem] p-8 shadow-xl border-2 border-gray-100 group-hover:border-purple-200 transition-all h-full flex flex-col">
                    {/* Quote decoration */}
                    <div className="absolute top-6 left-6 text-purple-200/40 text-6xl font-serif leading-none">"</div>

                    {/* Star rating with animation */}
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 leading-relaxed mb-8 italic relative z-10 flex-grow text-base">
                      "{testimonial.text}"
                    </p>

                    {/* Couple info */}
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="relative">
                        {/* Image with decorative ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full opacity-75 blur-sm"
                        />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-3 border-white"
                        />
                        {/* Small heart badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center border-2 border-white">
                          <Heart className="w-3 h-3 text-white fill-white" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                        <p className="text-sm text-purple-600 font-medium flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Happy Couple
                        </p>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Floating sparkles on hover */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100"
                >
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-20 flex items-center justify-center gap-4"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-32 px-6 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}></div>
        </div>

        {/* Floating hearts and sparkles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20"
        >
          <Heart className="w-16 h-16 text-white/20 fill-white/20" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-20"
        >
          <Sparkles className="w-14 h-14 text-white/20" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 right-1/4"
        >
          <Heart className="w-10 h-10 text-white/15 fill-white/15" />
        </motion.div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Create Your{' '}
              <span className="block mt-2">Dream Invitation?</span>
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of couples who have already created stunning wedding invitations. Start for free today!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/register"
                className="group flex items-center gap-3 px-10 py-6 bg-white text-purple-600 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
              >
                <Sparkles className="w-6 h-6" />
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-3 px-10 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-xl border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Sign In
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Unlimited invitations
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <h3 className="text-xl font-bold text-white">WeddingInvites</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Creating beautiful wedding invitations for couples around the world.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#templates" className="hover:text-purple-400 transition-colors">Templates</a></li>
                <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 WeddingInvites. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <Heart className="w-4 h-4 text-purple-400 fill-purple-400" />
              <span className="text-sm">Made with love for couples everywhere</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
