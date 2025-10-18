import React from "react";
import { Hammer, Truck, Brush, Ruler } from "lucide-react";
import WoodCarousel from "./WoodCarousel.jsx"; // Carousel section

export default function Services() {
  const services = [
    {
      icon: <Hammer className="w-10 h-10 text-stone-300 mb-4" />,
      title: "Custom Furniture Design",
      desc: "From concept to creation, we design furniture that fits your unique style and space perfectly.",
    },
    {
      icon: <Brush className="w-10 h-10 text-stone-300 mb-4" />,
      title: "Restoration & Refinishing",
      desc: "Bring your old furniture back to life with our expert restoration, polishing, and refinishing services.",
    },
    {
      icon: <Ruler className="w-10 h-10 text-stone-300 mb-4" />,
      title: "Interior Consultation",
      desc: "Our design specialists help you choose furniture and materials that complement your interiors seamlessly.",
    },
    {
      icon: <Truck className="w-10 h-10 text-stone-300 mb-4" />,
      title: "Delivery & Installation",
      desc: "Enjoy hassle-free delivery and professional installation for every piece you order from us.",
    },
  ];

  return (
    <>
      {/* === SERVICES SECTION === */}
      <section className="bg-stone-900 text-white min-h-screen py-20 px-5 sm:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-200 mb-6">
            Our Services
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We’re more than just furniture makers — we create tailored solutions that
            transform your home with comfort, style, and quality.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-stone-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-stone-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              {service.icon}
              <h3 className="text-xl sm:text-2xl font-semibold text-stone-200 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 px-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-200 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Let’s build something beautiful together. Contact us to get started today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-stone-700 hover:bg-stone-600 text-white rounded-full transition-all shadow-md hover:shadow-stone-500/40 text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* === WOOD CAROUSEL SECTION === */}
      <section className="bg-stone-900 text-white py-14 px-5 sm:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-200 mb-4">
            Our Wood Collection
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore our range of premium wooden furniture crafted with precision and passion.
          </p>
        </div>

        {/* Responsive Carousel Container */}
        <div className="max-w-6xl mx-auto">
          <WoodCarousel />
        </div>
      </section>
    </>
  );
}
