import React from "react";
import { ArrowRight } from "lucide-react";

const addons = [
  {
    name: "Pengembangan Fitur & Halaman Custom",
    price: "100.000",
    badge: "Mulai Dari",
    description:
      "Perlu penambahan halaman custom, struktur database baru, integrasi API pihak ketiga, atau revisi desain di luar cakupan standar?",
    features: [
      "Penambahan Halaman Baru Terpadu",
      "Integrasi API & Payment Gateway",
      "Kustomisasi Dashboard Admin",
    ],
    ctaText: "Hubungi Layanan",
  },
  {
    name: "Perpanjangan Domain Tahunan",
    price: "200.000",
    badge: "Tahunan",
    description:
      "Biaya sewa alamat unik website (.com / .id / .my.id) untuk tahun kedua dan seterusnya, termasuk penataan DNS & Whois Privacy.",
    features: [
      "Domain .com: Rp 180.000 / tahun",
      "Domain .id: Rp 250.000 / tahun",
      "Domain .my.id: Rp 100.000 / tahun",
    ],
    ctaText: "Perpanjang Sekarang",
  },
  {
    name: "Perpanjangan Hosting & Server Pro",
    price: "400.000",
    badge: "Mulai Dari",
    description:
      "Layanan sewa server cloud untuk menjaga agar website Anda tetap beroperasi dengan optimal, aman, serta dicadangkan secara rutin.",
    features: [
      "Hosting Statis Ringan: Rp 400.000/thn",
      "Cloud VPS (CMS/E-Commerce): Rp 1.000.000/thn",
      "Sertifikat Keamanan SSL Harian",
    ],
    ctaText: "Perpanjang Sekarang",
  },
];

const AddonRow = ({ addon }) => {
  return (
    <div className="card flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group">
      {/* Teks Penjelasan */}
      <div className="flex-1 max-w-2xl">
        <div className="mb-3">
          <span className="badge">
            {addon.badge}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand transition-colors duration-200">
          {addon.name}
        </h3>
        
        <p className="text-neutral-500 text-sm leading-relaxed">
          {addon.description}
        </p>
      </div>

      {/* Detail Layanan Singkat */}
      <div className="shrink-0 w-full lg:w-auto lg:border-l lg:border-neutral-200 lg:pl-8">
        <ul className="space-y-2">
          {addon.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Harga & CTA */}
      <div className="shrink-0 w-full lg:w-auto flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 lg:border-l lg:border-neutral-200 lg:pl-8">
        <div>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-0.5 text-left lg:text-right">
            Estimasi
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-brand-dark font-bold text-sm">Rp</span>
            <span className="text-2xl font-bold text-brand-dark">
              {addon.price}
            </span>
          </div>
        </div>

        <a
          href="https://wa.me/6281249175576"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs w-full lg:w-auto"
        >
          <span>{addon.ctaText}</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const Addons = () => {
  return (
    <section id="addons" className="section bg-white border-t border-neutral-200">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12">
          <h2 className="section-heading">
            Layanan Tambahan Sesuai Kebutuhan
          </h2>
          <p className="section-subheading">
            Pilih paket yang sesuai dengan kebutuhanmu
          </p>
        </div>

        {/* List Grid */}
        <div className="flex flex-col gap-6">
          {addons.map((addon, index) => (
            <AddonRow key={index} addon={addon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Addons;
