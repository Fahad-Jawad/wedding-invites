'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Clock, MapPin, User, MessageSquare, Check, X, Map } from 'lucide-react';
import { FloralCorner, FloralDivider } from '@/components/FloralDecor';
import { RingsIcon, HeartRingsIcon, ChampagneIcon, CakeIcon, RoseDecoration, FloralBouquet } from '@/components/WeddingDecorations';
import LoadingTemplate1 from '@/components/LoadingTemplate1';

export default function Template1() {
  const [isLoading, setIsLoading] = useState(true);

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

  // Show loading screen on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Wedding date - Change this to your actual wedding date
  const weddingDate = new Date('2026-06-15T16:00:00');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, attendance });
    alert(`Thank you ${formData.name}! Your RSVP has been received.`);
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingTemplate1 groomInitial="J" brideInitial="S" />;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Better Wedding Themed Sticky Decorations */}
      <div className="fixed top-10 left-10 pointer-events-none z-50">
        <RoseDecoration className="w-40 h-40" position="left" />
      </div>
      <div className="fixed top-10 right-10 pointer-events-none z-50">
        <RoseDecoration className="w-40 h-40" position="right" />
      </div>
      <div className="fixed bottom-10 left-10 pointer-events-none z-50">
        <FloralBouquet className="w-32 h-32" />
      </div>
      <div className="fixed bottom-10 right-10 pointer-events-none z-50">
        <FloralBouquet className="w-32 h-32" />
      </div>

      {/* Hero Section with Better Spacing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 py-20">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-rose-50/80 to-white/90 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80")',
            }}
          ></div>
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-white/40 z-10"></div>
        </div>

        {/* Decorative Corners */}
        <FloralCorner position="top-left" className="opacity-50 z-20" />
        <FloralCorner position="top-right" className="opacity-50 z-20" />

        <motion.div
          className="container mx-auto px-6 md:px-12 text-center z-20 relative max-w-6xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-block mb-10">
              <div className="text-rose-400 text-sm tracking-[0.3em] uppercase font-light mb-4 flex items-center gap-3 justify-center">
                <div className="w-8 h-px bg-rose-300"></div>
                Save The Date
                <div className="w-8 h-px bg-rose-300"></div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="font-serif text-7xl md:text-9xl lg:text-[10rem] text-gray-800 mb-6 leading-tight drop-shadow-sm px-4">
              Sarah <span className="text-rose-400 font-light italic">&</span> James
            </h1>
          </motion.div>

          <motion.div
            className="flex justify-center my-12"
            variants={fadeInUp}
          >
            <div className="relative">
              <Heart className="w-20 h-20 text-rose-400 fill-rose-400 drop-shadow-lg" />
              <div className="absolute inset-0 w-20 h-20 animate-ping">
                <Heart className="w-20 h-20 text-rose-300 fill-rose-300 opacity-40" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-14 px-4">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light italic max-w-4xl mx-auto leading-relaxed">
              Together with their families, joyfully invite you to celebrate their union
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-16">
            <div className="inline-flex items-center gap-6 bg-white/95 backdrop-blur-md px-5 md:px-10 md:px-14 py-7 rounded-full shadow-2xl border border-rose-100">
              <Calendar className="w-8 h-8 text-rose-400" />
              <div className="text-left">
                <div className="text-sm text-gray-500 uppercase tracking-wider">Wedding Date</div>
                <div className="text-xl md:text-2xl font-semibold text-gray-800">June 15, 2026 • 4:00 PM</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            variants={fadeInUp}
          >
            <FloralDivider />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center gap-2 text-rose-400">
            <span className="text-sm tracking-wider">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-2 bg-rose-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section with Enhanced Images */}
      <section className="py-32 px-4 relative bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block">
              <h2 className="text-6xl md:text-7xl font-serif text-gray-800 mb-6">Our Love Story</h2>
              <FloralDivider className="scale-75" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80")'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <FloralCorner position="top-left" className="opacity-70 z-10" />
                <FloralCorner position="bottom-right" className="opacity-70 z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-rose-300"></div>
                <span className="text-rose-400 uppercase tracking-widest text-sm">How We Met</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
                A Love Story Written in the Stars
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Five years ago, fate brought us together at a small coffee shop in the heart of the city.
                What started as a chance encounter over a shared table and a conversation about books
                quickly blossomed into something beautiful and profound.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                From spontaneous road trips to quiet evenings at home, from adventures across continents
                to building our future together, every moment has been a testament to the love we share.
                Now, we're ready to embark on our greatest adventure yet.
              </p>

              <div className="pt-6">
                <div className="inline-flex items-center gap-4 text-rose-400">
                  <Heart className="w-6 h-6 fill-rose-400" />
                  <span className="font-serif text-xl italic">Forever & Always</span>
                  <Heart className="w-6 h-6 fill-rose-400" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional couple images */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
              'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
              'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80'
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-xl overflow-hidden shadow-xl aspect-square group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${img}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Countdown Timer Section with Better Wedding Icons */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Layered Background Images */}
        <div className="absolute inset-0">
          {/* Main background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80")',
            }}
          ></div>
          {/* Elegant overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-rose-50/90 to-white/95"></div>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30L0 60h60z' fill='%23f43f5e' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-12">
              <h2 className="text-6xl md:text-7xl font-serif text-gray-800 mb-6">Counting Every Moment</h2>
              <FloralDivider className="scale-75" />
              <p className="text-xl text-gray-600 mt-6 italic">Until we say "I do"</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                { value: timeLeft.days, label: 'Days', gradient: 'from-rose-400 to-pink-400', icon: <RingsIcon className="w-12 h-12 text-rose-400" /> },
                { value: timeLeft.hours, label: 'Hours', gradient: 'from-pink-400 to-rose-400', icon: <HeartRingsIcon className="w-12 h-12 text-pink-400" /> },
                { value: timeLeft.minutes, label: 'Minutes', gradient: 'from-rose-400 to-pink-400', icon: <ChampagneIcon className="w-12 h-12 text-rose-400" /> },
                { value: timeLeft.seconds, label: 'Seconds', gradient: 'from-pink-400 to-rose-400', icon: <CakeIcon className="w-12 h-12 text-pink-400" /> }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                  className="relative group"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-rose-100 hover:shadow-rose-200/50 transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-rose-100 to-pink-100"></div>

                    {/* Icon */}
                    <div className="mb-6 relative z-10 flex justify-center">
                      {item.icon}
                    </div>

                    {/* Value */}
                    <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-3 relative z-10 drop-shadow-sm`}>
                      {String(item.value).padStart(2, '0')}
                    </div>

                    {/* Label */}
                    <div className="text-gray-600 text-base md:text-lg uppercase tracking-widest font-light relative z-10">{item.label}</div>

                    {/* Decorative line */}
                    <div className={`h-1 w-16 mx-auto mt-4 rounded-full bg-gradient-to-r ${item.gradient} relative z-10`}></div>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Venue Section */}
      <section className="py-32 px-4 relative bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-serif text-gray-800 mb-6">The Venue</h2>
            <FloralDivider className="scale-75" />
            <p className="text-xl text-gray-600 mt-6">Where our journey begins</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f29da8fd22?w=1000&q=80")'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                  <h3 className="text-3xl font-serif mb-2">The Grand Cathedral</h3>
                  <p className="text-white/90">A historic venue for our special day</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 bg-rose-50 p-6 rounded-xl border border-rose-100">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Ceremony Location</h4>
                  <p className="text-gray-600">The Grand Cathedral<br/>123 Wedding Lane<br/>Love City, LC 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-rose-50 p-6 rounded-xl border border-rose-100">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Reception Venue</h4>
                  <p className="text-gray-600">Grand Ballroom<br/>456 Celebration Avenue<br/>Love City, LC 12345</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                View on Google Maps
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section className="py-32 px-4 relative bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-serif text-gray-800 mb-6">Event Timeline</h2>
            <FloralDivider className="scale-75" />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200 hidden md:block"></div>

            <div className="space-y-16">
              {[
                {
                  time: '4:00 PM',
                  title: 'Ceremony',
                  description: 'Join us as we exchange our vows in the presence of our loved ones',
                  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>,
                  location: 'The Grand Cathedral'
                },
                {
                  time: '5:30 PM',
                  title: 'Cocktail Reception',
                  description: 'Enjoy cocktails and canapés in the garden',
                  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd"/></svg>,
                  location: 'Garden Terrace'
                },
                {
                  time: '6:30 PM',
                  title: 'Reception Dinner',
                  description: 'A delightful feast prepared by our finest chefs',
                  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>,
                  location: 'Grand Ballroom'
                },
                {
                  time: '8:00 PM',
                  title: 'First Dance',
                  description: 'Watch as we share our first dance as husband and wife',
                  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>,
                  location: 'Grand Ballroom'
                },
                {
                  time: '8:30 PM',
                  title: 'Cake Cutting',
                  description: 'Join us for champagne and wedding cake',
                  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>,
                  location: 'Grand Ballroom'
                },
                {
                  time: '9:00 PM',
                  title: 'Dancing & Celebration',
                  description: 'Let\'s dance the night away until the stars come out',
                  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>,
                  location: 'Grand Ballroom'
                }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 hidden md:block z-10"></div>

                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-rose-50 relative overflow-hidden group">
                      {/* Decorative gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className={`flex items-center gap-4 mb-4 relative z-10 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                        <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                          {event.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-rose-500 font-semibold mb-1">
                            <Clock className="w-5 h-5" />
                            <span className="text-xl">{event.time}</span>
                          </div>
                          <h3 className="text-2xl font-serif text-gray-800">{event.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 relative z-10">{event.description}</p>
                      <div className={`flex items-center gap-2 text-gray-500 text-sm relative z-10 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <MapPin className="w-4 h-4 text-rose-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simplified RSVP Form Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Beautiful background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=80")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-rose-50/95 to-white/95"></div>
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-serif text-gray-800 mb-6">Join Our Celebration</h2>
            <FloralDivider className="mb-6 scale-75" />
            <p className="text-xl text-gray-600 font-light">Kindly respond by May 1st, 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/98 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-14 border border-rose-100">
              <div className="space-y-8">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-gray-700 font-semibold mb-3 text-lg">
                    <User className="w-5 h-5 text-rose-400" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-rose-100 focus:border-rose-400 focus:outline-none transition-all bg-white text-gray-800 placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-gray-700 font-semibold mb-3 text-lg">
                    <MessageSquare className="w-5 h-5 text-rose-400" />
                    Message & Wishes
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl border-2 border-rose-100 focus:border-rose-400 focus:outline-none transition-all bg-white resize-none text-gray-800 placeholder-gray-400"
                    placeholder="Share your best wishes with us..."
                  ></textarea>
                </div>

                {/* Attendance Buttons */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-4 text-lg">
                    Will you be attending? *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setAttendance('attending')}
                      className={`py-6 px-6 rounded-xl font-semibold text-lg transition-all ${
                        attendance === 'attending'
                          ? 'bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-xl shadow-rose-200'
                          : 'bg-rose-50 border-2 border-rose-200 text-gray-700 hover:border-rose-400 hover:bg-rose-100'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Check className="w-7 h-7" />
                        <span>Joyfully Accept</span>
                      </div>
                    </motion.button>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setAttendance('not-attending')}
                      className={`py-6 px-6 rounded-xl font-semibold text-lg transition-all ${
                        attendance === 'not-attending'
                          ? 'bg-gradient-to-br from-gray-400 to-gray-500 text-white shadow-xl shadow-gray-200'
                          : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <X className="w-7 h-7" />
                        <span>Regretfully Decline</span>
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white py-6 px-8 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all mt-4 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Heart className="w-6 h-6 fill-white" />
                    <span>Send RSVP</span>
                    <Heart className="w-6 h-6 fill-white" />
                  </div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-rose-100"></div>
        <FloralCorner position="bottom-left" className="opacity-40" />
        <FloralCorner position="bottom-right" className="opacity-40" />

        <div className="container mx-auto text-center relative z-10">
          <FloralDivider className="mb-8 scale-75" />
          <p className="text-2xl font-serif text-gray-700 mb-4 italic">
            We can't wait to celebrate with you
          </p>
          <p className="text-gray-500 text-lg mb-8">
            Sarah & James • June 15, 2026
          </p>
          <div className="flex justify-center gap-2 items-center mb-8">
            <div className="w-16 h-px bg-rose-300"></div>
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            <div className="w-16 h-px bg-rose-300"></div>
          </div>
          <p className="text-sm text-gray-400">
            With love and gratitude
          </p>
        </div>
      </footer>
    </div>
  );
}
