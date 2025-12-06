import React from "react";
import { Hammer, Truck, Brush, Ruler } from "lucide-react";
import WoodCarousel from "./WoodCarousel.jsx";

export default function Services() {
  const services = [
    {
      icon: <Hammer className="w-10 h-10 text-stone-500 mb-4" />,
      title: "Custom Furniture Design",
      desc: "From concept to creation, we design furniture that fits your unique style and space perfectly.",
    },
    {
      icon: <Brush className="w-10 h-10 text-stone-500 mb-4" />,
      title: "Restoration & Refinishing",
      desc: "Bring your old furniture back to life with our expert restoration, polishing, and refinishing services.",
    },
    {
      icon: <Ruler className="w-10 h-10 text-stone-500 mb-4" />,
      title: "Interior Consultation",
      desc: "Our design specialists help you choose furniture and materials that complement your interiors seamlessly.",
    },
    {
      icon: <Truck className="w-10 h-10 text-stone-500 mb-4" />,
      title: "Delivery & Installation",
      desc: "Enjoy hassle-free delivery and professional installation for every piece you order from us.",
    },
  ];

  return (
    <>
      {/* === SERVICES SECTION === */}
      <section className="bg-stone-300 py-20 px-5 sm:px-10 text-center">
        <div className="text-center max-w-3xl mx-auto mb-16 px-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We’re more than just furniture makers — we create tailored solutions that
            transform your home with comfort, style, and quality.
          </p>
        </div>

        {/* Service Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="
                bg-gradient-to-br from-white to-stone-300 
                p-8 flex flex-col items-center text-center
                rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105
                transition-transform duration-500 cursor-pointer
              "
            >
              {service.icon}
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 px-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Let’s build something beautiful together. Contact us to get started today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-br from-white to-stone-300 
                       hover:from-stone-200 hover:to-stone-400 
                       text-black rounded-full transition-all shadow-xl hover:shadow-2xl text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* === WOOD CAROUSEL SECTION === */}
      <section className="bg-stone-300 py-14 px-5 sm:px-10 text-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Our Wood Collection
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore our range of premium wooden furniture crafted with precision and passion.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <WoodCarousel />
        </div>
      </section>
    </>
  );
}
