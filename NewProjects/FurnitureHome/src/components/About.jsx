import React from "react";
import Amanullah from "../assets/images/amanullahkhan.jpeg";
import Attaullah from "../assets/images/attaullahkhan.jpg";

export default function About() {
  return (
    <>
      {/* === HERO SECTION === */}
      <section className="relative bg-stone-900 text-white py-24 px-6 sm:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-4xl font-bold text-stone-200 mb-6">
            About Home Furniture
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            At <span className="text-stone-100 font-semibold">Home Furniture</span>,
            we believe that every piece of furniture tells a story. Our passion lies in
            crafting elegant, timeless designs that blend comfort, style, and durability
            to transform your home into a place of warmth and sophistication.
          </p>
        </div>
      </section>

      {/* === MISSION & VISION SECTION === */}
      <section className="bg-stone-800 text-white py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="bg-stone-700 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all">
            <h2 className="text-3xl font-semibold text-stone-200 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Our mission is to deliver top-quality, affordable furniture that enhances
              living spaces and reflects our customers’ personal taste. We aim to create
              pieces that not only look beautiful but also last for generations.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-stone-700 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all">
            <h2 className="text-3xl font-semibold text-stone-200 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              We envision a world where handcrafted furniture becomes a symbol of
              sustainability, creativity, and cultural expression — where each design
              brings harmony between tradition and modern living.
            </p>
          </div>
        </div>
      </section>

      {/* === OUR LEADERS SECTION === */}
      <section className="bg-stone-900 text-white py-24 px-6 sm:px-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-200 mb-8">
          Our Leaders
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Meet the visionary minds driving Home Furniture forward — blending innovation,
          craftsmanship, and integrity in everything we do.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CEO */}
          <div className="bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-stone-500/30 hover:-translate-y-2 transition-all">
            <img
              src={Amanullah}
              alt="Amanullah Khan"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-stone-100">
                Amanullah Khan
              </h3>
              <p className="text-stone-300 font-medium mb-3">
                Chief Executive Officer
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                With over a decade of experience in the furniture industry, Amanullah
                ensures our craftsmanship meets the highest standards of beauty and
                functionality.
              </p>
            </div>
          </div>

          {/* Co-Founder */}
          <div className="bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-stone-500/30 hover:-translate-y-2 transition-all">
            <img
              src={Attaullah}
              alt="Attaullah Khan"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-stone-100">
                Attaullah Khan
              </h3>
              <p className="text-stone-300 font-medium mb-3">
                Co-Founder & Head of Design
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Attaullah brings artistic vision and modern aesthetics into every design,
                ensuring each product blends elegance with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
