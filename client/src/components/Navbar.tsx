"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl sticky top-5 z-40 w-full">
      <div className="flex items-center justify-between p-6">
        {/* Left side */}
        {isOpen ? (
          ""
        ) : (
          <a href="#" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-3">
              <span className="text-2xl font-bold">ST</span>
            </div>
          </a>
        )}

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:bg-gray-100 lg:hidden transition-colors duration-200"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Right side */}
        <div
          className={`${isOpen ? "block" : "hidden"} lg:block lg:w-auto w-full`}
          id="mobile-menu"
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-1 p-4 lg:p-0 mt-4 lg:mt-0">
            {[
              // { href: "#education", label: "Education" },
              // { href: "#experience", label: "Experience" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
              {
                href: "https://drive.google.com/file/d/1szZcaXTorN4ce7xnTIdyTy8IjmGIxcHA/view?usp=sharing",
                label: "CV",
                isExternal: true,
              },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : ""}
                  className={`block py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                    item.isExternal
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
