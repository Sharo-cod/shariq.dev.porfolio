import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-red-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Coca-Cola Services
        </motion.h1>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Service 1 */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="Coca-Cola Drinks"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h2 className="text-xl font-bold mb-4 text-red-600">Refreshing Beverages</h2>
            <p className="text-gray-700">
              From the classic Coca-Cola to a variety of exciting flavors, we
              deliver refreshing drinks loved by millions worldwide.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="Events"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h2 className="text-xl font-bold mb-4 text-red-600">Event Sponsorships</h2>
            <p className="text-gray-700">
              We proudly sponsor global sports, music, and cultural events that
              bring people together and spread happiness.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3515/3515584.png"
              alt="Sustainability"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h2 className="text-xl font-bold mb-4 text-red-600">Sustainability</h2>
            <p className="text-gray-700">
              Coca-Cola is committed to a sustainable future with eco-friendly
              packaging and community-driven initiatives worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
