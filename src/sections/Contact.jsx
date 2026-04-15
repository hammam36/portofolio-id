import React, { useState } from 'react';
import * as Icon from '../lib/icons.js';
import "./Contact.css";

export default function Contact({ t }) {
  const data = t.contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — bisa dihubungkan ke EmailJS, Formspree, dsb.
    alert(`Pesan dari ${formData.name} terkirim!`);
    setFormData({ name: '', email: '', message: '' });
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

          <button
            type="submit"
            className="flex items-center justify-center gap-2 p-4 nm-flat rounded-xl font-bold text-[var(--primary)] active:scale-95 transition-all hover:nm-inset"
          >
            <Icon.Send size={16} />
            {data.form.send}
          </button>
        </form>

        {/* Info Kontak — 2 kolom */}
        <div className="lg:col-span-2 flex flex-col gap-6 animate-slide-up delay-300">
          {/* Card Info */}
          <div className="nm-flat p-6 rounded-[24px]">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-5">
              {data.info_title}
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 nm-inset rounded-lg">
                  <Icon.Mail size={16} className="text-[var(--primary)]" />
                </div>
                <span className="text-sm font-semibold">{data.info.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 nm-inset rounded-lg">
                  <Icon.Phone size={16} className="text-[var(--primary)]" />
                </div>
                <span className="text-sm font-semibold">{data.info.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 nm-inset rounded-lg">
                  <Icon.MapPin size={16} className="text-[var(--primary)]" />
                </div>
                <span className="text-sm font-semibold">{data.info.location}</span>
              </div>
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
    </section>
  );
}
