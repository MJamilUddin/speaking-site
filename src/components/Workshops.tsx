"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Briefcase, Bot, Check, ArrowRight, Users, Zap, Monitor } from "lucide-react";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import Image from "next/image";
import Link from "next/link";
import { workshops } from "@/data/workshops";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  rocket: Rocket,
  briefcase: Briefcase,
  bot: Bot,
};

const deliveryMode = (format: string) => {
  if (format.toLowerCase().includes("virtual")) return "In-person & Virtual";
  if (format.toLowerCase().includes("online")) return "Online";
  return "In-person";
};

export default function Workshops() {
  const [activeTab, setActiveTab] = useState(workshops[0].title);
  const activeWorkshop = workshops.find((w) => w.title === activeTab) || workshops[0];

  return (
    <section id="workshops" className="relative px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.15em] text-accent"
          >
            Workshops
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Pick your session
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 flex justify-center overflow-x-auto"
        >
          <AnimatedTabs
            tabs={workshops.map((w) => ({ label: w.title }))}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </motion.div>

        {/* Workshop Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkshop.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-3xl border border-card-border bg-card"
          >
            {/* Hero Image */}
            <div className="relative h-64 w-full sm:h-80 lg:h-96">
              <Image
                src={activeWorkshop.image}
                alt={activeWorkshop.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-3 flex items-center gap-2">
                  {(() => {
                    const Icon = iconMap[activeWorkshop.icon];
                    return Icon ? <Icon className="h-5 w-5 text-accent" /> : null;
                  })()}
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {activeWorkshop.format.split(" - ")[2] || "Workshop"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {activeWorkshop.title}
                </h3>
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-3 divide-x divide-card-border border-b border-card-border">
              <div className="flex flex-col items-center gap-1.5 px-4 py-5 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left sm:px-6">
                <Users className="h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs text-muted">Audience</p>
                  <p className="text-sm font-medium text-foreground">
                    {activeWorkshop.whoItsFor[0].split(" ")[0] === "University"
                      ? "Students & Grads"
                      : activeWorkshop.whoItsFor[0].includes("considering")
                      ? "Career Switchers"
                      : "Early Career"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1.5 px-4 py-5 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left sm:px-6">
                <Zap className="h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs text-muted">Format</p>
                  <p className="text-sm font-medium text-foreground">
                    {activeWorkshop.format.split(" - ")[0]}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1.5 px-4 py-5 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left sm:px-6">
                <Monitor className="h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs text-muted">Delivery</p>
                  <p className="text-sm font-medium text-foreground">
                    {deliveryMode(activeWorkshop.format)}
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="grid gap-0 lg:grid-cols-2 lg:divide-x lg:divide-card-border">

              {/* Left: Overview + Agenda */}
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-base leading-relaxed text-muted">
                  {activeWorkshop.overview}
                </p>

                <div className="mt-8">
                  <p className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    Session Structure
                  </p>
                  <ol className="space-y-4">
                    {activeWorkshop.agenda.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-0.5 font-mono text-sm font-semibold text-accent shrink-0 w-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-relaxed text-foreground">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Right: Outcomes + Takeaway Pills */}
              <div className="border-t border-card-border p-6 sm:p-8 lg:border-t-0 lg:p-10">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  What you'll learn
                </p>
                <ul className="space-y-3">
                  {activeWorkshop.learningOutcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-sm leading-relaxed text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Takeaway Pills */}
                <div className="mt-8">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    You leave with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeWorkshop.takeaways.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="flex items-center justify-between border-t border-card-border px-6 py-5 sm:px-8">
              <p className="text-sm text-muted">{activeWorkshop.results}</p>
              <Link
                href="/contact"
                className="ml-4 flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-accent-dark"
              >
                Book this
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
