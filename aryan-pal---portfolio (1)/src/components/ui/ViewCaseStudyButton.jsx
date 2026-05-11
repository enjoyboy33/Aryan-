import { ArrowUpRight } from 'lucide-react';

export default function ViewCaseStudyButton() {
  return (
    <button className="flex items-center gap-2 rounded-full border-2 border-[#5B8DEF] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#A8C8FF] font-medium uppercase tracking-widest hover:bg-[#5B8DEF]/10 transition-colors cursor-pointer">
      View Case Study <ArrowUpRight size={18} />
    </button>
  );
}
