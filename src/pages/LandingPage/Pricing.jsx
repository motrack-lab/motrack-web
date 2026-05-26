import React from "react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Landing Page",
    price: "850.000",
    badge: "Best Value!",
    description:
      "Solusi cepat dan profesional untuk promosi produk atau jasa Anda dengan satu halaman fokus.",
    features: [
      "Gratis Domain (.com / .id) 1 Tahun",
      "Sertifikat Keamanan SSL (HTTPS)",
      "Responsive di HP, Tablet, & Laptop",
      "Tombol WhatsApp Melayang (CTA)",
      "Basic SEO Setup (Google Ready)",
    ],
    ctaText: "Pesan Sekarang",
  },
  {
    name: "Company Profile",
    price: "1.500.000",
    badge: "Pilihan UMKM",
    description:
      "Tingkatkan kredibilitas bisnis Anda dengan website profil perusahaan yang lengkap dan informatif.",
    features: [
      "Gratis Domain (.com / .id) 1 Tahun",
      "Sertifikat Keamanan SSL (HTTPS)",
      "Multi-Page (Maks. 5 Halaman)",
      "Desain Modern",
      "Galeri Portofolio Interaktif",
      "Formulir Kontak Pintar (Email/WA)",
    ],
    ctaText: "Pesan Sekarang",
  },
  {
    name: "E-Commerce",
    price: "4.500.000",
    badge: null,
    description:
      "Mulai berjualan online dengan sistem katalog, keranjang belanja, dan manajemen pesanan yang otomatis.",
    features: [
      "Gratis Domain (.com / .id) 1 Tahun",
      "Sertifikat Keamanan SSL (HTTPS)",
      "Katalog Produk & Pencarian Pintar",
      "Sistem Keranjang Belanja",
      "Dashboard Manajemen Stok & Pesanan",
    ],
    ctaText: "Pesan Sekarang",
  },
  {
    name: "Sistem Informasi",
    price: "6.000.000",
    badge: "Skala Instansi",
    description:
      "Sistem kustom untuk manajemen data kompleks seperti portal sekolah, CMS instansi, atau dashboard internal.",
    features: [
      "Gratis Domain Instansi & VPS (1 Tahun)",
      "Full-Stack Custom System (Security High)",
      "Dashboard Admin Interaktif",
      "Manajemen Database Terstruktur",
      "Login Multi-Role (Admin/Guru/Siswa)",
      "Export Laporan (PDF/Excel)",
      "Support & Maintenance Proyek",
    ],
    ctaText: "Konsultasi Proyek",
  },
];

const PricingCard = ({ pkg }) => {
  return (
    <div className="divide-y divide-slate-100 rounded-[2.2rem] border border-slate-400 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_50px_rgba(30,86,160,0.06)] hover:border-primary/30 transition-all duration-500 flex flex-col h-full relative group hover:scale-[1.01]">
      {pkg.badge && (
        <div className="absolute -top-3 left-6">
          <span className="bg-primary text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-primary/25">
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="p-8">
        <h2 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight text-left">
          {pkg.name}
        </h2>

        <p className="text-slate-500 text-xs leading-relaxed mb-6 text-left font-medium">
          {pkg.description}
        </p>

        <div className="mb-6 text-left">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Mulai Dari
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-slate-900 font-extrabold text-lg">Rp</span>
            <strong className="text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">
              {pkg.price}
            </strong>
          </div>
        </div>

        <a
          href="https://wa.me/6281249175576"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block rounded-full bg-primary px-8 py-3.5 text-center text-xs font-bold !text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 shadow-lg shadow-primary/10 cursor-pointer active:scale-98"
        >
          {pkg.ctaText}
        </a>
      </div>

      {/* Bottom Section */}
      <div className="p-8 flex-1 text-left">
        <p className="text-[10px] font-extrabold text-slate-400 mb-5 uppercase tracking-wider">
          Apa Saja Yang Didapat?
        </p>

        <ul className="space-y-4">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3.5"
                stroke="currentColor"
                className="size-4 text-primary shrink-0 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
              <span className="text-slate-600 text-xs font-semibold leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-7xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900 tracking-tight leading-tight">
            Paket Website
          </h2>
          <p className="text-sm font-semibold text-center text-slate-900 tracking-tight leading-tight">
            Transparan, Terjangkau, Berkualitas Tinggi.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <PricingCard key={index} pkg={pkg} />
          ))}
        </div>

        {/* Footer info */}
        {/* <div className="mt-20 p-10 rounded-[2.5rem] bg-primary-dark text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl shadow-primary-dark/10">
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-left relative z-10">
            <h4 className="text-xl font-extrabold text-white">
              Butuh solusi kustom atau sistem yang lebih kompleks?
            </h4>
            <p className="text-slate-400 text-sm mt-2 font-medium">
              Tim kami siap membantu menganalisis kebutuhan teknis proyek Anda.
            </p>
          </div>
          
          <a
            href="https://wa.me/6281249175576"
            className="flex items-center gap-2.5 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 shadow-xl text-xs cursor-pointer active:scale-95 shrink-0 relative z-10"
          >
            <span>Konsultasikan Sekarang</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
