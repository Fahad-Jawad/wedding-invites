'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, MapPin, ChevronDown, Plus, Minus, Send, Star, Music, Camera, Gift, X, Clock, Sparkles, Wine, Utensils, Cake as CakeIcon } from 'lucide-react';
import { FloatingOrbs, GeometricPattern, CircularText, WeddingRingsIcon, FloralFrame } from '@/components/Decoratives';
import { RingsIcon, HeartRingsIcon, ChampagneIcon, CakeIcon as WeddingCakeIcon, RoseDecoration, FloralBouquet } from '@/components/WeddingDecorations';
import EditableWrapper from '@/components/EditableWrapper';
import EditorDrawer from '@/components/EditorDrawer';
import { TextEditor, DateEditor, ImageEditor, TimelineEditor } from '@/components/EditorForms';
import useDebounce from '@/hooks/useDebounce';
import SaveButton from '@/components/SaveButton';
import { saveTemplate, loadTemplate } from '@/lib/saveTemplateHelper';
import LoadingTemplate2 from '@/components/LoadingTemplate2';

export default function EditableTemplate2() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Authentication check
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  // Main content state
  const [content, setContent] = useState({
    brideName: 'Emma',
    groomName: 'Alex',
    tagline: 'are tying the knot',
    weddingDate: '2026-06-15T16:00',
    heroImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    storyTagline: 'Every love story is beautiful, but ours is our favorite',
    storyQuote: 'Two souls, one heart, forever intertwined',
    storyImages: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80'
    ],
    timeline: [
      {
        time: '4:00 PM',
        title: 'Ceremony',
        description: 'Join us as we exchange vows under the open sky',
        location: ''
      },
      {
        time: '5:30 PM',
        title: 'Cocktail Hour',
        description: 'Enjoy signature drinks and canapés in the garden',
        location: ''
      },
      {
        time: '6:30 PM',
        title: 'Dinner Reception',
        description: 'Savor a delicious farm-to-table feast',
        location: ''
      },
      {
        time: '8:00 PM',
        title: 'First Dance',
        description: 'Watch us twirl into married life',
        location: ''
      },
      {
        time: '8:30 PM',
        title: 'Cake Cutting',
        description: 'Sweet treats and champagne toasts',
        location: ''
      },
      {
        time: '9:00 PM',
        title: 'Dancing & Celebration',
        description: 'Dance the night away under the stars',
        location: ''
      }
    ],
    venues: [
      {
        name: 'The Garden Estate',
        address: '123 Botanical Lane, Green Valley, GV 12345',
        time: '4:00 PM',
        type: 'The Ceremony',
        image: 'https://images.unsplash.com/photo-1519167758481-83f29da8fd22?w=1000&q=80'
      },
      {
        name: 'The Pavilion',
        address: '456 Celebration Gardens, Green Valley, GV 12345',
        time: '6:30 PM - Midnight',
        type: 'The Reception',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&q=80'
      }
    ],
    faqs: [
      { q: "What's the dress code?", a: "Semi-formal garden attire. Think elegant yet comfortable - flowing dresses and light suits in soft, natural tones." },
      { q: "Can I bring a plus one?", a: "Due to venue capacity, we can only accommodate guests formally invited. Please check your invitation." },
      { q: "Will there be parking?", a: "Yes! Complimentary valet parking is available. The venue also has a spacious parking lot." },
      { q: "Is the wedding kid-friendly?", a: "We love your little ones, but we've planned an adults-only celebration for everyone to relax and enjoy." },
      { q: "What time should I arrive?", a: "Please arrive 20-30 minutes before the ceremony begins at 4:00 PM to find your seat and enjoy the ambiance." }
    ]
  });

  // Editing state
  const [editingSection, setEditingSection] = useState(null);
  const [tempContent, setTempContent] = useState({});

  // Debounced live preview (500ms delay)
  const debouncedContent = useDebounce(tempContent, 500);

  // Update actual content when debounced value changes
  useEffect(() => {
    if (Object.keys(debouncedContent).length > 0) {
      setContent(prev => ({ ...prev, ...debouncedContent }));
    }
  }, [debouncedContent]);

  // All useState hooks MUST be before any conditional returns
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [attendance, setAttendance] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Countdown timer - MUST be before conditional returns
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const weddingTime = new Date(content.weddingDate).getTime();
      const difference = weddingTime - now;
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
  }, [content.weddingDate]);

  // Scroll handler - MUST be before conditional returns
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load saved data on mount
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedData = await loadTemplate();
        if (savedData && savedData.templateNumber === 2) {
          setContent(savedData.content);
        }
      } catch (error) {
        console.error('Error loading saved data:', error);
      } finally {
        setTimeout(() => setIsDataLoaded(true), 800);
      }
    };

    if (status === 'authenticated') {
      loadSavedData();
    }
  }, [status]);

  // Save handler
  const handleSave = async () => {
    await saveTemplate(2, content);
  };

  if (status === 'loading' || !isDataLoaded) {
    const groomInitial = content.groomName?.[0]?.toUpperCase() || 'A';
    const brideInitial = content.brideName?.[0]?.toUpperCase() || 'E';
    return <LoadingTemplate2 groomInitial={groomInitial} brideInitial={brideInitial} />;
  }

  if (status === 'unauthenticated') {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your RSVP has been received.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <FloatingOrbs />

      {/* Creative Hero Section with Split Design */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Decorative Elements - Wedding Themed */}
        <motion.div
          className="fixed top-10 left-10 pointer-events-none z-40"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <RingsIcon className="w-40 h-40 text-emerald-400 opacity-30" />
        </motion.div>
        <motion.div
          className="fixed top-10 right-10 pointer-events-none z-40"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
        >
          <HeartRingsIcon className="w-40 h-40 text-teal-400 opacity-30" />
        </motion.div>
        <motion.div
          className="fixed bottom-10 left-16 pointer-events-none z-40"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <ChampagneIcon className="w-32 h-32 text-emerald-400 opacity-25" />
        </motion.div>
        <motion.div
          className="fixed bottom-10 right-16 pointer-events-none z-40"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.3 }}
        >
          <WeddingCakeIcon className="w-32 h-32 text-cyan-400 opacity-25" />
        </motion.div>

        {/* Circular Rotating Text */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 pointer-events-none hidden lg:block"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <CircularText text="LOVE • JOY • " className="opacity-30" />
        </motion.div>

        {/* Split Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 opacity-40"></div>
            <div className="bg-gradient-to-bl from-cyan-100 to-emerald-100 opacity-40"></div>
          </div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("/images/bg-2.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-10 opacity-20">
          <GeometricPattern className="w-40 h-40" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20">
          <GeometricPattern className="w-40 h-40" />
        </div>

        {/* Hero Content - Creative Layout - EDITABLE */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side - Names with Creative Typography - EDITABLE */}
            <EditableWrapper
              onEdit={() => {
                setEditingSection('hero');
                setTempContent({
                  brideName: content.brideName,
                  groomName: content.groomName,
                  tagline: content.tagline,
                  weddingDate: content.weddingDate
                });
              }}
              label="Edit Names & Date"
            >
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center md:text-left"
              >
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-emerald-200 mb-8">
                    <Sparkles className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm tracking-[0.3em] text-emerald-700 uppercase font-medium">
                      Save The Date
                    </span>
                  </div>

                  <div className="relative">
                    <h1 className="text-7xl md:text-8xl font-serif text-gray-900 leading-tight mb-4">
                      {content.brideName}
                    </h1>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-8 my-4"
                    >
                      <WeddingRingsIcon className="w-12 h-12 text-white" />
                    </motion.div>
                    <h1 className="text-7xl md:text-8xl font-serif text-gray-900 leading-tight">
                      {content.groomName}
                    </h1>
                  </div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-4"
                >
                  <p className="text-2xl text-gray-700 font-light italic">
                    {content.tagline}
                  </p>
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <Calendar className="w-6 h-6 text-emerald-500" />
                    <span className="text-xl font-medium text-gray-800">
                      {new Date(content.weddingDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </EditableWrapper>

            {/* Right Side - Circular Image with Decorative Frame - EDITABLE */}
            <EditableWrapper
              onEdit={() => {
                setEditingSection('heroImage');
                setTempContent({ heroImage: content.heroImage });
              }}
              label="Edit Hero Image"
            >
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  {/* Decorative rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 -m-8"
                  >
                    <div className="w-full h-full border-4 border-dashed border-emerald-300 rounded-full"></div>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 -m-16"
                  >
                    <div className="w-full h-full border-2 border-dotted border-teal-300 rounded-full"></div>
                  </motion.div>

                  {/* Main circular image */}
                  <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("${content.heroImage}")`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                  </div>

                  {/* Floating elements around image */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl"
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-3xl shadow-xl"
                  >
                    💚
                  </motion.div>
                </div>
              </motion.div>
            </EditableWrapper>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2 text-emerald-600">
            <span className="text-sm tracking-wider">Scroll to Explore</span>
            <ChevronDown className="w-8 h-8" />
          </div>
        </motion.div>
      </section>

      {/* Photo Grid Story - EDITABLE */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <EditableWrapper
            onEdit={() => {
              setEditingSection('story');
              setTempContent({
                storyTagline: content.storyTagline,
                storyQuote: content.storyQuote
              });
            }}
            label="Edit Story Text"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                {content.storyTagline}
              </p>
            </motion.div>
          </EditableWrapper>

          {/* Bento Grid - EDITABLE */}
          <EditableWrapper
            onEdit={() => {
              setEditingSection('storyImages');
              setTempContent({ storyImages: content.storyImages });
            }}
            label="Edit Story Images"
          >
            <div className="grid grid-cols-12 gap-6 auto-rows-[280px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-12 md:col-span-8 row-span-2 relative rounded-3xl overflow-hidden group hover-lift"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${content.storyImages[0]}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4 pointer-events-none">
                  <FloralFrame className="w-20 h-20" />
                </div>
                <div className="absolute top-4 right-4 pointer-events-none">
                  <FloralFrame className="w-20 h-20 transform scale-x-[-1]" />
                </div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <h3 className="text-4xl font-bold mb-2">The Beginning</h3>
                  <p className="text-lg opacity-90">Where our journey started</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-6 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden group hover-lift"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${content.storyImages[1]}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                <div className="absolute top-3 right-3 pointer-events-none">
                  <FloralFrame className="w-16 h-16 transform scale-x-[-1]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-6 md:col-span-4 row-span-1 relative rounded-3xl overflow-hidden group hover-lift"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${content.storyImages[2]}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent"></div>
                <div className="absolute top-3 left-3 pointer-events-none">
                  <FloralFrame className="w-16 h-16" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="col-span-12 md:col-span-6 row-span-1 relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-10 text-white"
              >
                <p className="text-2xl md:text-3xl font-light italic leading-relaxed relative z-10">
                  "{content.storyQuote}"
                </p>
                <Heart className="absolute bottom-4 right-4 w-32 h-32 opacity-20 fill-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="col-span-12 md:col-span-6 row-span-1 relative rounded-3xl overflow-hidden group hover-lift"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${content.storyImages[3]}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                <div className="absolute bottom-3 right-3 pointer-events-none">
                  <FloralFrame className="w-16 h-16 transform rotate-180" />
                </div>
              </motion.div>
            </div>
          </EditableWrapper>
        </div>
      </section>

      {/* Countdown Timer - Emerald Theme */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-white to-emerald-50">
        <motion.div
          className="absolute top-10 left-20 opacity-15 pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <HeartRingsIcon className="w-32 h-32 text-emerald-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-20 opacity-15 pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <ChampagneIcon className="w-32 h-32 text-teal-400" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Countdown</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Until we say "I do"</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Days', color: 'from-emerald-400 to-teal-500' },
              { value: timeLeft.hours, label: 'Hours', color: 'from-teal-400 to-cyan-500' },
              { value: timeLeft.minutes, label: 'Minutes', color: 'from-emerald-400 to-teal-500' },
              { value: timeLeft.seconds, label: 'Seconds', color: 'from-cyan-400 to-emerald-500' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-morphism rounded-3xl p-8 text-center border-2 border-emerald-100 hover-lift"
              >
                <div className={`text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-2`}>
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-gray-600 uppercase tracking-widest text-sm font-medium">{item.label}</div>
                <div className={`h-1 w-16 mx-auto mt-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Timeline - Modern Horizontal Scrolling Cards - EDITABLE */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 opacity-20 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <RoseDecoration className="w-60 h-60" position="left" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-20 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <FloralBouquet className="w-48 h-48" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <RingsIcon className="w-96 h-96 text-emerald-300" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">The Celebration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">A day to remember, moment by moment</p>
          </motion.div>

          {/* Horizontal Timeline Flow - EDITABLE */}
          <EditableWrapper
            onEdit={() => {
              setEditingSection('timeline');
              setTempContent({ timeline: content.timeline });
            }}
            label="Edit Timeline"
          >
            <div className="relative">
              {/* Curved connecting line */}
              <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 overflow-hidden">
                <svg className="w-full h-20" viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
                  <path
                    d="M 0 40 Q 200 10, 400 40 T 800 40 T 1200 40"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10,5"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {content.timeline.map((event, index) => {
                  const icons = [
                    <Heart className="w-10 h-10" />,
                    <Wine className="w-10 h-10" />,
                    <Utensils className="w-10 h-10" />,
                    <Music className="w-10 h-10" />,
                    <CakeIcon className="w-10 h-10" />,
                    <Sparkles className="w-10 h-10" />
                  ];
                  const colors = [
                    'from-emerald-400 to-teal-500',
                    'from-teal-400 to-cyan-500',
                    'from-emerald-400 to-teal-500',
                    'from-cyan-400 to-teal-500',
                    'from-teal-400 to-emerald-500',
                    'from-emerald-400 to-cyan-500'
                  ];
                  const bgPatterns = [
                    'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 30%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 70% 40%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)'
                  ];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -12, scale: 1.02 }}
                      className="group"
                    >
                      <div
                        className="relative h-full glass-morphism rounded-3xl p-8 border-2 border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        style={{ background: bgPatterns[index % bgPatterns.length] }}
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 opacity-20 pointer-events-none">
                          <FloralFrame className="w-full h-full transform scale-x-[-1]" />
                        </div>

                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-emerald-200">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700 font-bold text-sm">{event.time}</span>
                        </div>

                        <div className={`w-20 h-20 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                          {icons[index % icons.length]}
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>

                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[index % colors.length]}`}></div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </EditableWrapper>
        </div>
      </section>

      {/* Venue Information - EDITABLE */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
        <motion.div
          className="absolute top-32 right-10 opacity-10 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <RoseDecoration className="w-48 h-48" position="right" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-20"
          >
            When & Where
          </motion.h2>

          <EditableWrapper
            onEdit={() => {
              setEditingSection('venues');
              setTempContent({ venues: content.venues });
            }}
            label="Edit Venues"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {content.venues.map((venue, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="aspect-video rounded-3xl overflow-hidden mb-6 border-4 border-white shadow-2xl">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url("${venue.image}")` }}
                    ></div>
                  </div>
                  <div className={`space-y-4 glass-morphism p-6 rounded-2xl border-2 ${idx === 0 ? 'border-emerald-100' : 'border-teal-100'}`}>
                    <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                      <span className={`w-2 h-8 bg-gradient-to-b ${idx === 0 ? 'from-emerald-400 to-teal-500' : 'from-teal-400 to-cyan-500'} rounded-full`}></span>
                      {venue.type}
                    </h3>
                    <div className="flex items-start gap-3 text-gray-600">
                      <Calendar className={`w-5 h-5 mt-1 ${idx === 0 ? 'text-emerald-500' : 'text-teal-500'}`} />
                      <div>
                        <div className="font-semibold text-gray-900">{new Date(content.weddingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        <div>{venue.time}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className={`w-5 h-5 mt-1 ${idx === 0 ? 'text-emerald-500' : 'text-teal-500'}`} />
                      <div>
                        <div className="font-semibold text-gray-900">{venue.name}</div>
                        <div>{venue.address}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </EditableWrapper>
        </div>
      </section>

      {/* FAQ Section - EDITABLE */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 opacity-8 pointer-events-none"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <WeddingCakeIcon className="w-40 h-40 text-emerald-200" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-8 pointer-events-none"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <RingsIcon className="w-40 h-40 text-teal-200" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">FAQs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </motion.div>

          <EditableWrapper
            onEdit={() => {
              setEditingSection('faqs');
              setTempContent({ faqs: content.faqs });
            }}
            label="Edit FAQs"
          >
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-morphism rounded-2xl overflow-hidden border-2 border-emerald-100"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-emerald-50/50 transition-colors"
                  >
                    <span className="text-xl font-semibold text-gray-900">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {expandedFaq === index ? (
                        <Minus className="w-6 h-6 text-emerald-500" />
                      ) : (
                        <Plus className="w-6 h-6 text-emerald-500" />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 text-lg">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </EditableWrapper>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-1/4 opacity-12 pointer-events-none"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <HeartRingsIcon className="w-36 h-36 text-emerald-300" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Music className="w-8 h-8" />, title: 'Song Requests', desc: 'Help us create the perfect playlist', color: 'from-emerald-400 to-teal-500' },
              { icon: <Camera className="w-8 h-8" />, title: 'Share Photos', desc: `Tag #${content.brideName}And${content.groomName}2026`, color: 'from-teal-400 to-cyan-500' },
              { icon: <Gift className="w-8 h-8" />, title: 'Gift Registry', desc: 'Your presence is the best present', color: 'from-cyan-400 to-emerald-500' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-morphism rounded-3xl p-8 text-center border-2 border-emerald-100 hover-lift"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-full text-white mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1920&q=80")' }}
          ></div>
        </div>

        <motion.div
          className="absolute top-20 left-10 opacity-10 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <RingsIcon className="w-48 h-48 text-emerald-300" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-10 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <FloralBouquet className="w-56 h-56" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-5 opacity-8 pointer-events-none hidden lg:block"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChampagneIcon className="w-32 h-32 text-teal-300" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">RSVP</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Please respond by May 1st, 2026</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-morphism rounded-3xl p-10 md:p-14 shadow-2xl border-2 border-emerald-100"
          >
            <div className="space-y-8">
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-lg">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl border-2 border-emerald-100 focus:border-emerald-400 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-lg">Message & Wishes</label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl border-2 border-emerald-100 focus:border-emerald-400 focus:outline-none transition-all bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Share your best wishes..."
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-4 text-lg">Will you be attending? *</label>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setAttendance('yes')}
                    className={`py-6 rounded-xl font-semibold text-lg transition-all ripple ${
                      attendance === 'yes'
                        ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl'
                        : 'bg-white/70 border-2 border-emerald-200 text-gray-700 hover:border-emerald-400'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-6 h-6" />
                      <span>Joyfully Accept</span>
                    </div>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setAttendance('no')}
                    className={`py-6 rounded-xl font-semibold text-lg transition-all ripple ${
                      attendance === 'no'
                        ? 'bg-gradient-to-br from-gray-400 to-gray-500 text-white shadow-xl'
                        : 'bg-white/70 border-2 border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-6 h-6" />
                      <span>Regretfully Decline</span>
                    </div>
                  </motion.button>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-6 px-8 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group ripple"
              >
                <div className="shimmer absolute inset-0"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Send className="w-6 h-6" />
                  <span>Send RSVP</span>
                </div>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-b from-emerald-50 to-teal-100 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>

        <div className="max-w-2xl mx-auto space-y-6">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Heart className="w-12 h-12 text-emerald-500 fill-emerald-500 mx-auto mb-4" />
          </motion.div>
          <p className="text-2xl font-serif text-gray-800 italic">
            Can't wait to celebrate with you!
          </p>
          <p className="text-gray-600 font-medium">{content.brideName} & {content.groomName} • {new Date(content.weddingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-px bg-emerald-300"></div>
            <Sparkles className="w-5 h-5 text-emerald-500" />
            <div className="w-16 h-px bg-emerald-300"></div>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            With love and gratitude
          </p>
        </div>
      </footer>

      {/* EDITING DRAWERS */}

      {/* Hero Editor */}
      <EditorDrawer
        isOpen={editingSection === 'hero'}
        onClose={() => setEditingSection(null)}
        title="Edit Hero Section"
      >
        <TextEditor
          label="Bride's Name"
          value={tempContent.brideName || content.brideName}
          onChange={(val) => setTempContent(prev => ({ ...prev, brideName: val }))}
          autoFocus
          placeholder="Enter bride's name"
        />
        <TextEditor
          label="Groom's Name"
          value={tempContent.groomName || content.groomName}
          onChange={(val) => setTempContent(prev => ({ ...prev, groomName: val }))}
          placeholder="Enter groom's name"
        />
        <TextEditor
          label="Tagline"
          value={tempContent.tagline || content.tagline}
          onChange={(val) => setTempContent(prev => ({ ...prev, tagline: val }))}
          placeholder="e.g., are tying the knot"
        />
        <DateEditor
          label="Wedding Date & Time"
          value={tempContent.weddingDate || content.weddingDate}
          onChange={(val) => setTempContent(prev => ({ ...prev, weddingDate: val }))}
        />
      </EditorDrawer>

      {/* Hero Image Editor */}
      <EditorDrawer
        isOpen={editingSection === 'heroImage'}
        onClose={() => setEditingSection(null)}
        title="Edit Hero Image"
      >
        <ImageEditor
          label="Hero Circular Image"
          value={tempContent.heroImage !== content.heroImage ? tempContent.heroImage : ''}
          onChange={(val) => setTempContent(prev => ({ ...prev, heroImage: val }))}
          placeholder={content.heroImage}
          autoFocus
        />
      </EditorDrawer>

      {/* Story Text Editor */}
      <EditorDrawer
        isOpen={editingSection === 'story'}
        onClose={() => setEditingSection(null)}
        title="Edit Story Text"
      >
        <TextEditor
          label="Story Tagline"
          value={tempContent.storyTagline || content.storyTagline}
          onChange={(val) => setTempContent(prev => ({ ...prev, storyTagline: val }))}
          autoFocus
          placeholder="Enter story tagline"
        />
        <TextEditor
          label="Story Quote"
          value={tempContent.storyQuote || content.storyQuote}
          onChange={(val) => setTempContent(prev => ({ ...prev, storyQuote: val }))}
          placeholder="Enter your favorite quote"
        />
      </EditorDrawer>

      {/* Story Images Editor */}
      <EditorDrawer
        isOpen={editingSection === 'storyImages'}
        onClose={() => setEditingSection(null)}
        title="Edit Story Images"
      >
        <div className="space-y-4">
          {content.storyImages.map((placeholderImg, index) => {
            const currentValue = tempContent.storyImages?.[index] || '';
            return (
              <ImageEditor
                key={index}
                label={`Story Image ${index + 1}`}
                value={currentValue !== placeholderImg ? currentValue : ''}
                onChange={(val) => {
                  const newImages = [...(tempContent.storyImages || content.storyImages)];
                  newImages[index] = val;
                  setTempContent(prev => ({ ...prev, storyImages: newImages }));
                }}
                placeholder={placeholderImg}
                autoFocus={index === 0}
              />
            );
          })}
        </div>
      </EditorDrawer>

      {/* Timeline Editor */}
      <EditorDrawer
        isOpen={editingSection === 'timeline'}
        onClose={() => setEditingSection(null)}
        title="Edit Event Timeline"
      >
        <TimelineEditor
          events={tempContent.timeline || content.timeline}
          onChange={(val) => setTempContent(prev => ({ ...prev, timeline: val }))}
          autoFocus
        />
      </EditorDrawer>

      {/* Venues Editor */}
      <EditorDrawer
        isOpen={editingSection === 'venues'}
        onClose={() => setEditingSection(null)}
        title="Edit Venues"
      >
        <div className="space-y-6">
          {(tempContent.venues || content.venues).map((venue, index) => (
            <div key={index} className="p-4 border-2 border-gray-200 rounded-xl space-y-3">
              <h4 className="font-semibold text-gray-700">Venue {index + 1}</h4>
              <TextEditor
                label="Type (e.g., The Ceremony, The Reception)"
                value={venue.type}
                onChange={(val) => {
                  const newVenues = [...(tempContent.venues || content.venues)];
                  newVenues[index].type = val;
                  setTempContent(prev => ({ ...prev, venues: newVenues }));
                }}
                autoFocus={index === 0}
              />
              <TextEditor
                label="Venue Name"
                value={venue.name}
                onChange={(val) => {
                  const newVenues = [...(tempContent.venues || content.venues)];
                  newVenues[index].name = val;
                  setTempContent(prev => ({ ...prev, venues: newVenues }));
                }}
              />
              <TextEditor
                label="Address"
                value={venue.address}
                onChange={(val) => {
                  const newVenues = [...(tempContent.venues || content.venues)];
                  newVenues[index].address = val;
                  setTempContent(prev => ({ ...prev, venues: newVenues }));
                }}
                multiline
              />
              <TextEditor
                label="Time"
                value={venue.time}
                onChange={(val) => {
                  const newVenues = [...(tempContent.venues || content.venues)];
                  newVenues[index].time = val;
                  setTempContent(prev => ({ ...prev, venues: newVenues }));
                }}
              />
              <ImageEditor
                label="Venue Image"
                value={tempContent.venues?.[index]?.image !== content.venues[index].image ? tempContent.venues?.[index]?.image : ''}
                onChange={(val) => {
                  const newVenues = [...(tempContent.venues || content.venues)];
                  newVenues[index].image = val;
                  setTempContent(prev => ({ ...prev, venues: newVenues }));
                }}
                placeholder={content.venues[index].image}
              />
            </div>
          ))}
        </div>
      </EditorDrawer>

      {/* FAQs Editor */}
      <EditorDrawer
        isOpen={editingSection === 'faqs'}
        onClose={() => setEditingSection(null)}
        title="Edit FAQs"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm font-semibold text-gray-700">FAQ Items</label>
            <button
              type="button"
              onClick={() => {
                const newFaqs = [...(tempContent.faqs || content.faqs), { q: '', a: '' }];
                setTempContent(prev => ({ ...prev, faqs: newFaqs }));
              }}
              className="flex items-center gap-2 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add FAQ
            </button>
          </div>

          {(tempContent.faqs || content.faqs).map((faq, index) => (
            <div key={index} className="p-4 border-2 border-gray-200 rounded-xl space-y-3 relative">
              <button
                type="button"
                onClick={() => {
                  const newFaqs = (tempContent.faqs || content.faqs).filter((_, i) => i !== index);
                  setTempContent(prev => ({ ...prev, faqs: newFaqs }));
                }}
                className="absolute top-2 right-2 p-1.5 hover:bg-red-100 text-red-500 rounded-lg transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>

              <TextEditor
                label="Question"
                value={faq.q}
                onChange={(val) => {
                  const newFaqs = [...(tempContent.faqs || content.faqs)];
                  newFaqs[index].q = val;
                  setTempContent(prev => ({ ...prev, faqs: newFaqs }));
                }}
                autoFocus={index === 0}
                placeholder="Enter question"
              />
              <TextEditor
                label="Answer"
                value={faq.a}
                onChange={(val) => {
                  const newFaqs = [...(tempContent.faqs || content.faqs)];
                  newFaqs[index].a = val;
                  setTempContent(prev => ({ ...prev, faqs: newFaqs }));
                }}
                multiline
                placeholder="Enter answer"
              />
            </div>
          ))}
        </div>
      </EditorDrawer>

      {/* Save Button */}
      <SaveButton onSave={handleSave} />
    </div>
  );
}
