import AnimateIn from "@/components/ui/AnimateIn";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Backend: "bg-blue-50 text-blue-700 border-blue-100",
  "Cloud & DevOps": "bg-indigo-50 text-indigo-700 border-indigo-100",
  Database: "bg-violet-50 text-violet-700 border-violet-100",
  Frontend: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Architecture: "bg-amber-50 text-amber-700 border-amber-100",
  "AI Tools & LLMs": "bg-rose-50 text-rose-700 border-rose-100",
};

const headerColors: Record<string, string> = {
  Backend: "text-blue-600",
  "Cloud & DevOps": "text-indigo-600",
  Database: "text-violet-600",
  Frontend: "text-emerald-600",
  Architecture: "text-amber-600",
  "AI Tools & LLMs": "text-rose-600",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            What I work with
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Technical Expertise</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <AnimateIn key={group.category} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-200 h-full">
                <h3
                  className={`font-bold text-lg mb-5 ${headerColors[group.category] ?? "text-slate-900"}`}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${
                        categoryColors[group.category] ?? "bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
