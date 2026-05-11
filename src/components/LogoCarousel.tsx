"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { logos as defaultLogos, type Logo } from "@/data/logos";

interface LogoCarouselProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const LogoCarousel = ({
  heading = "Previously Worked With",
  logos = defaultLogos,
}: LogoCarouselProps) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
          {heading}
        </h2>
      </div>
      <div className="pt-4 md:pt-8">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    <div className={logo.id === "logo-2" || logo.id === "logo-4" ? "rounded-lg bg-white p-3" : ""}>
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        width={150}
                        height={60}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { LogoCarousel };
