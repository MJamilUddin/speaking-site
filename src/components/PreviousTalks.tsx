"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const talks = [
  {
    id: "kl-event",
    title: "Startup Industry Lessons",
    location: "Kuala Lumpur, Malaysia",
    organization: "SEEd.Lab",
    organizationUrl: "https://www.seedlab.my/",
    audience: "Startup Incubator",
    description: "Shared insights and lessons from working in the startup industry with founders and early-stage teams.",
    images: ["/kl event.jpg", "/kl event 2.jpeg"],
  },
  {
    id: "skt-event",
    title: "Breaking Into Tech",
    location: "South Kilburn, London",
    organization: "South Kilburn Trust",
    organizationUrl: "https://www.southkilburntrust.org/",
    audience: "Early Career Professionals",
    description: "Guided aspiring tech professionals through the fundamentals of starting a career in the tech industry.",
    images: ["/skt_event.jpg", "/skt_event_2.jpg"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function PreviousTalks() {
  return (
    <section className="relative px-6 pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Previous Talks
          </h2>
          <p className="mt-4 text-lg text-muted">
            Recent speaking engagements and workshops
          </p>
        </motion.div>

        {/* Talks Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.id}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group relative overflow-hidden rounded-3xl border border-card-border bg-card shadow-lg transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/20"
            >
              {/* Image Carousel */}
              <div className="relative h-64 w-full overflow-hidden">
                <Carousel opts={{ loop: true }} className="w-full">
                  <CarouselContent>
                    {talk.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative h-64 w-full">
                          <Image
                            src={image}
                            alt={`${talk.title} - Image ${imgIndex + 1}`}
                            fill
                            className={
                              talk.id === "skt-event" && imgIndex === 1
                                ? "object-cover object-top"
                                : "object-cover"
                            }
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  {talk.title}
                </h3>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{talk.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Users className="h-4 w-4 text-accent" />
                    <span>{talk.audience}</span>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {talk.description}
                </p>

                {talk.organizationUrl ? (
                  <a
                    href={talk.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-all hover:border-accent hover:bg-accent/20"
                  >
                    {talk.organization}
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                    {talk.organization}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
