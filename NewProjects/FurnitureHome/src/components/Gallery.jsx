import React from "react";
import { Link } from "react-router-dom";
import kitchenImg from "../assets/images/kitchen.jpg";
import doorImg from "../assets/images/door2.jpg";
import windowImg from "../assets/images/windows1.jpg";
import woodcomponentImg from "../assets/images/woodcomponants.jpg";

function Gallery() {
  const services = [
    {
      name: "Kitchen Service",
      desc: "Modular kitchen design & custom fittings.",
      img: kitchenImg,
      link: "/kitchen",
    },
    {
      name: "Door Service",
      desc: "Premium wooden doors with custom designs.",
      img: doorImg,
      link: "/doors",
    },
    {
      name: "Windows Service",
      desc: "Modern wooden + paneled window solutions.",
      img: windowImg,
      link: "/windows",
    },
    {
      name: "Mix Wood Components",
      desc: "Custom wooden components & craftsmanship.",
      img: woodcomponentImg,
      link: "/mix-wood",
    },
  ];

  return (
    <div className="py-34 px-6 bg-stone-300 min-h-screen">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-black mb-20 tracking-wide">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-8xl mx-auto">
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className="
              bg-gradient-to-br from-white to-stone-300
              rounded-3xl shadow-xl
              hover:shadow-2xl hover:scale-105
              transition-transform duration-500 cursor-pointer
              group overflow-hidden
            "
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={service.img}
                alt={service.name}
                className="
                  w-full h-64 object-cover
                  transform group-hover:scale-110 transition duration-700
                "
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                {service.name}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
