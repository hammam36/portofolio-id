import "./Abilities.css";

export default function Abilities({ t }) {
  const data = t.abilities;
  const tools = ["Flutter", "Dart", "Laravel", "Vue.js", "Tailwind", "Git", "VS Code"];
  
  return (
    <section className="py-10">
      <h2 className="text-3xl font-black mb-2 text-[var(--primary)] uppercase tracking-tighter animate-slide-up">
        {data.title}
      </h2>
      <p className="text-sm opacity-60 mb-10 animate-slide-up delay-100">{data.subtitle}</p>
      
      {/* Mindset Card */}
      <div className="nm-inset p-6 rounded-2xl mb-8 border-l-4 border-[var(--primary)] animate-slide-up delay-200">
        <p className="font-mono text-sm uppercase tracking-widest opacity-60 mb-2">Mindset</p>
        <p className="text-xl font-bold italic">{data.mindset}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((tool, idx) => (
          <div key={tool} className="nm-flat p-4 rounded-xl text-center font-bold hover:text-[var(--primary)] transition-all animate-slide-up" style={{ animationDelay: `${300 + idx * 50}ms` }}>
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}