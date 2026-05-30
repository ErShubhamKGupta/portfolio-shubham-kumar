import AnimateIn from "@/components/ui/AnimateIn";
import { blogs, siteConfig } from "@/lib/data";

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Writing & Thinking
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Latest Articles</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            I write about .NET, Azure, microservices architecture, and AI — sharing practical
            lessons from building enterprise systems.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {blogs.map((post, i) => (
            <AnimateIn key={post.title} delay={i * 0.1}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top color bar */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="text-center mt-10">
          <a
            href={siteConfig.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-7 py-3 rounded-full font-semibold text-sm hover:bg-slate-900 hover:text-white transition-all duration-200"
          >
            View all on Medium
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
