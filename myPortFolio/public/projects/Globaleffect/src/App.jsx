import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <main className="pt-20"> {/* ✅ Padding so content isn’t hidden under Navbar */}
          <Routes>
            {/* ✅ Home page as default */}
            <Route path="/" element={<Home />} />

            {/* Other pages */}
            <Route path="/explore" element={<Explore />} />

            {/* ✅ Fallback: redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
