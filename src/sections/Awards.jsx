import * as Icon from '../lib/icons.js';

export default function Awards({ t }) {
  const data = t.awards;

  return (
    <section className="py-10 animate-fade">
      <h2 className="text-3xl font-black mb-10 text-[var(--primary)] uppercase tracking-tighter">
        {data.title}
      </h2>

      {/* Penghargaan */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 nm-flat rounded-xl">
            <Icon.Award size={20} className="text-[var(--primary)]" />
          </div>
          <h3 className="text-xl font-bold">{data.achievements_title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.achievements.map((item, index) => (
            <div key={index} className="nm-flat p-6 md:p-8 rounded-[24px]">
              <div className="flex items-start gap-4">
                <div className="p-2.5 nm-inset rounded-xl shrink-0">
                  <Icon.Trophy size={18} className="text-[var(--primary)]" />
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
      </div>

      {/* Sertifikasi */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 nm-flat rounded-xl">
            <Icon.BookOpen size={20} className="text-[var(--primary)]" />
          </div>
          <h3 className="text-xl font-bold">{data.certifications_title}</h3>
        </div>

        <div className="flex flex-col gap-4">
          {data.certifications.map((cert, index) => (
            <div key={index} className="nm-flat p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 nm-inset rounded-lg">
                  <Icon.GraduationCap size={16} className="text-[var(--primary)]" />
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
      </div>
    </section>
  );
}
