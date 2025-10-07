import { motion } from "framer-motion";

export default function CocaColaScroll() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4 py-16 text-center">
      <motion.a
        id="home"
        className="pb-30 font-extrabold text-red-600 text-6xl sm:text-4xl md:text-5xl tracking-tight drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Home
      </motion.a>

      <motion.img
        src="https://t3.ftcdn.net/jpg/03/37/83/86/360_F_337838623_Ew45XfSCkztRAa1Vr2AhtBk4lKCShBmm.jpg"
        alt="Coca-Cola Bottle"
        className="w-68 sm:w-64 md:w-72 lg:w-80 mb-8 rounded-2xl shadow-xl shadow-red-200 hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />


      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 px-2 leading-snug"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Coca-Cola: Taste the Feeling
      </motion.h2>

      <motion.p
        className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Refreshing moments shared around the world — wherever you are.
      </motion.p>
    </section>
  );
}
