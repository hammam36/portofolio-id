import * as Icon from '../lib/icons.js';
import SectionTabs from '../components/SectionTabs.jsx';
import './Awards.css';

export default function Awards({ t }) {
  const data = t.awards;

  return (
    <section className="py-10">
      <h2 className="text-3xl font-black mb-2 text-[var(--primary)] uppercase tracking-tighter animate-slide-up">
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((cert, index) => (
        <div key={index} className="nm-flat p-5 rounded-2xl flex items-center justify-between h-full animate-slide-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
          <div className="flex items-center gap-4">
            <div className="nm-inset rounded-[12px] overflow-hidden shrink-0">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-12 h-12 object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold">{cert.name}</h4>
              <p className="text-xs opacity-60">{cert.issuer} — {cert.year}</p>
            </div>
          </div>
          {cert.credential_url && cert.credential_url !== '#' && (
            <a
              href={cert.credential_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 nm-flat rounded-lg text-[var(--primary)] hover:scale-105 transition-transform"
            >
              <Icon.ExternalLink size={16} />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Achievements Sub-component ─── */
function Achievements({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="nm-flat p-6 md:p-8 rounded-[24px] h-full animate-slide-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
          <div className="flex items-start gap-4">
            <div className="nm-inset rounded-[16px] overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div>
              <h4 className="text-base font-bold mb-1">{item.name}</h4>
              <p className="text-xs font-semibold text-[var(--primary)] mb-2">
                {item.issuer} — {item.year}
              </p>
              <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
