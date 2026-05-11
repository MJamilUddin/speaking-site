import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BuildContent from "@/components/BuildContent";

export const metadata: Metadata = {
  title: "Build",
  description:
    "End-to-end development consultancy for startups and businesses. Web apps, APIs, AI integrations, and production systems — designed, built, and shipped.",
};

export default function BuildPage() {
  return (
    <main>
      <PageHero
        eyebrowNumber="01"
        eyebrow="Build"
        heading="Software that solves real problems"
        description="I help startups and businesses design, build, and launch high-impact software. From early-stage MVPs to production-ready platforms, I work across the full stack to ship products that matter."
        ctaText="Start a Project"
        ctaHref="/contact"
      />
      <BuildContent />
    </main>
  );
}
