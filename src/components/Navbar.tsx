import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronRight, 
  School,
  Home,
  BookOpen,
  Newspaper,
  Atom,
  Trophy,
  Users,
  Camera,
  FileText,
  Sparkles
} from 'lucide-react';
import { schoolGeneralInfo } from '../data/schoolData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Kryefaqja', icon: Home },
    { id: 'rreth-nesh', label: 'Rreth Nesh', icon: BookOpen },
    { id: 'lajme', label: 'Lajme', icon: Newspaper },
    { id: 'projekte', label: 'Projekte & Fizika', icon: Atom },
    { id: 'arritjet', label: 'Arritjet', icon: Trophy },
    { id: 'jeta-studentore', label: 'Nxënësit', icon: Users },
    { id: 'galeria', label: 'Galeria', icon: Camera },
    { id: 'dokumente', label: 'Dokumente', icon: FileText },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-sky-200 shadow-[0_4px_20px_rgba(56,189,248,0.12)]">
      {/* Top micro utility ribbon - Baby blue canvas with gold touches */}
      <div className="bg-sky-50 text-sky-900 border-b border-sky-200/80 px-4 sm:px-8 py-1.5 text-xs flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-sky-950 font-medium">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse inline-block shadow-[0_0_8px_#38bdf8]"></span>
            Viti Shkollor 2026–2027 · Themeluar 1957 (Mbi 65 Vjet Traditë)
          </span>
          <span className="hidden md:inline text-sky-300">|</span>
          <a href={`tel:${schoolGeneralInfo.phone}`} className="hidden md:flex items-center gap-1.5 text-sky-800 hover:text-[#996515] transition-colors">
            <Phone className="w-3 h-3 text-[#C59B27]" />
            <span>{schoolGeneralInfo.phone}</span>
          </a>
          <span className="hidden lg:inline text-sky-300">|</span>
          <a href={`mailto:${schoolGeneralInfo.email}`} className="hidden lg:flex items-center gap-1.5 text-sky-800 hover:text-[#996515] transition-colors">
            <Mail className="w-3 h-3 text-[#C59B27]" />
            <span>{schoolGeneralInfo.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#8E6516] tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>Dituria • Përkushtimi • E ardhmja</span>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Wordmark with Baby Blue crest and Gold border */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-400 via-sky-300 to-sky-200 border-2 border-[#D4AF37] flex items-center justify-center text-slate-900 shadow-gold-glow group-hover:scale-105 transition-all duration-300">
            <School className="w-6 h-6 text-[#7A530C]" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 font-display group-hover:text-sky-700 transition-colors">
              GJIMNAZI “HYDAJET LEZHA”
            </div>
            <div className="text-[10px] uppercase tracking-widest text-sky-700 font-bold">
              Institucion Publik Parauniversitar · Lezhë
            </div>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm font-medium text-slate-700">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center gap-1.5 py-1.5 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-slate-900 font-bold bg-sky-100 border border-[#D4AF37] shadow-xs'
                    : 'text-slate-700 hover:text-sky-800 hover:bg-sky-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#AA7A1E]' : 'text-sky-500'}`} />
                <span className="whitespace-nowrap">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Gold Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('kontakt')}
            className="px-4 py-2 text-xs font-extrabold text-slate-900 bg-gold-gradient hover:brightness-105 border border-[#D4AF37] rounded-xl transition-all shadow-gold-glow flex items-center gap-1.5 cursor-pointer"
          >
            <span>Kontakt & Sekretaria</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-900" />
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-sky-900 hover:bg-sky-100 border border-sky-300 focus:outline-none cursor-pointer"
            aria-label="Hap menynë kryesore"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-t border-sky-200 px-4 py-4 space-y-1.5 shadow-lg backdrop-blur-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-sky-100 text-slate-950 font-bold border-l-4 border-[#D4AF37] pl-3'
                    : 'text-slate-700 hover:bg-sky-50 hover:text-sky-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#AA7A1E]' : 'text-sky-500'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-sky-100">
            <button
              onClick={() => handleLinkClick('kontakt')}
              className="w-full py-2.5 px-4 text-xs font-extrabold text-slate-900 bg-gold-gradient border border-[#D4AF37] rounded-xl shadow-gold-glow text-center"
            >
              Sekretaria & Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
