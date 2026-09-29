import React from 'react';
import { 
  ArrowRight, 
  Award, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Sparkles, 
  Compass, 
  Atom, 
  Building, 
  School,
  Maximize2
} from 'lucide-react';
import { schoolGeneralInfo, schoolImages } from '../data/schoolData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenRubric: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenRubric }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white text-slate-900">
      {/* Background Hero Image with soft daylight baby-blue overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={schoolImages.hero}
          alt="Gjimnazi Hydajet Lezha - Ndërtesa e shkollës"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/85 via-sky-50/90 to-white" />
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-3xl space-y-6">
          {/* Institutional Badge: Baby Blue & Real Gold */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#D4AF37] text-slate-800 text-xs font-bold tracking-wider shadow-gold-glow">
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span className="text-sky-950">Traditë e Shkëlqyer që nga viti 1957</span>
            <span className="text-sky-400">·</span>
            <span className="text-[#8E6516] font-extrabold">Mbi 65 Vjet Histori</span>
          </div>

          {/* School Name & Motto */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.12]">
              GJIMNAZI <span className="text-sky-700">“HYDAJET LEZHA”</span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 bg-gold-gradient rounded-full"></span>
              <p className="text-xl sm:text-2xl font-serif text-[#8E6516] italic tracking-wide font-medium">
                Dituria • Përkushtimi • E ardhmja
              </p>
            </div>
          </div>

          {/* School Presentation */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
            {schoolGeneralInfo.tagline} Edukojmë me standarde të larta akademike, kuriozitet shkencor dhe vlera të forta qytetare në qytetin historik të Lezhës.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-3.5">
            <button
              onClick={() => onNavigate('rreth-nesh')}
              className="px-6 py-3.5 text-sm font-extrabold text-slate-950 bg-gold-gradient hover:brightness-105 border border-[#D4AF37] rounded-2xl transition-all shadow-gold-glow flex items-center gap-2 cursor-pointer"
            >
              <span>Historia & Rreth Nesh</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
            <button
              onClick={() => onNavigate('projekte')}
              className="px-6 py-3.5 text-sm font-bold text-sky-950 bg-white hover:bg-sky-50 border-2 border-sky-400 rounded-2xl transition-all shadow-baby-glow flex items-center gap-2 cursor-pointer"
            >
              <Atom className="w-4 h-4 text-sky-600 animate-spin-slow" />
              <span>Fizika Interaktive & Projektet</span>
            </button>
          </div>

          {/* 5 Quick Action Buttons with option to view larger */}
          <div className="pt-6 border-t border-sky-200">
            <div className="text-xs uppercase tracking-widest text-sky-900 mb-3 font-extrabold flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C59B27]" />
                <span>Rubrikat Kryesore (Kliko për t&apos;i hapur më të mëdha):</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {[
                { id: 'rreth-nesh', label: 'Rreth Nesh', icon: BookOpen },
                { id: 'lajme', label: 'Lajme', icon: Award },
                { id: 'projekte', label: 'Projekte', icon: Atom },
                { id: 'jeta-studentore', label: 'Nxënësit', icon: Users },
                { id: 'kontakt', label: 'Kontakt', icon: Building }
              ].map((btn) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={btn.id}
                    onClick={() => onOpenRubric(btn.id)}
                    className="px-4 py-2 text-xs font-bold text-sky-950 bg-white/95 hover:bg-sky-100 hover:border-[#D4AF37] border-2 border-sky-300 rounded-2xl transition-all flex items-center gap-2 shadow-xs cursor-pointer group"
                    title={`Kliko për të hapur rubrikën ${btn.label} të zmadhuar`}
                  >
                    <Icon className="w-4 h-4 text-[#AA7A1E] group-hover:scale-110 transition-transform" />
                    <span>{btn.label}</span>
                    <Maximize2 className="w-3 h-3 text-sky-500 group-hover:text-[#AA7A1E] ml-0.5 opacity-60 group-hover:opacity-100" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Institutional Statistics Strip */}
        <div className="mt-12 pt-8 border-t border-sky-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          <div 
            onClick={() => onOpenRubric('rreth-nesh')}
            className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-sky-200 shadow-baby-glow space-y-1 hover:border-[#D4AF37] transition-all cursor-pointer group"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 tracking-tight tabular-nums flex items-center justify-between">
              <span>864+</span>
              <Users className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs text-slate-600 font-bold">Nxënës të Regjistruar</div>
            <div className="text-[11px] text-sky-800 font-semibold">29 Klasa Paralele</div>
          </div>

          <div 
            onClick={() => onOpenRubric('rreth-nesh')}
            className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-sky-200 shadow-baby-glow space-y-1 hover:border-[#D4AF37] transition-all cursor-pointer group"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 tracking-tight tabular-nums flex items-center justify-between">
              <span>54</span>
              <GraduationCap className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs text-slate-600 font-bold">Mësues të Kualifikuar</div>
            <div className="text-[11px] text-sky-800 font-semibold">Trajnerë Kombëtarë</div>
          </div>

          <div 
            onClick={() => onOpenRubric('arritjet')}
            className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#D4AF37]/50 shadow-gold-glow space-y-1 hover:border-[#D4AF37] transition-all cursor-pointer group"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#8E6516] tracking-tight tabular-nums flex items-center justify-between">
              <span>98.6%</span>
              <Award className="w-5 h-5 text-[#C59B27] group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs text-slate-700 font-bold">Kalueshmëri në Maturë</div>
            <div className="text-[11px] text-[#8E6516] font-semibold">94% në Universitete</div>
          </div>

          <div 
            onClick={() => onOpenRubric('rreth-nesh')}
            className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#D4AF37]/50 shadow-gold-glow space-y-1 hover:border-[#D4AF37] transition-all cursor-pointer group"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#8E6516] tracking-tight tabular-nums flex items-center justify-between">
              <span>1957</span>
              <Building className="w-5 h-5 text-[#C59B27] group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xs text-slate-700 font-bold">Themelimi i Shkollës</div>
            <div className="text-[11px] text-[#8E6516] font-semibold">Godina e Re 2010</div>
          </div>
        </div>
      </div>
    </section>
  );
};
