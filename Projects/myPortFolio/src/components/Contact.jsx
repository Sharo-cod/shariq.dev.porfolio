// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
        Contact Me
      </h1>

      <p className="max-w-xl text-gray-300 mb-8">
        I’d love to hear from you! Whether you have a question, want to
        collaborate, or just want to say hi — feel free to reach out.
      </p>

      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>

        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-400 to-white text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
