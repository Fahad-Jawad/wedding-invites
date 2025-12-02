'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function LoadingTemplate1({ groomInitial = 'G', brideInitial = 'B' }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-rose-300 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Rose Petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, Math.sin(i) * 50, 0],
              rotate: [0, 360],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2C10 2 6 6 6 10C6 12.2091 7.79086 14 10 14C12.2091 14 14 12.2091 14 10C14 6 10 2 10 2Z"
                fill="#fecdd3"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Decorative Top Border */}
        <motion.div
          className="absolute -top-32 w-64 h-64 border-4 border-rose-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Ornamental Frame */}
        <motion.div
          className="relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Outer Decorative Circle */}
          <motion.div
            className="absolute inset-0 -m-8"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-rose-300 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-80px)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Main Circle with Gradient Border */}
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
              {/* Rotating Gradient Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-rose-200/30 via-pink-200/30 to-red-200/30"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Initials Container */}
              <div className="relative z-10 flex items-center justify-center gap-4">
                {/* Groom Initial */}
                <motion.div
                  className="relative"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.div
                    className="text-7xl font-serif font-bold text-rose-600"
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(225, 29, 72, 0.3)',
                        '0 0 40px rgba(225, 29, 72, 0.5)',
                        '0 0 20px rgba(225, 29, 72, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {brideInitial}
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -left-2 w-16 h-16 border-2 border-rose-300 rounded-full opacity-30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

                {/* Heart Divider */}
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="w-10 h-10 text-rose-500 fill-rose-500" />
                  {/* Pulse rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-rose-400 rounded-full"
                    animate={{
                      scale: [1, 2, 2],
                      opacity: [0.6, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 border-2 border-rose-400 rounded-full"
                    animate={{
                      scale: [1, 2, 2],
                      opacity: [0.6, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </motion.div>

                {/* Bride Initial */}
                <motion.div
                  className="relative"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.div
                    className="text-7xl font-serif font-bold text-rose-600"
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(225, 29, 72, 0.3)',
                        '0 0 40px rgba(225, 29, 72, 0.5)',
                        '0 0 20px rgba(225, 29, 72, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.3,
                    }}
                  >
                    {groomInitial}
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-16 h-16 border-2 border-rose-300 rounded-full opacity-30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.p
            className="text-2xl font-serif text-rose-700 mb-4"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Creating your invitation...
          </motion.p>

          {/* Animated Dots */}
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-rose-500 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="absolute -bottom-32 flex gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-16 bg-gradient-to-t from-rose-300 to-transparent rounded-full"
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-8 left-8 w-32 h-32 border-l-4 border-t-4 border-rose-200 rounded-tl-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-8 right-8 w-32 h-32 border-r-4 border-t-4 border-rose-200 rounded-tr-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-32 h-32 border-l-4 border-b-4 border-rose-200 rounded-bl-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-32 h-32 border-r-4 border-b-4 border-rose-200 rounded-br-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
      />
    </div>
  );
}
