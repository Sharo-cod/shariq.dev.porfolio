import React from "react";
import handpanImage from "../assets/handpan.jpg"; 
import handpanImage2 from "../assets/handpan2.jpg";
import handpanImage3 from "../assets/handpan3.jpg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (

    <>
    <h1 className="md:text-4xl sm:text-xl font-bold text-center pt-8 bg-stone-500 text-white" >
        <Link to="/home" >
        Home
        </Link>
    </h1>
  <section className="bg-stone-500 md:py-18 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between">

        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left md:pb-17    ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6">
            Master the Handpan
          </h1>
          <p className="text-white mb-8 text-xl ">
            From 'never played before' to mastering your handpan, embark on a journey with step-by-step courses led by world-renowned teachers and a vibrant community to support you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-stone-800 text-white px-6 py-3  font-bold tracking-wider text-xl rounded-lg hover:bg-stone-600  cursor-pointer ransition">
              Get Started
            </button>
            <button className="border border-stone-700 font-bold tracking-wider text-xl text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-stone-50 hover:text-stone-700 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col md:relative md:h-[500px] items-center justify-center md:items-end gap-6">

        <img
        src={handpanImage}
        alt="Handpan 1"
        className="w-64 md:w-72 rounded-3xl shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-105 md:absolute md:top-0 md:left-0 opacity-60 hover:opacity-100"
        />

        <img
        src={handpanImage2}
        alt="Handpan 2"
        className="w-64 md:w-72 rounded-3xl shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-105 md:absolute md:top-0 md:right-0 opacity-60 hover:opacity-100"
        />

        <img
        src={handpanImage3}
        alt="Handpan 3"
        className="w-64 md:w-80 rounded-3xl shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-105 md:absolute md:bottom-15 md:left-1/2 md:-translate-x-1/2 opacity-60 hover:opacity-100"
        />


        </div>
      </div>
    </section>
    </>
  );
}
