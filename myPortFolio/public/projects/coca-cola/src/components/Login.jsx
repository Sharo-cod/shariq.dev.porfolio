import React from "react";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <section
      id="login"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 via-red-600 to-red-500 px-4 sm:px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-red-600"
        >
          Coca-Cola Login
        </motion.h1>

        {/* Login Form */}
        <form className="space-y-5 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-red-600 text-white py-2 sm:py-3 rounded-lg font-semibold sm:font-bold text-sm sm:text-base hover:bg-red-700 transition"
          >
            Login
          </motion.button>
        </form>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center mt-5 sm:mt-6 text-sm sm:text-base"
        >
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-red-600 font-semibold hover:underline transition"
          >
            Sign up
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
