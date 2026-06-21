import React from "react";
import agencyIllustration from "../../assets/images/about.png";

const steps = [
  {
    num: "1",
    title: "Hubungi Kami",
    desc: "Hubungi tim kami untuk konsultasi awal secara gratis dan sampaikan kebutuhan Anda.",
  },
  {
    num: "2",
    title: "Konsultasi",
    desc: "Kami selalu tersedia untuk berdiskusi, merancang visi, dan target spesifik proyek Anda.",
  },
  {
    num: "3",
    title: "Pengerjaan",
    desc: "Kami mulai mengeksekusi pengembangan proyek secara profesional sesuai kesepakatan.",
  },
  {
    num: "4",
    title: "Peluncuran",
    desc: "Proyek selesai dengan kualitas terbaik dan siap untuk memukau audiens Anda.",
  },
];

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section bg-brand-lightest">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 w-full flex justify-center items-center order-2 md:order-1">
          <img
            src={agencyIllustration}
            alt="MoTrack Agency Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        <div className="flex-1 max-w-xl text-left order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-4">
            Solusi <span className="text-brand-dark">Cerdas!</span>
          </h2>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-10">
            Kami memahami bahwa tidak ada dua bisnis yang sama. Oleh karena itu,
            kami meluangkan waktu untuk benar-benar mengerti kebutuhan unik
            Anda.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-semibold text-sm shrink-0">
                  {step.num}
                </div>

                <div className="pt-1">
                  <h4 className="text-neutral-900 font-semibold text-sm mb-1">
                    {step.title}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("pricing")}
              className="btn-primary"
            >
              Mulai Sekarang
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="btn-secondary"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
