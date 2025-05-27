import React, { useState } from "react";

export default function About() {
  const [highlight, setHighlight] = useState(0);

  const handleJuiceHighlight = () => {
    setHighlight(400);
    console.log("Juice section highlighted", highlight);
  };

  const handleJuiceRemove = () => {
    setHighlight(500);
    console.log("Juice section removed", highlight);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-yellow-100 to-green-100 min-h-screen">
      <h1
        className={`text-4xl font-extrabold text-green-700 mb-4 ${
          highlight === 500 ? "bg-green-300" : "bg-green-100"
        } p-2 rounded-lg transition-all animate-pulse`}
      >
        Fresh & Healthy Juice
      </h1>
      <p className="text-lg text-gray-700 mb-3">
        Welcome to our juice paradise! Our juices are made from the freshest fruits, 
        squeezed daily to give you the best flavor and nutrition. Whether you're 
        looking to energize, detox, or just enjoy something tasty – we've got you covered.
      </p>
      <p className="text-lg text-gray-700 mb-3">
        Explore a variety of flavors – from classic orange and apple to exotic blends 
        like dragon fruit and kiwi mint. We promise you'll taste the sunshine in every sip.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Join our community of juice lovers and take the first step toward a healthier, 
        happier you. Your body will thank you!
      </p>

      <div className="flex items-center mb-6">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
          />
          <div className="relative w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
          <span className="ml-3 text-md font-medium text-gray-900">
            Subscribe to updates
          </span>
        </label>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleJuiceHighlight}
          className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Highlight Juice
        </button>
        <button
          onClick={handleJuiceRemove}
          className="py-2 px-5 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition"
        >
          Remove Highlight
        </button>
      </div>
    </div>
  );
}
