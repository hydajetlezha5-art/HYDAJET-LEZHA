import React from 'react';
import { School, MapPin, Phone, Mail, ChevronUp, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { schoolGeneralInfo } from '../data/schoolData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-sky-950 via-[#0a2540] to-sky-950 text-sky-100 border-t-2 border-[#D4AF37] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: School Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-400 via-sky-300 to-sky-200 border-2 border-[#D4AF37] flex items-center justify-center text-slate-900 shadow-gold-glow">
                <School className="w-6 h-6 text-[#7A530C]" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white font-display tracking-tight block">
                  GJIMNAZI “HYDAJET LEZHA”
                </span>
                <span className="text-[10px] text-amber-300 uppercase tracking-widest block font-extrabold">
                  Dituria • Përkushtimi • E ardhmja
                </span>
              </div>
            </div>

            <p className="text-sky-200/90 text-xs leading-relaxed max-w-sm">
              Institucion publik i arsimit të mesëm të lartë në qytetin e Lezhës. Qendër e përsosmërisë akademike, kërkimit shkencor dhe formimit qytetar që nga viti 1957.
            </p>

            <div className="text-[11px] text-sky-300/80 space-y-1 pt-1 font-medium">
              <div>Ministria e Arsimit dhe Sportit e Republikës së Shqipërisë</div>
              <div>Zyra Vendore Arsimore (ZVA) Lezhë · Kodi Institucional: AL-LEZ-014</div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Rubrikat Kryesore</span>
            </h4>
            <ul className="space-y-2 text-sky-200">
              {[
                { id: 'hero', label: 'Kryefaqja' },
                { id: 'rreth-nesh', label: 'Rreth Shkollës & Historia' },
                { id: 'lajme', label: 'Lajme & Njoftime' },
                { id: 'projekte', label: 'Projektet & Fizika' },
                { id: 'arritjet', label: 'Arritjet & Olimpiadat' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Student Life & Documents */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Nxënësit & Shërbime</span>
            </h4>
            <ul className="space-y-2 text-sky-200">
              {[
                { id: 'jeta-studentore', label: 'Klubet & Këshilli i Nxënësve' },
                { id: 'galeria', label: 'Galeria Fotografike' },
                { id: 'dokumente', label: 'Rregullorja & Orari' },
                { id: 'dokumente', label: 'Matura Shtetërore' },
                { id: 'kontakt', label: 'Sekretaria Mësimore' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Kontakt Zyrtar</span>
            </h4>
            <div className="space-y-2.5 text-sky-200 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{schoolGeneralInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="font-mono">{schoolGeneralInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">{schoolGeneralInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="font-mono">{schoolGeneralInfo.officialWebsite}</span>
              </div>
              <div className="pt-2 text-[11px] text-sky-300/80 border-t border-sky-800">
                Orari: {schoolGeneralInfo.secretaryHours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-sky-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sky-300">
          <div>
            © {new Date().getFullYear()} Gjimnazi “Hydajet Lezha” (Themeluar 1957). Të gjitha të drejtat e rezervuara.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('dokumente')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Rregullorja e Brendshme
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('kontakt')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Harta & Kontakti
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-amber-300 hover:text-white transition-colors cursor-pointer font-bold"
            >
              <span>Lart</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
