import { motion } from 'framer-motion';

export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-80 h-80 bg-teal-200 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-1/4 w-72 h-72 bg-cyan-200 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 right-1/4 w-60 h-60 bg-emerald-300 rounded-full opacity-20 blur-3xl"
      />
    </div>
  );
};

export const LeafDecoration = ({ className = "", position = "left" }) => {
  const isLeft = position === "left";

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: isLeft ? 'scaleX(1)' : 'scaleX(-1)' }}
    >
      <g opacity="0.4">
        {/* Large leaf */}
        <ellipse cx="60" cy="80" rx="35" ry="60" fill="#34d399" opacity="0.3" transform="rotate(-30 60 80)"/>
        <ellipse cx="60" cy="80" rx="30" ry="55" fill="#10b981" opacity="0.4" transform="rotate(-30 60 80)"/>
        <path d="M 60 50 Q 65 80 60 110" stroke="#059669" strokeWidth="3" fill="none" opacity="0.5"/>

        {/* Medium leaf */}
        <ellipse cx="100" cy="60" rx="25" ry="45" fill="#34d399" opacity="0.3" transform="rotate(20 100 60)"/>
        <ellipse cx="100" cy="60" rx="20" ry="40" fill="#10b981" opacity="0.4" transform="rotate(20 100 60)"/>
        <path d="M 100 35 Q 103 60 100 85" stroke="#059669" strokeWidth="2" fill="none" opacity="0.5"/>

        {/* Small leaves */}
        <ellipse cx="80" cy="120" rx="18" ry="30" fill="#34d399" opacity="0.3" transform="rotate(-45 80 120)"/>
        <ellipse cx="80" cy="120" rx="15" ry="27" fill="#10b981" opacity="0.4" transform="rotate(-45 80 120)"/>

        <ellipse cx="120" cy="100" rx="15" ry="28" fill="#34d399" opacity="0.3" transform="rotate(35 120 100)"/>
        <ellipse cx="120" cy="100" rx="12" ry="25" fill="#10b981" opacity="0.4" transform="rotate(35 120 100)"/>

        {/* Accent dots */}
        <circle cx="70" cy="70" r="3" fill="#059669" opacity="0.6"/>
        <circle cx="90" cy="90" r="2" fill="#059669" opacity="0.6"/>
        <circle cx="110" cy="75" r="2.5" fill="#059669" opacity="0.6"/>
      </g>
    </svg>
  );
};

export const GeometricPattern = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.15">
        {/* Hexagons */}
        <path d="M 50 30 L 70 20 L 90 30 L 90 50 L 70 60 L 50 50 Z" stroke="#10b981" strokeWidth="2" fill="none"/>
        <path d="M 90 50 L 110 40 L 130 50 L 130 70 L 110 80 L 90 70 Z" stroke="#14b8a6" strokeWidth="2" fill="none"/>
        <path d="M 130 70 L 150 60 L 170 70 L 170 90 L 150 100 L 130 90 Z" stroke="#06b6d4" strokeWidth="2" fill="none"/>

        {/* Triangles */}
        <path d="M 30 80 L 50 100 L 30 120 Z" fill="#10b981" opacity="0.3"/>
        <path d="M 70 100 L 90 120 L 70 140 Z" fill="#14b8a6" opacity="0.3"/>

        {/* Circles */}
        <circle cx="60" cy="150" r="8" stroke="#10b981" strokeWidth="2" fill="none"/>
        <circle cx="120" cy="130" r="6" stroke="#14b8a6" strokeWidth="2" fill="none"/>
        <circle cx="160" cy="40" r="10" stroke="#06b6d4" strokeWidth="2" fill="none"/>
      </g>
    </svg>
  );
};

export const EucalyptusLeaf = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        {/* Stem */}
        <path d="M 50 10 Q 48 100 50 190" stroke="#059669" strokeWidth="3" fill="none"/>

        {/* Leaves - alternating */}
        <ellipse cx="35" cy="30" rx="12" ry="20" fill="#10b981" opacity="0.6" transform="rotate(-20 35 30)"/>
        <ellipse cx="65" cy="50" rx="12" ry="20" fill="#34d399" opacity="0.6" transform="rotate(20 65 50)"/>
        <ellipse cx="30" cy="70" rx="12" ry="20" fill="#10b981" opacity="0.6" transform="rotate(-20 30 70)"/>
        <ellipse cx="70" cy="90" rx="12" ry="20" fill="#34d399" opacity="0.6" transform="rotate(20 70 90)"/>
        <ellipse cx="32" cy="110" rx="12" ry="20" fill="#10b981" opacity="0.6" transform="rotate(-20 32 110)"/>
        <ellipse cx="68" cy="130" rx="12" ry="20" fill="#34d399" opacity="0.6" transform="rotate(20 68 130)"/>
        <ellipse cx="35" cy="150" rx="12" ry="20" fill="#10b981" opacity="0.6" transform="rotate(-20 35 150)"/>
        <ellipse cx="65" cy="170" rx="12" ry="20" fill="#34d399" opacity="0.6" transform="rotate(20 65 170)"/>
      </g>
    </svg>
  );
};

export const CircularText = ({ text, className = "" }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
          />
        </defs>
        <text fill="#10b981" fontSize="14" fontWeight="300" letterSpacing="6">
          <textPath href="#circlePath" startOffset="0%">
            {text.repeat(3)}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export const WeddingRingsIcon = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* First Ring with diamond */}
        <circle cx="35" cy="50" r="20" stroke="currentColor" strokeWidth="3.5" fill="none" opacity="0.9"/>
        <circle cx="35" cy="50" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>

        {/* Diamond on first ring */}
        <g transform="translate(35, 30)">
          <path d="M 0,-6 L 3,0 L 0,6 L -3,0 Z" fill="currentColor" opacity="0.9"/>
          <circle cx="0" cy="0" r="2" fill="currentColor"/>
        </g>

        {/* Second Ring with diamond */}
        <circle cx="58" cy="50" r="20" stroke="currentColor" strokeWidth="3.5" fill="none" opacity="0.9"/>
        <circle cx="58" cy="50" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>

        {/* Diamond on second ring */}
        <g transform="translate(58, 30)">
          <path d="M 0,-6 L 3,0 L 0,6 L -3,0 Z" fill="currentColor" opacity="0.9"/>
          <circle cx="0" cy="0" r="2" fill="currentColor"/>
        </g>

        {/* Sparkles around rings */}
        <g opacity="0.7">
          <path d="M 20 35 L 22 37 L 20 39 L 18 37 Z" fill="currentColor"/>
          <path d="M 73 35 L 75 37 L 73 39 L 71 37 Z" fill="currentColor"/>
          <path d="M 46 65 L 48 67 L 46 69 L 44 67 Z" fill="currentColor"/>
          <circle cx="25" cy="60" r="1.5" fill="currentColor"/>
          <circle cx="68" cy="60" r="1.5" fill="currentColor"/>
        </g>
      </g>
    </svg>
  );
};

export const FloralFrame = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {/* Corner flowers */}
        <circle cx="8" cy="8" r="4" fill="#10b981" opacity="0.4"/>
        <circle cx="8" cy="8" r="2.5" fill="#34d399" opacity="0.6"/>
        <circle cx="5" cy="6" r="2" fill="#10b981" opacity="0.3"/>
        <circle cx="11" cy="6" r="2" fill="#10b981" opacity="0.3"/>

        <circle cx="52" cy="8" r="4" fill="#14b8a6" opacity="0.4"/>
        <circle cx="52" cy="8" r="2.5" fill="#2dd4bf" opacity="0.6"/>
        <circle cx="49" cy="6" r="2" fill="#14b8a6" opacity="0.3"/>
        <circle cx="55" cy="6" r="2" fill="#14b8a6" opacity="0.3"/>

        <circle cx="8" cy="52" r="4" fill="#06b6d4" opacity="0.4"/>
        <circle cx="8" cy="52" r="2.5" fill="#22d3ee" opacity="0.6"/>
        <circle cx="5" cy="50" r="2" fill="#06b6d4" opacity="0.3"/>
        <circle cx="11" cy="50" r="2" fill="#06b6d4" opacity="0.3"/>

        <circle cx="52" cy="52" r="4" fill="#10b981" opacity="0.4"/>
        <circle cx="52" cy="52" r="2.5" fill="#34d399" opacity="0.6"/>
        <circle cx="49" cy="50" r="2" fill="#10b981" opacity="0.3"/>
        <circle cx="55" cy="50" r="2" fill="#10b981" opacity="0.3"/>

        {/* Leaves */}
        <ellipse cx="15" cy="8" rx="3" ry="6" fill="#86efac" opacity="0.3" transform="rotate(30 15 8)"/>
        <ellipse cx="45" cy="8" rx="3" ry="6" fill="#86efac" opacity="0.3" transform="rotate(-30 45 8)"/>
        <ellipse cx="15" cy="52" rx="3" ry="6" fill="#86efac" opacity="0.3" transform="rotate(-30 15 52)"/>
        <ellipse cx="45" cy="52" rx="3" ry="6" fill="#86efac" opacity="0.3" transform="rotate(30 45 52)"/>
      </g>
    </svg>
  );
};

export const CustomMonogram = ({ className = "", initials = "E&A" }) => {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Outer circle with floral pattern */}
        <circle cx="60" cy="60" r="55" stroke="url(#monogramGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
        <circle cx="60" cy="60" r="48" stroke="url(#monogramGradient)" strokeWidth="1" fill="none" opacity="0.5"/>

        {/* Inner decorative elements */}
        <circle cx="60" cy="15" r="3" fill="url(#monogramGradient)" opacity="0.6"/>
        <circle cx="60" cy="105" r="3" fill="url(#monogramGradient)" opacity="0.6"/>
        <circle cx="15" cy="60" r="3" fill="url(#monogramGradient)" opacity="0.6"/>
        <circle cx="105" cy="60" r="3" fill="url(#monogramGradient)" opacity="0.6"/>

        {/* Diagonal decorative dots */}
        <circle cx="30" cy="30" r="2" fill="url(#monogramGradient)" opacity="0.5"/>
        <circle cx="90" cy="30" r="2" fill="url(#monogramGradient)" opacity="0.5"/>
        <circle cx="30" cy="90" r="2" fill="url(#monogramGradient)" opacity="0.5"/>
        <circle cx="90" cy="90" r="2" fill="url(#monogramGradient)" opacity="0.5"/>

        {/* Center initials */}
        <text
          x="60"
          y="72"
          fontSize="36"
          fontFamily="serif"
          fontWeight="600"
          textAnchor="middle"
          fill="url(#monogramGradient)"
        >
          {initials}
        </text>

        {/* Small hearts */}
        <path d="M60 45 L62 43 L64 45 L62 47 Z" fill="url(#monogramGradient)" opacity="0.7"/>

        <defs>
          <linearGradient id="monogramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
};
