import React, { useRef } from "react";

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleClick = () => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold text-green-600">We’d love to hear from you!</h2>
          <p className="text-gray-700">
            Whether you have a question about features, trials, pricing, or anything else,
            our team is ready to answer all your questions.
          </p>
        </div>

        {/* Right section - Form */}
        <div className="md:w-1/2 space-y-4">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              ref={nameRef}
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Subject</span>
            <input
              ref={subjectRef}
              type="text"
              placeholder="Subject"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              ref={messageRef}
              rows="4"
              placeholder="Your message"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300"
            ></textarea>
          </label>

          <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
