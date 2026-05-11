"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { site } from "@/data/site";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function HomeBio() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 rounded-2xl border border-card-border bg-card p-8 sm:flex-row sm:items-start sm:gap-12 sm:p-12"
        >
          {/* Photo */}
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full sm:h-36 sm:w-36">
            <Image
              src="/jamil-face.jpeg"
              alt={site.author}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center sm:text-left">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              About
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              {site.author}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              I help startups and businesses design, build, and launch high-impact software.
              With a background across startups, scale-ups, and complex engineering environments,
              I bring real industry experience to every project, advisory session, and workshop.
            </p>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
