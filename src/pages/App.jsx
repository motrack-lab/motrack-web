import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import CafePage from "./CafePage";
import InvoicePage from "./InvoicePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cafe" element={<CafePage />} />
      <Route path="/invoice" element={<InvoicePage />} />
    </Routes>
  );
}

export default App;
