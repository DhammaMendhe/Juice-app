import React from "react";
import OffersSection from "./OffersSection";
import WhyChooseUs from "./WhyChooseUs";

export default function Hero() {
  return (
   <>
    <div className="flex flex-col-reverse sm:flex-row items-center bg-black text-white gap-10 px-6 py-10 sm:px-16 sm:py-20 mb-2 min-h-screen">
      
      {/* Information Section */}
      <div className="sm:w-1/2 space-y-6">
        <h5 className="text-xl font-semibold text-orange-400">Hey, folk 👋</h5>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight animate-typewriter font-azonix">
          Juice that makes you smile.
        </h1>

        <p className="text-gray-300 leading-relaxed animate-fadein">
          Welcome to JuiceDelight — a modern juice ordering platform where you can explore a wide range of fresh and healthy juices. Customize your blends, track orders in real-time, and enjoy quick delivery. Sip the freshness, anytime!
        </p>

        <div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-md">
            Contact Us
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="sm:w-1/2 w-full overflow-hidden transition-transform duration-300 hover:scale-105 rounded-lg">
        <img
          className="w-full h-auto object-cover rounded-md"
          src="https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Juice Delight"
        />
      </div>
     
    </div>

    <OffersSection/>
    <WhyChooseUs/>
    </>
  );
}
