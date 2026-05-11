import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ViewCaseStudyButton from './ui/ViewCaseStudyButton.jsx';
import FadeIn from './ui/FadeIn.jsx';

const projects = [
  {
    id: "01",
    tag: "AI/ML",
    name: "Customer Churn Predictor",
    images: {
      left1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=85",
      left2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&q=85",
      right: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1280&q=85"
    }
  },
  {
    id: "02",
    tag: "Business Intelligence",
    name: "Market Pulse Dashboard",
    images: {
      left1: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=1280&q=85",
      left2: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1280&q=85",
      right: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1280&q=85"
    }
  },
  {
    id: "03",
    tag: "NLP Research",
    name: "Sentiment Intelligence Engine",
    images: {
      left1: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&q=85",
      left2: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1280&q=85",
      right: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1280&q=85"
    }
  }
];

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });
  
  return (
    <section ref={container} id="projects" className="bg-[#0A0A0F] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <FadeIn delay={0} y={40} className="w-full flex flex-col items-center">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] leading-none tracking-tight w-full block">
          Projects
        </h2>
        <div className="text-[#5B8DEF] dm-mono text-sm tracking-widest text-center mt-3 uppercase">
          13 total — 3 featured
        </div>
      </FadeIn>
      
      <div className="mt-16 sm:mt-24 w-full max-w-6xl mx-auto flex flex-col gap-10 sm:gap-20 pb-20">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          const range = [i * 0.25, 1];
          return <ProjectCard key={project.id} project={project} index={i} targetScale={targetScale} progress={scrollYProgress} range={range} />
        })}
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, targetScale, progress, range }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-[80vh] sm:h-[85vh] flex items-start justify-center w-full sticky origin-top" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#5B8DEF44] bg-[#0F1220] p-4 sm:p-6 md:p-8 flex flex-col justify-between origin-top"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="dm-mono text-[#5B8DEF] text-4xl sm:text-5xl md:text-6xl font-black">{project.id}</span>
            <div className="flex flex-col">
              <span className="text-[#A8C8FF] text-xs sm:text-sm uppercase tracking-widest mb-1">{project.tag}</span>
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-medium uppercase">{project.name}</h3>
            </div>
          </div>
          <ViewCaseStudyButton />
        </div>
        
        <div className="flex flex-1 gap-3 sm:gap-4 md:gap-5 overflow-hidden">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-[40%]">
            <img src={project.images.left1} alt="" className="object-cover w-full h-[clamp(130px,16vw,230px)] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] opacity-90" loading="lazy" />
            <img src={project.images.left2} alt="" className="object-cover w-full h-[clamp(160px,22vw,340px)] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] opacity-90" loading="lazy" />
          </div>
          <div className="w-[60%]">
            <img src={project.images.right} alt="" className="object-cover w-full h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] opacity-90" loading="lazy" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
