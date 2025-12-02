'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function LoadingTemplate2({ groomInitial = 'G', brideInitial = 'B' }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center overflow-hidden">
      {/* Animated Geometric Background */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.cos(i) * 20, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-16 h-16 border-2 border-emerald-300 rounded-lg" />
            ) : i % 3 === 1 ? (
              <div className="w-12 h-12 border-2 border-teal-300" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            ) : (
              <div className="w-14 h-14 border-2 border-cyan-300 rounded-full" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, Math.sin(i) * 30, 0],
              y: [0, Math.cos(i) * 30, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hexagonal Frame Container */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Outer Rotating Hexagon */}
          <motion.div
            className="absolute inset-0 -m-16"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width="350" height="350" viewBox="0 0 350 350" className="absolute inset-0">
              <motion.polygon
                points="175,25 300,100 300,250 175,325 50,250 50,100"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Middle Counter-Rotating Hexagon */}
          <motion.div
            className="absolute inset-0 -m-12"
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width="300" height="300" viewBox="0 0 300 300" className="absolute inset-0">
              <motion.polygon
                points="150,20 260,80 260,220 150,280 40,220 40,80"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  pathLength: { duration: 2, delay: 0.3 },
                  opacity: { duration: 3, repeat: Infinity }
                }}
              />
              <defs>
                <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Inner Circle with Glass Effect */}
          <motion.div
            className="relative w-72 h-72 rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 253, 250, 0.9))',
              boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2), inset 0 0 30px rgba(16, 185, 129, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* Background Grid Pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
                animate={{
                  x: [0, 20],
                  y: [0, 20],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Initials Display */}
              <div className="relative flex items-center justify-center gap-6">
                {/* Groom Initial with 3D Effect */}
                <motion.div
                  className="relative"
                  initial={{ x: -100, opacity: 0, rotateY: -90 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                >
                  <motion.div
                    className="text-8xl font-bold bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent"
                    style={{
                      fontFamily: 'Georgia, serif',
                      textShadow: '2px 2px 4px rgba(16, 185, 129, 0.2)',
                    }}
                    animate={{
                      filter: [
                        'drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))',
                        'drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))',
                        'drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {brideInitial}
                  </motion.div>

                  {/* Decorative Corner Elements */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-emerald-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-teal-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </motion.div>

                {/* Sparkle Divider */}
                <motion.div
                  className="relative flex flex-col items-center gap-2"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-12 h-12 text-emerald-500" strokeWidth={2} />

                  {/* Orbiting Dots */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-teal-400 rounded-full"
                      animate={{
                        rotate: [i * 90, i * 90 + 360],
                      }}
                      style={{
                        transformOrigin: '0 0',
                        x: 24,
                        y: 24,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  ))}
                </motion.div>

                {/* Bride Initial with 3D Effect */}
                <motion.div
                  className="relative"
                  initial={{ x: 100, opacity: 0, rotateY: 90 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                >
                  <motion.div
                    className="text-8xl font-bold bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 bg-clip-text text-transparent"
                    style={{
                      fontFamily: 'Georgia, serif',
                      textShadow: '2px 2px 4px rgba(20, 184, 166, 0.2)',
                    }}
                    animate={{
                      filter: [
                        'drop-shadow(0 0 10px rgba(20, 184, 166, 0.3))',
                        'drop-shadow(0 0 20px rgba(20, 184, 166, 0.5))',
                        'drop-shadow(0 0 10px rgba(20, 184, 166, 0.3))',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.4,
                    }}
                  >
                    {groomInitial}
                  </motion.div>

                  {/* Decorative Corner Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-teal-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.3,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-emerald-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.8,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Loading Text with Modern Typography */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.p
            className="text-2xl font-light tracking-wider text-emerald-700 mb-4"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            CRAFTING YOUR STORY
          </motion.p>

          {/* Animated Progress Bar */}
          <div className="w-64 h-1 bg-emerald-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          {/* Particle Dots */}
          <div className="flex gap-3 justify-center mt-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Corner Frame Decorations */}
      {[
        { position: 'top-0 left-0', border: 'border-l-2 border-t-2', round: 'rounded-tl-2xl' },
        { position: 'top-0 right-0', border: 'border-r-2 border-t-2', round: 'rounded-tr-2xl' },
        { position: 'bottom-0 left-0', border: 'border-l-2 border-b-2', round: 'rounded-bl-2xl' },
        { position: 'bottom-0 right-0', border: 'border-r-2 border-b-2', round: 'rounded-br-2xl' },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className={`absolute ${corner.position} w-24 h-24 ${corner.border} ${corner.round} border-emerald-300/40 m-6`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
        >
          <motion.div
            className={`w-full h-full ${corner.border} ${corner.round} border-teal-300/40 m-2`}
            animate={{
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
