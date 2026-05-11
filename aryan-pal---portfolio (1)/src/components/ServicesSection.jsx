import FadeIn from './ui/FadeIn.jsx';

const services = [
  { id: "01", name: "Data Analytics", desc: "End-to-end analysis of complex datasets — from raw ingestion to insight delivery — using Python, SQL, and BI tools to surface patterns that guide real decisions." },
  { id: "02", name: "AI Research", desc: "Designing and executing applied AI/ML research: model evaluation, LLM benchmarking, prompt engineering studies, and translating findings into actionable implementation strategies." },
  { id: "03", name: "Market Research", desc: "Deep competitive and consumer intelligence — industry scans, TAM analysis, survey design, and synthesis of qualitative + quantitative signals into strategic briefs." },
  { id: "04", name: "Business Insights", desc: "Building executive-ready dashboards, KPI frameworks, and narrative reports that transform scattered data into a single source of truth for leadership teams." },
  { id: "05", name: "Content Writing", desc: "Data-driven long-form content, research articles, and technical writing that make complex topics accessible — for blogs, LinkedIn, whitepapers, and brand media." }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 w-full text-[#0A0A0F]">
      <FadeIn delay={0} y={40} className="w-full">
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight text-[#0A0A0F] w-full block">
          Services
        </h2>
      </FadeIn>

      <div className="flex flex-col max-w-5xl mx-auto w-full">
        {services.map((svc, i) => (
          <FadeIn key={svc.id} delay={i * 0.1} y={20} className="w-full">
            <div className={`flex flex-col md:flex-row md:items-start py-8 sm:py-10 md:py-12 border-b border-[rgba(10,10,15,0.15)] ${i === 0 ? 'border-t' : ''}`}>
              <div className="font-black dm-mono text-[#0A0A0F] text-[clamp(3rem,10vw,140px)] leading-none md:w-[30%] lg:w-[35%] shrink-0">
                {svc.id}
              </div>
              <div className="flex flex-col md:w-[70%] lg:w-[65%] mt-4 md:mt-2">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2rem)] mb-2 md:mb-4 text-[#0A0A0F]">
                  {svc.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.2rem)] opacity-60 text-[#0A0A0F]">
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
