import Hero from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import ServiceCard from "@/components/ServiceCard";
import HomeBio from "@/components/HomeBio";
import CTA from "@/components/CTA";
import { services } from "@/data/services";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Service Pillars */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                number={service.number}
                title={service.title}
                description={service.shortDescription}
                href={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel heading="Trusted By" />
      <HomeBio />
      <CTA />
    </main>
  );
}
