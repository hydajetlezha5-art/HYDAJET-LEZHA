import React from 'react';
import { ArrowDown, Sparkles, ChevronRight } from 'lucide-react';

interface SectionConnectorProps {
  currentSection: string;
  nextSectionId: string;
  nextSectionTitle: string;
  nextSectionDescription: string;
  onNavigate: (sectionId: string) => void;
  accentColor?: string;
}

export const SectionConnector: React.FC<SectionConnectorProps> = ({
  currentSection,
  nextSectionId,
  nextSectionTitle,
  nextSectionDescription,
  onNavigate,
}) => {
  return (
    <div className="relative py-6 bg-gradient-to-b from-transparent via-sky-100/40 to-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border-2 border-sky-200/90 shadow-baby-glow hover:border-[#D4AF37] transition-all duration-300">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 border border-sky-300 flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5 text-[#AA7A1E]" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold text-sky-950 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1.5">
                <span>Vazhdoni me lëndën tjetër</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                <span className="text-[#8E6516] font-bold">{nextSectionTitle}</span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                {nextSectionDescription}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate(nextSectionId)}
            className="px-4 py-2 rounded-xl text-xs font-extrabold text-slate-950 bg-gold-gradient hover:brightness-105 border border-[#D4AF37] shadow-gold-glow transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap cursor-pointer"
          >
            <span>Shko te {nextSectionTitle}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
