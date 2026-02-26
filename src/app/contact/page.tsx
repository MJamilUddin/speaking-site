"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1e097a9a-cddf-4051-a973-bb20d3ca58fd",
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          message: formData.message,
          subject: `New Workshop Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s Work Together
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Interested in booking a workshop? Have questions about what I offer? Fill out the form
            below and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 lg:col-span-1"
          >
            <div className="rounded-2xl border border-card-border bg-card p-6">
              <Mail className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">Email</h3>
              <a
                href="mailto:jamiluddin.eng@gmail.com"
                className="text-muted transition-colors hover:text-accent"
              >
                jamiluddin.eng@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-card-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                What to Expect
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>Response within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>Custom workshop proposals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-card-border bg-card p-8 shadow-lg sm:p-10"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="mb-4 h-16 w-16 text-accent" />
                  <h3 className="mb-2 text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="mb-6 text-muted">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-card-border bg-background py-3 pl-12 pr-4 text-foreground placeholder-muted transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-card-border bg-background py-3 pl-12 pr-4 text-foreground placeholder-muted transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Company (Optional) */}
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                        Company / Organization (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-card-border bg-background py-3 px-4 text-foreground placeholder-muted transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        placeholder="Your company or university"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-muted" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full rounded-xl border border-card-border bg-background py-3 pl-12 pr-4 text-foreground placeholder-muted transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          placeholder="Tell me about your workshop needs, audience size, preferred dates, or any questions you have..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                      <p className="text-sm text-red-500">
                        {errorMessage || "Something went wrong. Please try again."}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-black shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
