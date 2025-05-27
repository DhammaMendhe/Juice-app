import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">Juice Delight</h2>
          <p className="text-sm text-gray-300">
            Refresh your day with 100% natural juices. Sip healthy, live happy!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-green-300 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:text-green-400">Menu</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-green-300 mb-2">Contact Us</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Email: info@juicedelight.com</li>
            <li>Phone: +91-9876543210</li>
            <li>Location: Nagpur, Maharashtra</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-green-300 mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-300">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        <p>
          <strong>Dhammadip Mendhe</strong> &copy; {new Date().getFullYear()} Juice Delight. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
