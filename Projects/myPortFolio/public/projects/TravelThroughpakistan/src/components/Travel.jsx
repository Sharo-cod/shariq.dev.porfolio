import React from "react";

export default function Travel() {
  return (
    <div>
      <section
        className="h-screen w-full flex flex-col items-center justify-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Explore Pakistan
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-xl drop-shadow-md">
            Discover the beauty of mountains, lakes, deserts, and historic cities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F5F2EB] text-gray-800 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: "#BFB19F" }}>
            Popular Travel Destinations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1724142923909-fc4b0c3a2a32?q=80&w=1074&auto=format&fit=crop"
                alt="Northern Mountains"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
                Northern Mountains
              </h3>
              <p>Experience the breathtaking peaks of the Karakoram and Himalayas.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1611821376205-3d0bf56c0ee2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171"
                alt="Beautiful Lakes"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
                Scenic Lakes
              </h3>
              <p>Discover serene lakes like Saif-ul-Malook and Attabad, perfect for boating.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/34218100/pexels-photo-34218100.jpeg"
                alt="Deserts"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
                Vast Deserts
              </h3>
              <p>Explore the Cholistan and Thar deserts, enjoying golden sands and unique culture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#EFE8DD] px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: "gray" }}>
            Plan Your Trip
          </h2>
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="destination">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                placeholder="Where do you want to go?"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold " htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us more about your travel plans..."
                rows="4"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#BFB19F] text-white py-3 rounded-lg font-semibold hover:bg-stone-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
