import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "../../assets/images/robot.png";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex bg-[#FCFDFE] items-center px-6 md:px-16 pt-28 pb-16 relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 max-w-xl text-left">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            ✨ Solusi Kreatif Digital
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Selamat Datang <br />
            di <span className="text-primary">MoTrack</span>
          </h1>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
            Kami menyediakan layanan terbaik siap membantu bisnis dan personal membangun kehadiran online yang <span className="font-semibold text-slate-800">kuat, cepat, dan elegan</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <ArrowRight size={18} />
              Lihat Layanan Kami
            </button>
            
            <button
              onClick={() => scrollToSection("about")}
              className="border-2 border-slate-200 text-slate-700 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-50 hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <BookOpen size={16} />
              Pelajari Cara Kerja
            </button>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="absolute w-72 h-72 bg-primary/5 rounded-full blur-2xl -z-10 animate-pulse duration-[6000ms]" />
          <img
            src={heroImage}
            alt="MoTrack Ilustrasi"
            className="w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(30,86,160,0.12)] hover:translate-y-[-8px] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
