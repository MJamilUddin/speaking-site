"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mic2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 lg:block"
    >
      <div className="flex items-center justify-between gap-8 rounded-full border border-card-border bg-black/80 px-6 py-3 backdrop-blur-lg">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-base font-bold tracking-tight text-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-extrabold text-black">
            JT
          </div>
          <span>Jam Tech</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-accent-dark"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-3xl border border-card-border bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-black transition-all hover:bg-accent-dark"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
