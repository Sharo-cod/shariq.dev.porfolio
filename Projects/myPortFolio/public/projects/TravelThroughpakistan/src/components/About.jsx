import React from "react";

export default function About() {
  return (
    <div>
      <section
        className="h-screen w-full flex flex-col items-center justify-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-2xl max-w-xl mx-auto drop-shadow-md">
            Travel Through Pakistan is your ultimate guide to explore the beauty,
            culture, and adventure of Pakistan. Discover hidden gems, breathtaking
            landscapes, and unforgettable experiences with us.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F5F2EB] text-gray-800 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: "#BFB19F" }}>
            Who We Are
          </h2>
          <p className="text-lg md:text-xl mb-12">
            We are a passionate travel platform dedicated to showcasing the incredible diversity of Pakistan.
            From the northern mountains to southern beaches, historic cities, scenic lakes, and vast deserts,
            we provide guides, tips, and inspiration to help travelers make the most of their journeys.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
                Experienced Guides
              </h3>
              <p>
                Our team has explored every corner of Pakistan to provide you with accurate and insider travel tips.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
                Personalized Travel
              </h3>
              <p>
                Whether you want adventure, relaxation, or cultural exploration, we tailor our advice to your style.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#BFB19F" }}>
                Safe & Reliable
              </h3>
              <p>
                Safety is our priority. We ensure all travel recommendations are reliable and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#EFE8DD] px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: "#BFB19F" }}>
            Our Mission
          </h2>
          <p className="text-lg md:text-xl">
            Our mission is to inspire people to explore Pakistan, connect with its culture, and create
            unforgettable memories. We strive to make travel accessible, enjoyable, and safe for everyone.
          </p>
        </div>
      </section>
    </div>
  );
}
