import { useState, useEffect } from "react";
import PdfModal from "../components/PdfModal.jsx";
import "./Hero.css";

export default function Hero({ t, setActivePage }) {
  const [currentProfession, setCurrentProfession] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  /* Cycle through professions every 3 seconds with exit/enter animation */
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentProfession((prev) => (prev + 1) % t.hero.professions.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [t.hero.professions.length]);

  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center items-center">
      {/* Layout: Mobile = column-reverse (image top), Desktop = row */}
      <div className="hero-grid w-full">

        {/* ═══ LEFT COLUMN: Avatar Card + Profession Card ═══ */}
        <div className="hero-left-col flex flex-col items-center gap-5 animate-slide-up">

          {/* Card 1: Circular Avatar */}
          <div className="nm-flat hero-avatar-card rounded-full p-2 hero-card-hover">
            <img
              src={t.hero.profileImage}
              alt="Hammam Mubarak"
              className="hero-profile-img rounded-full object-cover"
            />
          </div>

          {/* Card 2: Profession Cycler */}
          <div className="nm-flat rounded-[24px] p-4 md:p-5 hero-profession-card hero-card-hover">
            <div className="hero-profession-cycler">
              <div className="nm-inset rounded-full px-5 py-2.5 flex items-center justify-center gap-2 overflow-hidden">
                <span className="hero-profession-dot" />
                <span
                  className={`hero-profession-text font-semibold text-xs md:text-sm tracking-wide ${
                    isAnimating ? "hero-profession-exit" : "hero-profession-enter"
                  }`}
                >
                  {t.hero.professions[currentProfession]}
                </span>
              </div>

              {/* Profession Indicators */}
              <div className="flex justify-center gap-2 mt-3">
                {t.hero.professions.map((_, index) => (
                  <span
                    key={index}
                    className={`hero-profession-indicator ${
                      index === currentProfession ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ═══ MAIN CARD (Right) ═══ */}
        <div className="nm-flat p-8 md:p-10 lg:p-12 rounded-[40px] flex flex-col justify-between hero-card-main animate-slide-up delay-200">
          {/* Status Badge */}
          <div className="mb-8">
            <span className="hero-status-badge nm-inset inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold">
              <span className="hero-status-dot" />
              {t.hero.status}
            </span>
          </div>

          {/* Greeting + Name */}
          <div className="mb-6">
            <p className="text-base md:text-lg opacity-50 font-medium mb-1 tracking-wide">
              {t.hero.greeting}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              {t.hero.name}
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-base md:text-lg opacity-60 leading-relaxed mb-10 max-w-lg italic">
            "{t.hero.tagline}"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActivePage("projects")}
              className="px-8 py-3 nm-flat rounded-full font-bold text-[var(--primary)] active:scale-95 transition-all"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={() => setIsCvOpen(true)}
              className="px-8 py-3 nm-inset rounded-full font-bold opacity-70 hover:opacity-100 active:scale-95 transition-all"
            >
              {t.hero.resume}
            </button>
          </div>
        </div>

      </div>
      <PdfModal url={isCvOpen ? "/CV_Hammam_Mubarak_Resume.pdf" : null} onClose={() => setIsCvOpen(false)} />
    </section>
  );
}