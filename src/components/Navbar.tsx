"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { JamTechLogo } from "@/components/JamTechLogo";

const navLinks = [
  { label: "Build", href: "/build" },
  { label: "Advise", href: "/advise" },
  { label: "Teach", href: "/teach" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 right-4 left-4 z-50 hidden items-center justify-center lg:top-6 lg:flex"
      >
        <div className="flex items-center gap-6 rounded-full border border-card-border bg-black/80 px-5 py-2 backdrop-blur-lg">
          <Link href="/" aria-label="JamTech home" className="shrink-0">
            <JamTechLogo variant="footer" className="scale-75" />
          </Link>

          <div className="h-4 w-px bg-card-border" />

          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`inline-flex h-9 items-center justify-center rounded-full px-5 text-sm font-semibold leading-none transition-all ${
                pathname === "/contact"
                  ? "bg-accent-dark text-black"
                  : "bg-accent text-black hover:bg-accent-dark"
              }`}
            >
              Let&apos;s&nbsp;Talk
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Hamburger Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-black/80 backdrop-blur-lg lg:hidden"
        aria-label="Open menu"
      >
        <svg
          className="h-5 w-5 text-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </motion.button>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl lg:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-card-border"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <JamTechLogo variant="footer" />
              </Link>
            </motion.div>

            {/* Nav Links */}
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-3xl font-semibold transition-colors ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-accent-dark"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </nav>

            {/* Mono-font section number */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 font-mono text-xs uppercase tracking-widest text-muted"
            >
              Build. Advise. Teach.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
