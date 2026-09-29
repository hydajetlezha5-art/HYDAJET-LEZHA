import React, { useState } from 'react';
import { Bell, ArrowRight, X, AlertCircle, Calendar, UserCheck, Sparkles } from 'lucide-react';
import { urgentAnnouncements } from '../data/schoolData';
import { Announcement } from '../types';

export const UrgentAlertTicker: React.FC = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [tickerIndex, setTickerIndex] = useState(0);

  const currentAlert = urgentAnnouncements[tickerIndex];

  const handleNext = () => {
    setTickerIndex((prev) => (prev + 1) % urgentAnnouncements.length);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-sky-100 via-sky-50 to-sky-100 text-slate-800 border-b border-sky-200/90 px-4 py-2 text-xs shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="bg-gold-gradient text-slate-950 border border-[#D4AF37] text-[10px] font-extrabold px-2.5 py-0.5 rounded-lg uppercase tracking-wider flex items-center gap-1 shrink-0 shadow-xs">
              <Bell className="w-3 h-3 text-[#7A530C] animate-bounce" />
              <span>Njoftim Zyrtar</span>
            </span>
            <div className="truncate text-slate-700">
              <span className="font-bold text-slate-950 mr-2">{currentAlert.title}:</span>
              <span className="text-slate-600 hidden md:inline">{currentAlert.content}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setSelectedAnnouncement(currentAlert)}
              className="text-[#8E6516] hover:text-[#5A3E07] underline font-bold cursor-pointer"
            >
              Lexo të plotë
            </button>
            {urgentAnnouncements.length > 1 && (
              <button
                onClick={handleNext}
                className="text-sky-800 hover:text-sky-950 px-2 py-0.5 rounded-lg bg-sky-200/80 border border-sky-300 text-[10px] font-semibold cursor-pointer"
                title="Njoftimi tjetër"
              >
                Më tej →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Announcement Detail Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 bg-sky-950/40 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 space-y-4 shadow-2xl relative border-2 border-sky-200">
            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-sky-50 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#8E6516] font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Njoftim Zyrtar i Drejtorisë</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {selectedAnnouncement.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-slate-500 pb-3 border-b border-sky-100">
              <span className="flex items-center gap-1.5 text-sky-800 font-medium">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                {selectedAnnouncement.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <UserCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                Për: <strong className="text-slate-900">{selectedAnnouncement.targetAudience}</strong>
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-editorial">
              {selectedAnnouncement.content}
            </p>

            <div className="pt-3 border-t border-sky-100 flex justify-end">
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="px-5 py-2 text-xs font-bold bg-gold-gradient hover:brightness-105 text-slate-950 border border-[#D4AF37] rounded-xl shadow-gold-glow cursor-pointer"
              >
                E kuptova
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
