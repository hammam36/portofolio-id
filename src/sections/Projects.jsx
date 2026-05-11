import { useState } from "react";
import ImageModal from "../components/ImageModal.jsx";
import * as Icon from '../lib/icons.js';
import "./Projects.css";

export default function Projects({ t }) {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-black mb-2 text-gold-gradient uppercase tracking-tighter animate-slide-up">
        {t.projects.title}
      </h2>
      <p className="text-sm opacity-60 mb-10 animate-slide-up delay-100">{t.projects.subtitle}</p>
      
      {/* Grid Sistem: 1 kolom di HP, 2 kolom di Tablet, 3 kolom di Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.projects.list.map((proj, index) => (
          <div key={index} className="nm-flat rounded-[30px] flex flex-col justify-between overflow-hidden animate-slide-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
            {/* Project Image Header */}
            <div 
              className="nm-inset m-4 rounded-[22px] overflow-hidden relative group cursor-zoom-in"
              onClick={() => setFullScreenImage(proj.image)}
            >
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-75"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 bg-black/50 text-white rounded-full backdrop-blur-sm shadow-xl">
                  <Icon.ZoomIn size={24} />
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 pt-2 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">{proj.name}</h3>
                <p className="text-sm opacity-80 mb-6">{proj.desc}</p>
              </div>
              
              {/* Menampilkan Badge Teknologi */}
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold px-3 py-1 nm-inset rounded-full text-[var(--primary)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal src={fullScreenImage} onClose={() => setFullScreenImage(null)} />
    </section>
  );
}