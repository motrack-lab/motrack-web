import React from "react";
import { Globe, Code, PenTool, FileText } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Pembuatan website bisnis, landing page, dan sistem informasi kustom yang responsif, cepat, dan ramah SEO.",
  },
  {
    icon: Globe,
    title: "UI/UX & Web Design",
    desc: "Desain antarmuka website modern dan portofolio personal interaktif untuk meningkatkan konversi audiens Anda.",
  },
  {
    icon: PenTool,
    title: "Copywriting Kreatif",
    desc: "Penulisan naskah iklan, skenario drama, dialog, dan konten media sosial untuk memperkuat pesan brand Anda.",
  },
  {
    icon: FileText,
    title: "Dokumen & PPT",
    desc: "Penataan format laporan akademis/magang secara profesional dan pembuatan slide deck presentasi estetik.",
  },
];

const ServiceCard = ({ icon: Icon, title, description, onContact }) => (
  <div className="card group">
    <div className="w-11 h-11 rounded-lg bg-brand-lightest flex items-center justify-center mb-4 group-hover:bg-brand transition-colors duration-200">
      <Icon
        size={20}
        className="text-brand group-hover:text-white transition-colors"
      />
    </div>
    <h3 className="text-base font-semibold text-neutral-900 mb-2">{title}</h3>
    <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
      {description}
    </p>
    <button
      onClick={onContact}
      className="text-brand text-sm font-medium hover:underline cursor-pointer"
    >
      Hubungi Kami →
    </button>
  </div>
);

const Features = () => {
  const handleWhatsApp = (serviceTitle) => {
    const message = encodeURIComponent(
      `Halo MoTrack, saya tertarik dengan layanan *${serviceTitle}*. Boleh konsultasi gratis?`
    );
    window.open(`https://wa.me/6281249175576?text=${message}`, "_blank");
  };

  return (
    <section id="features" className="section bg-white">
      <div className="container-main">
        <div className="mb-12">
          <h2 className="section-heading">Memberikan Layanan Terbaik</h2>
          <p className="section-subheading">
            Berbagai jenis layanan digital terpadu yang dirancang khusus untuk
            mengakselerasi kesuksesan bisnis dan akademis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.desc}
              onContact={() => handleWhatsApp(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
