import React from "react";
import heroImage from "../../assets/images/about.png"; // Reusing an image, maybe about or robot. Actually about.png is an agency illustration

const CafeHero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-brand-lightest pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-main px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <span className="badge mb-5 inline-flex">Spesialis F&B Digital</span>

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-5">
            Tingkatkan Omzet Kafe Anda Bersama <span className="text-brand-dark">MoTrack</span>
          </h1>

          <p className="text-base md:text-lg text-neutral-600 mb-8 max-w-lg mx-auto md:mx-0">
            Dari profil kafe yang elegan hingga sistem reservasi dan order mandiri (QR Order). Kami siapkan semuanya terima beres, khusus untuk bisnis F&B Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("pricing")}
              className="btn-primary"
            >
              Lihat Paket Kafe
            </button>
            <a
              href="https://wa.me/6281249175576"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="MoTrack Ilustrasi F&B"
            className="w-64 md:w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CafeHero;
