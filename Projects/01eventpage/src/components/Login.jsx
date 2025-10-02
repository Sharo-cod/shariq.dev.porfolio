  import React from "react";
  import { motion } from "framer-motion";

  export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-600" id="login">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            className="text-3xl font-bold text-red-600 text-center mb-8"
          >
            Coca-Cola Login
          </motion.h1>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block mb-2 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block mb-2 font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition"
            >
              Login
            </motion.button>
          </form>

          {/* Extra Links */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-600 text-center mt-6"
          >
            Don't have an account?{" "}
            <a href="#" className="text-red-600 font-semibold hover:underline">
              Sign up
            </a>
          </motion.p>
        </motion.div>
      </div>
    );
  }
