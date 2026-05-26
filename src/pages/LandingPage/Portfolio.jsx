import React, { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import sarprasin from "../../assets/images/sarprasin.jpg";
import motodo from "../../assets/images/motodo.jpg";

const projects = [
  {
    category: "Website",
    title: "SARPRASIN Portal Aduan",
    desc: "Sistem aduan sarana prasarana sekolah berbasis web terpadu untuk pelaporan kerusakan fasilitas yang cepat dan terukur.",
    image: sarprasin,
    demoUrl: "https://sarprasin.eskalaber.my.id",
    repoUrl: "#",
  },
  {
    category: "Website",
    title: "MOTODO LMS",
    desc: "Platform Learning Management System (LMS) interaktif untuk manajemen materi, tugas, dan ujian siswa secara daring.",
    image: motodo,
    demoUrl: "https://motrack.eskalaber.my.id",
    repoUrl: "#",
  },
  {
    category: "Copywriting & PPT",
    title: "Pitch Deck & PPT Estetik",
    desc: "Slide presentasi bisnis modern dengan visualisasi data canggih dan tata letak yang memukau audiens.",
    image: null,
    demoUrl: "#",
    repoUrl: null,
  },
  {
    category: "Dokumen",
    title: "Laporan Magang Akademik",
    desc: "Penyusunan format dan tata bahasa laporan magang formal lengkap sesuai kaidah ilmiah universitas.",
    image: null,
    demoUrl: null,
    repoUrl: null,
  },
];

const PortfolioCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#C4E2F5]/80 transition-all duration-300 flex flex-col">
      <div className="relative h-60 overflow-hidden bg-slate-50 shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-[#C4E2F5]/30 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-[#C4E2F5]/40 text-[#2C5EAD]">
              <Sparkles size={20} />
            </div>
            <span className="text-slate-400 text-xs font-bold">Dokumen Proyek Terkait</span>
          </div>
        )}

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#2C5EAD] text-[10px] font-extrabold px-3.5 py-1.5 rounded-full shadow-sm tracking-wider uppercase border border-[#C4E2F5]/60">
          {project.category}
        </span>
      </div>

      {/* Teks Konten */}
      <div className="p-8 flex flex-col flex-1 text-left justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#2C5EAD] transition-colors duration-300 tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
            {project.desc}
          </p>
        </div>

        {/* Links */}
        <div className="border-t border-slate-50 pt-5 flex items-center gap-6 mt-auto">
          {project.demoUrl && project.demoUrl !== "#" ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 font-extrabold text-xs hover:text-[#2C5EAD] transition-colors duration-200"
            >
              <ExternalLink size={14} />
              <span>Live Preview</span>
            </a>
          ) : null}
          
          {project.repoUrl && project.repoUrl !== "#" ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 font-extrabold text-xs hover:text-[#2C5EAD] transition-colors duration-200"
            >
              <Github size={14} />
              <span>Repositori</span>
            </a>
          ) : null}

          {!project.demoUrl && !project.repoUrl && (
            <span className="text-slate-400 text-xs font-medium">
              Konsultasi via WhatsApp
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("Semua");
  const categories = ["Semua", "Website", "Copywriting & PPT", "Dokumen"];

  const filteredProjects =
    filter === "Semua"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-16 px-6 bg-slate-50/20 border-t border-[#C4E2F5]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#C4E2F5]/30 text-[#2C5EAD] font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4">
            Portofolio Kami
          </span>
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight leading-tight">
            Karya Terbaik yang Telah Kami Selesaikan
          </h2>
          
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
            Bukti nyata komitmen kami membantu merealisasikan ide digital dengan kualitas visual dan fungsional kelas dunia.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-[#2C5EAD] text-white shadow-sm shadow-[#2C5EAD]/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <PortfolioCard key={i} project={project} />
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <a
            href="https://wa.me/6281249175576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2C5EAD] text-white font-bold px-8 py-4.5 rounded-full text-sm cursor-pointer shadow-md shadow-[#2C5EAD]/10"
          >
            <ExternalLink size={16} />
            Eksplor Lebih Banyak Proyek & Konsultasi Gratis
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
