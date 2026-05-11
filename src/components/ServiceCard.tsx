"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ number, title, description, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <Link href={href} className="group block">
        <div className="rounded-2xl border border-card-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 sm:p-10">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            {number}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h3>

          <p className="mt-4 leading-relaxed text-muted">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
