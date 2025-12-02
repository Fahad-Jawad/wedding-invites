'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  User,
  MessageSquare,
  Check,
  X,
  ChevronDown,
  Sparkles,
  Star,
  Music,
  Camera,
  Cake,
  Wine,
  Gift,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function Template4() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [attendance, setAttendance] = useState(null);

  // Wedding date
  const weddingDate = new Date('2026-09-12T17:00:00');

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ ...formData, attendance });
    alert(`Thank you ${formData.name}! Your RSVP has been received.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating flowers */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 opacity-20 blur-sm"></div>
          </motion.div>
        ))}
      </div>

      {/* Hero Section - Innovative Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-300/40 to-pink-300/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/40 to-rose-300/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl"
          />
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Decorative line with dots */}
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500"
                />
                <motion.div
                  className="h-px flex-grow max-w-[100px] bg-gradient-to-r from-rose-500/50 to-transparent"
                  animate={{ scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="text-rose-600 text-sm tracking-[0.3em] uppercase font-semibold">September 12, 2026</span>
              </div>

              {/* Names - Vertical Stack */}
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-none">
                    <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                      Sophia
                    </span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="flex items-center gap-4 pl-4"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-2 border-dashed border-rose-300 rounded-full"
                    />
                    <Heart className="w-6 h-6 text-rose-500 fill-rose-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="h-px w-16 bg-gradient-to-r from-rose-300 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-none">
                    <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                      Ethan
                    </span>
                  </h1>
                </motion.div>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-xl md:text-2xl text-gray-700 font-light max-w-lg leading-relaxed"
              >
                Together with their families, invite you to celebrate the beginning of their forever
              </motion.p>

              {/* Event Details - Minimal Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4"
              >
                <div className="group cursor-pointer">
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl px-6 py-4 border border-rose-200/50 hover:border-rose-300 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-rose-600 uppercase tracking-wider font-semibold">Time</p>
                        <p className="text-gray-800 font-semibold">5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl px-6 py-4 border border-orange-200/50 hover:border-orange-300 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-orange-600 uppercase tracking-wider font-semibold">Venue</p>
                        <p className="text-gray-800 font-semibold">Crystal Garden</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Decorative Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="relative w-full h-[450px] lg:h-[650px] flex items-center justify-center">
                {/* Central decorative element */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                    {/* Outer ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-rose-200/40 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    {/* Middle ring */}
                    <motion.div
                      className="absolute inset-8 md:inset-10 border-2 border-pink-200/40 rounded-full"
                      animate={{ scale: [1.1, 1, 1.1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    {/* Inner ring */}
                    <motion.div
                      className="absolute inset-16 md:inset-20 border-2 border-orange-200/40 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Central Image */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="relative w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56">
                        {/* Decorative border around image */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-3 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 p-[2px]"
                        >
                          <div className="w-full h-full bg-rose-50 rounded-full"></div>
                        </motion.div>

                        {/* Image */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&q=80"
                            alt="Wedding couple"
                            className="w-full h-full object-cover"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rose-900/20"></div>
                        </div>

                        {/* Small hearts around image */}
                        {[...Array(4)].map((_, i) => {
                          const angle = (i * 90) + 45;
                          const radius = 105;
                          const x = Math.cos((angle * Math.PI) / 180) * radius;
                          const y = Math.sin((angle * Math.PI) / 180) * radius;

                          return (
                            <motion.div
                              key={`img-heart-${i}`}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 1, 0.6]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.5
                              }}
                              className="absolute top-1/2 left-1/2"
                              style={{
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                              }}
                            >
                              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Floating elements around circle */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 360) / 12;
                      const radius = 160;
                      const radiusLg = 210;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;

                      return (
                        <motion.div
                          key={`circle-element-${i}`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="absolute top-1/2 left-1/2 lg:hidden"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                          }}
                        >
                          {i % 3 === 0 ? (
                            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                          ) : i % 3 === 1 ? (
                            <Sparkles className="w-4 h-4 text-pink-400" />
                          ) : (
                            <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                          )}
                        </motion.div>
                      );
                    })}

                    {/* Floating elements for large screens */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 360) / 12;
                      const radiusLg = 210;
                      const x = Math.cos((angle * Math.PI) / 180) * radiusLg;
                      const y = Math.sin((angle * Math.PI) / 180) * radiusLg;

                      return (
                        <motion.div
                          key={`circle-element-lg-${i}`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="absolute top-1/2 left-1/2 hidden lg:block"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                          }}
                        >
                          {i % 3 === 0 ? (
                            <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
                          ) : i % 3 === 1 ? (
                            <Sparkles className="w-5 h-5 text-pink-400" />
                          ) : (
                            <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Corner decorative elements - Hidden on mobile */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-0 right-0 hidden md:block"
                >
                  <div className="text-5xl lg:text-6xl opacity-20">🌸</div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-0 left-0 hidden md:block"
                >
                  <div className="text-5xl lg:text-6xl opacity-20">🌹</div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/4 -right-8 hidden lg:block"
                >
                  <Sparkles className="w-12 h-12 text-rose-300/40" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-5 h-5 text-rose-400" />
          </div>
        </motion.div>
      </section>

      {/* Countdown Section - Light Modern */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Star className="w-8 h-8 text-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-rose-700 to-orange-700 bg-clip-text text-transparent mb-4">
              Counting Down to Forever
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Days', gradient: 'from-rose-500 to-pink-500', icon: <Heart className="w-5 h-5" /> },
              { value: timeLeft.hours, label: 'Hours', gradient: 'from-pink-500 to-orange-500', icon: <Clock className="w-5 h-5" /> },
              { value: timeLeft.minutes, label: 'Minutes', gradient: 'from-orange-500 to-rose-500', icon: <Star className="w-5 h-5" /> },
              { value: timeLeft.seconds, label: 'Seconds', gradient: 'from-rose-500 to-pink-500', icon: <Sparkles className="w-5 h-5" /> }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all">
                  {/* Icon badge */}
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>

                  {/* Value */}
                  <div className={`text-5xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-2`}>
                    {String(item.value).padStart(2, '0')}
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 text-sm uppercase tracking-widest font-medium">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Modern Light */}
      <section className="relative py-24 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-rose-700 to-orange-700 bg-clip-text text-transparent mb-4">
              Our Love Story
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg italic">A journey of two hearts becoming one</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-rose-300 to-orange-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80"
                    alt="Our Story"
                    className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  title: 'First Meeting',
                  description: 'Our paths crossed at a summer garden party, where a conversation about favorite books turned into hours of laughter and connection.',
                  icon: <Heart className="w-5 h-5" />,
                  color: 'rose'
                },
                {
                  title: 'Falling in Love',
                  description: 'Through countless coffee dates, long walks, and shared dreams, we discovered that together, we were home.',
                  icon: <Sparkles className="w-5 h-5" />,
                  color: 'pink'
                },
                {
                  title: 'The Proposal',
                  description: 'Under a starlit sky by the ocean, Ethan asked the most important question, and Sophia said yes to forever.',
                  icon: <Star className="w-5 h-5" />,
                  color: 'orange'
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4"
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${
                    story.color === 'rose' ? 'from-rose-500 to-pink-500' :
                    story.color === 'pink' ? 'from-pink-500 to-orange-500' :
                    'from-orange-500 to-rose-500'
                  } rounded-2xl flex items-center justify-center text-white`}>
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-gray-800 mb-2">{story.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Horizontal Carousel Design */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white"></div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`float-deco-${i}`}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5
              }}
              style={{
                position: 'absolute',
                left: `${15 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-rose-400/30 to-pink-400/30 blur-sm"></div>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-rose-300 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-rose-500" />
                </div>
              </motion.div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-pink-500" />
              </motion.div>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif mb-4">
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Our Day's Journey
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From "I do" to the dance floor - every moment crafted with love
            </p>
          </motion.div>

          {/* Timeline Cards - Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="relative">
            {/* Connecting path - Desktop only */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
              <motion.div
                className="h-full bg-gradient-to-r from-rose-200 via-pink-200 to-orange-200 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />

              {/* Animated dots along the path */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`path-dot-${i}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 * i, type: "spring" }}
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${i * 25}%` }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(251, 113, 133, 0.4)",
                        "0 0 0 10px rgba(251, 113, 133, 0)",
                        "0 0 0 0 rgba(251, 113, 133, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-400 to-pink-400"
                  />
                </motion.div>
              ))}
            </div>

            {/* Timeline Events */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {[
                {
                  time: '5:00 PM',
                  title: 'Ceremony',
                  description: 'Exchange of vows',
                  icon: <Heart className="w-6 h-6" />,
                  gradient: 'from-rose-500 to-pink-500',
                  emoji: '💍',
                  iconBg: 'bg-rose-50',
                  iconColor: 'text-rose-600'
                },
                {
                  time: '6:00 PM',
                  title: 'Cocktails',
                  description: 'Drinks & canapés',
                  icon: <Wine className="w-6 h-6" />,
                  gradient: 'from-pink-500 to-purple-500',
                  emoji: '🥂',
                  iconBg: 'bg-pink-50',
                  iconColor: 'text-pink-600'
                },
                {
                  time: '7:00 PM',
                  title: 'Dinner',
                  description: 'Fine dining experience',
                  icon: <Cake className="w-6 h-6" />,
                  gradient: 'from-purple-500 to-orange-500',
                  emoji: '🍰',
                  iconBg: 'bg-purple-50',
                  iconColor: 'text-purple-600'
                },
                {
                  time: '8:30 PM',
                  title: 'First Dance',
                  description: 'As husband & wife',
                  icon: <Music className="w-6 h-6" />,
                  gradient: 'from-orange-500 to-rose-500',
                  emoji: '💃',
                  iconBg: 'bg-orange-50',
                  iconColor: 'text-orange-600'
                },
                {
                  time: '9:00 PM',
                  title: 'Celebration',
                  description: 'Dance all night',
                  icon: <Camera className="w-6 h-6" />,
                  gradient: 'from-rose-500 to-pink-500',
                  emoji: '🎉',
                  iconBg: 'bg-rose-50',
                  iconColor: 'text-rose-600'
                }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-white overflow-hidden rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all h-full"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                    {/* Time badge */}
                    <div className="relative mb-4">
                      <motion.div
                        className={`inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${event.gradient} rounded-full text-white text-sm font-bold shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-4">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-3 border border-dashed border-gray-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <div className={`relative w-16 h-16 ${event.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <div className={event.iconColor}>
                          {event.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-rose-600 group-hover:to-pink-600 transition-all">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Decorative emoji */}
                    <motion.div
                      className="absolute -top-3 -right-3 text-4xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        rotate: [-10, 10, -10],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {event.emoji}
                    </motion.div>

                    {/* Bottom decorative line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient} rounded-b-3xl`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    />
                  </motion.div>

                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom decorative text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 italic flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              Every moment is a memory in the making
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue Section - Beautiful Cards */}
      <section className="relative py-24 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-rose-700 to-orange-700 bg-clip-text text-transparent mb-4">
              Where Dreams Unite
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg italic">The setting for our forever</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-2 bg-gradient-to-br from-rose-300 to-pink-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/50 h-full">
                  <div className="relative h-64">
                    <img
                      src="https://images.unsplash.com/photo-1519167758481-83f29da8fd22?w=800&q=80"
                      alt="Ceremony"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Ceremony
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-gray-800 mb-4 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-rose-500" />
                      The Crystal Garden
                    </h3>
                    <p className="text-gray-600 mb-4">
                      789 Enchanted Avenue<br />
                      Moonlight Bay, CA 90210
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 mb-6">
                      <Clock className="w-5 h-5 text-rose-500" />
                      <span>5:00 PM</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                      View on Map
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reception */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-300 to-rose-300 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/50 h-full">
                  <div className="relative h-64">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
                      alt="Reception"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Reception
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-gray-800 mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-orange-500" />
                      The Crystal Ballroom
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Same Venue<br />
                      Moonlight Bay, CA 90210
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 mb-6">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span>6:00 PM - Midnight</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                      View on Map
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RSVP Section - Clean Modern */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Star className="w-8 h-8 text-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-rose-700 to-orange-700 bg-clip-text text-transparent mb-4">
              Join Our Celebration
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg italic">Please respond by August 1st, 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-300 to-orange-300 rounded-[2.5rem] blur-2xl opacity-20"></div>
              <form onSubmit={handleSubmit} className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                      <User className="w-5 h-5 text-rose-500" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-rose-200 focus:border-rose-400 focus:outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Attendance */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                      Will you be joining us?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setAttendance('attending')}
                        className={`py-5 rounded-2xl font-semibold transition-all ${
                          attendance === 'attending'
                            ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white/50 border border-rose-200 text-gray-700 hover:border-rose-400'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5" />
                          <span>Joyfully Accept</span>
                        </div>
                      </motion.button>

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setAttendance('not-attending')}
                        className={`py-5 rounded-2xl font-semibold transition-all ${
                          attendance === 'not-attending'
                            ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg'
                            : 'bg-white/50 border border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5" />
                          <span>Regretfully Decline</span>
                        </div>
                      </motion.button>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                      <MessageSquare className="w-5 h-5 text-rose-500" />
                      Message & Wishes
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-rose-200 focus:border-rose-400 focus:outline-none transition-all resize-none"
                      placeholder="Share your heartfelt wishes with us..."
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Heart className="w-6 h-6 fill-white" />
                      <span>Send RSVP</span>
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Elegant */}
      <footer className="relative py-16 px-6 bg-white/50 border-t border-rose-100">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
            </div>

            <h3 className="text-2xl font-serif text-gray-800 mb-3 italic">
              We can't wait to celebrate with you
            </h3>

            <p className="text-xl text-gray-700 mb-6">
              Sophia & Ethan
            </p>

            <p className="text-gray-600 mb-8">
              September 12, 2026 • The Crystal Garden
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-rose-600" />
              </div>
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-rose-600" />
              </div>
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center hover:bg-rose-200 transition-colors cursor-pointer">
                <Gift className="w-5 h-5 text-rose-600" />
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              With love and gratitude ✨
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
