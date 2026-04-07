import * as Icon from '../lib/icons.js';

export default function Experience({ t }) {
  const exp = t.experience;

  return (
    <section className="py-10 animate-fade">
      <h2 className="text-3xl font-black mb-10 text-[var(--primary)] uppercase tracking-tighter">
        {exp.title}
      </h2>

      {/* Pengalaman Kerja */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 nm-flat rounded-xl">
            <Icon.Briefcase size={20} className="text-[var(--primary)]" />
          </div>
          <h3 className="text-xl font-bold">{exp.work_title}</h3>
        </div>

        <div className="flex flex-col gap-6">
          {exp.work.map((item, index) => (
            <div key={index} className="nm-flat p-6 md:p-8 rounded-[24px] relative overflow-hidden">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)] rounded-full" />
              
              <div className="pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-bold">{item.role}</h4>
                  <span className="flex items-center gap-1.5 text-xs font-mono opacity-60 mt-1 md:mt-0">
                    <Icon.Calendar size={12} />
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--primary)] mb-3">{item.company}</p>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kegiatan & Lomba */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 nm-flat rounded-xl">
            <Icon.Trophy size={20} className="text-[var(--primary)]" />
          </div>
          <h3 className="text-xl font-bold">{exp.activity_title}</h3>
        </div>

        <div className="flex flex-col gap-6">
          {exp.activities.map((item, index) => (
            <div key={index} className="nm-flat p-6 md:p-8 rounded-[24px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)] rounded-full opacity-50" />
              
              <div className="pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <span className="flex items-center gap-1.5 text-xs font-mono opacity-60 mt-1 md:mt-0">
                    <Icon.Calendar size={12} />
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--primary)] mb-3">{item.organizer}</p>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
