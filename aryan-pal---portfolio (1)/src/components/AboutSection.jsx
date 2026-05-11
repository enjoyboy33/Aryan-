import FadeIn from './ui/FadeIn.jsx';
import AnimatedText from './ui/AnimatedText.jsx';
import ContactButton from './ui/ContactButton.jsx';

const tools = [
  "Python", "SQL", "Power BI", "Tableau", "Excel", "R", "Pandas", "Scikit-learn", "GPT APIs", "Google Analytics", "Claude", "Higgsfield", "Make.com", "n8n", "Gumloop", "Claude Cowork", "Adobe"
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0A0A0F] overflow-hidden w-full">
      {/* Decorative corners */}
      <FadeIn delay={0.1} x={-80} duration={0.9} className="absolute top-[4%] left-[1%] md:left-[4%] w-[110px] sm:w-[150px] md:w-[200px] pointer-events-none opacity-30">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&q=80" alt="" className="rounded-2xl blur-[2px] object-contain w-full h-full mix-blend-screen" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} duration={0.9} className="absolute bottom-[8%] left-[3%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[175px] pointer-events-none opacity-25">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80" alt="" className="rounded-2xl blur-sm object-contain w-full h-full mix-blend-screen" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} duration={0.9} className="absolute top-[4%] right-[1%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none opacity-25">
        <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&q=80" alt="" className="rounded-2xl blur-sm object-contain w-full h-full mix-blend-screen" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} duration={0.9} className="absolute bottom-[8%] right-[3%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none opacity-25">
        <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&q=80" alt="" className="rounded-2xl blur-sm object-contain w-full h-full mix-blend-screen" />
      </FadeIn>

      <div className="flex flex-col items-center justify-center max-w-4xl z-10 w-full relative">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14">
            About Me
          </h2>
        </FadeIn>

        <AnimatedText 
          text="With 2.5 years of experience across data analytics, AI research, and market intelligence, I help businesses cut through noise and act on what the numbers actually say. I've led 13 high-impact projects spanning predictive modeling, consumer behavior analysis, competitive research, and data-driven content — always with one goal: turning complexity into clarity. If your data has a story, I'll find it."
          className="text-[#C8D8F0] font-medium text-center leading-relaxed max-w-[580px] text-[clamp(1rem,2vw,1.3rem)] mb-8"
        />

        <div className="flex flex-wrap justify-center items-center gap-3 w-full max-w-2xl mb-12 sm:mb-16">
          {tools.map((tool, i) => (
            <FadeIn key={i} delay={i * 0.03} y={10}>
              <div className="border border-[#5B8DEF44] bg-[#5B8DEF11] text-[#A8C8FF] text-xs dm-mono tracking-wider px-3 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(91,141,239,0.3)] hover:shadow-[0_0_20px_rgba(91,141,239,0.7)] hover:bg-[#5B8DEF22] hover:border-[#5B8DEF] transition-all duration-300">
                {tool}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
