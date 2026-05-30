import AnimateIn from "@/components/ui/AnimateIn";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Career Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Experience</h2>
        </AnimateIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-200 hidden sm:block" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="relative flex gap-6 sm:gap-8">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-md items-center justify-center z-10 mt-1">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{item.position}</h3>
                        <p className="text-blue-600 font-semibold mt-0.5">{item.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {item.duration}
                        </span>
                        <p className="text-slate-400 text-xs mt-1">{item.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {item.achievements.map((ach, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                          <svg
                            className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
