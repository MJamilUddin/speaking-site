"use client";

import { motion } from "framer-motion";
import { Check, Linkedin } from "lucide-react";
import Image from "next/image";

const focusAreas = [
  "Breaking into the tech industry",
  "Choosing the right tech career path",
  "Understanding real day-to-day tech work",
  "Preparing for modern digital workplaces",
  "Using AI and tools effectively in professional environments",
];

const workshopDifferentiators = [
  "Built from real industry experience, not theory",
  "Focused on practical decision-making and career strategy",
  "Designed to reduce overwhelm and provide direction",
  "Interactive and structured around real-world scenarios",
  "Actionable takeaways participants can use immediately",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 pt-8 pb-8 sm:pt-12 sm:pb-12">
      <div className="mx-auto max-w-6xl">
        {/* Profile Section - Split Layout */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-8 lg:grid-cols-3"
        >
          {/* Left - Profile Image (33%) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <a
                href="https://www.linkedin.com/in/jamil-uddin-a44628174/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square w-full overflow-hidden rounded-3xl border border-card-border bg-card shadow-lg transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/20"
              >
                <Image
                  src="/jamil-face.jpeg"
                  alt="Jamil Uddin"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-2xl font-bold text-foreground">Jamil Uddin</h3>
                  <a
                    href="https://www.linkedin.com/in/jamil-uddin-a44628174/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition-colors hover:text-accent-dark"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-2 text-sm text-muted">Tech Career Speaker & Workshop Facilitator</p>
              </div>
            </div>
          </div>

          {/* Right - Bio Content (67%) */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card p-8 shadow-lg sm:p-10">
              {/* Bio */}
              <div className="relative z-10 space-y-4 text-muted">
                <p className="leading-relaxed">
                  I help students, graduates, and career switchers understand how the tech industry really works and how to build a successful career inside it.
                </p>
                <p className="leading-relaxed">
                  I&apos;ve worked across startups, scale-ups, and complex engineering environments as a software engineer and product builder. I&apos;ve built production systems, launched digital products, worked in cross-functional teams, and experienced first-hand what it actually takes to grow in the industry.
                </p>
                <p className="leading-relaxed">
                  Because of that, my workshops don&apos;t focus on theory. They focus on real career decisions, real workplace expectations, and practical steps that help people move forward with confidence.
                </p>
                <p className="leading-relaxed">
                  Breaking into tech can feel confusing, overwhelming, and full of conflicting advice. My goal is to remove that confusion and give people clear direction, realistic expectations, and actionable plans.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I Focus On */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="mb-6 text-2xl font-bold text-foreground">What I Focus On</h3>
          <ul className="space-y-3">
            {focusAreas.map((area, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Real Advice for Real Careers */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="mb-4 text-2xl font-bold text-foreground">Real Advice for Real Careers</h3>
          <p className="mb-4 text-base leading-relaxed text-muted">
            I don&apos;t believe in generic career advice or unrealistic success stories. My sessions are grounded in real industry experience and designed to give participants practical knowledge they can apply immediately.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Whether someone is choosing their first tech path, preparing for interviews, or trying to understand what working in tech actually looks like, my workshops provide clarity, structure, and confidence.
          </p>
        </motion.div>

        {/* What Makes My Workshops Different */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="mb-6 text-2xl font-bold text-foreground">What Makes My Workshops Different</h3>
          <ul className="space-y-3">
            {workshopDifferentiators.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
