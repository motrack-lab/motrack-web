import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import CafePage from "./CafePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cafe" element={<CafePage />} />
    </Routes>
  );
}

export default App;
