import React from "react";
import { motion } from "framer-motion";

export default function CocaColaContent() {
  return (
    <section className="bg-white py-12 px-6">
      {/* Title */}
      <motion.h1
        id="about"
        className="text-center pb-10 text-2xl font-bold text-red-600"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About
      </motion.h1>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://www.shutterstock.com/image-photo/minsk-belarusaugust-26-2016-glass-600nw-532172488.jpg"
            alt="Coca-Cola Bottle"
            className="w-150 h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">
            Coca-Cola
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Coca-Cola, introduced in 1886, is one of the most iconic soft drinks
            in the world. Known for its refreshing taste, it has become a
            symbol of joy, togetherness, and happiness across generations.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Today, Coca-Cola is enjoyed in more than 200 countries and continues
            to bring people together, whether at family gatherings, celebrations,
            or everyday moments.
          </p>
          <motion.button
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Taste the Feeling
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
