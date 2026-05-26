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
    <section id="about" className="py-16 px-6 bg-[#FCFDFE]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 w-full flex justify-center items-center order-2 md:order-1">
          <img
            src={agencyIllustration}
            alt="MoTrack Agency Illustration"
            className="w-full max-w-[450px] object-contain "
          />
        </div>

        <div className="flex-1 max-w-xl text-left order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
            Solusi <span className="text-black">Cerdas!</span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 font-medium">
            Kami memahami bahwa tidak ada dua bisnis yang sama. Oleh karena itu,
            kami meluangkan waktu untuk benar-benar mengerti kebutuhan unik
            Anda.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#1591DC] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-[#1591DC]/20 relative z-10">
                  {step.num}
                </div>

                <div className="pt-0.5">
                  <h4 className="text-gray-900 font-extrabold text-sm mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-[85%]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("pricing")}
              className="bg-[#1591DC] hover:bg-[#2C5EAD] text-white px-8 py-3.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-lg shadow-[#1591DC]/20 cursor-pointer active:scale-95"
            >
              Mulai Sekarang
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="border-2 border-[#C4E2F5] text-[#2C5EAD] hover:bg-[#C4E2F5]/20 px-8 py-3.5 rounded-xl font-bold text-xs transition-all duration-300 cursor-pointer active:scale-95"
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
