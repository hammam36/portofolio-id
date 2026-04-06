export default function Skills({ t }) {
  const tools = ["Flutter", "Dart", "Laravel", "Vue.js", "Tailwind", "Git", "VS Code"];
  
  return (
    <section className="py-10 animate-in slide-in-from-bottom duration-500">
      <h2 className="text-3xl font-black mb-8 text-[var(--primary)]">{t.skills.title}</h2>
      
      {/* Mindset Card */}
      <div className="nm-inset p-6 rounded-2xl mb-8 border-l-4 border-[var(--primary)]">
        <p className="font-mono text-sm uppercase tracking-widest opacity-60 mb-2">Mindset</p>
        <p className="text-xl font-bold italic">{t.skills.mindset}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <div key={tool} className="nm-flat p-4 rounded-xl text-center font-bold hover:text-[var(--primary)] transition-all">
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}