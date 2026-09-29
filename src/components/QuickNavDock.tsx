import React from 'react';
import { 
  Home, 
  BookOpen, 
  Newspaper, 
  Atom, 
  Trophy, 
  Users, 
  Camera, 
  FileText, 
  MapPin 
} from 'lucide-react';

interface QuickNavDockProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const QuickNavDock: React.FC<QuickNavDockProps> = ({ activeSection, onNavigate }) => {
  const dockItems = [
    { id: 'hero', label: 'Kryefaqja', icon: Home },
    { id: 'rreth-nesh', label: 'Rreth Nesh', icon: BookOpen },
    { id: 'lajme', label: 'Lajme', icon: Newspaper },
    { id: 'projekte', label: 'Projekte', icon: Atom },
    { id: 'arritjet', label: 'Arritjet', icon: Trophy },
    { id: 'jeta-studentore', label: 'Nxënësit', icon: Users },
    { id: 'galeria', label: 'Galeria', icon: Camera },
    { id: 'dokumente', label: 'Dokumente', icon: FileText },
    { id: 'kontakt', label: 'Kontakt', icon: MapPin },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-2xl w-full px-2 pointer-events-none">
      <nav 
        className="pointer-events-auto bg-white/95 backdrop-blur-md border-2 border-sky-300 shadow-[0_8px_30px_rgba(56,189,248,0.25)] rounded-2xl p-1.5 flex items-center justify-between gap-1 overflow-x-auto scrollbar-none"
        aria-label="Lundrim i shpejtë midis rubrikave"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex-1 min-w-[42px] py-1.5 px-2 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-200 group relative cursor-pointer ${
                isActive
                  ? 'bg-gold-gradient text-slate-950 shadow-gold-glow font-bold scale-105 border border-[#D4AF37]'
                  : 'text-sky-900 hover:text-slate-950 hover:bg-sky-100/70'
              }`}
              title={item.label}
            >
              <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-slate-950' : 'text-sky-600'}`} />
              <span className={`text-[10px] mt-0.5 whitespace-nowrap hidden sm:inline ${isActive ? 'text-slate-950 font-extrabold' : 'text-sky-950 font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E6516] absolute -bottom-1 shadow-xs" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
