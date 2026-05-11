import * as Icon from '../lib/icons.js';
import "./Abilities.css";

export default function Abilities({ t }) {
  const data = t.abilities;
  
  return (
    <section className="py-10">
      <h2 className="text-3xl font-black mb-2 text-gold-gradient uppercase tracking-tighter animate-slide-up">
        {data.title}
      </h2>
      <p className="text-sm opacity-60 mb-10 animate-slide-up delay-100">{data.subtitle}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.categories?.map((cat, idx) => {
          const IconComponent = Icon[cat.icon] || Icon.Code;
          const skillList = cat.skills.split(',').map(s => s.trim());
          
          return (
            <div 
              key={idx} 
              className="nm-flat p-5 md:p-6 rounded-[24px] flex flex-row items-stretch gap-4 md:gap-5 animate-slide-up group overflow-hidden" 
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              {/* Kiri: Ikon dan Judul */}
              <div className="flex flex-col items-start justify-center gap-3 w-[110px] md:w-[130px] shrink-0">
                <div className="p-3 md:p-4 nm-inset rounded-2xl text-[var(--primary)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <IconComponent size={28} strokeWidth={2} />
                </div>
                <h3 className="text-sm md:text-base font-bold group-hover:text-[var(--primary)] transition-colors duration-300 leading-snug w-full">
                  {cat.name}
                </h3>
              </div>

              {/* Kanan: Daftar Skill / Tools (Gaya Tag Neumorphic) */}
              <div className="flex-1 border-l border-[var(--primary)]/10 pl-4 md:pl-5 flex items-center min-w-0">
                <div className="flex flex-wrap gap-2 w-full">
                  {skillList.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] md:text-xs font-bold px-3 py-1.5 nm-inset rounded-md text-[var(--primary)] transition-colors duration-300 hover:text-[var(--hover-text)] hover:!bg-[var(--primary)] truncate max-w-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}