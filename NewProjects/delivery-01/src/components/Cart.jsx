// src/pages/Cart.jsx
import React, { useState } from "react";

export default function Cart() {
  // Mock cart items (you can connect to real data later)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Classic Burger",
      price: 8.99,
      qty: 1,
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Cheese Pizza",
      price: 12.99,
      qty: 2,
      img: "https://flightsoffancyhbc.ca/wp-content/uploads/2023/02/FOF_GoatCheesePepperoniPizza.png",
    },
  ]);

  // Functions for quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        🛒 Your Cart
      </h1>

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                {/* Item Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-red-500 font-semibold text-lg">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2 space-x-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 font-bold hover:text-red-800"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>

            <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      <div className="h-10"></div>
    </div>
  );
}
