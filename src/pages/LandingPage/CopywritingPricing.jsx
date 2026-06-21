import React from "react";
import { Check } from "lucide-react";

const copyPackages = [
  {
    name: "Laporan PKL (Santai)",
    price: "150.000",
    badge: "Paling Rapi",
    description: "Bantuan profesional merapikan laporan PKL/Magang sesuai standar akademik dengan waktu pengerjaan normal.",
    features: [
      "Waktu Pengerjaan 3 - 4 Hari",
      "2x Revisi Minor",
      "Penataan Struktur Bab",
      "Perbaikan Tata Bahasa (PUEBI)",
      "Daftar Isi & Pustaka Otomatis",
    ],
    ctaText: "Pesan Sekarang",
  },
  {
    name: "Laporan PKL (Kebut)",
    price: "250.000",
    badge: "Kilat!",
    description: "Layanan prioritas untuk Anda yang butuh laporan rapi dalam waktu singkat tanpa kompromi kualitas.",
    features: [
      "Pengerjaan 1x24 Jam (Prioritas Utama)",
      "1x Revisi Cepat",
      "Penataan Struktur Bab",
      "Perbaikan Tata Bahasa (PUEBI)",
      "Daftar Isi & Pustaka Otomatis",
    ],
    ctaText: "Pesan Sekarang",
  },
  {
    name: "Naskah (Tinggal Poles)",
    price: "200.000",
    badge: "Mulai Dari",
    description: "Ubah ide dan karakter yang Anda miliki menjadi naskah dialog yang hidup dan siap untuk dipentaskan.",
    features: [
      "Waktu Pengerjaan 3 - 5 Hari",
      "2x Revisi Dialog",
      "Klien Punya Ide & Tokoh",
      "Format Naskah Standar",
      "Dialog yang Mengalir",
      "Sinopsis & Penokohan Dasar",
    ],
    ctaText: "Pesan Sekarang",
  },
  {
    name: "Naskah (Terima Beres)",
    price: "350.000",
    badge: "Full Service",
    description: "Konsep murni dari penulis. Kami riset dan buatkan naskah lengkap dari nol untuk kebutuhan Anda.",
    features: [
      "Waktu Pengerjaan 5 - 7 Hari",
      "Full Concept (Riset Penulis)",
      "Ide Murni dari Penulis",
      "Format Naskah Profesional",
      "Dialog & Scene Terstruktur",
      "Sinopsis, Premis & Penokohan",
    ],
    ctaText: "Pesan Sekarang",
  },
];

const CopyCard = ({ pkg }) => {
  return (
    <div className="divide-y divide-neutral-100 rounded-[2.2rem] border border-neutral-200 bg-white transition-all duration-200 flex flex-col h-full relative group">
      {pkg.badge && (
        <div className="absolute -top-3 left-6">
          <span className={`${pkg.badge === "Kilat!" ? "bg-warning" : "bg-brand"} text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider`}>
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Top Section */}
      <div className="p-8">
        <h2 className="text-lg font-extrabold text-neutral-900 mb-2 tracking-tight text-left">
          {pkg.name}
        </h2>

        <p className="text-neutral-500 text-xs leading-relaxed mb-6 text-left font-medium">
          {pkg.description}
        </p>

        <div className="mb-6 text-left">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Investasi</span>
          <div className="flex items-baseline gap-1">
            <span className="text-brand-dark font-extrabold text-lg">Rp</span>
            <strong className="text-3xl font-black text-brand-dark sm:text-4xl tracking-tight">
              {pkg.price}
            </strong>
          </div>
        </div>

        <a
          href="https://wa.me/6281249175576"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center text-xs btn-primary"
        >
          {pkg.ctaText}
        </a>
      </div>

      {/* Bottom Section */}
      <div className="p-8 flex-1 text-left">
        <p className="text-[10px] font-extrabold text-neutral-400 mb-5 uppercase tracking-wider">Layanan Spesifik:</p>

        <ul className="space-y-4">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="size-4 text-success shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
              <span className="text-neutral-600 text-xs font-semibold leading-relaxed"> {feature} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CopywritingPricing = () => {
  return (
    <section id="copywriting" className="py-16 px-6 bg-brand-lightest">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Copywriting 
          </h2>
          <p className="font-semibold text-xs text-neutral-500">Pilih paket yang sesuai dengan kebutuhanmu</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 items-stretch">
          {copyPackages.map((pkg, index) => (
            <CopyCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopywritingPricing;
