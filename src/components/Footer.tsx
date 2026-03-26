"use client";

import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { JamTechLogo } from "@/components/JamTechLogo";

export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Left - Logo and tagline */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center text-foreground"
              aria-label="JamTech home"
            >
              <JamTechLogo variant="footer" />
            </Link>
            <p className="max-w-xs text-sm text-muted">
              Practical workshops for early-career tech professionals
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/#about" className="transition-colors hover:text-foreground">
                About
              </Link>
              <Link href="/#workshops" className="transition-colors hover:text-foreground">
                Workshops
              </Link>
              <a href="/contact" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </div>
          </div>

          {/* Right - Contact & Social */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:jamiluddin.eng@gmail.com"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                <span>jamiluddin.eng@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jamil-uddin-a44628174/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-8 border-t border-card-border pt-6 text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Jam Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
