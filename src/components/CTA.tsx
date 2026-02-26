"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7 }}
        className="relative border-y border-card-border bg-card py-12 sm:py-20"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent"
            >
              <MessageCircle className="h-7 w-7 text-black" />
            </motion.div>

            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to Invest in Your Career?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Whether you&apos;re looking to book a workshop for your team, your community,
              or yourself — I&apos;d love to hear from you. Let&apos;s make it happen.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-black shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
              <a
                href="#workshops"
                className="flex items-center gap-2 rounded-full border border-card-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Send className="h-5 w-5" />
                View Workshops
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
