import React, { useEffect, useState } from "react";
import handpanImage1 from "../assets/handpan.jpg";
import handpanImage3 from "../assets/handpan3.jpg";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const translateY1 = isDesktop ? Math.min(scrollY / 3, 100) : 0;
  const translateY2 = isDesktop ? Math.min(scrollY / 2, 120) : 0;
  const scaleFactor = isDesktop ? 1 + Math.min(scrollY / 3000, 0.05) : 1;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-400 via-stone-500 to-stone-600 text-white py-20 px-6 md:px-12">
      {/* Light texture / soft gradient background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-stone-400 to-transparent blur-3xl"></div>

      {/* Heading */}
      <div className="relative text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
          About Us
        </h1>
        <p className="text-stone-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Welcome to our Handpan learning community! We share the joy and art of
          handpan music with learners of all levels. From beginners to advanced
          players, our courses provide step-by-step guidance to mastery.
        </p>
      </div>

      {/* Text & Images */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6 relative z-10">
          <p className="text-stone-100 text-lg md:text-xl leading-relaxed">
            Our platform offers structured lessons, video tutorials, and a
            vibrant community forum. Learn rhythm patterns, melodic
            improvisation, and performance techniques with ease.
          </p>
          <p className="text-stone-100 text-lg md:text-xl leading-relaxed">
            We also provide tips on instrument maintenance, sound tuning, and
            creating your own compositions to inspire creativity and
            self-expression.
          </p>

          <div className="mt-8">
            <button className="px-6 py-3 bg-white text-stone-800 font-semibold rounded-xl shadow-md hover:bg-stone-100 hover:scale-105 transition-transform duration-300">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Images with parallax */}
        <div className="md:w-1/2 w-full relative h-[400px] md:h-[500px] flex justify-center items-center">
          {isDesktop ? (
            <>
              <img
                src={handpanImage1}
                alt="Handpan 1"
                className="absolute w-52 md:w-64 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-500"
                style={{
                  transform: `translateY(${-translateY1}px) scale(${scaleFactor}) rotate(-2deg)`,
                  top: "5%",
                  left: "10%",
                }}
              />
              <img
                src={handpanImage3}
                alt="Handpan 3"
                className="absolute w-60 md:w-72 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-500"
                style={{
                  transform: `translateY(${translateY2}px) scale(${scaleFactor}) rotate(3deg)`,
                  bottom: "0",
                  right: "10%",
                }}
              />
            </>
          ) : (
            <>
              <img
                src={handpanImage1}
                alt="Handpan 1"
                className="relative w-full rounded-3xl shadow-lg"
              />
              <img
                src={handpanImage3}
                alt="Handpan 3"
                className="relative w-full rounded-3xl shadow-lg mt-6"
              />
            </>
          )}
        </div>
      </div>

      {/* Additional Info */}
      <div className="relative text-center max-w-4xl mx-auto mt-20">
        <p className="text-stone-100 text-lg md:text-xl leading-relaxed mb-4">
          Music connects people and uplifts the spirit. Every lesson and
          resource is designed to help you express your emotions through sound.
        </p>
        <p className="text-stone-100 text-lg md:text-xl leading-relaxed">
          Our mission is to make learning handpan accessible, fun, and
          meaningful for everyone. Join us and let your musical journey begin.
        </p>
      </div>
    </section>
  );
}
