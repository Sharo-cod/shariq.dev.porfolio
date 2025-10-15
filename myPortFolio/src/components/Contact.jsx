import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => t, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenisRef.current = lenis;
    return () => lenis.destroy();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Add time manually to form
    const formData = new FormData(formRef.current);
    formData.append("time", new Date().toLocaleString());

    emailjs
      .sendForm(
        "service_x4yvy3m",   // your EmailJS service ID
        "template_kwnquk7",  // your EmailJS template ID
        formRef.current,
        "8k1y7FdN4fen_QdOL"  // your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("❌ Failed to send message, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h1>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-gray-900/40 p-8 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.2)] space-y-6"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 20px 4px rgba(6,182,212,0.7), 0 0 40px 10px rgba(6,182,212,0.4)",
          }}
          whileTap={{
            scale: 0.95,
            boxShadow: "0 0 10px 2px rgba(6,182,212,0.3)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full bg-black cursor-pointer text-white border-2 border-white font-semibold py-3 rounded-full
                     hover:bg-gradient-to-r hover:from-white hover:to-cyan-500 hover:text-black hover:border-white
                     transition-all duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
