'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Flower,
  Leaf,
  Heart,
  Users,
  Mail,
  Calendar,
  Clock,
  MapPin,
  User,
  MessageSquare,
  Check,
  X,
} from 'lucide-react';
import LoadingTemplate3 from '@/components/LoadingTemplate3';

// Fixed wedding date defined outside component to prevent re-creation on every render
const WEDDING_DATE = new Date('2026-06-15T15:00:00');

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [attendance, setAttendance] = useState(null);

  // Show loading screen on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Memoized countdown calculation to prevent infinite loop
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = WEDDING_DATE - now;

    if (difference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  }, []);

  useEffect(() => {
    // Initial calculation
    calculateTimeLeft();

    // Setup timer
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is just for design preview - no actual submission
    alert(`Thank you for your RSVP, ${formData.name}!`);
    setFormData({ name: '', message: '' });
    setAttendance(null);
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingTemplate3 groomInitial="J" brideInitial="E" />;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      {/* Global fixes to prevent double scrollbars (hides horizontal overflow, ensures full-height root) */}
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

      <div className='bg-rose-50 text-stone-800 font-sans relative overflow-hidden'>
        {/* Enhanced Floral Decorative Elements */}
        <div className='fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-amber-300 to-transparent z-50'></div>
        <div className='fixed top-2 left-4 opacity-20'>
          <Flower size={48} className='text-amber-400' />
        </div>
        <div className='fixed top-2 right-4 opacity-20'>
          <Flower size={48} className='text-pink-300' />
        </div>
 

        {/* Additional decorative elements */}
        <div className='fixed top-1/4 left-8 opacity-15 hidden md:block'>
          <div className='flex flex-col items-center'>
            <Leaf size={40} className='text-rose-300 rotate-12' />
            <Flower size={32} className='text-amber-300 mt-4' />
          </div>
        </div>
        <div className='fixed top-1/3 right-8 opacity-15 hidden md:block'>
          <div className='flex flex-col items-center'>
            <Flower size={40} className='text-pink-300 -rotate-6' />
            <Leaf size={32} className='text-amber-300 mt-4 rotate-12' />
          </div>
        </div>
        <div className='fixed bottom-1/4 left-8 opacity-10 hidden md:block'>
          <Heart size={48} className='text-rose-300' />
        </div>
        <div className='fixed bottom-1/4 right-8 opacity-10 hidden md:block'>
          <Flower size={56} className='text-amber-300 rotate-6' />
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='fixed top-1/4 right-1/4 opacity-5 w-24 h-24 hidden lg:block'
        >
          <Flower size={96} className='text-pink-300' />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className='fixed bottom-1/3 left-1/3 opacity-5 w-20 h-20 hidden lg:block'
        >
          <Leaf size={80} className='text-amber-300' />
        </motion.div>

        {/* Hero Section - Fixed scrolling issues and updated background image to couple holding hands */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='relative min-h-screen flex items-center justify-center overflow-hidden'
        >
          <div
            className='absolute inset-0 bg-cover bg-center z-0'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517861807225-0b7a64c8a500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
              backgroundPosition: 'center 20%',
            }}
          >
            {/* Added actual image element for couple holding hands (keeps overlays intact) */}
            <img
              src='/images/bg-1.png'
              alt='Couple holding hands'
              className='absolute inset-0 w-full h-full object-cover z-0'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70'></div>
            {/* Enhanced floral overlay pattern */}
            <div
              className='absolute inset-0 opacity-8'
              style={{
                backgroundImage:
                  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="%23fbbf24" opacity="0.1" d="M20,30 Q30,20 40,30 Q45,25 50,35 Q55,25 60,30 Q70,20 80,30 Q85,25 90,40 Q85,55 70,60 Q65,70 50,65 Q35,70 30,60 Q15,55 20,40 Q15,35 20,30 Z"/><path fill="%23f472b6" opacity="0.1" d="M70,20 Q80,30 70,40 Q65,45 55,40 Q50,45 45,40 Q35,45 30,40 Q20,30 30,20 Q35,15 45,20 Q50,15 55,20 Q65,15 70,20 Z"/></svg>\')',
                backgroundSize: '60px',
              }}
            ></div>
          </div>

          <div className='absolute top-8 left-1/2 transform -translate-x-1/2 z-10'>
            <div className='bg-amber-100/30 backdrop-blur-sm px-8 py-3 w-auto rounded-full border border-amber-200/50 flex items-center space-x-3'>
              <Heart size={20} className='text-amber-600' />
              <span className='text-white font-medium text-sm md:text-base lg:text-lg tracking-wide'>
                Together with their families
              </span>
            </div>
          </div>

          <div className='relative z-10 text-center px-4 max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16'>
            <motion.h1
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-snug md:leading-tight break-words'
            >
              Emma & James
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              transition={{ delay: 0.2 }}
              className='flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8 mb-8 md:mb-10 text-center'
            >
              <div className='flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
                <Calendar size={20} className='text-amber-200' />
                <span className='text-sm sm:text-base md:text-xl text-amber-100 font-medium'>
                  June 15, 2026
                </span>
              </div>
              <div className='flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
                <MapPin size={20} className='text-amber-200' />
                <span className='text-sm sm:text-base md:text-xl text-amber-100 font-medium'>
                  The Grand Ballroom, NYC
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              transition={{ delay: 0.4 }}
              className='text-base sm:text-lg md:text-2xl text-amber-100 mb-8 md:mb-12 max-w-3xl mx-auto italic leading-relaxed'
            >
              "Where flowers bloom, so does hope. We invite you to witness the
              blooming of our love."
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              transition={{ delay: 0.6 }}
              className='flex justify-center'
            >
              <button className='group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full overflow-hidden text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <span className='relative z-10 flex items-center space-x-2'>
                  <Leaf size={16} />
                  <span>Our Story</span>
                </span>
              </button>
            </motion.div>
          </div>

          {/* Floating floral elements - more decorative */}
          <motion.div
            {...floatAnimation}
            className='absolute bottom-24 left-10 opacity-30'
          >
            <Flower size={64} className='text-pink-200' />
          </motion.div>
          <motion.div
            {...floatAnimation}
            transition={{ delay: 0.5 }}
            className='absolute bottom-32 right-12 opacity-25'
          >
            <Leaf size={48} className='text-amber-200 rotate-12' />
          </motion.div>
          <motion.div
            {...floatAnimation}
            transition={{ delay: 1 }}
            className='absolute top-32 left-12 opacity-20 hidden md:block'
          >
            <Heart size={40} className='text-rose-200' />
          </motion.div>
          <motion.div
            {...floatAnimation}
            transition={{ delay: 1.5 }}
            className='absolute top-40 right-16 opacity-20 hidden md:block'
          >
            <Flower size={48} className='text-amber-200 -rotate-12' />
          </motion.div>
        </motion.section>

        {/* About Section - Added more decoratives */}
        <motion.section
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='py-24 px-4 max-w-7xl mx-auto relative'
        >
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32'>
            <div className='absolute inset-0 opacity-10'>
              <Flower size={128} className='text-amber-300' />
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className='absolute -top-12 -left-12 opacity-5 w-48 h-48 hidden md:block'>
            <Leaf size={192} className='text-pink-300 rotate-12' />
          </div>
          <div className='absolute -top-16 -right-16 opacity-5 w-40 h-40 hidden md:block'>
            <Flower size={160} className='text-rose-300 -rotate-6' />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              variants={itemVariants}
              className='relative order-2 lg:order-1'
            >
              <div className='relative rounded-3xl overflow-hidden shadow-2xl group'>
                {/* About image */}
                <img
                  src='/images/couple.png'
                  alt='Emma and James'
                  className='w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent'></div>
                <div className='absolute bottom-6 left-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-5 py-3'>
                  <div className='flex items-center space-x-3'>
                    <Heart size={24} className='text-pink-500' />
                    <span className='font-serif font-bold text-pink-500 text-lg'>
                      Our Journey
                    </span>
                  </div>
                </div>
              </div>
              <div className='absolute -bottom-8 -right-8 w-32 h-32 opacity-15'>
                <Leaf size={128} className='text-rose-300 rotate-12' />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className='order-1 lg:order-2'>
              <div className='space-y-8 relative pl-6 border-l-2 border-amber-200/50'>
                <div className='absolute -left-5 top-0 bg-amber-100 p-2 rounded-full'>
                  <Flower size={24} className='text-amber-500' />
                </div>

                <h2 className='text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-2'>
                  From Serendipity to Forever
                </h2>

                <p className='text-xl text-stone-600 leading-relaxed italic'>
                  Our journey began on a rainy afternoon at the New York Public
                  Library. James reached for the same book on Renaissance art
                  that I was about to take. That accidental meeting sparked a
                  conversation that lasted until closing time.
                </p>

                <p className='text-xl text-stone-600 leading-relaxed'>
                  Five years later, he proposed at that same library under the
                  gilded ceilings, surrounded by the stories that first brought
                  us together. We're excited to begin our own forever story with
                  you by our side.
                </p>

                <div className='mt-8 flex flex-wrap gap-6'>
                  {[
                    { icon: <Users size={28} />, text: '5 Years Together' },
                    { icon: <Leaf size={28} />, text: '3 Continents Explored' },
                    { icon: <Heart size={28} />, text: '1 Unbreakable Bond' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-3 bg-rose-50/50 px-5 py-3 rounded-xl border border-amber-100'
                    >
                      <div className='text-amber-500'>{item.icon}</div>
                      <span className='font-medium text-lg'>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Decorative Divider */}
        <div className='my-2 flex justify-center'>
          <div className='relative'>
            <div className='w-24 h-24 opacity-10'>
              <Flower size={96} className='text-amber-300' />
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-16 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent'></div>
            </div>
          </div>
        </div>

        {/* Countdown Section - Added more decoratives */}
        <motion.section
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='py-24 px-4 bg-gradient-to-b from-rose-50/80 to-pink-50/30 relative overflow-hidden'
        >
          <div className='absolute top-0 left-0 w-48 h-48 opacity-5 -rotate-12'>
            <Flower size={192} className='text-pink-300' />
          </div>
          <div className='absolute bottom-0 right-0 w-40 h-40 opacity-5 rotate-12'>
            <Leaf size={160} className='text-amber-300' />
          </div>

          {/* Additional decorative elements */}
          <div className='absolute top-1/4 right-1/4 w-32 h-32 opacity-5 hidden md:block'>
            <Heart size={128} className='text-rose-300' />
          </div>
          <div className='absolute bottom-1/4 left-1/4 w-28 h-28 opacity-5 hidden md:block'>
            <Flower size={112} className='text-amber-300 rotate-6' />
          </div>

          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <motion.div variants={itemVariants} className='inline-block mb-12'>
              <div className='bg-amber-100/50 backdrop-blur-sm rounded-full px-8 py-3 inline-flex items-center space-x-4 border border-amber-200/50'>
                <Heart size={24} className='text-amber-600' />
                <span className='font-serif font-bold text-amber-800 text-lg'>
                  The Awaited Day
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6'
            >
              Time Until Our Forever Begins
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className='text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-16'
            >
              Every moment brings us closer to the day we've dreamed of. Join us
              as we count down to the beginning of our greatest adventure.
            </motion.p>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className='bg-white rounded-3xl p-8 shadow-xl border border-amber-100/50 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden'
                >
                  <div className='absolute top-0 right-0 w-16 h-16 opacity-10'>
                    <Flower size={64} className='text-amber-300' />
                  </div>
                  <div className='relative z-10'>
                    <div className='text-5xl md:text-6xl font-bold text-amber-600 mb-2 font-serif'>
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className='text-lg font-medium text-stone-600 capitalize font-serif tracking-wide'>
                      {unit}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Schedule Section - Redesigned */}
        <motion.section
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='py-24 px-4 max-w-6xl mx-auto relative'
        >
          <div className='text-center mb-20'>
            <motion.div variants={itemVariants} className='inline-block mb-8'>
              <div className='bg-pink-100/50 backdrop-blur-sm rounded-full px-8 py-3 inline-flex items-center space-x-4 border border-pink-200/50'>
                <Clock size={24} className='text-pink-600' />
                <span className='font-serif font-bold text-pink-800 text-lg'>
                  Celebration Timeline
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className='text-4xl md:text-5xl font-serif font-bold text-stone-800'
            >
              A Day to Remember
            </motion.h2>
          </div>

          {/* Additional decorative elements */}
          <div className='absolute top-1/4 left-0 w-24 h-24 opacity-5 hidden md:block'>
            <Leaf size={96} className='text-amber-300 rotate-12' />
          </div>
          <div className='absolute bottom-1/3 right-0 w-28 h-28 opacity-5 hidden md:block'>
            <Flower size={112} className='text-pink-300 -rotate-6' />
          </div>

          <div className='relative max-w-5xl mx-auto'>
            {/* Vertical timeline line */}
            <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-200 to-pink-200 transform -translate-x-1/2'></div>

            <div className='space-y-24'>
              {[
                {
                  time: '3:00 PM',
                  title: 'Ceremony',
                  description:
                    'Join us for an intimate ceremony surrounded by blooming gardens and heartfelt vows.',
                  image:
                    'https://images.unsplash.com/photo-1519741497676-853586c6f96c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                },
                {
                  time: '4:30 PM',
                  title: 'Cocktail Hour',
                  description:
                    "Sip signature cocktails and enjoy hors d'oeuvres while string quartets set the romantic mood.",
                  image:
                    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                },
                {
                  time: '6:00 PM',
                  title: 'Reception',
                  description:
                    'Dine under crystal chandeliers as we celebrate with dinner, toasts, and our first dance.',
                  image:
                    'https://images.unsplash.com/photo-1519335353930-9e2c2d5f8659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                },
                {
                  time: '10:00 PM',
                  title: 'Farewell',
                  description:
                    'Send us off with sparklers as we begin our journey as husband and wife.',
                  image:
                    'https://images.unsplash.com/photo-1511282347536-d97c6e9f9a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-12 relative`}
                >
                  {/* Timeline dot */}
                  <div className='hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full border-4 border-white shadow-lg z-10'></div>

                  <div className='w-full md:w-5/12'>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className='relative rounded-3xl overflow-hidden shadow-2xl group'
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className='w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                      <div className='block md:hidden absolute bottom-6 left-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-4'>
                        <div className='flex items-center space-x-3'>
                          <span className='font-serif font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent text-xl'>
                            {event.title}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className='w-full md:w-7/12'>
                    <div className='bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-100/50 relative z-10'>
                      <div className='flex items-start space-x-4 mb-6'>
                        <div className='mt-1'>
                          <div className='w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-amber-400'></div>
                        </div>
                        <div className='flex-1'>
                          <div className='flex items-center space-x-3 mb-2'>
                            <span className='font-serif font-bold text-amber-400 text-lg'>
                              {event.time}
                            </span>
                          </div>

                          <h3 className='text-3xl font-serif font-bold bg-gradient-to-r from-pink-400 to-amber-500 bg-clip-text text-transparent mb-4'>
                            {event.title}
                          </h3>

                          <p className='text-lg text-stone-600 leading-relaxed'>
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Decorative Divider */}
        <div className='my-2 flex justify-center'>
          <div className='relative'>
            <div className='w-20 h-20 opacity-15'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <Heart size={48} className='text-amber-300 opacity-80' />
              </div>
            </div>
          </div>
        </div>

        {/* RSVP Section - Added more decoratives */}
        <motion.section
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='py-24 px-4 bg-gradient-to-b from-pink-50/80 to-rose-50/30 relative overflow-hidden'
        >
          <div className='absolute top-0 right-0 w-48 h-48 opacity-5 rotate-12'>
            <Flower size={192} className='text-amber-300' />
          </div>
          <div className='absolute bottom-0 left-0 w-40 h-40 opacity-5 -rotate-12'>
            <Leaf size={160} className='text-pink-300' />
          </div>

          {/* Additional decorative elements */}
          <div className='absolute top-1/3 left-1/4 w-24 h-24 opacity-5 hidden md:block'>
            <Heart size={96} className='text-rose-300' />
          </div>
          <div className='absolute bottom-1/3 right-1/4 w-28 h-28 opacity-5 hidden md:block'>
            <Flower size={112} className='text-pink-300 rotate-6' />
          </div>

          <div className='max-w-4xl mx-auto relative z-10'>
            <div className='text-center mb-16'>
              <motion.div variants={itemVariants} className='inline-block mb-8'>
                <div className='bg-amber-100/50 backdrop-blur-sm rounded-full px-8 py-3 inline-flex items-center space-x-4 border border-amber-200/50'>
                  <Mail size={24} className='text-amber-600' />
                  <span className='font-serif font-bold text-amber-800 text-lg'>
                    Join Our Celebration
                  </span>
                </div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className='text-4xl md:text-5xl font-serif font-bold text-stone-800'
              >
                We Save a Seat for You
              </motion.h2>
            </div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className='bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100/50 relative'
            >
              <div className='p-8 md:p-12'>
                <form onSubmit={handleSubmit} className='space-y-8'>
                  <div>
                    <label
                      htmlFor='name'
                      className='flex items-center gap-2 text-stone-700 font-semibold mb-3 text-lg'
                    >
                      <User size={20} className='text-amber-500' />
                      Your Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-6 py-4 rounded-2xl border-2 border-amber-100 focus:border-amber-400 focus:outline-none transition-all duration-300'
                      placeholder='John Doe'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='flex items-center gap-2 text-stone-700 font-semibold mb-3 text-lg'
                    >
                      <MessageSquare size={20} className='text-amber-500' />
                      Message & Wishes
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows='5'
                      className='w-full px-6 py-4 rounded-2xl border-2 border-amber-100 focus:border-amber-400 focus:outline-none resize-none transition-all duration-300'
                      placeholder='Share your best wishes...'
                    ></textarea>
                  </div>

                  <div>
                    <label className='text-stone-700 font-semibold mb-4 text-lg block'>
                      Will you be attending? *
                    </label>
                    <div className='grid grid-cols-2 gap-4'>
                      <button
                        type='button'
                        onClick={() => setAttendance('attending')}
                        className={`py-6 px-6 rounded-xl font-semibold transition-all ${
                          attendance === 'attending'
                            ? 'bg-gradient-to-br from-amber-400 to-pink-400 text-white shadow-xl'
                            : 'bg-amber-50 border-2 border-amber-200 text-stone-700'
                        }`}
                      >
                        <div className='flex items-center justify-center gap-3'>
                          <Check className='w-7 h-7' />
                          <span>Accept</span>
                        </div>
                      </button>

                      <button
                        type='button'
                        onClick={() => setAttendance('not-attending')}
                        className={`py-6 px-6 rounded-xl font-semibold transition-all ${
                          attendance === 'not-attending'
                            ? 'bg-gradient-to-br from-gray-400 to-gray-500 text-white shadow-xl'
                            : 'bg-gray-50 border-2 border-gray-200 text-stone-700'
                        }`}
                      >
                        <div className='flex items-center justify-center gap-3'>
                          <X className='w-7 h-7' />
                          <span>Decline</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type='submit'
                    className='w-full bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-6 px-8 rounded-2xl text-xl shadow-xl hover:shadow-2xl transition-all duration-300'
                  >
                    <div className='flex items-center justify-center gap-3'>
                      <Heart size={24} className='fill-white' />
                      <span>Send RSVP</span>
                    </div>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer - Enhanced with decoratives */}
        <footer className='py-16 px-4 bg-gradient-to-t from-stone-100 to-rose-50/50 border-t border-stone-200 relative'>
          <div className='absolute top-0 left-0 w-32 h-32 opacity-10 -rotate-12'>
            <Flower size={128} className='text-amber-300' />
          </div>
          <div className='absolute top-0 right-0 w-32 h-32 opacity-10 rotate-12'>
            <Leaf size={128} className='text-pink-300' />
          </div>

          {/* Additional decorative elements */}
          <div className='absolute bottom-0 left-1/4 w-24 h-24 opacity-5 hidden md:block'>
            <Heart size={96} className='text-rose-300' />
          </div>
          <div className='absolute bottom-0 right-1/4 w-28 h-28 opacity-5 hidden md:block'>
            <Flower size={112} className='text-amber-300 rotate-6' />
          </div>

          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <div className='flex justify-center space-x-4 mb-10'>
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className='w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-pink-400'
                ></motion.div>
              ))}
            </div>

            <div className='flex justify-center space-x-6 mb-8'>
              <div className='w-16 h-16 rounded-full bg-gradient-to-r from-amber-100 to-pink-100 flex items-center justify-center'>
                <Flower size={32} className='text-amber-500' />
              </div>
              <div className='w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center'>
                <Heart size={32} className='text-pink-500' />
              </div>
              <div className='w-16 h-16 rounded-full bg-gradient-to-r from-rose-100 to-amber-100 flex items-center justify-center'>
                <Leaf size={32} className='text-rose-500' />
              </div>
            </div>

            <p className='text-3xl font-serif font-bold text-stone-800 mb-4'>
              Emma & James
            </p>
            <p className='text-xl text-stone-600 max-w-2xl mx-auto'>
              June 15, 2026 · The Grand Ballroom, New York
            </p>
            <p className='text-stone-600 mt-6 italic text-lg'>
              "Love is composed of a single soul inhabiting two bodies" -
              Aristotle
            </p>

            <div className='mt-12 flex justify-center space-x-6'>
              <div className='w-3 h-3 rounded-full bg-amber-400'></div>
              <div className='w-3 h-3 rounded-full bg-pink-400'></div>
              <div className='w-3 h-3 rounded-full bg-rose-400'></div>
              <div className='w-3 h-3 rounded-full bg-amber-400'></div>
              <div className='w-3 h-3 rounded-full bg-pink-400'></div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
