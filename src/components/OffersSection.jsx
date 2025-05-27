import React from "react";

const offers = [
  {
    title: "Summer Splash Offer",
    description: "Get 25% off on all mango-based juices. Limited time only!",
    code: "SUMMER25",
    color: "bg-orange-100",
  },
  {
    title: "Buy 2 Get 1 Free",
    description: "Order any two smoothies and get one absolutely free!",
    code: "SMOOTHIEBOGO",
    color: "bg-green-100",
  },
  {
    title: "New User Offer",
    description: "Flat ₹50 off on your first order!",
    code: "WELCOME50",
    color: "bg-yellow-100",
  },
];

export default function OffersSection() {
  return (
    <div className="py-36 px-9 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-600 text-center">
        🎁 Current Offers & Deals
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow ${offer.color} border border-orange-200`}
          >
            <h3 className="text-lg font-semibold text-gray-800">{offer.title}</h3>
            <p className="text-gray-700 text-sm my-2">{offer.description}</p>
            <div className="text-sm text-orange-600 font-mono font-semibold">
              Use Code: {offer.code}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
