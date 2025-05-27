import React from "react";
// import { CheckCircle } from "lucide-react"; // Optional icon

const features = [
  {
    title: "100% Natural Ingredients",
    description: "We use only fresh fruits and organic produce in every blend.",
  },
  {
    title: "Fast Delivery",
    description: "Your juice delivered fresh and chilled within 30 minutes.",
  },
  {
    title: "Customizable Blends",
    description: "Create your own juice combinations based on your preferences.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="py-36 px-9 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Why Choose JuiceDelight?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* <CheckCircle className="text-orange-500 mx-auto mb-3" size={32} /> */}
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
