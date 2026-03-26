"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 left-4 z-50 hidden justify-center overflow-visible lg:top-6 lg:right-auto lg:left-1/2 lg:flex lg:w-max lg:max-w-[calc(100vw-2rem)] lg:-translate-x-1/2"
    >
      <div className="relative w-full lg:w-max">
        <div className="flex w-full max-w-full flex-nowrap items-center justify-center gap-5 overflow-visible rounded-full border border-card-border bg-black/80 px-4 py-1.5 backdrop-blur-lg sm:gap-5 sm:px-5 sm:py-1.5">
          <div className="flex shrink-0 flex-nowrap items-center gap-3.5 sm:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-accent px-5 text-sm font-semibold leading-none text-black no-underline transition-all hover:bg-accent-dark sm:h-9 sm:px-5"
            >
              Let&apos;s&nbsp;Talk
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
