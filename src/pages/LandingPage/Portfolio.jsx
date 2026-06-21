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
    <div className="card group p-0 flex flex-col overflow-hidden">
      <div className="relative h-60 overflow-hidden bg-brand-lightest shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-brand-lightest flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-brand-lighter text-brand-dark">
              <Sparkles size={20} />
            </div>
            <span className="text-neutral-400 text-xs font-semibold">Dokumen Proyek Terkait</span>
          </div>
        )}

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-brand-dark text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-brand-lighter">
          {project.category}
        </span>
      </div>

      {/* Teks Konten */}
      <div className="p-6 flex flex-col flex-1 text-left justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-brand transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-6">
            {project.desc}
          </p>
        </div>

        {/* Links */}
        <div className="border-t border-neutral-100 pt-5 flex items-center gap-4 mt-auto">
          {project.demoUrl && project.demoUrl !== "#" ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-600 font-semibold text-xs hover:text-brand-dark transition-colors duration-200"
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
              className="flex items-center gap-1.5 text-neutral-600 font-semibold text-xs hover:text-brand-dark transition-colors duration-200"
            >
              <Github size={14} />
              <span>Repositori</span>
            </a>
          ) : null}

          {!project.demoUrl && !project.repoUrl && (
            <span className="text-neutral-400 text-xs font-medium">
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
    <section id="portfolio" className="section bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-center">
            <span className="badge mb-4">Portofolio Kami</span>
          </div>
          
          <h2 className="section-heading">
            Karya Terbaik yang Telah Kami Selesaikan
          </h2>
          
          <p className="section-subheading">
            Bukti nyata komitmen kami membantu merealisasikan ide digital dengan kualitas visual dan fungsional kelas dunia.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer border ${
                filter === cat
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 border-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <PortfolioCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
