'use client';

import { Edit3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EditButton({ onClick, label = "Edit" }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="absolute top-2 right-2 z-50 bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium transition-all duration-200"
    >
      <Edit3 className="w-4 h-4" />
      <span>{label}</span>
    </motion.button>
  );
}
