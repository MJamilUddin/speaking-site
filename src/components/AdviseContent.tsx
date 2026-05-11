"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import PreviousTalks from "@/components/PreviousTalks";
import { talks } from "@/data/talks";

const adviseTalks = talks.filter((t) => t.id === "kl-event");

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const audiences = [
  {
    title: "Founders & Startup Teams",
    description:
      "You're building a product but don't have a technical co-founder or CTO. You need someone who can assess your technical decisions, evaluate vendors, and help you build with confidence — without the overhead of a full-time hire.",
  },
  {
    title: "Non-Technical Leaders",
    description:
      "You're managing a team or organisation that relies on technology, but you don't have a technical background. You need clarity on what your tech team is doing, what's realistic, and how to make informed decisions about tools, timelines, and priorities.",
  },
  {
    title: "Organisations Adopting AI",
    description:
      "You've heard the hype, but you need practical guidance. Where can AI actually help your operations? What tools are worth adopting? How do you roll them out responsibly without disrupting existing workflows?",
  },
];

const topics = [
  "Technology strategy and roadmapping",
  "AI adoption and tool selection",
  "Technical team structure and hiring",
  "Vendor and platform evaluation",
  "Digital transformation planning",
  "Product and engineering alignment",
];

const outcomes = [
  "A clear understanding of where technology fits in your organisation",
  "Actionable recommendations you can implement immediately",
  "Confidence in making technical decisions",
  "A realistic roadmap tailored to your resources and goals",
  "Reduced dependency on jargon-heavy consultants",
];

export default function AdviseContent() {
  return (
    <>
      {/* Who It's For */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <SectionLabel text="Who It's For" className="mb-6 block" />
          </motion.div>

          <div className="space-y-12">
            {audiences.map((audience, i) => (
              <motion.div
                key={audience.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {audience.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="border-y border-card-border px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <SectionLabel text="What's Covered" className="mb-6 block" />
            <h2 className="mb-12 max-w-lg text-3xl font-bold text-foreground sm:text-4xl">
              Practical guidance, not PowerPoint decks
            </h2>
          </motion.div>

          <div className="space-y-4">
            {topics.map((topic, i) => (
              <motion.div
                key={topic}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-l-2 border-card-border py-3 pl-6 transition-colors hover:border-accent/50"
              >
                <span className="text-base text-foreground">{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <SectionLabel text="Outcomes" className="mb-6 block" />
            <h2 className="mb-12 max-w-lg text-3xl font-bold text-foreground sm:text-4xl">
              What you walk away with
            </h2>
          </motion.div>

          <div className="space-y-5">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Check className="h-3 w-3 text-accent" />
                </div>
                <span className="text-base leading-relaxed text-foreground">
                  {outcome}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talk */}
      <PreviousTalks talks={adviseTalks} />

      {/* CTA */}
      <section className="border-t border-card-border px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Let&apos;s map your strategy.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Whether you need a one-off session or ongoing advisory support, I&apos;ll
              help you make confident technical decisions.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-black shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:bg-accent-dark"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
