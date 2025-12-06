import React from "react";

export default function Contact() {
  return (
    <section className="bg-stone-300 min-h-screen py-16 px-4 sm:px-8 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-black mb-10 text-center">
        Contact Us
      </h1>

      {/* 📨 Contact Form */}
      <form
        className="w-full max-w-md sm:max-w-lg bg-gradient-to-br from-stone-300 to-stone-200 p-8 rounded-3xl shadow-xl mb-12
                   hover:shadow-2xl transition-all"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This is a demo form — email sending not enabled yet!");
        }}
      >
        <div className="mb-5">
          <label className="block mb-2 text-black text-sm sm:text-base font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-2xl bg-white/90 text-black focus:ring-2 focus:ring-stone-500 outline-none text-sm sm:text-base shadow-inner"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-black text-sm sm:text-base font-medium">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-2xl bg-white/90 text-black focus:ring-2 focus:ring-stone-500 outline-none text-sm sm:text-base shadow-inner"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-black text-sm sm:text-base font-medium">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-2xl bg-white/90 text-black focus:ring-2 focus:ring-stone-500 outline-none text-sm sm:text-base shadow-inner"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-br from-white to-stone-300 hover:from-stone-200 hover:to-stone-400 text-black rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl"
        >
          Send Message
        </button>
      </form>

      {/* 💬 WhatsApp Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xs sm:max-w-2xl w-full">
        {[
          {
            name: "Amanullah Khan",
            number: "+92 000 00000000",
            role: "Chief Executive Officer",
          },
          {
            name: "Attaullah Khan",
            number: "+92 000 00000000",
            role: "Co-Founder & Head of Design",
          },
        ].map((person) => (
          <div
            key={person.number}
            className="bg-gradient-to-br from-stone-300 to-stone-200 p-5 sm:p-6 rounded-3xl text-center shadow-xl
                       hover:shadow-2xl transition-all"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
              {person.name}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-4">{person.role}</p>
            <p className="text-gray-700 text-sm sm:text-base mb-4">{person.number}</p>
            <a
              href={`https://wa.me/${person.number.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-5 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full font-medium text-sm sm:text-base transition-all"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
