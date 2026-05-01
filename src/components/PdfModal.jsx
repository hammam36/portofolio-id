import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as Icon from '../lib/icons.js';

export default function PdfModal({ url, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (url) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [url]);

  if (!url || !mounted) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm animate-slide-up" onClick={onClose} style={{ animationDuration: '0.3s' }}>
      <div className="nm-flat p-4 md:p-6 rounded-[24px] w-full max-w-5xl h-[85vh] relative flex flex-col nm-card" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4 px-2">
          <h3 className="font-bold text-lg text-[var(--text)]">Document Preview</h3>
          <button onClick={onClose} className="p-2 nm-flat rounded-full text-red-500 hover:scale-105 transition-transform">
            <Icon.X size={20} />
          </button>
        </div>
        <div className="flex-1 nm-inset rounded-[16px] overflow-hidden bg-white/5 relative">
          <iframe src={url} className="w-full h-full border-none bg-white absolute inset-0" title="PDF File" />
        </div>
      </div>
    </div>,
    document.body
  );
}
