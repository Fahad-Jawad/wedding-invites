'use client';

import { useState } from 'react';
import { Save, Check, X } from 'lucide-react';

export default function SaveButton({ onSave, disabled = false, className = '' }) {
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);

    try {
      await onSave();
      setStatus('success');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    } catch (error) {
      console.error('Save error:', error);
      setStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } finally {
      setSaving(false);
    }
  };

  const getButtonStyle = () => {
    if (status === 'success') {
      return 'bg-green-500 hover:bg-green-600';
    }
    if (status === 'error') {
      return 'bg-red-500 hover:bg-red-600';
    }
    return '';
  };

  const getButtonContent = () => {
    if (saving) {
      return (
        <>
          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Saving...</span>
        </>
      );
    }

    if (status === 'success') {
      return (
        <>
          <Check className="w-5 h-5" />
          <span>Saved!</span>
        </>
      );
    }

    if (status === 'error') {
      return (
        <>
          <X className="w-5 h-5" />
          <span>Failed to save</span>
        </>
      );
    }

    return (
      <>
        <Save className="w-5 h-5" />
        <span>Save Changes</span>
      </>
    );
  };

  return (
    <button
      onClick={handleSave}
      disabled={disabled || saving}
      className={`
        fixed bottom-8 right-8 z-50
        flex items-center gap-3
        px-6 py-4
        text-white rounded-2xl font-bold text-lg
        shadow-2xl hover:shadow-3xl
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95
        ${!status ? 'bg-gradient-primary hover:opacity-90' : ''}
        ${getButtonStyle()}
        ${className}
      `}
    >
      {getButtonContent()}
    </button>
  );
}
