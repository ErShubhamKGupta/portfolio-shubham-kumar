"use client";

import { useState } from "react";
import AnimateIn from "@/components/ui/AnimateIn";
import { siteConfig } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Shubham,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const contactItems = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com",
      href: siteConfig.linkedin,
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/ErShubhamKGupta",
      href: siteConfig.github,
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "Medium",
      value: "medium.com/@itsshubhamk",
      href: siteConfig.medium,
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      value: "x.com",
      href: siteConfig.twitter,
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Let&apos;s connect
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Get In Touch</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Open to senior engineering roles, consulting engagements, and technical collaborations.
            I&apos;d love to hear from you.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <AnimateIn direction="left">
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-2">Email client opened!</h3>
                <p className="text-slate-600 text-sm">
                  Your message is ready to send. Finish it off in your email client.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-blue-600 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </AnimateIn>

          {/* Contact info — icons + terminal card */}
          <AnimateIn direction="right" delay={0.1}>
            {/* Social icons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25 hover:scale-110 transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Mock API terminal */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              {/* Window chrome */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-slate-400 text-xs font-mono">GET /api/contact/shubham-kumar</span>
              </div>

              {/* Terminal body */}
              <div className="bg-slate-900 p-5 font-mono text-sm leading-relaxed">
                {/* Request line */}
                <p className="text-slate-500 mb-3 text-xs">
                  <span className="text-blue-400">$</span> curl -X GET https://api.shubhamkumar.dev/contact
                </p>

                {/* Status */}
                <p className="mb-3">
                  <span className="text-slate-500 text-xs">HTTP/1.1 </span>
                  <span className="text-green-400 font-semibold">200 OK</span>
                </p>

                {/* JSON response */}
                <div className="text-xs space-y-0.5">
                  <p className="text-slate-400">{"{"}</p>
                  <p className="pl-4"><span className="text-blue-300">&quot;name&quot;</span><span className="text-slate-500">: </span><span className="text-amber-300">&quot;Shubham Kumar&quot;</span><span className="text-slate-500">,</span></p>
                  <p className="pl-4"><span className="text-blue-300">&quot;role&quot;</span><span className="text-slate-500">: </span><span className="text-amber-300">&quot;.NET &amp; Azure Backend Engineer&quot;</span><span className="text-slate-500">,</span></p>
                  <p className="pl-4"><span className="text-blue-300">&quot;experience&quot;</span><span className="text-slate-500">: </span><span className="text-purple-300">&quot;8+ years&quot;</span><span className="text-slate-500">,</span></p>
                  <p className="pl-4"><span className="text-blue-300">&quot;open_to_work&quot;</span><span className="text-slate-500">: </span><span className="text-green-400">true</span><span className="text-slate-500">,</span></p>
                  <p className="pl-4"><span className="text-blue-300">&quot;response_time&quot;</span><span className="text-slate-500">: </span><span className="text-amber-300">&quot;&lt; 24 hours&quot;</span><span className="text-slate-500">,</span></p>
                  <p className="pl-4"><span className="text-blue-300">&quot;preferred_stack&quot;</span><span className="text-slate-500">: [</span></p>
                  <p className="pl-8"><span className="text-amber-300">&quot;.NET&quot;</span><span className="text-slate-500">, </span><span className="text-amber-300">&quot;Azure&quot;</span><span className="text-slate-500">, </span><span className="text-amber-300">&quot;Microservices&quot;</span></p>
                  <p className="pl-4"><span className="text-slate-500">],</span></p>
                  <p className="pl-4"><span className="text-blue-300">&quot;status&quot;</span><span className="text-slate-500">: </span><span className="text-green-400">&quot;available&quot;</span></p>
                  <p className="text-slate-400">{"}"}</p>
                </div>

                {/* Blinking cursor */}
                <p className="mt-3 text-xs text-slate-500">
                  <span className="text-blue-400">$</span>{" "}
                  <span className="inline-block w-2 h-3.5 bg-blue-400 align-middle animate-pulse" />
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
