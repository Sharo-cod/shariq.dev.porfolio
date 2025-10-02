import { motion } from "framer-motion";

export default function CocaColaScroll() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <a className="pb-10 font-bold text-2xl text-red-600" id="home">Home</a>
      <motion.img
        src="https://t3.ftcdn.net/jpg/03/37/83/86/360_F_337838623_Ew45XfSCkztRAa1Vr2AhtBk4lKCShBmm.jpg"
        alt="Coca-Cola Bottle"
        className="w-64 mb-6 w-150 rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.h2
        className="text-4xl font-bold text-red-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Coca-Cola: Taste the Feeling
      </motion.h2>
    </section>
  );
}
