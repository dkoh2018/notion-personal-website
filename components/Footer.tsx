import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-100 text-gray-600">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-800">
            Home
          </a>
          <a href="#" className="hover:text-gray-800">
            About
          </a>
          <a href="#" className="hover:text-gray-800">
            Projects
          </a>
          <a href="#" className="hover:text-gray-800">
            Contact
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-sm">© David Oh 2018 - 2024</p>
      </div>
    </footer>
  );
}
