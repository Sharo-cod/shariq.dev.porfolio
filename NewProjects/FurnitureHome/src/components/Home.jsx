import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/bg-furniture.png";
import Carousel from "./Carousel";

// Images
import sofa from "../assets/images/chair1.jpg";
import table from "../assets/images/chair2.jpg";
import chair from "../assets/images/slider1.jpg";
import decor from "../assets/images/slider2.jpg";
import decor1 from "../assets/images/slider3.jpg";
import decor2 from "../assets/images/unsplash1.jpg";
import decor3 from "../assets/images/unsplash2.jpg";
import decor4 from "../assets/images/unsplash3.jpg";

import Attaullah from "../assets/images/attaullahkhan.jpg";
import Amanullah from "../assets/images/amanullahkhan.jpeg";

const featuredFurniture = [
  decor1, decor2, decor3, decor4, sofa, table, chair, decor, 
];


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* 🌟 Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-screen bg-black text-white px-6"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-stone-200 drop-shadow-lg">
            Transform Your Home with Timeless Furniture
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            Discover elegant, durable, and affordable furniture pieces that bring
            warmth and style to every corner of your home.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white text-lg rounded-full transition-all shadow-md hover:shadow-stone-500/40"
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* 🪑 Reusable Carousels */}
      <Carousel title="Featured Furniture" images={featuredFurniture} bgColor="bg-white" />

      {/* 👑 Our Leaders Section */}
      <section className="bg-stone-300 py-20 px-6 sm:px-10 text-center text-black">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Leaders</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Meet the visionaries behind our craftsmanship and design innovation.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* CEO */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-stone-500/30 transition-transform hover:-translate-y-2">
            <img
              src={Amanullah}
              alt="CEO"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black">Amanullah Khan</h3>
              <p className="text-stone-800 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Amanullah leads our creative and strategic vision with passion and precision,
                ensuring every piece reflects timeless beauty and quality.
              </p>
            </div>
          </div>

          {/* Co-Founder */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-stone-500/30 transition-transform hover:-translate-y-2">
            <img
              src={Attaullah}
              alt="Co-Founder"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-stone-100">Attaullah Khan</h3>
              <p className="text-black font-medium mb-3">
                Co-Founder & Head of Design
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Attaullah combines creativity with functionality, bringing artistic depth to
                every furniture design we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 Why Choose Us Section */}
      <section className="bg-stone-300 py-20 px-6 sm:px-10 text-center text-black">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Why Choose Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-14 text-sm sm:text-base">
          We don’t just build furniture — we craft experiences that last a lifetime.
          Here’s what makes us different.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Premium Quality",
              text: "Each piece is crafted with the finest materials and inspected for durability, comfort, and perfection.",
            },
            {
              title: "Custom Designs",
              text: "From classic to contemporary, our designers bring your vision to life with tailor-made furniture solutions.",
            },
            {
              title: "Sustainable Craft",
              text: "We use eco-friendly materials and ethical processes to ensure beauty without compromise.",
            },
            {
              title: "Exceptional Support",
              text: "Our team provides unmatched after-sales service and guidance to make your experience seamless.",
            },
          ].map((item) => (
          <div
            key={item.title}
            className="
              bg-gradient-to-br from-white to-stone-300 
              p-8 rounded-3xl shadow-xl 
              hover:shadow-2xl hover:scale-105 
              transition-transform duration-500 
              cursor-pointer
            "
          >
            <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
          </div>
          ))}
        </div>
      </section>
    </>
  );
}
