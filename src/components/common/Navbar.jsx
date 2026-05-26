import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Beranda", id: "home" },
    { name: "Layanan", id: "features" },
    { name: "Tentang", id: "about" },
    { name: "Portofolio", id: "portfolio" },
    { name: "Paket Web", id: "pricing" },
    { name: "Copywriting", id: "copywriting" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-slate-100/80 shadow-[0_4px_30px_rgba(15,23,42,0.03)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer shrink-0 transition-transform active:scale-95"
          onClick={() => scrollToSection("home")}
        >
          <img src={logo} alt="MoTrack Logo" className="h-8 md:h-9" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-slate-600 hover:text-primary transition-all duration-300 font-semibold text-[13px] tracking-wide relative group py-2 cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-800 focus:outline-none p-1 bg-slate-50 rounded-xl"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100 py-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-slate-600 hover:text-primary transition-colors text-left font-bold text-sm py-2 border-b border-slate-50 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
