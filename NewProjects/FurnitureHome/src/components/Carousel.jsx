// src/components/Carousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ title, images, bgColor = "bg-white", textColor = "text-black" }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={`bg-stone-300 py-20 px-8 text-center`}>
      <h2 className={`text-4xl font-bold mb-10 ${textColor}`}>{title}</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="px-4">
              <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-lg transition-all`}>
                <img
                  src={image}
                  alt={`Furniture ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className={`text-xl font-semibold ${textColor}`}>
                    Furniture Style {index + 1}
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Modern, elegant, and crafted to perfection.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
