"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Briefcase, Bot } from "lucide-react";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import Image from "next/image";

const workshops = [
  {
    id: "breaking-into-tech",
    icon: Rocket,
    title: "Breaking Into Tech",
    image: "/workshop-breaking-into-tech.jpg",
    gradient: "from-amber-900/40 via-amber-800/30 to-amber-900/40",
    accentColor: "text-amber-400",
    borderColor: "border-amber-800/50",
    overview: "The tech industry offers huge opportunity, but most beginners don't know where to start or what role to pursue. This workshop provides a clear, realistic roadmap into tech and helps participants identify which career path fits their strengths, interests, and long-term goals. Instead of guessing what to learn or following random tutorials, attendees leave with a structured plan tailored to them.",
    whoItsFor: [
      "University students and recent graduates",
      "Career switchers exploring tech",
      "People learning online but feeling lost",
      "Professionals unsure which tech role suits them",
      "Anyone considering bootcamps or self-teaching",
    ],
    learningOutcomes: [
      "How the tech industry is structured and where opportunities exist",
      "The main entry routes into tech and how they differ",
      "What different tech careers actually involve",
      "Skills required for common roles",
      "How to choose a role based on strengths and interests",
      "How to create a realistic learning and transition plan",
    ],
    rolesExplored: [
      "Frontend developer",
      "Backend developer",
      "Full stack developer",
      "Product manager",
      "Project manager",
      "UI / UX designer",
      "DevOps engineer",
      "Data and analytics roles",
    ],
    agenda: [
      "The modern tech landscape",
      "Understanding entry pathways into the industry",
      "Career role breakdowns",
      "Matching strengths and interests to roles",
      "Creating a personal roadmap",
    ],
    takeaways: [
      "Personalised career direction",
      "A step-by-step entry plan",
      "Role comparison guide",
      "Skills development roadmap",
      "Recommended learning resources",
    ],
    format: "Interactive workshop - Includes guided exercises and decision frameworks - Available in person or virtual",
    results: "Participants leave with clarity, direction, and a realistic plan to enter tech without wasted time or confusion.",
  },
  {
    id: "day-to-day-reality",
    icon: Briefcase,
    title: "Day-to-Day in Tech",
    image: "/workshop-day-to-day.jpg",
    gradient: "from-amber-900/40 via-amber-800/30 to-amber-900/40",
    accentColor: "text-amber-400",
    borderColor: "border-amber-800/50",
    overview: "Many people choose tech careers without understanding what the work actually feels like. Job titles sound exciting, but the daily responsibilities, collaboration, and workflows are often very different from expectations. This workshop gives a practical, behind-the-scenes look at how tech professionals really work. Participants gain insight into team dynamics, daily routines, and how digital products are actually built.",
    whoItsFor: [
      "People considering tech careers",
      "Students preparing to enter the workforce",
      "Career switchers wanting realistic expectations",
      "Junior professionals starting their first role",
    ],
    learningOutcomes: [
      "What a typical day looks like across different tech roles",
      "How software teams operate",
      "How products move from idea to launch",
      "How engineers, designers, and product teams collaborate",
      "What meetings, planning, and delivery cycles look like",
      "Common workplace challenges and expectations",
    ],
    rolesExplored: [
      "Developers",
      "Product managers",
      "Designers",
      "DevOps engineers",
      "Data professionals",
    ],
    agenda: [
      "How modern tech teams are organised",
      "The lifecycle of building a digital product",
      "Daily workflows by role",
      "Real examples of collaboration and decision making",
      "Career progression and growth paths",
    ],
    interactiveElements: [
      "Scenario walkthroughs of real work situations",
      "Team workflow simulations",
      "Role responsibility mapping",
    ],
    takeaways: [
      "Clear understanding of day-to-day work",
      "Realistic career expectations",
      "Insight into workplace culture",
      "Understanding of how roles interact",
      "Confidence in choosing the right path",
    ],
    format: "Interactive presentation with practical examples - Case study driven - Suitable for universities and career programmes",
    results: "Participants understand not just what jobs are called, but what professionals actually do each day and how tech teams function in the real world.",
  },
  {
    id: "ai-modern-tools",
    icon: Bot,
    title: "AI & Modern Tools",
    image: "/workshop-ai-tools.jpg",
    gradient: "from-amber-900/40 via-amber-800/30 to-amber-900/40",
    accentColor: "text-amber-400",
    borderColor: "border-amber-800/50",
    overview: "AI is transforming how professionals work across the tech industry. From writing code to designing products to managing projects, modern tools dramatically increase productivity and change how work gets done. This workshop shows how tech professionals actually use AI in real workflows and how beginners can start using these tools immediately.",
    whoItsFor: [
      "Students entering tech fields",
      "Early-career professionals",
      "Career switchers",
      "Anyone wanting to work more efficiently with AI",
      "Non-technical professionals working with tech teams",
    ],
    learningOutcomes: [
      "How AI is changing the way tech teams work",
      "Practical ways developers use AI daily",
      "AI tools for design, research, and productivity",
      "Prompting strategies for better results",
      "When to rely on AI and when not to",
      "How to build an AI-assisted workflow",
    ],
    toolsAndUseCases: [
      "AI for coding assistance",
      "AI for learning and research",
      "AI for debugging and problem solving",
      "AI for design and content generation",
      "AI for project planning and documentation",
    ],
    agenda: [
      "The role of AI in modern tech work",
      "Real world use cases across different roles",
      "Demonstrations of practical workflows",
      "Building a personal AI toolkit",
      "Responsible and effective AI usage",
    ],
    practicalActivities: [
      "Live AI workflow demonstrations",
      "Prompt design exercises",
      "Task automation examples",
      "Tool comparison guidance",
    ],
    takeaways: [
      "Understanding of AI's role in tech careers",
      "List of essential tools to use immediately",
      "Practical workflow templates",
      "Prompting techniques",
      "Confidence using AI professionally",
    ],
    format: "Demonstration based learning - Interactive exercises - Beginner friendly",
    results: "Participants gain practical skills to work faster, learn quicker, and operate like modern tech professionals using AI-enhanced workflows.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Workshops() {
  const [activeTab, setActiveTab] = useState(workshops[0].title);
  const activeWorkshop = workshops.find((w) => w.title === activeTab) || workshops[0];

  return (
    <section id="workshops" className="relative px-6 py-16 sm:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.span
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-accent"
          >
            Workshops
          </motion.span>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Transform Your Career in One Session
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted"
          >
            Each workshop is designed to tackle a specific challenge in early-stage tech careers.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex justify-center overflow-x-auto px-4"
        >
          <AnimatedTabs
            tabs={workshops.map((w) => ({ label: w.title }))}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </motion.div>

          {/* Active workshop content */}
        <motion.div
          key={activeWorkshop.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Workshop image */}
          <div className="relative mb-12 h-64 w-full overflow-hidden rounded-2xl md:h-80">
            <Image
              src={activeWorkshop.image}
              alt={activeWorkshop.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="mb-2 flex items-center gap-2">
                <activeWorkshop.icon className={`h-6 w-6 ${activeWorkshop.accentColor}`} />
                <span className="text-sm font-medium text-accent">{activeWorkshop.format}</span>
              </div>
              <h3 className="text-3xl font-bold text-white">{activeWorkshop.title}</h3>
            </div>
          </div>

          {/* Workshop details - List style */}
          <div className="space-y-12">
            {/* Overview */}
            <div className="border-l-2 border-accent/30 pl-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Overview
              </h4>
              <p className="text-base leading-relaxed text-foreground">{activeWorkshop.overview}</p>
            </div>

            {/* Format */}
            <div className="border-l-2 border-card-border pl-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Format
              </h4>
              <p className="text-base text-foreground">{activeWorkshop.format}</p>
            </div>

            {/* Who This Is For */}
            <div className="border-l-2 border-card-border pl-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Who This Is For
              </h4>
              <ul className="space-y-3">
                {activeWorkshop.whoItsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Participants Will Learn */}
            <div className="border-l-2 border-card-border pl-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                What Participants Will Learn
              </h4>
              <ul className="space-y-3">
                {activeWorkshop.learningOutcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roles Explored (for workshop 1) */}
            {activeWorkshop.id === 'breaking-into-tech' && activeWorkshop.rolesExplored && (
              <div className="border-l-2 border-card-border pl-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                  Roles Explored
                </h4>
                <p className="mb-4 text-base leading-relaxed text-foreground">
                  Participants gain clarity on major tech career paths, including:
                </p>
                <ul className="space-y-3">
                  {activeWorkshop.rolesExplored.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Roles Covered (for workshop 2) */}
            {activeWorkshop.id === 'day-to-day-reality' && activeWorkshop.rolesExplored && (
              <div className="border-l-2 border-card-border pl-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                  Roles Covered in Daily Workflow Examples
                </h4>
                <ul className="space-y-3">
                  {activeWorkshop.rolesExplored.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools and Use Cases (for workshop 3) */}
            {activeWorkshop.id === 'ai-modern-tools' && activeWorkshop.toolsAndUseCases && (
              <div className="border-l-2 border-card-border pl-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                  Tools and Use Cases Covered
                </h4>
                <ul className="space-y-3">
                  {activeWorkshop.toolsAndUseCases.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Workshop Structure */}
            <div className="border-l-2 border-card-border pl-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Workshop Structure
              </h4>
              <ul className="space-y-3">
                {activeWorkshop.agenda.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Elements (for workshop 2) */}
            {('interactiveElements' in activeWorkshop && activeWorkshop.interactiveElements) && (
              <div className="border-l-2 border-card-border pl-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                  Interactive Elements
                </h4>
                <ul className="space-y-3">
                  {activeWorkshop.interactiveElements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Practical Activities (for workshop 3) */}
            {('practicalActivities' in activeWorkshop && activeWorkshop.practicalActivities) && (
              <div className="border-l-2 border-card-border pl-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                  Practical Activities
                </h4>
                <ul className="space-y-3">
                  {activeWorkshop.practicalActivities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Takeaways */}
            <div className="border-l-2 border-card-border pl-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Takeaways
              </h4>
              <p className="mb-4 text-base leading-relaxed text-foreground">
                Participants leave with:
              </p>
              <ul className="space-y-3">
                {activeWorkshop.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="border-l-2 border-accent/30 pl-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Results
              </h4>
              <p className="text-base leading-relaxed text-foreground">{activeWorkshop.results}</p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center border-t border-card-border pt-8">
              <a
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-black shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
              >
                <span>Book This Workshop</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
