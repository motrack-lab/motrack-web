import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import CafePricing from "./CafePricing";

const CafePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-24">
      <Navbar />
      <CafePricing />
      <Footer />
    </div>
  );
};

export default CafePage;
