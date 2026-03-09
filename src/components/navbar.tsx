"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#", label: "Smart Living" },
  { href: "#", label: "3D Tour" },
  { href: "#", label: "About" },
  { href: "#contact", label: "Contact" },
  //    { href: "/news", label: "News & Blog" },
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 z-50 relative"
            aria-label="Home"
          >
            <Image
              src="/images/logo.png"
              alt="Insideout Automation"
              width={40}
              height={40}
            />
            <h1 className="font-extrabold text-xl text-brand-evergreen hidden sm:block">
              Insideout Automation
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-2"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-brand-evergreen transition-colors hover:text-brand-spring"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 border-b-2 border-brand-spring -z-10"
                    layoutId="navbar-hover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-brand-evergreen text-white px-6 py-3 text-sm font-medium shadow-md hover:bg-brand-spring transition-colors"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2 text-brand-evergreen"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 h-screen bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-8"
          >
            <nav className="flex flex-col gap-6 items-center text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-brand-spring hover:text-brand-spring transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4"
              >
                <button className="rounded-full bg-brand-evergreen text-white px-8 py-3 text-lg font-medium shadow-lg w-full">
                  Get Started
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
