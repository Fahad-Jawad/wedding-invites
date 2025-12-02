'use client';

import { motion } from 'framer-motion';
import { Flower, Leaf } from 'lucide-react';

export default function LoadingTemplate3({ groomInitial = 'G', brideInitial = 'B' }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center overflow-hidden">
      {/* Animated Leaves Falling */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, Math.sin(i * 2) * 100, Math.cos(i) * 50, 0],
              rotate: [0, 180, 360, 540],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'linear',
            }}
          >
            <Leaf
              className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)}`}
              style={{
                color: ['#fbbf24', '#f59e0b', '#fb923c', '#f97316'][Math.floor(Math.random() * 4)],
                opacity: 0.6,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Flowers */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`flower-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Flower
              className="w-8 h-8"
              style={{
                color: ['#fbbf24', '#f472b6', '#fb7185', '#fda4af'][Math.floor(Math.random() * 4)],
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Vines Growing Effect - Border */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {/* Top vine */}
        <motion.path
          d="M 0,50 Q 100,30 200,50 T 400,50 T 600,50 T 800,50 T 1000,50"
          stroke="#fbbf24"
          strokeWidth="3"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        {/* Bottom vine */}
        <motion.path
          d="M 0,950 Q 100,970 200,950 T 400,950 T 600,950 T 800,950 T 1000,950"
          stroke="#f472b6"
          strokeWidth="3"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.3, ease: 'easeInOut' }}
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Circular Wreath Frame */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          {/* Outer Decorative Ring */}
          <motion.div
            className="absolute inset-0 -m-10"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width="330" height="330" viewBox="0 0 330 330" className="absolute">
              <defs>
                <linearGradient id="floral-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
              </defs>

              <circle
                cx="165"
                cy="165"
                r="160"
                fill="none"
                stroke="url(#floral-gradient)"
                strokeWidth="2"
                strokeDasharray="5,10"
                opacity="0.4"
              />

              {/* Flowers around the circle */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const radius = 160;
                const x = 165 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 165 + radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <motion.g key={i}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="#fbbf24"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  </motion.g>
                );
              })}
            </svg>
          </motion.div>

          {/* Botanical Wreath Main Circle */}
          <div
            className="relative w-80 h-80 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(254, 252, 232, 0.95))',
              boxShadow: '0 10px 40px rgba(251, 191, 36, 0.2), inset 0 0 30px rgba(244, 114, 182, 0.1)',
            }}
          >
            {/* Animated Leaf Pattern Background */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 Q 35 20, 30 30 Q 25 20, 30 10' fill='%23fbbf24'/%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Radial Light Rays */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, rgba(251, 191, 36, 0.1) 45deg, transparent 90deg, transparent 180deg, rgba(244, 114, 182, 0.1) 225deg, transparent 270deg)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Initials Container */}
            <div className="relative z-10 flex items-center justify-center gap-6">
              {/* Groom Initial with Leaf Decoration */}
              <motion.div
                className="relative"
                initial={{ x: -80, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.9, type: 'spring', bounce: 0.4 }}
              >
                {/* Leaf Corner Decorations */}
                <motion.div
                  className="absolute -top-6 -left-6"
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Leaf className="w-8 h-8 text-amber-500 opacity-60" />
                </motion.div>

                <motion.div
                  className="text-8xl font-serif font-bold bg-gradient-to-br from-amber-600 via-pink-600 to-rose-600 bg-clip-text text-transparent"
                  style={{
                    fontFamily: 'Garamond, Georgia, serif',
                  }}
                  animate={{
                    filter: [
                      'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.3))',
                      'drop-shadow(0 6px 12px rgba(244, 114, 182, 0.4))',
                      'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.3))',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                >
                  {brideInitial}
                </motion.div>

                {/* Vine decoration */}
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </motion.div>

              {/* Floral Divider */}
              <motion.div
                className="relative flex flex-col items-center"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Main Flower */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity },
                  }}
                >
                  <Flower className="w-14 h-14 text-pink-500" strokeWidth={2} />
                </motion.div>

                {/* Orbiting Small Flowers */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: 12,
                      height: 12,
                    }}
                    animate={{
                      rotate: [angle, angle + 360],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <motion.div
                      style={{
                        transform: `translateX(35px)`,
                      }}
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Flower className="w-4 h-4 text-amber-400" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Vertical vine line */}
                <motion.div
                  className="absolute top-0 left-1/2 w-0.5 h-24 -translate-x-1/2 -translate-y-full bg-gradient-to-t from-pink-400 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0.5 h-24 -translate-x-1/2 translate-y-full bg-gradient-to-b from-pink-400 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </motion.div>

              {/* Bride Initial with Leaf Decoration */}
              <motion.div
                className="relative"
                initial={{ x: 80, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.9, type: 'spring', bounce: 0.4 }}
              >
                {/* Leaf Corner Decorations */}
                <motion.div
                  className="absolute -top-6 -right-6"
                  animate={{
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  <Leaf className="w-8 h-8 text-pink-500 opacity-60" style={{ transform: 'scaleX(-1)' }} />
                </motion.div>

                <motion.div
                  className="text-8xl font-serif font-bold bg-gradient-to-br from-pink-600 via-rose-600 to-amber-600 bg-clip-text text-transparent"
                  style={{
                    fontFamily: 'Garamond, Georgia, serif',
                  }}
                  animate={{
                    filter: [
                      'drop-shadow(0 4px 8px rgba(244, 114, 182, 0.3))',
                      'drop-shadow(0 6px 12px rgba(251, 191, 36, 0.4))',
                      'drop-shadow(0 4px 8px rgba(244, 114, 182, 0.3))',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  {groomInitial}
                </motion.div>

                {/* Vine decoration */}
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </motion.div>
            </div>

            {/* Inner decorative circles */}
            <motion.div
              className="absolute inset-0 m-12 rounded-full border-2 border-amber-200"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Growing Vines from Circle */}
          {[0, 90, 180, 270].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                width: '60px',
                height: '2px',
                background: 'linear-gradient(to right, #fbbf24, transparent)',
                transformOrigin: 'left center',
                transform: `rotate(${angle}deg)`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.6 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.8 }}
            />
          ))}
        </motion.div>

        {/* Loading Text with Nature Theme */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.p
            className="text-2xl font-serif text-amber-700 mb-2"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            Growing Your Love Story
          </motion.p>

          <motion.p
            className="text-sm text-rose-600 mb-6"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Like a garden in bloom...
          </motion.p>

          {/* Animated Flower Growth */}
          <div className="flex gap-4 justify-center items-end h-12">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ height: 0 }}
                animate={{ height: `${20 + Math.random() * 20}px` }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.2,
                }}
              >
                {/* Stem */}
                <div className="w-1 bg-gradient-to-t from-amber-500 to-pink-500 h-full mx-auto" />
                {/* Flower on top */}
                <motion.div
                  className="absolute -top-2 left-1/2 -translate-x-1/2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Flower className="w-4 h-4 text-pink-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Corner Botanical Decorations */}
      {[
        { corner: 'top-4 left-4', rotate: 0 },
        { corner: 'top-4 right-4', rotate: 90 },
        { corner: 'bottom-4 left-4', rotate: -90 },
        { corner: 'bottom-4 right-4', rotate: 180 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos.corner}`}
          style={{ rotate: pos.rotate }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ delay: 1.5 + i * 0.1, duration: 0.6 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80">
            <motion.path
              d="M 10,10 Q 10,40 40,40 M 10,10 Q 40,10 40,40"
              stroke="#fbbf24"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 1 }}
            />
            {/* Leaf decoration */}
            <motion.circle
              cx="40"
              cy="40"
              r="6"
              fill="#fda4af"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
