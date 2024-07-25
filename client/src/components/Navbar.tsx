import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex items-center justify-between p-4">
        {/* Left side */}
        {isOpen ? (
          ""
        ) : (
          <a href="#" className="flex items-center space-x-3">
            <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">MA</span>
          </a>
        )}

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-200 md:hidden dark:text-white"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Right side */}
        <div className={`${isOpen ? "block" : "hidden"} md:block md:w-auto w-full`} id="mobile-menu">
          <ul className="flex flex-col md:flex-row md:items-center gap-5 p-4 md:p-0 mt-4 md:mt-0 md:space-x-8 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
            {[
              { href: "#home", label: "Home" },
              { href: "#education", label: "Educations" },
              { href: "#experience", label: "Experiences" },
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
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
