import FadeIn from './ui/FadeIn.jsx';
import ContactButton from './ui/ContactButton.jsx';
import Magnet from './ui/Magnet.jsx';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative px-6 md:px-10">
      <FadeIn delay={0} y={-20} className="w-full relative z-30">
        <nav className="flex justify-between items-center text-[#C8D8F0] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] pt-6 md:pt-8 w-full">
          {["About", "Services", "Projects", "Research", "Contact"].map((link, i) => (
            <a key={i} href={`#${link.toLowerCase()}`} className="hover:opacity-60 transition-opacity duration-200 cursor-pointer">
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center items-center relative z-20 w-full mt-6 sm:mt-4 md:-mt-5 pointer-events-none">
        <div className="overflow-hidden w-full text-center pb-2">
          <FadeIn delay={0.15} y={40} className="flex justify-center w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15.5vw] lg:text-[17vw] pb-2">
              Hi, i&apos;m aryan
            </h1>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.3} y={20}>
          <p className="text-[#5B8DEF] dm-mono text-sm md:text-base tracking-widest uppercase mt-2">
            Data Analyst · AI Researcher · Content Strategist
          </p>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-30 pointer-events-none">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#C8D8F0] font-light uppercase tracking-wide leading-snug text-[clamp(0.7rem,1.3vw,1.3rem)] max-w-[160px] sm:max-w-[210px] md:max-w-[250px]">
            turning raw data into decisions that actually move the needle.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none flex justify-center">
        <FadeIn delay={0.6} y={30} className="w-full">
          <Magnet padding={150} strength={3} className="w-full pointer-events-auto">
            <div className="relative w-full text-center flex justify-center">
              <img 
                src="https://iili.io/BDrX8an.png" 
                alt="Avatar" 
                className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto h-auto object-contain relative z-10 drop-shadow-[0_0_25px_rgba(91,141,239,0.4)] transition-transform duration-500 hover:scale-105 hover:drop-shadow-[0_0_40px_rgba(91,141,239,0.7)]"
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-blue-500/30 blur-[60px] rounded-full z-0"></div>
            </div>
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
