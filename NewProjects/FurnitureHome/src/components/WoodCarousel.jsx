import React, { memo } from "react";
import Slider from "react-slick";

// 🪵 Import wood images
import wood1 from "../assets/images/Oak.jpg";
import wood2 from "../assets/images/Pine.jpg";
import wood3 from "../assets/images/Teak.jpg";
import wood4 from "../assets/images/Walnut.jpg";

// Memoized single slide component
const WoodSlide = memo(({ wood }) => (
  <div className="px-4">
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-stone-500/30 transition-all hover:-translate-y-2">
      <img
        src={wood.img}
        alt={wood.name}
        className="w-full h-72 object-cover"
        loading="lazy"
      />
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-black">{wood.name}</h3>
        <p className="text-gray-700 text-sm mt-2">
          Crafted for durability and timeless style.
        </p>
      </div>
    </div>
  </div>
));

export default function WoodCarousel() {
  const woods = [
    { img: wood1, name: "Oak Wood" },
    { img: wood2, name: "Pine Wood" },
    { img: wood3, name: "Teak Wood" },
    { img: wood4, name: "Walnut Wood" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // slightly slower for smoother CPU usage
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500, // smoother transition
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full px-6 sm:px-10">
      <Slider {...settings}>
        {woods.map((wood, index) => (
          <WoodSlide key={index} wood={wood} />
        ))}
      </Slider>
    </div>
  );
}
