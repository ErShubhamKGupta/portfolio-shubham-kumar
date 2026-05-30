import AnimateIn from "@/components/ui/AnimateIn";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            By the numbers
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Impact & Achievements</h2>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 0.1}>
              <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-200">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-blue-400 font-semibold mb-1 text-sm lg:text-base">
                  {item.label}
                </div>
                <div className="text-slate-500 text-xs">{item.sub}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
