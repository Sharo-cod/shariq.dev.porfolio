// Cart.jsx
export default function Cart({ cart, setCart }) {
  // Increase/decrease/remove functions
  const increaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].qty += 1;
    setCart(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = [...cart];
    if (newCart[index].qty > 1) newCart[index].qty -= 1;
    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const clearCart = () => setCart([]);

  const total = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center">
                  <img src={item.img} alt={item.title} className="w-28 h-28 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-red-500 font-semibold text-lg">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2 space-x-3">
                      <button onClick={() => decreaseQty(index)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                      <span className="font-semibold">{item.qty}</span>
                      <button onClick={() => increaseQty(index)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(index)} className="text-red-600 font-bold hover:text-red-800">✕</button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 h-fit">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between text-lg mb-4">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <button onClick={clearCart} className="w-full mt-2 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 rounded-lg transition">
                Clear Cart
              </button>
              <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
