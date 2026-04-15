import React from 'react';
import * as Icon from '../lib/icons.js';

export default function Sidebar({ isOpen, setIsOpen, t, lang, toggleLang, theme, toggleTheme, activePage, setActivePage }) {
  
  const navItems = [
    { id: 'about', label: t.nav.about, icon: Icon.User },
    { id: 'abilities', label: t.nav.abilities || 'Abilities', icon: Icon.Zap },
    { id: 'journey', label: t.nav.journey || 'Journey', icon: Icon.Route },
    { id: 'projects', label: t.nav.projects, icon: Icon.Layers },
    { id: 'awards', label: t.nav.awards || 'Prestasi', icon: Icon.FileBadge },
    { id: 'blog', label: t.nav.blog || 'Blog', icon: Icon.NotebookPen },
    { id: 'contact', label: t.nav.contact || 'Kontak', icon: Icon.Mail },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsOpen(false);
  };

  return (
    <>
      <aside className={`
        fixed top-0 left-0 h-full w-64 z-50 p-6 nm-flat transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}>
        <h1 className="text-2xl font-bold mb-10 text-[var(--primary)] text-center italic">Hammam.</h1>

        <nav className="flex flex-col gap-3">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`p-4 rounded-2xl transition-all flex items-center gap-4 font-bold ${
                  activePage === item.id
                    ? 'nm-inset text-[var(--primary)] scale-95'
                    : 'hover:nm-flat text-gray-500'
                }`}
              >
                {IconComponent && <IconComponent size={20} strokeWidth={activePage === item.id ? 2.5 : 2} />}
                
                <span className="text-sm tracking-tight">{item.label}</span>

                {activePage === item.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bagian Bawah: Resume, Toggle Bahasa & Tema */}
        <div className="absolute bottom-10 left-6 right-6 flex flex-col gap-4">
          {/* Tombol Resume */}
          <a 
            href="/cv-hammam.pdf" 
            download
            className="flex items-center justify-center gap-2 p-3 nm-flat rounded-xl text-xs font-bold text-[var(--primary)] active:scale-95 transition-transform"
          >
            <Icon.FileDown size={16} />
            {t.hero.resume || 'Unduh CV'}
          </a>

          <button onClick={toggleLang} className="flex items-center justify-center gap-2 p-3 nm-flat rounded-xl text-xs font-bold active:scale-95 transition-transform">
            <Icon.Languages size={16} />
            {lang === 'id' ? 'English' : 'Indonesia'}
          </button>
          
          <button onClick={toggleTheme} className="flex items-center justify-center gap-2 p-3 nm-flat rounded-xl text-xs font-bold active:scale-95 transition-transform">
            {theme === 'light' ? (
              <><Icon.Moon size={16} /> Dark</>
            ) : (
              <><Icon.Sun size={16} /> Light</>
            )}
          </button>
        </div>
      </aside>

      {/* Overlay untuk mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </>
  );
}