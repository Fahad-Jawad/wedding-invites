'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Clock, MapPin, User, MessageSquare, Check, X, Map } from 'lucide-react';
import { FloralCorner, FloralDivider } from '@/components/FloralDecor';
import { RingsIcon, HeartRingsIcon, ChampagneIcon, CakeIcon, RoseDecoration, FloralBouquet } from '@/components/WeddingDecorations';

export default function Template1Preview({ content }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: content?.guestData?.name || '',
    email: content?.guestData?.email || '',
    message: ''
  });

  const [attendance, setAttendance] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Update form data when content changes (for guest data pre-filling)
  useEffect(() => {
    if (content?.guestData?.name && formData.name !== content.guestData.name) {
      setFormData(prev => ({
        ...prev,
        name: content.guestData.name,
        email: content.guestData.email || prev.email,
      }));
    }
  }, [content?.guestData?.name, content?.guestData?.email]);

  useEffect(() => {
    if (!content?.weddingDate) return;

    const weddingDate = new Date(content.weddingDate);
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
  }, [content]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (attendance === null) {
      alert('Please select whether you will attend');
      return;
    }

    // If there's guest data, submit RSVP to backend
    if (content?.guestData?._id) {
      setSubmitting(true);
      try {
        const response = await fetch(`/api/guests/rsvp/${content.guestData._id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            attending: attendance,
          }),
        });

        if (response.ok) {
          setSubmitSuccess(true);
        } else {
          alert('Failed to submit RSVP. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting RSVP:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setSubmitting(false);
      }
    } else {
      // Fallback for preview without guest data
      alert(`Thank you ${formData.name}! Your RSVP has been received.`);
      setFormData({ name: '', email: '', message: '' });
      setAttendance(null);
    }
  };

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

  // Default content if not provided
  const data = content || {
    brideName: 'Sarah',
    groomName: 'James',
    tagline: 'Together with their families, joyfully invite you to celebrate their union',
    weddingDate: '2026-06-15T16:00',
    weddingDateDisplay: 'June 15, 2026 • 4:00 PM',
    storyTitle: 'A Love Story Written in the Stars',
    story1: 'Five years ago, fate brought us together at a small coffee shop in the heart of the city.',
    story2: 'Now, we\'re ready to embark on our greatest adventure yet.',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
    storyImage: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80'
    ],
    venueImage: 'https://images.unsplash.com/photo-1519167758481-83f29da8fd22?w=1000&q=80',
    locations: [
      {
        name: 'The Grand Cathedral',
        address: '123 Wedding Lane\nLove City, LC 12345',
        time: '4:00 PM',
        type: 'Ceremony Location'
      },
      {
        name: 'Grand Ballroom',
        address: '456 Celebration Avenue\nLove City, LC 12345',
        time: '6:30 PM',
        type: 'Reception Venue'
      }
    ],
    timeline: [
      {
        time: '4:00 PM',
        title: 'Ceremony',
        description: 'Join us as we exchange our vows',
        location: 'The Grand Cathedral'
      },
      {
        time: '5:30 PM',
        title: 'Cocktail Reception',
        description: 'Enjoy cocktails and canapés',
        location: 'Garden Terrace'
      },
      {
        time: '6:30 PM',
        title: 'Reception Dinner',
        description: 'A delightful feast',
        location: 'Grand Ballroom'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Decorations */}
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-rose-50/80 to-white/90 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url("${data.heroImage}")` }}
          ></div>
        </div>

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
              {data.brideName} <span className="text-rose-400 font-light italic">&</span> {data.groomName}
            </h1>
          </motion.div>

          <motion.div
            className="flex justify-center my-12"
            variants={fadeInUp}
          >
            <div className="relative">
              <Heart className="w-20 h-20 text-rose-400 fill-rose-400 drop-shadow-lg" />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-14 px-4">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light italic max-w-4xl mx-auto leading-relaxed">
              {data.tagline}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-16">
            <div className="inline-flex items-center gap-6 bg-white/95 backdrop-blur-md px-5 md:px-10 md:px-14 py-7 rounded-full shadow-2xl border border-rose-100">
              <Calendar className="w-8 h-8 text-rose-400" />
              <div className="text-left">
                <div className="text-sm text-gray-500 uppercase tracking-wider">Wedding Date</div>
                <div className="text-xl md:text-2xl font-semibold text-gray-800">{data.weddingDateDisplay}</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-16" variants={fadeInUp}>
            <FloralDivider />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 relative bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-serif text-gray-800 mb-6">Our Love Story</h2>
            <FloralDivider className="scale-75" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${data.storyImage}")` }}
                ></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
                {data.storyTitle}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">{data.story1}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{data.story2}</p>
            </motion.div>
          </div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {data.galleryImages?.map((img, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-xl aspect-square"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${img}")` }}
                ></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-rose-50/90 to-white/95"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-6xl md:text-7xl font-serif text-gray-800 mb-6">Counting Every Moment</h2>
            <FloralDivider className="scale-75 mb-6" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item) => (
                <div key={item.label} className="bg-white/95 rounded-3xl p-8 shadow-2xl">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-rose-400 to-pink-400 bg-clip-text text-transparent mb-3">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-gray-600 text-base uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue */}
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
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${data.venueImage}")` }}
              ></div>
            </div>

            <div className="space-y-6">
              {data.locations?.map((location, index) => (
                <div key={index} className="flex items-start gap-4 bg-rose-50 p-6 rounded-xl border border-rose-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{location.type}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{location.name}\n{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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

          <div className="space-y-8">
            {data.timeline?.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Clock className="w-6 h-6 text-rose-400" />
                  <span className="text-xl font-semibold text-rose-500">{event.time}</span>
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                {event.location && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>{event.location}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-rose-50/95 to-white/95"></div>
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
          </motion.div>

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl shadow-2xl p-10 md:p-14 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center"
              >
                <Check className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                Thank You!
              </h3>
              <p className="text-xl text-gray-700 mb-2">
                Your RSVP has been received, {formData.name}!
              </p>
              <p className="text-gray-600">
                {attendance === 'attending'
                  ? "We're so excited to celebrate with you!"
                  : "We'll miss you on our special day."}
              </p>
              <div className="mt-8">
                <FloralDivider className="scale-75" />
              </div>
            </motion.div>
          ) : (
          <form onSubmit={handleSubmit} className="bg-white/98 rounded-3xl shadow-2xl p-10 md:p-14">
            <div className="space-y-8">
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
                  className="w-full px-6 py-4 rounded-xl border-2 border-rose-100 focus:border-rose-400 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-gray-700 font-semibold mb-3 text-lg">
                  <MessageSquare className="w-5 h-5 text-rose-400" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl border-2 border-rose-100 focus:border-rose-400 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

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
                  className="w-full px-6 py-4 rounded-xl border-2 border-rose-100 focus:border-rose-400 focus:outline-none resize-none"
                  placeholder="Share your best wishes..."
                ></textarea>
              </div>

              <div>
                <label className="text-gray-700 font-semibold mb-4 text-lg block">
                  Will you be attending? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`py-6 px-6 rounded-xl font-semibold transition-all ${
                      attendance === 'attending'
                        ? 'bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-xl'
                        : 'bg-rose-50 border-2 border-rose-200 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Check className="w-7 h-7" />
                      <span>Accept</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('not-attending')}
                    className={`py-6 px-6 rounded-xl font-semibold transition-all ${
                      attendance === 'not-attending'
                        ? 'bg-gradient-to-br from-gray-400 to-gray-500 text-white shadow-xl'
                        : 'bg-gray-50 border-2 border-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <X className="w-7 h-7" />
                      <span>Decline</span>
                    </div>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-6 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center gap-3">
                  <Heart className="w-6 h-6 fill-white" />
                  <span>{submitting ? 'Submitting...' : 'Send RSVP'}</span>
                </div>
              </button>
            </div>
          </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-rose-100"></div>
        <div className="container mx-auto text-center relative z-10">
          <FloralDivider className="mb-8 scale-75" />
          <p className="text-2xl font-serif text-gray-700 mb-4 italic">
            We can't wait to celebrate with you
          </p>
          <p className="text-gray-500 text-lg mb-8">
            {data.brideName} & {data.groomName} • {data.weddingDateDisplay}
          </p>
          <Heart className="w-6 h-6 text-rose-400 fill-rose-400 mx-auto" />
        </div>
      </footer>
    </div>
  );
}
