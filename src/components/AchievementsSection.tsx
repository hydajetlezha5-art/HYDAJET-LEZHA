import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  Star, 
  Sparkles, 
  Calendar, 
  ChevronRight, 
  Crown 
} from 'lucide-react';
import { achievementsTimeline } from '../data/schoolData';
import { Achievement } from '../types';

export const AchievementsSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Të Gjitha Nderimet' },
    { id: 'Kombëtare', label: 'Kombëtare' },
    { id: 'Ballkanike', label: 'Ballkanike & Ndërkombëtare' },
    { id: 'Rajonale', label: 'Rajonale' },
  ];

  const filteredAchievements = selectedLevel === 'all'
    ? achievementsTimeline
    : achievementsTimeline.filter((a) => {
        if (selectedLevel === 'Ballkanike') {
          return a.level === 'Ballkanike' || a.level === 'Ndërkombëtare';
        }
        return a.level === selectedLevel;
      });

  const getMedalBadge = (type: Achievement['type']) => {
    switch (type) {
      case 'ari':
        return (
          <div className="flex items-center gap-1.5 text-slate-950 bg-gold-gradient border border-[#D4AF37] px-3 py-1 rounded-xl text-xs font-extrabold shadow-gold-glow">
            <Medal className="w-4 h-4 text-[#7A530C] fill-[#D4AF37]" />
            <span>Medalje Ari</span>
          </div>
        );
      case 'argjend':
        return (
          <div className="flex items-center gap-1.5 text-slate-800 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 border border-slate-300 px-3 py-1 rounded-xl text-xs font-bold shadow-xs">
            <Medal className="w-4 h-4 text-slate-500 fill-slate-400" />
            <span>Medalje Argjendi</span>
          </div>
        );
      case 'bronztë':
        return (
          <div className="flex items-center gap-1.5 text-[#7A530C] bg-[#FAF0CD]/60 border border-[#D4AF37]/60 px-3 py-1 rounded-xl text-xs font-bold shadow-xs">
            <Medal className="w-4 h-4 text-[#AA7A1E] fill-[#AA7A1E]" />
            <span>Medalje Bronzi</span>
          </div>
        );
      case 'cmim_nderi':
        return (
          <div className="flex items-center gap-1.5 text-sky-950 bg-sky-100 border border-sky-300 px-3 py-1 rounded-xl text-xs font-bold shadow-xs">
            <Crown className="w-4 h-4 text-sky-600" />
            <span>Çmim Nderi</span>
          </div>
        );
    }
  };

  return (
    <section id="arritjet" className="py-20 bg-gradient-to-b from-white via-sky-50/60 to-white border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-widest border border-sky-300">
              <Trophy className="w-3.5 h-3.5 text-[#AA7A1E]" />
              <span>Krenaria Akademike & Olimpiadat</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Arritjet & <span className="text-sky-700">Olimpiadat</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Historia e sukseseve të nxënësve tanë në olimpiada të shkencave, gara kombëtare dhe forume ndërkombëtare.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-sky-100 rounded-2xl border border-sky-200 max-w-fit">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedLevel(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedLevel === tab.id
                    ? 'bg-sky-600 text-white font-bold shadow-xs'
                    : 'text-sky-900 hover:text-slate-900 hover:bg-white/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trophies Summary Banner in Baby Blue & Real Gold */}
        <div className="bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-3xl p-6 sm:p-8 border-2 border-sky-200 shadow-baby-glow grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="w-11 h-11 rounded-2xl bg-gold-gradient border border-[#D4AF37] text-slate-950 flex items-center justify-center mx-auto mb-2 shadow-gold-glow">
              <Medal className="w-5 h-5 fill-[#AA7A1E]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#8E6516] tabular-nums">
              18
            </div>
            <div className="text-xs text-slate-800 font-bold">Medalje Ari Kombëtare</div>
            <div className="text-[11px] text-slate-500">Fizikë & Matematikë</div>
          </div>

          <div className="space-y-1">
            <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-300 text-slate-700 flex items-center justify-center mx-auto mb-2 shadow-xs">
              <Medal className="w-5 h-5 fill-slate-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-700 tabular-nums">
              24
            </div>
            <div className="text-xs text-slate-800 font-bold">Medalje Argjendi</div>
            <div className="text-[11px] text-slate-500">Shkenca & Letërsi</div>
          </div>

          <div className="space-y-1">
            <div className="w-11 h-11 rounded-2xl bg-sky-100 border border-sky-300 text-sky-800 flex items-center justify-center mx-auto mb-2 shadow-xs">
              <Trophy className="w-5 h-5 text-sky-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-sky-800 tabular-nums">
              16
            </div>
            <div className="text-xs text-slate-800 font-bold">Kupa & Çmime Parësore</div>
            <div className="text-[11px] text-slate-500">Debat & Robotikë</div>
          </div>

          <div className="space-y-1">
            <div className="w-11 h-11 rounded-2xl bg-sky-100 border border-[#D4AF37] text-slate-900 flex items-center justify-center mx-auto mb-2 shadow-xs">
              <Sparkles className="w-5 h-5 text-[#AA7A1E]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#8E6516] tabular-nums">
              65+
            </div>
            <div className="text-xs text-slate-800 font-bold">Vite Traditë Suksesi</div>
            <div className="text-[11px] text-slate-500">Që nga viti 1957</div>
          </div>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l-2 border-sky-300 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {filteredAchievements.map((ach) => (
            <div key={ach.id} className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-sky-600 group-hover:scale-125 group-hover:border-[#D4AF37] group-hover:shadow-gold-glow transition-all duration-300" />

              <div className="bg-white rounded-3xl border border-sky-200 p-6 space-y-3 hover:border-[#D4AF37] hover:shadow-gold-glow transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-extrabold text-sky-900 bg-sky-100 px-3 py-1 rounded-xl border border-sky-300">
                      Viti {ach.year}
                    </span>
                    <span className="text-xs font-bold text-sky-800 tracking-wider uppercase">
                      Niveli: {ach.level}
                    </span>
                  </div>

                  {getMedalBadge(ach.type)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {ach.title}
                </h3>

                <div className="text-xs text-slate-600 space-y-1">
                  <div>
                    <strong className="text-slate-800">Fituesi:</strong> {ach.recipient}
                  </div>
                  <div>
                    <strong className="text-slate-800">Konkursi:</strong> {ach.event}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-sky-100">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
