"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  eyebrowNumber?: string;
  heading: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({
  eyebrow,
  eyebrowNumber,
  heading,
  description,
  ctaText,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number={eyebrowNumber} text={eyebrow} className="mb-6 block" />

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {heading}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>

          {ctaText && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-black shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
              >
                {ctaText}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
