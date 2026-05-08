import React, { useState } from 'react';
import * as Icon from '../lib/icons.js';
import "./Contact.css";

export default function Contact({ t }) {
  const data = t.contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(data.info.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ced427b6-c23b-4d8a-b2ee-02c1a2b2c048",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-black mb-2 text-[var(--primary)] uppercase tracking-tighter animate-slide-up">
        {data.title}
      </h2>
      <p className="text-sm opacity-60 mb-10 animate-slide-up delay-100">{data.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form — 3 kolom */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 nm-flat p-8 rounded-[30px] flex flex-col gap-5 animate-slide-up delay-200">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 block">
              {data.form.name}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 nm-inset rounded-xl bg-transparent outline-none text-sm font-semibold focus:ring-2 focus:ring-[var(--primary)] transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 block">
              {data.form.email}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 nm-inset rounded-xl bg-transparent outline-none text-sm font-semibold focus:ring-2 focus:ring-[var(--primary)] transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 block">
              {data.form.message}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-4 nm-inset rounded-xl bg-transparent outline-none text-sm font-semibold resize-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
            />
          </div>

          <div className="flex flex-col items-center gap-3 w-full mt-auto mb-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-[100%] md:w-[80%] flex items-center justify-center gap-2 p-4 nm-flat rounded-xl font-bold text-[var(--primary)] active:scale-95 transition-all hover:nm-inset disabled:opacity-50"
            >
              {status === 'sending' ? (
                <span className="animate-pulse">Mengirim...</span>
              ) : status === 'success' ? (
                <> <Icon.Check size={16} /> Terkirim! </>
              ) : status === 'error' ? (
                <> <Icon.X size={16} /> Gagal </>
              ) : (
                <> <Icon.Send size={16} /> {data.form.send} </>
              )}
            </button>
            <p className="text-[10px] md:text-xs opacity-50 text-center font-medium italic">
              {data.form.response_time}
            </p>
          </div>
        </form>

        {/* Info Kontak — 2 kolom */}
        <div className="lg:col-span-2 flex flex-col gap-6 animate-slide-up delay-300">
          {/* Card Info */}
          <div className="nm-flat p-6 rounded-[24px]">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-5">
              {data.info_title}
            </h3>
            <div className="flex flex-col gap-2">
              <button onClick={handleCopyEmail} className={`flex items-center gap-4 group p-3 hover:nm-flat rounded-2xl transition-all hover:text-[var(--primary)] w-full text-left ${isCopied ? 'text-[var(--primary)]' : ''}`}>
                <div className="p-3 nm-inset rounded-xl transition-colors shrink-0">
                  {isCopied ? <Icon.Check size={18} /> : <Icon.Mail size={18} />}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest">Email</span>
                  <span className="text-sm font-semibold truncate">
                    {isCopied ? (data.info.copied || "Tersalin!") : data.info.email}
                  </span>
                </div>
              </button>
              
              <a href="https://wa.me/62882007095426?text=Halo%20Hammam,%20saya%20melihat%20portofolio%20Anda!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 hover:nm-flat rounded-2xl transition-all hover:text-[var(--primary)]">
                <div className="p-3 nm-inset rounded-xl transition-colors shrink-0">
                  <Icon.MessageCircle size={18} />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest">WhatsApp</span>
                  <span className="text-sm font-semibold truncate">{data.info.phone}</span>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/myBZjnVt6CwaKCjS9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 hover:nm-flat rounded-2xl transition-all hover:text-[var(--primary)]">
                <div className="p-3 nm-inset rounded-xl transition-colors shrink-0">
                  <Icon.MapPin size={18} />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest">Location</span>
                  <span className="text-sm font-semibold truncate" title={data.info.location}>{data.info.location}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Card Sosial Media */}
          <div className="nm-flat p-6 rounded-[24px]">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-5">
              {data.social_title}
            </h3>
            <div className="flex flex-col gap-3">
              {data.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 nm-flat rounded-xl text-sm font-bold hover:text-[var(--primary)] active:scale-95 transition-all"
                >
                  <span>{social.name}</span>
                  <Icon.ExternalLink size={14} className="opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-[var(--primary)]/10 text-center">
        <p className="text-sm font-semibold opacity-60 hover:text-[var(--primary)] transition-colors">
          &copy; {new Date().getFullYear()} {data.footer || "Designed & Built by"} Hammam Mubarak.
        </p>
      </div>
    </section>
  );
}
