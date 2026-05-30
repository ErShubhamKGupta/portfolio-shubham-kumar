import AnimateIn from "@/components/ui/AnimateIn";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <AnimateIn direction="left">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-[0.15em] uppercase mb-4">
              About Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
              Turning complex
              <br />
              problems into{" "}
              <span className="text-blue-600">clean systems</span>
            </h2>
            <div className="space-y-5">
              {about.paragraphs.map((para, i) => (
                <p key={i} className="text-slate-600 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </AnimateIn>

          {/* Right: Cards */}
          <AnimateIn direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {about.cards.map((card) => (
                <div
                  key={card.label}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {card.value}
                  </div>
                  <div className="text-slate-600 font-medium text-sm">{card.label}</div>
                </div>
              ))}
            </div>

            {/* What I bring */}
            <div className="mt-6 bg-slate-900 rounded-2xl p-7">
              <h3 className="text-white font-bold mb-5 text-lg">What I bring to the table</h3>
              <ul className="space-y-3">
                {[
                  "Production-grade microservices architecture",
                  "Azure-native cloud solutions",
                  "Clean, maintainable, SOLID code",
                  "Cross-functional team collaboration",
                  "Developer mentorship & leadership",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
