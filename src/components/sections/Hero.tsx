"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: siteConfig.medium,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: siteConfig.twitter,
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-white pt-16"
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Soft gradient accent top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <motion.span
            {...fadeUp(0.1)}
            className="inline-block text-blue-600 font-semibold text-sm tracking-[0.15em] uppercase mb-5"
          >
            Hi, I&apos;m
          </motion.span>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-5"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.div {...fadeUp(0.3)} className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-10 bg-blue-600 rounded-full shrink-0" />
            <span className="text-lg lg:text-xl font-semibold text-blue-600">
              {siteConfig.role}
            </span>
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            className="text-slate-600 text-lg leading-relaxed max-w-lg mb-10"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-200"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-slate-900 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative rotated square */}
            <div className="absolute -inset-3 bg-blue-100 rounded-3xl rotate-6" />
            <div className="absolute -inset-3 bg-blue-50 rounded-3xl -rotate-3" />

            {/* Avatar */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center select-none shadow-2xl">
              {/* Replace with <Image src="/profile.jpg" alt="Shubham Kumar" fill className="object-cover" /> once you add your photo */}
              <span className="text-white text-8xl font-bold opacity-90">SK</span>
            </div>

            {/* Floating badge: experience */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 leading-none">8+</div>
              <div className="text-slate-500 text-xs font-medium mt-0.5">Years Exp.</div>
            </div>

            {/* Floating badge: microservices */}
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3 border border-slate-100">
              <div className="text-2xl font-bold text-indigo-600 leading-none">10+</div>
              <div className="text-slate-500 text-xs font-medium mt-0.5">Microservices</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
