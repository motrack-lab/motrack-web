import React from "react";
import { Link } from "react-router-dom";
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
      "Desain Template Standar",
      "Input Konten Mandiri",
    ],
    ctaText: "Pesan Sekarang",
  },
  {
    name: "Company Profile",
    price: "1.800.000",
    badge: "Pilihan UMKM",
    description:
      "Tingkatkan kredibilitas bisnis Anda dengan website profil perusahaan yang lengkap dan informatif.",
    features: [
      "Domain (.com / .id) 1 Tahun",
      "Sertifikat Keamanan SSL (HTTPS)",
      "Multi-Page (Maks. 5 Halaman)",
      "Desain Modern",
      "Galeri Portofolio Interaktif",
      "Formulir Kontak Pintar (Email/WA)",
      "Desain Template Standar",
      "Input Konten Mandiri",
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
    price: "6.500.000",
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
    <div className="divide-y divide-neutral-100 rounded-[2.2rem] border border-neutral-200 bg-white transition-all duration-200 flex flex-col h-full relative group">
      {pkg.badge && (
        <div className="absolute -top-3 left-6">
          <span className={`${pkg.badge === "Best Value!" ? "bg-warning" : "bg-brand"} text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider`}>
            {pkg.badge}
          </span>
        </div>
      )}

      <div className="p-8">
        <h2 className="text-lg font-extrabold text-neutral-900 mb-2 tracking-tight text-left">
          {pkg.name}
        </h2>

        <p className="text-neutral-500 text-xs leading-relaxed mb-6 text-left font-medium">
          {pkg.description}
        </p>

        <div className="mb-6 text-left">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
            Mulai Dari
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-brand-dark font-extrabold text-lg">Rp</span>
            <strong className="text-3xl font-black text-brand-dark sm:text-4xl tracking-tight">
              {pkg.price}
            </strong>
          </div>
        </div>

        {pkg.name === "Company Profile" ? (
          <div className="mt-4 flex flex-col gap-2">
            <Link
              to="/cafe"
              className="block w-full text-center text-xs btn-primary"
            >
              Lihat Detail Khusus Kafe
            </Link>
            <a
              href="https://wa.me/6281249175576"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-xs btn-secondary"
            >
              Konsultasi WA
            </a>
          </div>
        ) : (
          <a
            href="https://wa.me/6281249175576"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 block w-full text-center text-xs ${
              pkg.ctaText === "Konsultasi Proyek" ? "btn-secondary" : "btn-primary"
            }`}
          >
            {pkg.ctaText}
          </a>
        )}
      </div>

      {/* Bottom Section */}
      <div className="p-8 flex-1 text-left">
        <p className="text-[10px] font-extrabold text-neutral-400 mb-5 uppercase tracking-wider">
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
                className="size-4 text-success shrink-0 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
              <span className="text-neutral-600 text-xs font-semibold leading-relaxed">
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
          <h2 className="text-4xl md:text-5xl font-black text-center text-neutral-900 tracking-tight leading-tight">
            Paket Website
          </h2>
          <p className="text-sm font-semibold text-center text-neutral-900 tracking-tight leading-tight">
            Transparan, Terjangkau, Berkualitas Tinggi.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <PricingCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
