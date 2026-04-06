export default function Projects({ t }) {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-black mb-10 text-[var(--primary)] uppercase tracking-tighter">
        {t.projects.title}
      </h2>
      
      {/* Grid Sistem: 1 kolom di HP, 2 kolom di Laptop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {t.projects.list.map((proj, index) => (
          <div key={index} className="nm-flat p-8 rounded-[30px] flex flex-col justify-between">
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
        ))}
      </div>
    </section>
  );
}