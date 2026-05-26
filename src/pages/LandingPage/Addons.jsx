import React from "react";
import { Check, ArrowRight } from "lucide-react";

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
    <div className="bg-white rounded-[2rem] p-8 border border-[#C4E2F5]/80 hover:border-[#2C5EAD]/40 hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-left group">
      
      {/* Teks Penjelasan */}
      <div className="flex-1 max-w-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-[#C4E2F5]/30 text-[#2C5EAD] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            {addon.badge}
          </span>
        </div>
        
        <h3 className="text-xl font-extrabold text-[#2C5EAD] mb-2 tracking-tight group-hover:text-[#1591DC] transition-colors duration-300">
          {addon.name}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed font-medium">
          {addon.description}
        </p>
      </div>

      {/* Detail Layanan Singkat */}
      <div className="shrink-0 w-full lg:w-auto lg:border-l lg:border-slate-100 lg:pl-8">
        <ul className="space-y-2">
          {addon.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1591DC] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Harga & CTA */}
      <div className="shrink-0 w-full lg:w-auto flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 lg:border-l lg:border-slate-100 lg:pl-8">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5 text-left lg:text-right">
            Estimasi
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-[#2C5EAD] font-extrabold text-sm">Rp</span>
            <span className="text-2xl font-black text-[#2C5EAD]">
              {addon.price}
            </span>
          </div>
        </div>

        <a
          href="https://wa.me/6281249175576"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 text-white hover:bg-[#2C5EAD] font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-95 group-hover:shadow-md group-hover:shadow-[#2C5EAD]/10"
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
    <section id="addons" className="py-16 px-6 bg-white relative border-t border-[#C4E2F5]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-7xl mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Layanan Tambahan Sesuai Kebutuhan
          </h2>
          <p className="mt-4 font-medium text-sm text-slate-500">Pilih paket yang sesuai dengan kebutuhanmu</p>
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
