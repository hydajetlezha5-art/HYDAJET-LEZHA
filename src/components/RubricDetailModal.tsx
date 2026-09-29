import React from 'react';
import { 
  X, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Newspaper, 
  Atom, 
  Users, 
  Building,
  Trophy,
  Camera,
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface RubricDetailModalProps {
  rubricId: string | null;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const RubricDetailModal: React.FC<RubricDetailModalProps> = ({
  rubricId,
  onClose,
  onNavigate,
}) => {
  if (!rubricId) return null;

  const rubricDetails: Record<string, {
    title: string;
    subtitle: string;
    icon: any;
    description: string;
    highlights: string[];
    actionLabel: string;
  }> = {
    'rreth-nesh': {
      title: 'Rreth Gjimnazit & Historia',
      subtitle: 'Themeluar në vitin 1957 · Mbi 65 Vjet Traditë',
      icon: BookOpen,
      description: 'Nga katër mësues dhe një ndërtesë e thjeshtë në vitin 1957 me drejtor Mark Vujin, te godina moderne me 26 klasa. Zbuloni trashëgiminë e pasur arsimore të Lezhës, figurën e Heroit të Popullit Hydajet Lezha dhe stafin pedagogjik me 54 mësimdhënës.',
      highlights: [
        'Vitet e themelimit (1957–1961) me drejtor Mark Vujin',
        'Konsolidimi (1962–1987) dhe shkollimi i 369 maturantëve të parë',
        'Godina e re moderne dhe laboratorët shkencorë',
        'Organigrama e plotë e drejtorisë dhe katedrave mësimore'
      ],
      actionLabel: 'Shko te Rreth Nesh'
    },
    'lajme': {
      title: 'Lajme & Njoftime Zyrtare',
      subtitle: 'Informacione, Olimpiada & Ngjarje në Kohë Reale',
      icon: Newspaper,
      description: 'Qëndroni të informuar me njoftimet e fundit të drejtorisë, fitoret në olimpiada të fizikës, matematikës e biologjisë, ekskursionet mësimore dhe aktivitetet kulturore të shkollës.',
      highlights: [
        'Sukseset në Olimpiadën Kombëtare të Shkencave',
        'Njoftimet zyrtare për maturantët dhe prindërit',
        'Raporte dhe fotografi nga ngjarjet mësimore',
        'Filtra sipas tematikave dhe kërkim me fjalë kyçe'
      ],
      actionLabel: 'Shko te Lajmet'
    },
    'projekte': {
      title: 'Projektet & Fizika Interaktive',
      subtitle: 'fizikainteraktive.com · Inovacion i Nxënësve tanë',
      icon: Atom,
      description: 'Platforma dhe uebsajti zyrtar "Fizika Interaktive" (fizikainteraktive.com) i ndërtuar nga nxënësit e Gjimnazit “Hydajet Lezha”, i pasuruar me simulatorë kompjuterikë, QR Code për celularë, robotikë me Arduino, dhe projekte ndërkombëtare Erasmus+/RYCO.',
      highlights: [
        'Uebsajti zyrtar i nxënësve: fizikainteraktive.com me simulime të plota',
        'Simulatori i Lëkundësit Harmonik dhe Optikës me QR Code',
        'Stacioni meteorologjik dhe robotika autonome mjedisore',
        'Shkëmbimet ndërkombëtare rinore me Bashkimin Evropian'
      ],
      actionLabel: 'Shko te Projektet & Simulatori'
    },
    'arritjet': {
      title: 'Arritjet & Olimpiadat 🏆',
      subtitle: '18 Medalje Ari, 24 Medalje Argjendi & Kupa Nderi',
      icon: Trophy,
      description: 'Një kronologji e lavdishme suksesi në gara kombëtare dhe olimpiada ballkanike. Nderojmë nxënësit më të dalluar dhe mësuesit e përkushtuar të gjimnazit ndër vite.',
      highlights: [
        'Vendi i parë në Olimpiadën Kombëtare të Fizikës',
        'Medalje në Olimpiadën Ballkanike të Matematikës',
        'Kampionë rajonalë në debatin rinor dhe sporte',
        'Timeline interaktive nga viti 2023 deri sot'
      ],
      actionLabel: 'Shko te Arritjet'
    },
    'jeta-studentore': {
      title: 'Jeta Studentore & Klubet 🎓',
      subtitle: 'Senati Shkollor, 6 Klube Aktive & Sporti',
      icon: Users,
      description: 'Zbuloni jetën e gjallë rinore: Këshilli i Nxënësve me 29 senatorë, klubet e Robotikës, Fizikës, Debatit, Mjedisit, Artit dhe ekipeve sportive kampionë të volejbollit e basketbollit.',
      highlights: [
        'Këshilli dhe Senati i Nxënësve',
        'Formular regjistrimi i menjëhershëm në klube',
        'Aktivitetet e Eko-Klubit dhe pastrimi i mjedisit',
        'Kampionatet dhe traditat shkollore'
      ],
      actionLabel: 'Shko te Jeta Studentore'
    },
    'galeria': {
      title: 'Galeria Fotografike 📸',
      subtitle: 'Arkiva Vizuale e Momenteve më të Bukura',
      icon: Camera,
      description: 'Eksploroni albumin fotografik të shkollës: orët laboratorike të fizikës, garat, ceremonitë e maturës dhe ekskursionet në Kalanë e Lezhës dhe lumin Drin.',
      highlights: [
        'Fotografi me cilësi të lartë dhe lightbox me zmadhim',
        'Kategori të ndara: Shkollë, Projekte, Gara, Evente',
        'Momente historike dhe bashkëkohore të jetës shkollore'
      ],
      actionLabel: 'Shko te Galeria'
    },
    'dokumente': {
      title: 'Dokumente & Formularë Zyrtarë 📄',
      subtitle: 'Rregullorja, Orari & Udhëzuesi i Maturës',
      icon: FileText,
      description: 'Shërbime administrative transparente: shkarkoni rregulloren e brendshme, oraret e mësimit, formularët e vërtetimeve dhe udhëzuesin e plotë të Maturës Shtetërore.',
      highlights: [
        'Shkarkim dhe preview i dokumenteve në format PDF e DOCX',
        'Orari ditor dhe ndarja e laboratorëve shkencorë',
        'Formularë kërkese për vërtetim frekuentimi dhe notash'
      ],
      actionLabel: 'Shko te Dokumentet'
    },
    'kontakt': {
      title: 'Kontakti & Sekretaria 📍',
      subtitle: 'Rruga Gjon Pali II · Lagjja Besëlidhja, Lezhë',
      icon: Building,
      description: 'Adresa zyrtare, oraret e pritjes së prindërve, telefonat e sekretarisë, harta interaktive e Lezhës dhe formulari për dërgimin e mesazheve me protokoll elektronik.',
      highlights: [
        'Adresa e saktë pranë Qendrës Kulturore, Lezhë',
        'Orari i sekretarisë mësimore: 07:30 – 15:30',
        'Formular kontakti me konfirmim të menjëhershëm',
        'Harta e qytetit dhe lumit Drin'
      ],
      actionLabel: 'Shko te Kontakti'
    }
  };

  const details = rubricDetails[rubricId] || rubricDetails['rreth-nesh'];
  const Icon = details.icon;

  const handleJump = () => {
    onClose();
    onNavigate(rubricId);
  };

  return (
    <div className="fixed inset-0 z-50 bg-sky-950/60 flex items-center justify-center p-4 backdrop-blur-md">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border-2 border-sky-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-9 h-9 rounded-full flex items-center justify-center hover:bg-sky-50 cursor-pointer"
          aria-label="Mbyll"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center shadow-xs">
            <Icon className="w-6 h-6 text-[#8E6516]" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#8E6516] block">
              {details.subtitle}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-950 font-display">
              {details.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed font-editorial">
          {details.description}
        </p>

        <div className="space-y-2.5">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Pikat Kryesore të Kësaj Rubrike:</span>
          </h4>
          <ul className="space-y-2">
            {details.highlights.map((h, i) => (
              <li key={i} className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#AA7A1E] shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-sky-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
          >
            Mbyll
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {rubricId === 'projekte' && (
              <a
                href="https://fizikainteraktive.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-extrabold bg-sky-900 hover:bg-sky-950 text-white rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
                <span>Hap fizikainteraktive.com ↗</span>
              </a>
            )}

            <button
              onClick={handleJump}
              className="px-6 py-2.5 text-xs font-extrabold bg-gold-gradient hover:brightness-105 border border-[#D4AF37] text-slate-950 rounded-xl shadow-gold-glow flex items-center gap-1.5 cursor-pointer"
            >
              <span>{details.actionLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
