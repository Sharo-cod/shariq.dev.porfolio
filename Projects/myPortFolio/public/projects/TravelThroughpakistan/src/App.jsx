import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Travel from "./components/Travel";
import About from "./components/About";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness
      easing: (t) => t, // easing function
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
