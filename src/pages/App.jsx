import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Tambahkan rute lain di sini nantinya */}
    </Routes>
  );
}

export default App;
