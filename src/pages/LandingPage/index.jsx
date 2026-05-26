import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Hero from "./Hero";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Addons from "./Addons";
import CopywritingPricing from "./CopywritingPricing";
import About from "./About";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Portfolio />
      <Pricing />
      <CopywritingPricing />
      <Addons />
      <Footer />
    </div>
  );
};

export default LandingPage;
