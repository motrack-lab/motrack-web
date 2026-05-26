import React from "react";
import { Globe, Code, PenTool, FileText, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Code size={20} className="text-white" />,
    title: "Web Development",
    desc: "Pembuatan website bisnis, landing page, dan sistem informasi kustom yang responsif, cepat, dan ramah SEO.",
    tabBg: "bg-[#1591DC]",
  },
  {
    icon: <Globe size={20} className="text-white" />,
    title: "UI/UX & Web Design",
    desc: "Desain antarmuka website modern dan portofolio personal interaktif untuk meningkatkan konversi audiens Anda.",
    tabBg: "bg-[#4BB8FA]",
  },
  {
    icon: <PenTool size={20} className="text-white" />,
    title: "Copywriting Kreatif",
    desc: "Penulisan naskah iklan, skenario drama, dialog, dan konten media sosial untuk memperkuat pesan brand Anda.",
    tabBg: "bg-[#2C5EAD]",
  },
  {
    icon: <FileText size={20} className="text-white" />,
    title: "Dokumen & PPT",
    desc: "Penataan format laporan akademis/magang secara profesional dan pembuatan slide deck presentasi estetik.",
    tabBg: "bg-[#C4E2F5] text-slate-800",
  },
];

const Features = () => {
  const handleWhatsApp = (serviceTitle) => {
    const message = encodeURIComponent(`Halo MoTrack, saya tertarik dengan layanan *${serviceTitle}*. Boleh konsultasi gratis?`);
    window.open(`https://wa.me/6281249175576?text=${message}`, "_blank");
  };

  return (
    <section id="features" className="py-16 px-6 bg-[#FCFDFE] border-t border-[#C4E2F5]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Memberikan Layanan Terbaik
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-lg mx-auto">
            Berbagai jenis layanan digital terpadu yang dirancang khusus untuk mengakselerasi kesuksesan bisnis dan akademis Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-500 transition-all duration-300 flex flex-col justify-between items-start text-left relative group "
            >
              <div>
                <div className={`p-3 rounded-2xl inline-flex items-center justify-center mb-6 shadow-sm ${service.tabBg}`}>
                  {service.icon}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>
              </div>

              <button
                onClick={() => handleWhatsApp(service.title)}
                className="text-[#1591DC] font-extrabold text-xs uppercase flex items-center gap-1.5 cursor-pointer"
              >
                <span>Hubungi Kami</span>
                <ArrowRight size={14}  />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
