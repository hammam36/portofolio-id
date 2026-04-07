import * as Icon from '../lib/icons.js';

export default function Blog({ t }) {
  const data = t.blog;

  return (
    <section className="py-10 animate-fade">
      <h2 className="text-3xl font-black mb-2 text-[var(--primary)] uppercase tracking-tighter">
        {data.title}
      </h2>
      <p className="text-sm opacity-60 mb-10">{data.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.posts.map((post, index) => (
          <article key={index} className="nm-flat p-6 rounded-[24px] flex flex-col justify-between">
            <div>
              {/* Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 nm-inset rounded-full text-[var(--primary)]">
                  <Icon.Tag size={10} />
                  {post.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-3 leading-snug">{post.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed mb-4">{post.excerpt}</p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--primary)]/10">
              <div className="flex items-center gap-3 text-xs opacity-50">
                <span className="flex items-center gap-1">
                  <Icon.Calendar size={11} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Icon.Clock size={11} />
                  {post.read_time} {data.min_read}
                </span>
              </div>

              <a 
                href={post.url}
                className="flex items-center gap-1 text-xs font-bold text-[var(--primary)] hover:gap-2 transition-all"
              >
                {data.read_more}
                <Icon.ChevronRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
