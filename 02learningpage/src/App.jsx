import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Content1 from "./components/Content1";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route for "/" */}
        <Route path="/" element={<Content1 />} />

        {/* Optional: /home route */}
        <Route path="/home" element={<Content1 />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
