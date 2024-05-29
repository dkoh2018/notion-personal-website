import React from "react";

export default function Header() {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-white shadow-md">
      <h1 className="text-3xl font-bold">David Oh</h1>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Bookmarks
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className="hover:underline hidden md:block">
        Contact
      </a>
      <div className="md:hidden">{/* Add mobile menu button */}</div>
    </header>
  );
}
