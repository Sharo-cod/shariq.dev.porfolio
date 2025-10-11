import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
  
      <section
        className="h-screen w-full flex flex-col items-center justify-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597846411462-c8bce7b5b759?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative text-center px-4">
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
            style={{ color: "#BFB19F" }}
          >
            Welcome to Travel Through Pakistan
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 max-w-xl drop-shadow-md"
            style={{ color: "#FFF9F0" }}
          >
            Explore the beauty, culture, and hidden gems of Pakistan with us. Your adventure starts here!
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/travel"
              className="px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              style={{
                backgroundColor: "#C5BBAE",
                color: "#fff",
              }}
            >
              Travel
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 rounded-lg font-semibold transition-colors duration-300"
              style={{
                borderColor: "#BFB19F",
                color: "#fff",
              }}
            >
              Here We Are
            </Link>
          </div>
        </div>
      </section>

<section className="py-20 bg-[#F5F2EB] text-gray-800 px-6 md:px-20">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#BFB19F" }}>
      Discover Pakistan
    </h2>
    <p className="text-lg md:text-xl mb-8">
      From the majestic mountains in the north to the serene beaches in the south, Pakistan is full of wonders. Experience the rich culture, vibrant traditions, and breathtaking landscapes that make every journey unforgettable.
    </p>

    {/* First Row of Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
          Northern Mountains
        </h3>
        <p>
          Explore the stunning peaks of the Karakoram and Himalayas, including the world-famous K2.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
          Historic Cities
        </h3>
        <p>
          Wander through ancient streets in Lahore, Multan, and Peshawar, filled with history and culture.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
          Coastal Beauty
        </h3>
        <p>
          Relax on the pristine beaches of Karachi and Gwadar while enjoying the peaceful seaside views.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
          Scenic Lakes
        </h3>
        <p>
          Discover serene lakes like Saif-ul-Malook and Attabad, perfect for boating and photography.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
          Vast Deserts
        </h3>
        <p>
          Explore the Cholistan and Thar deserts, enjoying golden sands and unique cultural experiences.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
          Cultural Heritage
        </h3>
        <p>
          Visit iconic mosques, forts, and heritage sites that showcase Pakistan’s rich history.
        </p>
      </div>
    </div>
  </div>
</section>



<section className="py-20 bg-[#EFE8DD] px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: "#BFB19F" }}>
      Explore the Wonders
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1724142923909-fc4b0c3a2a32?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Northern Mountains"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
            Northern Mountains
          </h3>
          <p>
            Marvel at the towering peaks of the Karakoram and Himalayas and explore nature like never before.
          </p>
        </div>
      </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1721988277528-06a27beb1811?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074"
            alt="Historic Cities"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
              Historic Cities
            </h3>
            <p>
              Discover centuries-old architecture, vibrant bazaars, and cultural landmarks in Pakistan’s cities.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg"
            alt="Coastal Beauty"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
              Coastal Beauty
            </h3>
            <p>
              Enjoy the sun-kissed beaches, tranquil waves, and scenic views along Pakistan’s coastlines.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611821376205-3d0bf56c0ee2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
            alt="Beautiful Lakes"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
              Beautiful Lakes
            </h3>
            <p>
              Experience serene lakes like Saif-ul-Malook and Attabad, perfect for boating and photography.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/34218100/pexels-photo-34218100.jpeg"
            alt="Deserts"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
              Deserts
            </h3>
            <p>
              Discover the vast Cholistan and Thar deserts with their golden sands and unique culture.
            </p>
          </div>
        </div>

    
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1718570257468-115081478e86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Cultural Sites"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2" style={{ color: "#BFB19F" }}>
              Cultural Sites
            </h3>
            <p>
              Visit iconic mosques, forts, and UNESCO World Heritage sites that reflect Pakistan’s rich history.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


<section className="py-20 bg-[#F5F2EB] px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: "#BFB19F" }}>
      Photo Highlights
    </h2>

    <div className="relative overflow-hidden">
      <div className="flex gap-6 animate-scroll whitespace-nowrap">
        {/* Image 1 */}
        <div className="flex-shrink-0 w-80 h-64 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1597846411462-c8bce7b5b759?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800"
            alt="Northern Mountains"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="flex-shrink-0 w-80 h-64 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1721988277528-06a27beb1811?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800"
            alt="Historic Cities"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="flex-shrink-0 w-80 h-64 rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg"
            alt="Coastal Beauty"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 4 */}
        <div className="flex-shrink-0 w-80 h-64 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1611821376205-3d0bf56c0ee2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800"
            alt="Scenic Lakes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 5 */}
        <div className="flex-shrink-0 w-80 h-64 rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/34218100/pexels-photo-34218100.jpeg"
            alt="Deserts"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 6 */}
        <div className="flex-shrink-0 w-80 h-64 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1601758123927-832b6bb7b988?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
            alt="Cultural Sites"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 7 */}
        <div className="flex-shrink-0 w-80 h-64 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1587502536263-2b9d1a1ed26b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800"
            alt="Mountain Lakes"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>

  <style>
    {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        display: flex;
        gap: 1.5rem;
        animation: scroll 30s linear infinite;
      }
    `}
  </style>
</section>


    </div>
  );
}
