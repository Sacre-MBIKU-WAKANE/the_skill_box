"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Programmes", href: "#programmes" },
  { label: "Coworking", href: "#coworking" },
  { label: "Communauté", href: "#communaute" },
  { label: "Événements", href: "#evenements" },
  { label: "Ressources", href: "#ressources" },
  { label: "À propos", href: "#ecosystem" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
            <path d="M10 20 H90 C95.5 20 100 24.5 100 30 V35 C100 40.5 95.5 45 90 45 H45 V75 C45 86 36 95 25 95 H15 C9.5 95 5 90.5 5 85 V30 C5 24.5 9.5 20 15 20 H10 Z" fill="#D364FF" />
          </svg>
          <span
            className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[#2D1546]" : "text-white"
            }`}
          >
            Theskillsbox
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? "text-gray-600 hover:text-[#D364FF] hover:bg-[#D364FF]/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              scrolled
                ? "text-[#D364FF] hover:bg-[#D364FF]/10"
                : "text-white hover:bg-white/10"
            }`}
          >
            Se connecter
          </Link>
          <Link
            href="#"
            className={`btn text-sm py-2.5 px-6 ${
              scrolled 
                ? "bg-[#D364FF] text-white hover:bg-[#C253EE]" 
                : "bg-white text-[#2D1546] hover:bg-gray-100"
            }`}
          >
            S&apos;inscrire
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden p-2 rounded-xl transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={scrolled ? "#2D1546" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-xl text-gray-600 hover:text-[#D364FF] hover:bg-[#D364FF]/10 font-medium transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 mt-2 pt-4 flex flex-col gap-2">
              <Link
                href="#"
                className="btn justify-center text-sm border-2 border-[#D364FF] text-[#D364FF]"
              >
                Se connecter
              </Link>
              <Link
                href="#"
                className="btn justify-center text-sm bg-[#D364FF] text-white"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
