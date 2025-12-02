export const FloralCorner = ({ position = "top-left", className = "" }) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0 rotate-90";
      case "bottom-left":
        return "bottom-0 left-0 -rotate-90";
      case "bottom-right":
        return "bottom-0 right-0 rotate-180";
      default:
        return "";
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} ${className}`}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          {/* Main large flower */}
          <circle cx="40" cy="40" r="8" fill="#fda4af" opacity="0.8"/>
          <circle cx="35" cy="35" r="6" fill="#fecdd3" opacity="0.9"/>
          <circle cx="45" cy="35" r="6" fill="#fecdd3" opacity="0.9"/>
          <circle cx="35" cy="45" r="6" fill="#fecdd3" opacity="0.9"/>
          <circle cx="45" cy="45" r="6" fill="#fecdd3" opacity="0.9"/>
          <circle cx="40" cy="40" r="4" fill="#fb7185"/>

          {/* Medium flower */}
          <circle cx="80" cy="30" r="6" fill="#fda4af" opacity="0.8"/>
          <circle cx="76" cy="27" r="4" fill="#fecdd3" opacity="0.9"/>
          <circle cx="84" cy="27" r="4" fill="#fecdd3" opacity="0.9"/>
          <circle cx="76" cy="33" r="4" fill="#fecdd3" opacity="0.9"/>
          <circle cx="84" cy="33" r="4" fill="#fecdd3" opacity="0.9"/>
          <circle cx="80" cy="30" r="3" fill="#fb7185"/>

          {/* Small flower */}
          <circle cx="60" cy="70" r="5" fill="#fda4af" opacity="0.8"/>
          <circle cx="57" cy="67" r="3" fill="#fecdd3" opacity="0.9"/>
          <circle cx="63" cy="67" r="3" fill="#fecdd3" opacity="0.9"/>
          <circle cx="57" cy="73" r="3" fill="#fecdd3" opacity="0.9"/>
          <circle cx="63" cy="73" r="3" fill="#fecdd3" opacity="0.9"/>
          <circle cx="60" cy="70" r="2" fill="#fb7185"/>

          {/* Leaves and vines */}
          <path d="M 40 40 Q 50 50 60 70" stroke="#86efac" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 40 40 Q 60 35 80 30" stroke="#86efac" strokeWidth="2" fill="none" opacity="0.4"/>
          <ellipse cx="55" cy="55" rx="8" ry="4" fill="#86efac" opacity="0.3" transform="rotate(-45 55 55)"/>
          <ellipse cx="70" cy="45" rx="7" ry="3" fill="#86efac" opacity="0.3" transform="rotate(30 70 45)"/>
        </g>
      </svg>
    </div>
  );
};

export const FloralDivider = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          {/* Center flower */}
          <circle cx="150" cy="30" r="10" fill="#fda4af" opacity="0.8"/>
          <circle cx="145" cy="25" r="7" fill="#fecdd3" opacity="0.9"/>
          <circle cx="155" cy="25" r="7" fill="#fecdd3" opacity="0.9"/>
          <circle cx="145" cy="35" r="7" fill="#fecdd3" opacity="0.9"/>
          <circle cx="155" cy="35" r="7" fill="#fecdd3" opacity="0.9"/>
          <circle cx="150" cy="30" r="5" fill="#fb7185"/>

          {/* Left flowers */}
          <circle cx="120" cy="35" r="6" fill="#fda4af" opacity="0.7"/>
          <circle cx="116" cy="32" r="4" fill="#fecdd3" opacity="0.8"/>
          <circle cx="124" cy="32" r="4" fill="#fecdd3" opacity="0.8"/>
          <circle cx="120" cy="35" r="3" fill="#fb7185"/>

          <circle cx="90" cy="40" r="5" fill="#fda4af" opacity="0.6"/>
          <circle cx="87" cy="38" r="3" fill="#fecdd3" opacity="0.7"/>
          <circle cx="93" cy="38" r="3" fill="#fecdd3" opacity="0.7"/>
          <circle cx="90" cy="40" r="2" fill="#fb7185"/>

          {/* Right flowers */}
          <circle cx="180" cy="35" r="6" fill="#fda4af" opacity="0.7"/>
          <circle cx="176" cy="32" r="4" fill="#fecdd3" opacity="0.8"/>
          <circle cx="184" cy="32" r="4" fill="#fecdd3" opacity="0.8"/>
          <circle cx="180" cy="35" r="3" fill="#fb7185"/>

          <circle cx="210" cy="40" r="5" fill="#fda4af" opacity="0.6"/>
          <circle cx="207" cy="38" r="3" fill="#fecdd3" opacity="0.7"/>
          <circle cx="213" cy="38" r="3" fill="#fecdd3" opacity="0.7"/>
          <circle cx="210" cy="40" r="2" fill="#fb7185"/>

          {/* Decorative lines */}
          <path d="M 20 30 Q 60 30 90 40" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 280 30 Q 240 30 210 40" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.4"/>

          {/* Small leaves */}
          <ellipse cx="70" cy="28" rx="6" ry="3" fill="#86efac" opacity="0.3" transform="rotate(-20 70 28)"/>
          <ellipse cx="230" cy="28" rx="6" ry="3" fill="#86efac" opacity="0.3" transform="rotate(20 230 28)"/>
        </g>
      </svg>
    </div>
  );
};

export const FloatingFlower = ({ delay = 0, className = "" }) => {
  return (
    <div
      className={`animate-float-slow ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.15">
          <circle cx="60" cy="60" r="15" fill="#fda4af"/>
          <circle cx="50" cy="50" r="12" fill="#fecdd3"/>
          <circle cx="70" cy="50" r="12" fill="#fecdd3"/>
          <circle cx="50" cy="70" r="12" fill="#fecdd3"/>
          <circle cx="70" cy="70" r="12" fill="#fecdd3"/>
          <circle cx="60" cy="60" r="8" fill="#fb7185"/>
        </g>
      </svg>
    </div>
  );
};
