// src/pages/Home.jsx
import React, { useState } from "react";

export default function Home({ cart, setCart }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

   const menuItems = [
    // ----- Burgers -----
    {
      title: "Classic Burger",
      desc: "Juicy beef patty, cheese, lettuce & our signature sauce.",
      price: "$8.99",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Double Beef Burger",
      desc: "Two beef patties, cheddar cheese & crispy onions.",
      price: "$11.49",
      img: "https://www.certifiedangusbeef.com/_next/image?url=https%3A%2F%2Fappetizing-cactus-7139e93734.media.strapiapp.com%2FUltimate_Double_Cheeseburger_da3c3f6a9b.jpeg&w=1920&q=75",
    },
    {
      title: "Chicken Burger",
      desc: "Crispy chicken fillet, lettuce & mayo.",
      price: "$9.49",
      img: "https://i0.wp.com/flaevor.com/wp-content/uploads/2022/04/SambalFriedChickenBurger1.jpg?resize=1024%2C830&ssl=1",
    },
    {
      title: "Veggie Burger",
      desc: "Plant-based patty, tomato, lettuce & vegan sauce.",
      price: "$7.99",
      img: "https://www.inspiredtaste.net/wp-content/uploads/2018/05/Homemade-Mushroom-Veggie-Burger-Recipe-1-1200.jpg",
    },
    // ----- Pizzas -----
    {
      title: "Cheese Pizza",
      desc: "Fresh mozzarella, tomato sauce & crispy crust.",
      price: "$12.99",
      img: "https://flightsoffancyhbc.ca/wp-content/uploads/2023/02/FOF_GoatCheesePepperoniPizza.png",
    },
    {
      title: "Pepperoni Pizza",
      desc: "Loaded pepperoni & extra cheese.",
      price: "$13.99",
      img: "https://www.cobsbread.com/cdn/shop/articles/Pepperoni-pizza-850x630-1-585x400-1.jpg",
    },
    {
      title: "BBQ Chicken Pizza",
      desc: "BBQ chicken, red onions & mozzarella.",
      price: "$14.49",
      img: "https://www.allrecipes.com/thmb/wSqQsq5SC-wy_7Ys7RkYJdDWwTo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
    },
    {
      title: "Veggie Pizza",
      desc: "Bell peppers, olives, onions & mushrooms.",
      price: "$12.49",
      img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-recipe-580x870.jpg",
    },
    // ----- Drinks -----
    {
      title: "Soft Drinks",
      desc: "Refreshing sodas to pair with your meal.",
      price: "$2.49",
      img: "https://cdn.informaconnect.com/platform/files/public/2025-07/background/800x1000/Taco%20Bell%20Agua%20Refrescas_02.png",
    },
    {
      title: "Lemonade",
      desc: "Fresh squeezed lemonade over ice.",
      price: "$3.29",
      img: "https://tidymom.net/blog/wp-content/uploads/2010/06/no-bake-lemonade-pie-pic.jpg",
    },
    {
      title: "Iced Tea",
      desc: "Sweet & refreshing iced tea.",
      price: "$2.89",
      img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/05/iced-tea.jpg?quality=82&strip=1&w=640",
    },
    {
      title: "Milkshake",
      desc: "Creamy chocolate or vanilla shake.",
      price: "$4.99",
      img: "https://preppykitchen.com/wp-content/uploads/2021/04/Milkshake-Feature.jpg",
    },
    // ----- Desserts -----
    {
      title: "Waffle's Ice Cream",
      desc: "Warm, gooey Icecream.",
      price: "$5.49",
      img: "https://thewanderlustkitchen.com/wp-content/uploads/2023/11/Homemade-Waffle-Ice-Cream-Sandwiches-Recipe-076-scaled-1200.jpg",
    },
    {
      title: "Ice Cream Cup",
      desc: "Vanilla or chocolate ice cream.",
      price: "$3.99",
      img: "https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
    },
    {
      title: "Cheesecake Slice",
      desc: "Creamy New York-style cheesecake.",
      price: "$4.49",
      img: "https://www.simplyrecipes.com/thmb/X95K7p_uqPZDkCr8zL0w82V_XvE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-No-Bake-Cheesecake-LEAD-14-6f1469c3658b49009f32e232b6be1d40.JPG",
    },
    {
      title: "Domino's Dessert",
      desc: "Sweet treats to finish your meal right.",
      price: "$5.99",
      img: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/965570ae-e25c-473a-8e18-7f2121998089-dominos.jpg",
    },
  ];

  const scrollToMenu = () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  };

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const confirmAddToCart = () => {
    if (!selectedItem) return;

    // Check if item already exists in cart
    const index = cart.findIndex((c) => c.title === selectedItem.title);
    if (index !== -1) {
      // Increment qty if exists
      const newCart = [...cart];
      newCart[index].qty += 1;
      setCart(newCart);
    } else {
      // Add new item with qty: 1
      setCart([...cart, { ...selectedItem, qty: 1, price: parseFloat(selectedItem.price.replace('$','')) }]);
    }

    setShowPopup(false);
    setSelectedItem(null);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold">Fast & Fresh Fast Food</h1>
          <p className="mt-4 text-xl">Burgers • Pizzas • Drinks • Desserts</p>
          <button
            onClick={scrollToMenu}
            className="mt-6 px-6 py-3 bg-red-500 rounded hover:bg-red-700"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Menu Section */}
      <div id="menu" className="py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <p className="text-lg font-bold text-red-600 mt-2">
                  {item.price}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h3 className="text-xl font-bold mb-3">Add to Cart?</h3>
            <p className="mb-4">{selectedItem.title}</p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmAddToCart}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 bg-black text-white text-center">
        © {new Date().getFullYear()} FastEats — All Rights Reserved
      </footer>
    </div>
  );
}
