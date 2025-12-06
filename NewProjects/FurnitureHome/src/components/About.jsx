import React from "react";
import Amanullah from "../assets/images/amanullahkhan.jpeg";
import Attaullah from "../assets/images/attaullahkhan.jpg";

export default function About() {
  return (
    <>
      {/* === HERO SECTION === */}
      <section className="relative bg-stone-300 text-black py-24 px-6 sm:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6">
            About Home Furniture
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At <span className="font-semibold">Home Furniture</span>, we believe that every piece of furniture tells a story. Our passion lies in crafting elegant, timeless designs that blend comfort, style, and durability to transform your home into a place of warmth and sophistication.
          </p>
        </div>
      </section>

      {/* === MISSION & VISION SECTION === */}
      <section className="bg-stone-300 text-black py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="bg-gradient-to-br from-white to-stone-300 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our mission is to deliver top-quality, affordable furniture that enhances living spaces and reflects our customers’ personal taste. We aim to create pieces that not only look beautiful but also last for generations.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-white to-stone-300 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-semibold mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We envision a world where handcrafted furniture becomes a symbol of sustainability, creativity, and cultural expression — where each design brings harmony between tradition and modern living.
            </p>
          </div>
        </div>
      </section>

      {/* === OUR LEADERS SECTION === */}
      <section className="bg-stone-300 text-black py-24 px-6 sm:px-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          Our Leaders
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Meet the visionary minds driving Home Furniture forward — blending innovation, craftsmanship, and integrity in everything we do.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CEO */}
          <div className="bg-gradient-to-br from-white to-stone-300 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src={Amanullah}
              alt="Amanullah Khan"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Amanullah Khan</h3>
              <p className="text-gray-700 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                With over a decade of experience in the furniture industry, Amanullah ensures our craftsmanship meets the highest standards of beauty and functionality.
              </p>
            </div>
          </div>

          {/* Co-Founder */}
          <div className="bg-gradient-to-br from-white to-stone-300 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src={Attaullah}
              alt="Attaullah Khan"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Attaullah Khan</h3>
              <p className="text-gray-700 font-medium mb-3">Co-Founder & Head of Design</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Attaullah brings artistic vision and modern aesthetics into every design, ensuring each product blends elegance with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
