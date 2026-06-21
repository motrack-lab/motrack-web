import React from "react";
import logo from "../../assets/images/logo.png";
import { Github, Twitter, Linkedin } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Produk",
    links: [
      { label: "Fitur Utama", href: "#" },
      { label: "Integrasi", href: "#" },
      { label: "Harga", href: "#" },
      { label: "Update", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-darkest text-white">
      <div className="container-main px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="MoTrack" className="h-7 mb-4 brightness-0 invert" />
          <p className="text-brand-lighter text-sm leading-relaxed mb-6">
            Platform manajemen proyek masa depan. Membantu tim Anda bekerja
            lebih cepat dan lebih terukur dengan teknologi terbaik.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-brand-light hover:text-white transition-colors cursor-pointer">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-brand-light hover:text-white transition-colors cursor-pointer">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-brand-light hover:text-white transition-colors cursor-pointer">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-light mb-4">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-brand-lighter">
              {col.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-brand-dark py-5 text-center text-xs text-brand-lightest">
        © 2026 MoTrack System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
