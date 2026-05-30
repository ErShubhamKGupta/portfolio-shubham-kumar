import AnimateIn from "@/components/ui/AnimateIn";
import { testimonials } from "@/lib/data";

const avatarColors = ["bg-blue-600", "bg-indigo-600", "bg-violet-600", "bg-emerald-600"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            What others say
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Testimonials</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-200">
                {/* Quote mark */}
                <div className="text-blue-600 mb-4 opacity-40">
                  <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>

                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div
                    className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
