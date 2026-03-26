"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { JamTechLogo } from "@/components/JamTechLogo";
import { Gravity, MatterBody } from "@/components/ui/gravity";

export default function Hero() {
  return (
    <section className="relative flex min-h-0 items-start overflow-hidden px-6 pt-12 pb-10 lg:min-h-screen lg:items-center lg:pb-4 lg:pt-28">
      {/* Mobile background image with tint */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/hero-image.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark tint overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Subtle accent glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-32 left-20 hidden h-72 w-72 rounded-full bg-accent/10 blur-3xl lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
        {/* Left side - Content with Gravity Blocks */}
        <div className="relative pb-8 text-left lg:pb-48">
          {/* Gravity blocks falling around the text — extends to fill the padded area */}
          <div className="pointer-events-auto absolute inset-0 hidden lg:block" style={{ zIndex: 0 }}>
            <Gravity
              gravity={{ x: 0, y: 1 }}
              grabCursor={true}
              addTopWall={false}
              resetOnResize={true}
              className="w-full h-full"
            >
              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
                x="5%"
                y="5%"
                angle={-12}
              >
                <div className="rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-400 backdrop-blur-sm select-none">
                  AI Tools
                </div>
              </MatterBody>

              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
                x="55%"
                y="2%"
                angle={8}
              >
                <div className="rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2.5 text-sm font-semibold text-orange-400 backdrop-blur-sm select-none">
                  Career
                </div>
              </MatterBody>

              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
                x="70%"
                y="8%"
                angle={-5}
              >
                <div className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-400 backdrop-blur-sm select-none">
                  Frontend
                </div>
              </MatterBody>

              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
                x="30%"
                y="0%"
                angle={15}
              >
                <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-400 backdrop-blur-sm select-none">
                  Backend
                </div>
              </MatterBody>

              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
                x="85%"
                y="3%"
                angle={-8}
              >
                <div className="rounded-full border border-pink-400/30 bg-pink-500/10 px-5 py-2.5 text-sm font-semibold text-pink-400 backdrop-blur-sm select-none">
                  Design
                </div>
              </MatterBody>

              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
                x="15%"
                y="10%"
                angle={20}
              >
                <div className="rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent backdrop-blur-sm select-none">
                  Management
                </div>
              </MatterBody>

              <MatterBody
                matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
                x="45%"
                y="6%"
                angle={-18}
              >
                <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-400 backdrop-blur-sm select-none">
                  Dev Ops
                </div>
              </MatterBody>
            </Gravity>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mb-8 flex w-full justify-start lg:mb-10"
          >
            <Link
              href="/"
              aria-label="JamTech home"
              className="block w-full text-foreground"
            >
              <JamTechLogo variant="hero" />
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Helping people launch successful careers in tech
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative z-10 mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Practical workshops that give students, graduates, and career switchers the clarity, skills, and real-world insight they need to break into the tech industry with confidence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative z-10 mt-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <a
              href="/contact"
              className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
            >
              Book a Workshop
            </a>
          </motion.div>
        </div>

        {/* Right side - Image with fade effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative h-[550px] w-[550px] xl:h-[700px] xl:w-[700px] -mr-24 xl:-mr-40">
            {/* Image with mask for fade effect */}
            <div className="relative h-full w-full" style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in"
            }}>
              <Image
                src="/hero-image.jpeg"
                alt="Speaking at an event"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
