'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import EditButton from './EditButton';

export default function EditableWrapper({
  children,
  onEdit,
  label = "Edit",
  className = ""
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    // Check if device is mobile or tablet (no hover capability)
    const checkDevice = () => {
      // Check screen width (mobile/tablet <= 1024px)
      const isTouchDevice = window.matchMedia('(max-width: 1024px)').matches;
      // Also check if device supports hover
      const hasHover = window.matchMedia('(hover: hover)').matches;
      setIsMobileOrTablet(isTouchDevice || !hasHover);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Show button if:
  // 1. Always visible on mobile/tablet, OR
  // 2. On hover for desktop
  const showButton = isMobileOrTablet || isHovered;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {showButton && (
          <EditButton onClick={onEdit} label={label} />
        )}
      </AnimatePresence>
    </div>
  );
}
