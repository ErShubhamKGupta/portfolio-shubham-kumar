import { siteConfig } from "@/lib/data";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Medium", href: siteConfig.medium },
  { label: "X / Twitter", href: siteConfig.twitter },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="font-bold text-2xl text-white tracking-tight"
            >
              <span className="text-blue-400">S</span>K
            </a>
            <p className="text-slate-500 text-sm mt-2 max-w-xs">
              Senior .NET & Azure Backend Engineer building enterprise systems and mentoring
              developers.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">
              Navigation
            </p>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">
              Connect
            </p>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Shubham Kumar. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
