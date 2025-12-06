import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import About from "./components/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact";
import CMS from "./components/CMS";

// Service Pages (all in the same folder as other pages)
import DoorService from "./components/Doorservice";
import KitchenService from "./components/KitchenService";
import WindowsService from "./components/WindowsService";
import WoodRepair from "./components/WoodRepair";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cms" element={<CMS />} />
            <Route path="/contact" element={<Contact />} />

            {/* Individual Service Pages */}
            <Route path="/doorservice" element={<DoorService />} />
            <Route path="/kitchenservice" element={<KitchenService />} />
            <Route path="/windowsservice" element={<WindowsService />} />
            <Route path="/woodrepair" element={<WoodRepair />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
