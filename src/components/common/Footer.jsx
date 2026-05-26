import React from "react";
import { Rocket, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-slate-400 py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-2 text-left">
          <div className="flex items-center gap-2.5 mb-6 text-white text-2xl font-black tracking-tight">
            <Rocket className="text-primary" size={32} />
            <span>MoTrack</span>
          </div>
          <p className="max-w-sm text-slate-400 mb-8 leading-relaxed font-medium">
            Platform manajemen proyek masa depan. Membantu tim Anda bekerja
            lebih cepat dan lebih terukur dengan teknologi terbaik.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 hover:text-white transition-all flex items-center justify-center text-slate-400 cursor-pointer">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 hover:text-white transition-all flex items-center justify-center text-slate-400 cursor-pointer">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 hover:text-white transition-all flex items-center justify-center text-slate-400 cursor-pointer">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="text-left">
          <h4 className="text-white font-extrabold text-sm mb-6 uppercase tracking-wider">Produk</h4>
          <ul className="space-y-4 text-xs font-semibold">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Fitur Utama
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Integrasi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Harga
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Update
              </a>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="text-white font-extrabold text-sm mb-6 uppercase tracking-wider">Perusahaan</h4>
          <ul className="space-y-4 text-xs font-semibold">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Karir
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5 mt-16 pt-8 text-center text-xs font-medium text-slate-500">
        <p>
          &copy; 2026 MoTrack System. All rights reserved. Dibuat dengan cinta untuk efisiensi digital.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
