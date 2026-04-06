import React, { useState, useEffect } from "react";
import id from "./i18n/id.json";
import en from "./i18n/en.json";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "id");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State baru untuk menentukan halaman mana yang aktif
  const [activePage, setActivePage] = useState("about");

  const t = lang === "id" ? id : en;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLang = () => {
    const newLang = lang === "id" ? "en" : "id";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {" "}
      {/* overflow-hidden agar tidak bisa di-scroll keluar main */}
      {/* Ornamen Background Glow (Hanya Estetika) */}
      <div className="fixed -top-24 -right-24 w-96 h-96 bg-(--primary) opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed -bottom-24 -left-24 w-72 h-72 bg-purple-500 opacity-5 blur-[100px] rounded-full pointer-events-none" />
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        t={t}
        lang={lang}
        toggleLang={toggleLang}
        theme={theme}
        toggleTheme={toggleTheme}
        activePage={activePage} // Kirim ini ke sidebar
        setActivePage={setActivePage} // Kirim ini ke sidebar
      />
      <main className="flex-1 p-6 md:p-12 lg:ml-64 h-screen overflow-y-auto transition-all">
        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-8 right-8 z-50 p-5 nm-flat rounded-full text-[var(--primary)] active:scale-90 transition-all shadow-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* LOGIKA PINDAH HALAMAN */}
        <div className="animate-in fade-in duration-500">
          {activePage === "about" && <Hero t={t} />}
          {activePage === "skills" && <Skills t={t} />}
          {activePage === "projects" && <Projects t={t} />}
          {/* Kamu bisa tambah {activePage === 'contact' && <Contact t={t} />} nanti */}
        </div>
      </main>
    </div>
  );
}

export default App;
