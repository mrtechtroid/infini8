"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={
        "fixed w-full top-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10 ease-in-out"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          

          {/* Mobile menu button */}
          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="float-right inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-black/50 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['Events', 'Team', 'About', 'Sponsors'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium hover:bg-white/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
