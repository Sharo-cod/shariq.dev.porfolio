import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-700 via-stone-500 to-stone-600 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 items-center">

        {/* Left: Heading + Description */}
        <div className="md:w-1/2 w-full text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider text-white mb-4 pb-10">
            Contact Us
          </h1>
          <p className="text-white text-lg md:text-xl ">
          Have questions or want to get in touch? We’d love to hear from you! Whether you’re curious about our handpan courses, need guidance on choosing the right instrument, or have feedback about our platform, this is the place to reach us. Fill out the form on the right, and our dedicated team will respond promptly. We’re committed to providing support, answering all your queries, and helping you on your journey to mastering the handpan. Your thoughts and questions are important to us, and we strive to make every interaction informative and helpful.
          </p>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 w-full flex justify-end">
          <form className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white/70 placeholder-gray-700 text-gray-900 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white/70 placeholder-gray-700 text-gray-900 transition"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white/70 placeholder-gray-700 text-gray-900 transition"
              rows={6}
            />
            <button className="bg-stone-800 text-white px-6 py-3 font-bold tracking-wider text-xl rounded-lg hover:bg-stone-700 hover:scale-105 transition-transform duration-300">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
