"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const serviceAreas = [
  "Web Applications",
  "APIs & Backend Systems",
  "AI Integrations",
  "Production Infrastructure",
  "MVP Development",
  "SaaS Platforms",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your problem, users, and constraints. Define what to build and why.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Design and develop iteratively. Ship working software early and refine from real feedback.",
  },
  {
    number: "03",
    title: "Ship",
    description:
      "Deploy to production with monitoring, testing, and documentation in place.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Ongoing maintenance, feature development, and technical guidance as your product grows.",
  },
];

function ProjectLogo({ logo, title }: { logo: string; title: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-card-border bg-card">
        <span className="font-mono text-sm font-bold text-accent">
          {title.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-card-border bg-white p-1.5">
      <Image
        src={logo}
        alt={`${title} logo`}
        width={32}
        height={32}
        className="object-contain"
        unoptimized
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function BuildContent() {
  return (
    <>
      {/* What We Build */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <SectionLabel text="What I Build" className="mb-6 block" />
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-xl border border-card-border bg-card px-6 py-5"
              >
                <span className="font-mono text-sm text-foreground">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-card-border px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <SectionLabel text="Process" className="mb-6 block" />
            <h2 className="mb-12 max-w-lg text-3xl font-bold text-foreground sm:text-4xl">
              From idea to production
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="font-mono text-xs tracking-[0.15em] text-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <SectionLabel text="Selected Work" className="mb-6 block" />
            <h2 className="mb-12 max-w-lg text-3xl font-bold text-foreground sm:text-4xl">
              Real projects, real impact
            </h2>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-card-border bg-card p-8 sm:p-10"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl flex-1">
                    {/* Logo + meta row */}
                    <div className="mb-5 flex items-center gap-4">
                      {"logo" in project && project.logo && (
                        <ProjectLogo logo={project.logo} title={project.title} />
                      )}
                      <div>
                        <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                          {project.role}
                        </span>
                        {"period" in project && (
                          <p className="font-mono text-xs text-muted/60">{project.period}</p>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-card-border bg-badge-bg px-3 py-1 font-mono text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {"url" in project && project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex shrink-0 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-card-border px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Have a project? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Whether you need an MVP, a production system, or ongoing engineering support — I&apos;d
              love to hear what you&apos;re building.
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
