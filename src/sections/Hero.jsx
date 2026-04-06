export default function Hero({ t }) {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center items-start">
      <div className="nm-flat p-10 rounded-[40px] max-w-2xl transition-all">
        <h2 className="text-(--primary) font-bold mb-2 tracking-widest uppercase text-sm">
          {t.hero.greeting}
        </h2>
        <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          {t.hero.role}
        </h1>
        {/* Tambahan Tagline */}
        <p className="text-lg opacity-80 mb-8 leading-relaxed italic">
          "{t.hero.tagline}"
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 nm-flat rounded-full font-bold text-(--primary) active:scale-95 transition-all">
            {t.hero.cta}
          </button>
          
          {/* Tombol Resume */}
          <a 
            href="/cv-hammam.pdf" 
            download 
            className="px-8 py-3 nm-inset rounded-full font-bold opacity-70 hover:opacity-100 active:scale-95 transition-all"
          >
            {t.hero.resume}
          </a>
        </div>
      </div>
    </section>
  );
}