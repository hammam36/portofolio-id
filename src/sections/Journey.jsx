import { useState } from "react";
import * as Icon from '../lib/icons.js';
import SectionTabs from '../components/SectionTabs.jsx';
import './Journey.css';

export default function Journey({ t }) {
  const data = t.journey;

  return (
    <section id="journey" className="py-10">
      <h2 className="text-3xl font-black mb-2 text-[var(--primary)] uppercase tracking-tighter animate-slide-up">
        {data.title}
      </h2>
      <p className="text-sm opacity-60 mb-10 animate-slide-up delay-100">{data.subtitle}</p>

      <div className="animate-slide-up delay-200">
        <SectionTabs
          tabs={[
            { id: 'work', label: data.work_title, icon: Icon.Briefcase },
            { id: 'education', label: data.education_title, icon: Icon.GraduationCap },
          ]}
          defaultTab="work"
        >
          {{
            education: <PipelineCarousel key="education-carousel" items={data.education} />,
            work: <WorkExperienceList items={data.work} />,
          }}
        </SectionTabs>
      </div>
    </section>
  );
}

/* ─── Pipeline Carousel Sub-component ─── */
function PipelineCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(() => {
    const defaultIndex = items.findIndex(item => item.default);
    return defaultIndex !== -1 ? defaultIndex : 0;
  });

  const getPositionClass = (index) => {
    const diff = index - activeIndex;
    const total = items.length;

    let normalizedDiff = diff;
    if (Math.abs(diff) > total / 2) {
      normalizedDiff = diff > 0 ? diff - total : diff + total;
    }

    if (normalizedDiff === 0) return 'active';
    if (normalizedDiff === -1 || (normalizedDiff === total - 1 && total > 1)) return 'adjacent-prev';
    if (normalizedDiff === 1 || (normalizedDiff === -(total - 1) && total > 1)) return 'adjacent-next';
    if (normalizedDiff === -2 || (normalizedDiff === total - 2 && total > 2)) return 'far-prev';
    if (normalizedDiff === 2 || (normalizedDiff === -(total - 2) && total > 2)) return 'far-next';
    return normalizedDiff < 0 ? 'hidden-prev' : 'hidden-next';
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="journey-pipeline">
      {/* SVG Arc Background */}
      <div className="journey-pipeline-arc-container">
        <svg
          className="journey-pipeline-arc-svg"
          viewBox="0 0 2000 2000"
          style={{
            strokeDashoffset: activeIndex * -200,
            transition: 'stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          <path
            d="M 1000 1000 m -800 0 a 800 800 0 0 1 1600 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="10 10"
          />
        </svg>
      </div>

      {/* Cards Container */}
      <div className="journey-pipeline-cards">
        {items.map((item, index) => (
          <div
            key={index}
            className={`journey-pipeline-card ${getPositionClass(index)}`}
          >
            <div className="nm-inset rounded-[20px] overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.school || item.role}
                className="journey-pipeline-img"
              />
            </div>

            <h3 className="text-lg font-bold mb-1">
              {item.school || item.role}
            </h3>

            {item.major && (
              <p className="text-sm text-[var(--primary)] font-semibold mb-1">
                {item.major}
              </p>
            )}

            <p className="text-xs opacity-60 mb-4">
              {item.period}
            </p>

            <div className="journey-pipeline-desc">
              <div>
                <p className="text-sm opacity-80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="journey-pipeline-nav">
        <button
          className="journey-pipeline-btn"
          onClick={handlePrevious}
          disabled={items.length <= 1}
        >
          <Icon.ChevronLeft size={24} />
        </button>

        <button
          className="journey-pipeline-btn"
          onClick={handleNext}
          disabled={items.length <= 1}
        >
          <Icon.ChevronRight size={24} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="journey-pipeline-dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`journey-pipeline-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Work Experience Sub-component ─── */
function WorkExperienceList({ items }) {
  return (
    <div className="flex flex-col gap-6 mt-6">
      {items.map((item, index) => (
        <div key={index} className="nm-flat p-6 md:p-8 rounded-[24px] relative overflow-hidden flex flex-col md:flex-row gap-6">
          <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)] rounded-full" />
          
          {item.image && (
            <div className="w-full md:w-48 shrink-0 nm-inset rounded-2xl overflow-hidden self-start">
              <img 
                src={item.image} 
                alt={item.role || "Experience"} 
                className="w-full h-48 md:h-auto md:aspect-square object-cover"
              />
            </div>
          )}

          <div className="pl-4 flex-1">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
              <h4 className="text-lg font-bold">{item.role}</h4>
              <span className="flex items-center gap-1.5 text-xs font-mono opacity-60 mt-1 lg:mt-0">
                <Icon.Calendar size={12} />
                {item.period}
              </span>
            </div>
            <p className="text-sm font-semibold text-[var(--primary)] mb-3">{item.company}</p>
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-[6px] nm-inset text-opacity-80 text-[var(--text)] border border-[var(--primary)]/20 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}