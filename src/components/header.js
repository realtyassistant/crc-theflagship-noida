"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-black sticky top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto p-[.2rem] sm:px-4 sm:py-4  flex justify-between items-center">
        <div className="flex">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={40} className="h-[2rem] w-[4rem] sm:w-32 sm:h-auto" />
          </Link>
          <Image src="/project-logo.webp" alt="logo" width={150} height={40} className="w-[6rem] sm:w-40 sm:h-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          {[
            { label: "Home", href: "/" },
            { label: "Overview", href: "#overview" },
            { label: "Amenities", href: "#amenities" },
            { label: "Pricing", href: "#pricing" },
            { label: "Gallery", href: "#gallery" },
            { label: "Plans", href: "#plans" },
            { label: "Location", href: "#location" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-lg font-semibold transition-all duration-300 hover:text-themeColor hover:font-bold">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-themeColor text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40 lg:hidden`}
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
            <a key={item.label} href={item.href} onClick={toggleMenu} className="text-lg transition-all duration-300 hover:text-yellow-300 hover:font-bold">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
