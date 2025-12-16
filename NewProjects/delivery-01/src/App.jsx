// App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]); // Shared cart state

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
