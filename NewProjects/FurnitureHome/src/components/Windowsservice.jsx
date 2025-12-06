import React from "react";
import windowImg from "../assets/images/windows1.jpg"; // Replace with your window image

export default function WindowService() {
  const galleryImages = Array(8).fill({ src: windowImg, alt: "Window Design" });

  return (
    <section className="bg-stone-300 min-h-screen px-6 sm:px-10 py-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          Window Services
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Upgrade your home with elegant and secure windows. We specialize in custom designs,
          durable materials, and professional installation to ensure style, comfort, and
          energy efficiency.
        </p>
      </div>

      {/* Small Gallery 8 Images */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 sm:h-52 lg:h-56 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
        {[
          {
            title: "Custom Window Designs",
            desc: "Windows tailored to your style and space, enhancing aesthetics and functionality.",
          },
          {
            title: "High-Quality Materials",
            desc: "Durable wood, aluminum, and composite materials for lasting performance and elegance.",
          },
          {
            title: "Professional Installation",
            desc: "Expert installation ensuring perfect fit, security, and energy efficiency.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-stone-200 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 text-center"
          >
            <h3 className="text-2xl font-semibold text-black mb-3">{item.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Ready to Upgrade Your Windows?
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Contact us today to discuss your custom window project and get a free consultation.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-br from-white to-stone-300 hover:from-stone-200 hover:to-stone-400 text-black rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
