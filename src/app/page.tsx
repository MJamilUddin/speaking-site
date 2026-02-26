import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import About from "@/components/About";
import PreviousTalks from "@/components/PreviousTalks";
import Workshops from "@/components/Workshops";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <About />
        <PreviousTalks />
        <Workshops />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
