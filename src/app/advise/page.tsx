import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AdviseContent from "@/components/AdviseContent";

export const metadata: Metadata = {
  title: "Advise",
  description:
    "Helping organisations understand technology and AI — what it can do, where to start, and how to adopt it effectively. Advisory sessions with JamTech.",
};

export default function AdvisePage() {
  return (
    <main>
      <PageHero
        eyebrowNumber="02"
        eyebrow="Advise"
        heading="Cut through the noise on technology and AI"
        description="I work with founders, non-technical leaders, and organisations to provide clarity on what tools to adopt, how to structure technical teams, and where AI can genuinely add value to their work."
        ctaText="Book an Advisory Session"
        ctaHref="/contact"
      />
      <AdviseContent />
    </main>
  );
}
