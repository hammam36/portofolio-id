import { useState } from 'react';
import * as Icon from '../lib/icons.js';
import SectionTabs from '../components/SectionTabs.jsx';
import ImageModal from '../components/ImageModal.jsx';
import PdfModal from '../components/PdfModal.jsx';
import './Awards.css';

export default function Awards({ t }) {
  const data = t.awards;

  return (
    <section className="py-10">
      <h2 className="text-3xl font-black mb-2 text-gold-gradient uppercase tracking-tighter animate-slide-up">
        {data.title}
      </h2>
      <p className="text-sm opacity-60 mb-10 animate-slide-up delay-100">{data.subtitle}</p>

      <div className="animate-slide-up delay-200">
        <SectionTabs
          tabs={[
            { id: 'certifications', label: data.certifications_title, icon: Icon.BookOpen },
            { id: 'achievements', label: data.achievements_title, icon: Icon.Award },
          ]}
          defaultTab="certifications"
        >
          {{
            certifications: <Certifications items={data.certifications} />,
            achievements: <Achievements items={data.achievements} />,
          }}
        </SectionTabs>
      </div>
    </section>
  );
}



/* ─── Certifications Sub-component ─── */
function Certifications({ items }) {
  const [activePdf, setActivePdf] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleViewDocument = (url) => {
    if (!url) return;
    const isImage = /\.(png|jpe?g|webp)$/i.test(url);
    if (isImage) {
      setFullScreenImage(url);
    } else {
      setActivePdf(url);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((cert, index) => (
          <div key={index} className="nm-flat p-5 md:p-6 rounded-[24px] h-full animate-slide-up flex flex-col justify-between" style={{ animationDelay: `${200 + index * 100}ms` }}>
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-[70px] h-[70px] nm-inset rounded-[16px] overflow-hidden shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm md:text-base font-bold mb-1 leading-snug break-words">{cert.name}</h4>
                  <p className="text-xs md:text-sm font-semibold text-[var(--primary)] mb-1 break-words">
                    {cert.issuer}
                  </p>
                  <p className="text-xs opacity-60">{cert.year}</p>
                </div>
              </div>
            </div>
            <div className="mt-2 pt-4 border-t border-[var(--primary)]/10 flex justify-end gap-3">
              {cert.document_url && (
                <button
                  onClick={() => handleViewDocument(cert.document_url)}
                  className="px-3 py-2 flex items-center gap-2 text-xs font-bold nm-flat rounded-xl text-[var(--primary)] hover:scale-105 transition-transform"
                  title="Preview Document"
                >
                  <Icon.FileText size={16} /> <span>Preview</span>
                </button>
              )}
              {cert.credential_url && cert.credential_url !== '#' && (
                <a
                  href={cert.credential_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 flex items-center gap-2 text-xs font-bold nm-flat rounded-xl text-[var(--primary)] hover:scale-105 transition-transform"
                  title="Credential Link"
                >
                  <Icon.ExternalLink size={16} /> <span>Verify</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <PdfModal url={activePdf} onClose={() => setActivePdf(null)} />
      <ImageModal src={fullScreenImage} onClose={() => setFullScreenImage(null)} />
    </>
  );
}

/* ─── Achievements Sub-component ─── */
function Achievements({ items }) {
  const [activePdf, setActivePdf] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleViewDocument = (url) => {
    if (!url) return;
    const isImage = /\.(png|jpe?g|webp)$/i.test(url);
    if (isImage) {
      setFullScreenImage(url);
    } else {
      setActivePdf(url);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="nm-flat p-6 md:p-8 rounded-[24px] h-full animate-slide-up flex flex-col justify-between" style={{ animationDelay: `${200 + index * 100}ms` }}>
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 nm-inset rounded-[16px] overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base font-bold mb-1 break-words">{item.name}</h4>
                  <p className="text-xs font-semibold text-[var(--primary)] mb-2 break-words">
                    {item.issuer} — {item.year}
                  </p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
            </div>
            {item.document_url && (
              <div className="mt-4 pt-4 border-t border-[var(--primary)]/10 flex justify-end">
                <button
                  onClick={() => handleViewDocument(item.document_url)}
                  className="px-4 py-2 flex items-center gap-2 text-sm font-bold nm-flat rounded-xl text-[var(--primary)] hover:scale-105 transition-transform"
                >
                  <Icon.FileText size={16} /> View Document
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <PdfModal url={activePdf} onClose={() => setActivePdf(null)} />
      <ImageModal src={fullScreenImage} onClose={() => setFullScreenImage(null)} />
    </>
  );
}
