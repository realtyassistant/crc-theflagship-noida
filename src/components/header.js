"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-black sticky top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Logo</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {[
            { label: "Home", href: "/" },
            { label: "Overview", href: "#overview" },
            { label: "Amenities", href: "#amenities" },
            { label: "Pricing", href: "#pricing" },
            { label: "Gallery", href: "#gallery" },
            { label: "Plans", href: "#plans" },
            { label: "Location", href: "#location" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="font-semibold transition-all duration-300 hover:text-themeColor hover:font-bold">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-themeColor text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40 md:hidden`}
      >
        <div className="p-6 flex flex-col gap-6">
          {[
            { label: "Home", href: "/" },
            { label: "Overview", href: "#overview" },
            { label: "Amenities", href: "#amenities" },
            { label: "Pricing", href: "#pricing" },
            { label: "Gallery", href: "#gallery" },
            { label: "Plans", href: "#plans" },
            { label: "Location", href: "#location" },
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={toggleMenu} className="transition-all duration-300 hover:text-yellow-300 hover:font-bold">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
