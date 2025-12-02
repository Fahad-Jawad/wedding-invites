'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, Plus, Trash2 } from 'lucide-react';

// Text Editor Component
export function TextEditor({ label, value, onChange, autoFocus = false, multiline = false, placeholder = "" }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [autoFocus]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none resize-none"
        />
      ) : (
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
        />
      )}
    </div>
  );
}

// Date Editor Component
export function DateEditor({ label, value, onChange, autoFocus = false }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-rose-500" />
        {label}
      </label>
      <input
        ref={inputRef}
        type="datetime-local"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
      />
    </div>
  );
}

// Image Upload/URL Editor Component
export function ImageEditor({ label, value, onChange, autoFocus = false, placeholder = '' }) {
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [autoFocus]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Upload file to server
      setUploading(true);
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Upload failed');
        }

        const data = await response.json();
        // Update with the server URL
        onChange(data.url);
      } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload image: ' + error.message);
      } finally {
        setUploading(false);
      }
    }
  };

  const currentImage = value || placeholder;

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      {/* Image Preview */}
      {currentImage && (
        <div className="mb-3 rounded-lg overflow-hidden border-2 border-gray-200 relative group">
          <img src={currentImage} alt="Preview" className="w-full h-48 object-cover" />
          {!value && placeholder && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
              Placeholder
            </div>
          )}
          {value && value !== placeholder && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
              Uploaded
            </div>
          )}
        </div>
      )}

      {/* Upload Button */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
        disabled={uploading}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="w-full mb-3 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {uploading ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Uploading...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Upload Image
          </>
        )}
      </button>

      {/* Or divider */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-gray-500">or enter URL</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* URL Input */}
      <input
        ref={inputRef}
        type="url"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com/image.jpg"
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
      />

      {/* Reset to placeholder button */}
      {value && placeholder && value !== placeholder && (
        <button
          type="button"
          onClick={() => onChange(placeholder)}
          className="mt-3 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-all"
        >
          Reset to Placeholder
        </button>
      )}
    </div>
  );
}

// Timeline Events Editor Component
export function TimelineEditor({ events, onChange, autoFocus = false }) {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [autoFocus]);

  const addEvent = () => {
    onChange([...events, { time: '', title: '', description: '', location: '' }]);
  };

  const removeEvent = (index) => {
    onChange(events.filter((_, i) => i !== index));
  };

  const updateEvent = (index, field, value) => {
    const newEvents = [...events];
    newEvents[index][field] = value;
    onChange(newEvents);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <Clock className="w-4 h-4 text-rose-500" />
          Event Timeline
        </label>
        <button
          type="button"
          onClick={addEvent}
          className="flex items-center gap-2 px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Event
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="p-4 border-2 border-gray-200 rounded-xl space-y-3 relative">
            <button
              type="button"
              onClick={() => removeEvent(index)}
              className="absolute top-2 right-2 p-1.5 hover:bg-red-100 text-red-500 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <input
              ref={index === 0 && autoFocus ? firstInputRef : null}
              type="text"
              value={event.time}
              onChange={(e) => updateEvent(index, 'time', e.target.value)}
              placeholder="Time (e.g., 4:00 PM)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all outline-none text-sm"
            />
            <input
              type="text"
              value={event.title}
              onChange={(e) => updateEvent(index, 'title', e.target.value)}
              placeholder="Event Title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all outline-none text-sm font-medium"
            />
            <textarea
              value={event.description}
              onChange={(e) => updateEvent(index, 'description', e.target.value)}
              placeholder="Description"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all outline-none text-sm resize-none"
            />
            <input
              type="text"
              value={event.location}
              onChange={(e) => updateEvent(index, 'location', e.target.value)}
              placeholder="Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all outline-none text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Location Editor Component
export function LocationEditor({ locations, onChange, autoFocus = false }) {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [autoFocus]);

  const addLocation = () => {
    onChange([...locations, { name: '', address: '', time: '', mapUrl: '' }]);
  };

  const removeLocation = (index) => {
    onChange(locations.filter((_, i) => i !== index));
  };

  const updateLocation = (index, field, value) => {
    const newLocations = [...locations];
    newLocations[index][field] = value;
    onChange(newLocations);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-rose-500" />
          Locations
        </label>
        <button
          type="button"
          onClick={addLocation}
          className="flex items-center gap-2 px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Location
        </button>
      </div>

      <div className="space-y-4">
        {locations.map((location, index) => (
          <div key={index} className="p-4 border-2 border-gray-200 rounded-xl space-y-3 relative">
            <button
              type="button"
              onClick={() => removeLocation(index)}
              className="absolute top-2 right-2 p-1.5 hover:bg-red-100 text-red-500 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <input
              ref={index === 0 && autoFocus ? firstInputRef : null}
              type="text"
              value={location.name}
              onChange={(e) => updateLocation(index, 'name', e.target.value)}
              placeholder="Venue Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all outline-none text-sm font-medium"
            />
            <textarea
              value={location.address}
              onChange={(e) => updateLocation(index, 'address', e.target.value)}
              placeholder="Full Address"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all outline-none text-sm resize-none"
            />
            <input
              type="text"
              value={location.time}
              onChange={(e) => updateLocation(index, 'time', e.target.value)}
              placeholder="Time (e.g., 4:00 PM - 6:00 PM)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all outline-none text-sm"
            />
            <input
              type="url"
              value={location.mapUrl}
              onChange={(e) => updateLocation(index, 'mapUrl', e.target.value)}
              placeholder="Google Maps URL (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition-all outline-none text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
