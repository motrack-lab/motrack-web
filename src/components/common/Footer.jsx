import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Layanan",
    links: [
      { label: "Paket Website", href: "/#pricing" },
      { label: "Digitalisasi Kafe", href: "/cafe", isRouterLink: true },
      { label: "Copywriting", href: "/#copywriting" },
      { label: "Sistem Kustom", href: "/#pricing" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/#about" },
      { label: "Portofolio", href: "/#portfolio" },
      { label: "Testimoni", href: "#" },
      { label: "Kontak", href: "https://wa.me/6281249175576" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-darkest text-white border-t border-brand-dark">
      <div className="container-main px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 flex flex-col items-start">
          <img src={logo} alt="MoTrack" className="h-8 mb-6 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
          <p className="text-brand-lighter text-sm leading-relaxed mb-8 max-w-sm">
            Mitra digital terpercaya untuk membangun kehadiran online bisnis Anda. Dari profil elegan hingga sistem kompleks, kami wujudkan visi Anda menjadi realitas digital.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark/50 flex items-center justify-center text-brand-light hover:bg-brand hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark/50 flex items-center justify-center text-brand-light hover:bg-brand hover:text-white transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark/50 flex items-center justify-center text-brand-light hover:bg-brand hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-light mb-6">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-lighter/80">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.isRouterLink ? (
                    <Link to={l.href} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border-t border-brand-dark/50">
        <div className="container-main px-6 py-6 flex justify-center">
          <p className="text-xs text-brand-lighter/60">
            © {new Date().getFullYear()} MoTrack Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
