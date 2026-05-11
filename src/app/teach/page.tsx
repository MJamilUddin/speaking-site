import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PreviousTalks from "@/components/PreviousTalks";
import Workshops from "@/components/Workshops";
import CTA from "@/components/CTA";
import { talks } from "@/data/talks";

const teachTalks = talks.filter((t) => t.id === "skt-event");

export const metadata: Metadata = {
  title: "Teach",
  description:
    "Workshops and speaking engagements that give people real clarity on tech careers, modern tools, and the industry. Book a session with JamTech.",
};

export default function TeachPage() {
  return (
    <main>
      <PageHero
        eyebrowNumber="03"
        eyebrow="Teach"
        heading="Workshops & Speaking"
        description="Practical sessions that help students, graduates, career switchers, and organisations understand how the tech industry works — and how to build successful careers inside it."
        ctaText="Book a Session"
        ctaHref="/contact"
      />
      <PreviousTalks talks={teachTalks} />
      <Workshops />
      <CTA />
    </main>
  );
}
