"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { JamTechLogo } from "@/components/JamTechLogo";
import { Gravity, MatterBody } from "@/components/ui/gravity";

const gravityPills = [
  { label: "Ship", x: "5%", y: "5%", angle: -12, color: "purple" },
  { label: "Scale", x: "55%", y: "2%", angle: 8, color: "orange" },
  { label: "Strategy", x: "70%", y: "8%", angle: -5, color: "blue" },
  { label: "AI", x: "30%", y: "0%", angle: 15, color: "emerald" },
  { label: "Code", x: "85%", y: "3%", angle: -8, color: "pink" },
  { label: "Teach", x: "15%", y: "10%", angle: 20, color: "accent" },
  { label: "Advise", x: "45%", y: "6%", angle: -18, color: "cyan" },
];

const colorMap: Record<string, string> = {
  purple: "border-purple-400/30 bg-purple-500/10 text-purple-400",
  orange: "border-orange-400/30 bg-orange-500/10 text-orange-400",
  blue: "border-blue-400/30 bg-blue-500/10 text-blue-400",
  emerald: "border-emerald-400/30 bg-emerald-500/10 text-emerald-400",
  pink: "border-pink-400/30 bg-pink-500/10 text-pink-400",
  accent: "border-accent/30 bg-accent/10 text-accent",
  cyan: "border-cyan-400/30 bg-cyan-500/10 text-cyan-400",
};

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
        <div className="relative min-w-0 pb-8 text-left lg:pb-48">
          {/* Gravity blocks */}
          <div className="pointer-events-auto absolute inset-0 hidden lg:block" style={{ zIndex: 0 }}>
            <Gravity
              gravity={{ x: 0, y: 1 }}
              grabCursor={true}
              addTopWall={false}
              resetOnResize={true}
              className="w-full h-full"
            >
              {gravityPills.map((pill) => (
                <MatterBody
                  key={pill.label}
                  matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
                  x={pill.x}
                  y={pill.y}
                  angle={pill.angle}
                >
                  <div className={`rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm select-none ${colorMap[pill.color]}`}>
                    {pill.label}
                  </div>
                </MatterBody>
              ))}
            </Gravity>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mb-8 lg:mb-10"
          >
            <Link
              href="/"
              aria-label="JamTech home"
              className="block w-fit max-w-full text-foreground"
            >
              <JamTechLogo variant="hero" />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Technology that ships. Strategy that scales. Knowledge that sticks.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative z-10 mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            JamTech is a technology consultancy that builds software, advises on AI strategy, and delivers workshops that give people real clarity on the tech industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative z-10 mt-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
            >
              Start a Conversation
            </Link>
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
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/20 xl:rounded-[2.25rem]">
              <div
                className="relative h-full w-full"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <Image
                  src="/hero-image.jpeg"
                  alt="Speaking at an event"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
