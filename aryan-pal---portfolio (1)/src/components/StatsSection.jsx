import FadeIn from './ui/FadeIn.jsx';
import StatsCounter from './ui/StatsCounter.jsx';

const stats = [
  { value: 2.5, suffix: "+", label: "Years of Experience", isAnimated: true },
  { value: 13, suffix: "+", label: "Projects Delivered", isAnimated: true },
  { staticValue: "5", label: "Core Disciplines" },
  { staticValue: "∞", label: "Data Points Analyzed" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0A0A0F] py-16 sm:py-20 px-5 sm:px-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#5B8DEF22]">
        {stats.map((stat, i) => (
          <FadeIn 
            key={i} 
            delay={i * 0.1} 
            x={0} 
            y={20}
            className="flex flex-col items-center justify-center py-10 px-4 border-b border-r border-[#5B8DEF22] w-full"
          >
            <div className="hero-heading font-black text-[clamp(2.5rem,7vw,5rem)] lg:text-[6rem] dm-mono leading-none mb-2 md:mb-4">
              {stat.isAnimated ? (
                <StatsCounter value={stat.value} suffix={stat.suffix} />
              ) : (
                <span>{stat.staticValue}</span>
              )}
            </div>
            <div className="text-[#8AAAD4] font-light uppercase tracking-widest text-xs md:text-sm text-center">
              {stat.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
