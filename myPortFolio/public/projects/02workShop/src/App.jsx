import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Listen from "./components/Listen";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="relative z-10 bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listen" element={<Listen />} />
          {/* ✅ Redirect all unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
