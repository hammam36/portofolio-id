import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as Icon from '../lib/icons.js';

export default function ImageModal({ src, alt, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (src) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [src]);

  if (!src || !mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-slide-up" 
      onClick={onClose}
      style={{ animationDuration: '0.2s' }}
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
      >
        <Icon.X size={24} />
      </button>
      
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={src} 
          alt={alt || "Fullscreen Image"} 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>,
    document.body
  );
}
