// src/pages/Home.jsx
import React from "react";

export default function Home() {
  const menuItems = [
    {
      title: "Classic Burger",
      desc: "Juicy beef patty, cheese, lettuce & our signature sauce.",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cheese Pizza",
      desc: "Fresh mozzarella, tomato sauce & crispy crust.",
      img: "https://flightsoffancyhbc.ca/wp-content/uploads/2023/02/FOF_GoatCheesePepperoniPizza.png",
    },
    {
      title: "Soft Drinks",
      desc: "Refreshing sodas to pair with your meal.",
      img: "https://cdn.informaconnect.com/platform/files/public/2025-07/background/800x1000/Taco%20Bell%20Agua%20Refrescas_02.png?VersionId=AxjkYte5gDo__U5TUjBnopnoX.fwvTxz",
    },
    {
      title: "Desserts",
      desc: "Sweet treats to finish your meal right.",
      img: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/965570ae-e25c-473a-8e18-7f2121998089-dominos.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Fast & Fresh Fast Food
          </h1>
          <p className="mt-4 text-lg md:text-2xl drop-shadow-lg">
            Burgers • Pizzas • Drinks • Desserts
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-700 text-white rounded-lg transition font-semibold">
            Order Now
          </button>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Menu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-white">
        © {new Date().getFullYear()} FastFoodCo — All Rights Reserved
      </footer>
    </div>
  );
}
