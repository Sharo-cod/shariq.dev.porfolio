import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Dashboard from "./components/Dashboard/Dashboard"
import Contact from "./components/Contact";
import CMS from "./components/CMS";


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cms" element={<CMS />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
