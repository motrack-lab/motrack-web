import React from "react";
import { Check } from "lucide-react";

const packages = [
  {
    name: "PAKET SMART 🖥️",
    price: "1.800.000",
    badge: "DIGITAL MENU & PROFILE",
    description:
      "Halaman profil utama untuk mengenalkan identitas kafe, jam operasional, dan fasilitas ke calon pelanggan.",
    features: [
      "Landing Page Profil Kafe",
      "Galeri Foto Estetika & Menu",
      "Katalog Menu Interaktif (Statis)",
      "Tombol Call-to-Action (CTA) WA",
      "Integrasi Google Maps",
    ],
    ctaText: "Pesan Sekarang",
    annualFee: "Biaya Layanan Tahunan: Rp 450.000/tahun (Mulai tahun ke-2, mencakup perpanjangan domain .com, hosting, dan maintenance dasar).",
  },
  {
    name: "PAKET PRO 🚀",
    price: "3.800.000",
    badge: "Best Seller",
    description:
      "Website canggih dengan fitur reservasi meja, smart input pesanan, dan manajemen dashboard untuk operasional kafe.",
    features: [
      "Semua fitur lengkap Paket Smart",
      "Reservasi Cepat Tanpa Login",
      "Smart Input Pesanan (Copas WA)",
      "Dashboard Admin",
      "1-Click WA Confirmation",
      "Invoice & DP Otomatis",
    ],
    ctaText: "Pesan Sekarang",
    annualFee: "Biaya Layanan Tahunan: Rp 950.000/tahun (Mulai tahun ke-2, mencakup perpanjangan domain, hosting, sewa Cloud Server, dan maintenance sistem).",
  },
  {
    name: "PAKET PREMIUM ⚡",
    price: "6.500.000",
    badge: "LOYALTY & WAITLIST",
    description:
      "Sistem pemesanan QR Code dan manajemen resource komprehensif, untuk efisiensi maksimal bisnis F&B Anda.",
    features: [
      "Semua fitur Paket Smart & Pro",
      "Sistem Pemesanan QR Code",
      "Dashboard Data Stock & Resource Cafe",
      "Notifikasi Pesanan Real-time",
      "Arsitektur Custom",
      "Support & Maintenance Khusus",
    ],
    ctaText: "Konsultasi Proyek",
  },
];

const CafePricingCard = ({ pkg }) => {
  const isFeatured = pkg.badge === "Best Seller";

  return (
    <div className={`divide-y divide-neutral-100 rounded-[2.2rem] border ${isFeatured ? "border-brand border-2 shadow-sm relative z-10" : "border-neutral-200"} bg-white transition-all duration-200 flex flex-col h-full relative group`}>
      {pkg.badge && (
        <div className={`absolute -top-3 ${isFeatured ? "left-1/2 -translate-x-1/2" : "left-6"}`}>
          <span className={`${isFeatured ? "bg-warning" : "bg-brand"} text-white text-[10px] font-extrabold px-6 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm`}>
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
            Investasi
          </span>
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
          className={`mt-4 block w-full text-center text-xs ${pkg.ctaText === "Konsultasi Proyek" ? "btn-secondary" : "btn-primary"}`}
        >
          {pkg.ctaText}
        </a>
      </div>

      {/* Bottom Section */}
      <div className="p-8 flex-1 flex flex-col text-left">
        <p className="text-[10px] font-extrabold text-neutral-400 mb-5 uppercase tracking-wider">
          Fitur Yang Didapat:
        </p>

        <ul className="space-y-4 mb-6 flex-1">
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

        {pkg.annualFee && (
          <div className="pt-5 border-t border-neutral-100 mt-auto">
            <p className="text-[10px] font-semibold text-neutral-400 leading-relaxed italic">
              *{pkg.annualFee}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const CafePricing = () => {
  return (
    <section id="pricing" className="py-10 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-7xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-center text-neutral-900 tracking-tight leading-tight">
            Pilihan Paket Kafe
          </h2>
          <p className="text-sm font-semibold text-center text-neutral-500 tracking-tight leading-tight mt-3">
            Pilih paket yang paling sesuai dengan kebutuhan sistem operasional F&B Anda.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <CafePricingCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CafePricing;
