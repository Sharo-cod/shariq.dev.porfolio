import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-red-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contact Coca-Cola
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://www.coca-cola.com/content/dam/onexp/pk/en/offerings/updated-cs-banners/CS_desktop_1440x810.png"
              alt="Coca-Cola Bottle"
              className="w-180 h-auto drop-shadow-xl rounded-4xl"
            />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-red-600 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-5">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </motion.div>

              {/* Button */}
              <motion.button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
