export const RingsIcon = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* First Ring */}
        <circle cx="35" cy="50" r="18" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="35" cy="50" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
        <circle cx="35" cy="42" r="4" fill="currentColor" opacity="0.8"/>

        {/* Second Ring */}
        <circle cx="55" cy="50" r="18" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="55" cy="50" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
        <circle cx="55" cy="42" r="4" fill="currentColor" opacity="0.8"/>

        {/* Sparkles */}
        <circle cx="25" cy="35" r="1.5" fill="currentColor"/>
        <circle cx="65" cy="35" r="1.5" fill="currentColor"/>
        <circle cx="45" cy="65" r="1.5" fill="currentColor"/>
      </g>
    </svg>
  );
};

export const HeartRingsIcon = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Heart shape */}
        <path d="M50 75 C30 60, 15 45, 15 30 C15 20, 22 15, 30 15 C38 15, 45 20, 50 27 C55 20, 62 15, 70 15 C78 15, 85 20, 85 30 C85 45, 70 60, 50 75Z" fill="currentColor" opacity="0.2"/>
        <path d="M50 75 C30 60, 15 45, 15 30 C15 20, 22 15, 30 15 C38 15, 45 20, 50 27 C55 20, 62 15, 70 15 C78 15, 85 20, 85 30 C85 45, 70 60, 50 75Z" stroke="currentColor" strokeWidth="2" fill="none"/>

        {/* Small ring */}
        <circle cx="50" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="white"/>
        <circle cx="50" cy="37" r="2" fill="currentColor"/>
      </g>
    </svg>
  );
};

export const ChampagneIcon = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Left Glass */}
        <path d="M30 45 L25 70 L35 70 L30 45Z" fill="currentColor" opacity="0.2"/>
        <path d="M30 45 L25 70 L35 70 L30 45Z" stroke="currentColor" strokeWidth="2"/>
        <line x1="23" y1="70" x2="37" y2="70" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="70" x2="30" y2="80" stroke="currentColor" strokeWidth="2"/>
        <circle cx="30" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>

        {/* Right Glass */}
        <path d="M60 45 L55 70 L65 70 L60 45Z" fill="currentColor" opacity="0.2"/>
        <path d="M60 45 L55 70 L65 70 L60 45Z" stroke="currentColor" strokeWidth="2"/>
        <line x1="53" y1="70" x2="67" y2="70" stroke="currentColor" strokeWidth="2"/>
        <line x1="60" y1="70" x2="60" y2="80" stroke="currentColor" strokeWidth="2"/>
        <circle cx="60" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>

        {/* Bubbles */}
        <circle cx="28" cy="55" r="1" fill="currentColor" opacity="0.6"/>
        <circle cx="32" cy="50" r="1" fill="currentColor" opacity="0.6"/>
        <circle cx="58" cy="55" r="1" fill="currentColor" opacity="0.6"/>
        <circle cx="62" cy="50" r="1" fill="currentColor" opacity="0.6"/>

        {/* Sparkle lines */}
        <line x1="35" y1="30" x2="38" y2="35" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="45" y1="25" x2="45" y2="30" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="55" y1="30" x2="52" y2="35" stroke="currentColor" strokeWidth="1.5"/>
      </g>
    </svg>
  );
};

export const CakeIcon = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* Bottom tier */}
        <rect x="20" y="70" width="60" height="15" fill="currentColor" opacity="0.3" rx="2"/>
        <rect x="20" y="70" width="60" height="15" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>

        {/* Middle tier */}
        <rect x="30" y="50" width="40" height="20" fill="currentColor" opacity="0.2" rx="2"/>
        <rect x="30" y="50" width="40" height="20" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>

        {/* Top tier */}
        <rect x="40" y="35" width="20" height="15" fill="currentColor" opacity="0.15" rx="2"/>
        <rect x="40" y="35" width="20" height="15" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>

        {/* Candle */}
        <rect x="48" y="25" width="4" height="10" fill="currentColor" opacity="0.3"/>
        <ellipse cx="50" cy="23" rx="3" ry="4" fill="currentColor" opacity="0.5"/>

        {/* Flame */}
        <path d="M50 18 C48 20, 48 22, 50 23 C52 22, 52 20, 50 18Z" fill="currentColor" opacity="0.6"/>

        {/* Decorative hearts */}
        <circle cx="35" cy="60" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="50" cy="60" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="65" cy="60" r="2" fill="currentColor" opacity="0.6"/>
      </g>
    </svg>
  );
};

export const RoseDecoration = ({ className = "", position = "left" }) => {
  const rotation = position === "left" ? "0" : "180";

  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotation}deg)` }}>
      <g opacity="0.3">
        {/* Main Rose */}
        <circle cx="60" cy="60" r="20" fill="#fda4af" opacity="0.4"/>
        <circle cx="60" cy="60" r="15" fill="#fb7185" opacity="0.5"/>
        <circle cx="60" cy="60" r="10" fill="#f43f5e" opacity="0.6"/>
        <circle cx="60" cy="60" r="6" fill="#e11d48" opacity="0.7"/>

        {/* Petals */}
        <ellipse cx="50" cy="50" rx="12" ry="8" fill="#fda4af" opacity="0.4" transform="rotate(-45 50 50)"/>
        <ellipse cx="70" cy="50" rx="12" ry="8" fill="#fda4af" opacity="0.4" transform="rotate(45 70 50)"/>
        <ellipse cx="50" cy="70" rx="12" ry="8" fill="#fda4af" opacity="0.4" transform="rotate(45 50 70)"/>
        <ellipse cx="70" cy="70" rx="12" ry="8" fill="#fda4af" opacity="0.4" transform="rotate(-45 70 70)"/>

        {/* Small roses */}
        <circle cx="100" cy="40" r="12" fill="#fda4af" opacity="0.3"/>
        <circle cx="100" cy="40" r="8" fill="#fb7185" opacity="0.4"/>
        <circle cx="100" cy="40" r="5" fill="#f43f5e" opacity="0.5"/>

        <circle cx="40" cy="100" r="10" fill="#fda4af" opacity="0.3"/>
        <circle cx="40" cy="100" r="7" fill="#fb7185" opacity="0.4"/>
        <circle cx="40" cy="100" r="4" fill="#f43f5e" opacity="0.5"/>

        {/* Leaves */}
        <ellipse cx="80" cy="75" rx="15" ry="8" fill="#86efac" opacity="0.3" transform="rotate(30 80 75)"/>
        <ellipse cx="65" cy="85" rx="12" ry="6" fill="#86efac" opacity="0.3" transform="rotate(-20 65 85)"/>
        <ellipse cx="55" cy="80" rx="10" ry="5" fill="#86efac" opacity="0.25" transform="rotate(10 55 80)"/>

        {/* Stems/vines */}
        <path d="M 60 80 Q 75 90 90 100" stroke="#86efac" strokeWidth="2" opacity="0.3" fill="none"/>
        <path d="M 60 80 Q 50 95 40 110" stroke="#86efac" strokeWidth="2" opacity="0.3" fill="none"/>
      </g>
    </svg>
  );
};

export const FloralBouquet = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.25">
        {/* Center large flower */}
        <circle cx="75" cy="70" r="18" fill="#fda4af" opacity="0.6"/>
        <circle cx="70" cy="65" r="12" fill="#fecdd3" opacity="0.7"/>
        <circle cx="80" cy="65" r="12" fill="#fecdd3" opacity="0.7"/>
        <circle cx="70" cy="75" r="12" fill="#fecdd3" opacity="0.7"/>
        <circle cx="80" cy="75" r="12" fill="#fecdd3" opacity="0.7"/>
        <circle cx="75" cy="70" r="8" fill="#fb7185"/>

        {/* Left flowers */}
        <circle cx="50" cy="75" r="14" fill="#fda4af" opacity="0.5"/>
        <circle cx="46" cy="72" r="9" fill="#fecdd3" opacity="0.6"/>
        <circle cx="54" cy="72" r="9" fill="#fecdd3" opacity="0.6"/>
        <circle cx="50" cy="75" r="6" fill="#fb7185" opacity="0.8"/>

        {/* Right flowers */}
        <circle cx="100" cy="75" r="14" fill="#fda4af" opacity="0.5"/>
        <circle cx="96" cy="72" r="9" fill="#fecdd3" opacity="0.6"/>
        <circle cx="104" cy="72" r="9" fill="#fecdd3" opacity="0.6"/>
        <circle cx="100" cy="75" r="6" fill="#fb7185" opacity="0.8"/>

        {/* Top flowers */}
        <circle cx="60" cy="50" r="12" fill="#fda4af" opacity="0.5"/>
        <circle cx="60" cy="50" r="7" fill="#fecdd3" opacity="0.6"/>
        <circle cx="60" cy="50" r="4" fill="#fb7185" opacity="0.8"/>

        <circle cx="90" cy="50" r="12" fill="#fda4af" opacity="0.5"/>
        <circle cx="90" cy="50" r="7" fill="#fecdd3" opacity="0.6"/>
        <circle cx="90" cy="50" r="4" fill="#fb7185" opacity="0.8"/>

        {/* Leaves scattered */}
        <ellipse cx="40" cy="85" rx="10" ry="5" fill="#86efac" opacity="0.4" transform="rotate(-30 40 85)"/>
        <ellipse cx="110" cy="85" rx="10" ry="5" fill="#86efac" opacity="0.4" transform="rotate(30 110 85)"/>
        <ellipse cx="75" cy="95" rx="12" ry="6" fill="#86efac" opacity="0.4" transform="rotate(0 75 95)"/>
        <ellipse cx="65" cy="40" rx="8" ry="4" fill="#86efac" opacity="0.4" transform="rotate(-45 65 40)"/>
        <ellipse cx="85" cy="40" rx="8" ry="4" fill="#86efac" opacity="0.4" transform="rotate(45 85 40)"/>
      </g>
    </svg>
  );
};
