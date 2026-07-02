"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Programmes", href: "#programmes" },
  { label: "Communauté", href: "#communaute" },
  { label: "Événements", href: "#evenements" },
  { label: "Ressources", href: "#ressources" },
  { label: "À propos", href: "#apropos" },
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
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg transition-all duration-300 ${
              scrolled
                ? "bg-primary text-white"
                : "bg-white/20 text-white backdrop-blur-sm"
            }`}
          >
            YO
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              scrolled ? "text-text-primary" : "text-white"
            }`}
          >
            Youth
            <span className={scrolled ? "text-primary" : "text-accent-light"}>
              Opp
            </span>
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
                  ? "text-text-secondary hover:text-primary hover:bg-primary/5"
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
                ? "text-primary hover:bg-primary/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            Se connecter
          </Link>
          <Link
            href="#"
            className={`btn text-sm py-2.5 px-6 ${
              scrolled ? "btn-primary" : "btn-white"
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
            stroke={scrolled ? "#1a1a2e" : "white"}
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
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 font-medium transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-4 flex flex-col gap-2">
              <Link
                href="#"
                className="btn btn-outline justify-center text-sm"
              >
                Se connecter
              </Link>
              <Link
                href="#"
                className="btn btn-primary justify-center text-sm"
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
