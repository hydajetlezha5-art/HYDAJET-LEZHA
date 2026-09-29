import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  BookMarked, 
  GraduationCap, 
  Mail, 
  Building2, 
  Calendar, 
  Sparkles, 
  Award, 
  Cpu, 
  HeartHandshake, 
  Bookmark, 
  ExternalLink,
  Sprout,
  BookOpen,
  Layers,
  School,
  Maximize2,
  X,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { schoolHistory, staffMembers, schoolGeneralInfo, schoolImages } from '../data/schoolData';

// Detailed sequential milestones for the 1-by-1 animation experience
export const chronologicalMilestones = [
  {
    id: 'm-1957',
    year: '1957',
    eraIndex: 0,
    title: 'Themelimi i Gjimnazit të Parë në Lezhë',
    subtitle: 'Gusht 1957 — Fillimi i një epoke të re arsimore',
    category: 'Themelimi',
    icon: 'Sprout',
    summary: 'Hapet shkolla e parë e mesme në historinë e qytetit të Lezhës, duke marrë emrin e intelektualit dhe patriotit lezhjan Hydajet Lezha.',
    details: [
      { label: 'Gusht 1957', text: 'Shkolla themelohet me vendim zyrtar si i pari gjimnaz i përgjithshëm në të gjithë rrethin e Lezhës.' },
      { label: 'Emri i shkollës', text: 'I dedikohet figurës së shquar lezhjane Hydajet Lezha, simbol i dijes dhe atdhedashurisë.' },
      { label: 'Stafi i parë', text: 'Fillon me vetëm katër mësues pionierë, të përkushtuar mes sfidash të mëdha logjistike e didaktike.' }
    ]
  },
  {
    id: 'm-1958',
    year: '1958',
    eraIndex: 0,
    title: 'Përpjekja e Drejtorit Mark Vuji',
    subtitle: 'Mobilizimi derë më derë për dijen',
    category: 'Lidershipi',
    icon: 'BookOpen',
    summary: 'Drejtori i parë legjendar, Mark Vuji, viziton personalisht familjet në qytet dhe fshatrat përreth për të bindur prindërit të arsimojnë fëmijët.',
    details: [
      { label: 'Vizitat në terren', text: 'Mark Vuji ecën me këmbë në lagjet e Lezhës dhe fshatrat e Zadrimës për të regjistruar nxënësit e parë.' },
      { label: 'Thyerja e tabuve', text: 'Inkurajohet posaçërisht regjistrimi i vajzave në shkollën e mesme, një hap revolucionar për kohën.' },
      { label: 'Kushtet fillestare', text: 'Mësimi zhvillohej me pak tekste të shpërndara mes nxënësve, por me një vullnet të jashtëzakonshëm.' }
    ]
  },
  {
    id: 'm-1959',
    year: '1959',
    eraIndex: 0,
    title: 'Ndërtimi i Konviktit të Parë',
    subtitle: 'Dyert hapen për nxënësit nga zonat rurale',
    category: 'Infrastruktura',
    icon: 'Building2',
    summary: 'Ngrihet konvikti i parë i shkollës fillimisht me 35 shtretër (që më vonë u zgjerua në 120), duke mikpritur të rinjtë nga e gjithë krahina.',
    details: [
      { label: 'Kapaciteti', text: 'Konvikti fillon me 35 shtretër dhe brenda pak vitesh akomodon mbi 120 nxënës.' },
      { label: 'Përfshirja rajonale', text: 'Nxënës nga Zadrima, Mirdita, Bregu i Matës dhe malësitë e Lezhës gjejnë strehë dhe ushqim falas.' },
      { label: 'Kultura e komunitetit', text: 'Konvikti shndërrohet në një vatër edukimi qytetar, studimi intensiv dhe miqësie jetësore.' }
    ]
  },
  {
    id: 'm-1961',
    year: '1961',
    eraIndex: 0,
    title: 'Diplomimi i Brezit të Parë (17 Maturantët)',
    subtitle: 'Konsolidimi si gjimnaz i plotë',
    category: 'Maturantët',
    icon: 'GraduationCap',
    summary: 'Diplomohet brezi i parë me 17 maturantë. Gjimnazi dëshmon me sukses aftësinë për të përgatitur kuadro të ardhshëm universitarë.',
    details: [
      { label: '17 Maturantët', text: 'Maturantët e parë diplomohen me rezultate të larta dhe një pjesë e mirë nisin studimet universitare në Tiranë.' },
      { label: 'Statusi i shkollës', text: 'Shkolla fiton besueshmëri të plotë dhe bëhet krenaria arsimore e qytetit të Lezhës.' },
      { label: 'Mbyllja e epokës së parë', text: 'Përfundon me triumf faza fillestare e ngritjes institucionale të gjimnazit.' }
    ]
  },
  {
    id: 'm-1962',
    year: '1962–1972',
    eraIndex: 1,
    title: 'Konsolidimi dhe Rritja Akademike',
    subtitle: 'Nga 7 në 10 pedagogë — 369 nxënës të diplomuar',
    category: 'Zgjerimi',
    icon: 'Layers',
    summary: 'Stafi pedagogjik zgjerohet dhe kualifikohet me arsim të lartë. Deri në vitin 1972 diplomohen 369 nxënës që bëhen mjekë, inxhinierë e mësues.',
    details: [
      { label: 'Zgjerimi i stafit', text: 'Nga 7 mësues më 1961 numri rritet në 10 më 1962, duke u plotësuar me specialistë të shkencave e letërsisë.' },
      { label: '369 të diplomuar', text: 'Deri më 1972 shkolla prodhon 369 maturantë me formim të thelluar shkencor e humanitar.' },
      { label: 'Vazhdimi universitar', text: 'Nxënësit lezhjanë shkëlqejnë në Universitetin Shtetëror të Tiranës dhe Institutin Pedagogjik të Shkodrës.' }
    ]
  },
  {
    id: 'm-1975',
    year: 'Vitet ’70–’80',
    eraIndex: 1,
    title: 'Inovacioni Pedagogjik & Lulëzimi Kulturor',
    subtitle: 'Teatër, orkestër muzikore dhe kampionë sporti',
    category: 'Kultura & Sporti',
    icon: 'Award',
    summary: 'Shkolla bëhet qendër eksperimentale për metodat aktive të mësimdhënies. Lulëzon teatri shkollor, orkestra dhe sportet me kampionë kombëtarë.',
    details: [
      { label: 'Teatri shkollor', text: 'Vihen në skenë drama me tema shoqërore si «Vdekjen duke mposhtur», me jehonë të madhe në qytet.' },
      { label: 'Orkestra muzikore', text: 'Drejtohet me pasion nga artistët e njohur Viktor Luca, Paulin Gjeçi dhe Alfons Lacaj.' },
      { label: 'Sportistë elitarë', text: 'Nikolin Lorenci (atletikë), Vasil Bici (futboll) dhe Bledar Kola (basketboll) përfaqësojnë me dinjitet shkollën.' }
    ]
  },
  {
    id: 'm-1987',
    year: '1987–1993',
    eraIndex: 2,
    title: 'Tranzicioni dhe Dyfishimi i Nxënësve',
    subtitle: 'Nga 56 në 110 maturantë në vitin 1993',
    category: 'Tranzicioni',
    icon: 'Users',
    summary: 'Pas daljes në pension të Mark Vujit, shkollën e udhëheqin drejtues të rinj. Numri i nxënësve rritet me shpejtësi në agun e demokracisë.',
    details: [
      { label: 'Drejtimi i ri', text: 'Në krye të shkollës vijnë figura me përvojë: E. Rama, E. Sokoli, L. Malaj, R. Isufi e Q. Dushku.' },
      { label: 'Rritja e regjistrimeve', text: 'Në vitin 1992 diplomohen 56 nxënës, ndërsa vetëm një vit më pas (1993) numri kapërcen në 110 maturantë.' },
      { label: 'Hapja ndaj botës', text: 'Nisin kontaktet e para dhe kurrikulat e përditësuara për shoqërinë e hapur demokratike.' }
    ]
  },
  {
    id: 'm-1997',
    year: '1997–1998',
    eraIndex: 2,
    title: 'Sfidat e Trazirave dhe Rindërtimi',
    subtitle: 'Ngritja e godinës së re me 26 klasa moderne',
    category: 'Rindërtimi',
    icon: 'School',
    summary: 'Godina e vjetër dëmtohet gjatë trazirave të 1997-ës. Me vendosmërinë e komunitetit dhe shtetit, menjëherë ngrihet një godinë e re moderne me 26 klasa.',
    details: [
      { label: 'Zjarri i vitit 1997', text: 'Godina historike digjet gjatë trazirave kombëtare, por dokumentet themelore arrijnë të shpëtohen.' },
      { label: 'Rindërtimi i menjëhershëm', text: 'Komuniteti lezhjan nuk lejon ndërprerjen e mësimit; nis puna e pandërprerë për godinën e re.' },
      { label: 'Kapaciteti i ri', text: 'Ngrihet kompleksi modern arsimor me 26 klasa të bollshme, bibliotekë dhe ambiente ndihmëse.' }
    ]
  },
  {
    id: 'm-2024',
    year: '2024',
    eraIndex: 3,
    title: 'Ekselenca Bashkëkohore në Olimpiada',
    subtitle: 'Triumf kombëtar në Biologji dhe Basketboll',
    category: 'Arritjet',
    icon: 'Sparkles',
    summary: 'Gjimnazi organizon Olimpiadën e Biologjisë dhe nxënësja Irsa Brahimi fiton fazën kombëtare. Ekipet e basketbollit shpallen kampionë rajonalë.',
    details: [
      { label: 'Olimpiada Kombëtare', text: 'Nxënësja Irsa Brahimi fiton fazën e dytë të Olimpiadës Kombëtare të Biologjisë.' },
      { label: 'Sportet', text: 'Ekipet e basketbollit djem e vajza shpallen kampionë të qarkut nën drejtimin e trajneres Ardiana Kola.' },
      { label: 'Personalitete pedagogjike', text: 'Shkolla krenohet me pedagogët e nderuar Prof. Dr. Selami Pulaha, Prof. Dr. Skender Malja, Prof. Asoc. Dr. Natasha Xhafkaj.' }
    ]
  },
  {
    id: 'm-2026',
    year: 'Sot (2026)',
    eraIndex: 3,
    title: 'Mbi 65 Vite Traditë dhe Inovacion Digjital',
    subtitle: 'Laboratori virtual i Fizikës & Projektet Ndërkombëtare',
    category: 'E ardhmja',
    icon: 'Cpu',
    summary: 'Sot shkolla numëron mbi 780 nxënës, 54 mësimdhënës dhe platforma digjitale interaktive me simulatorë fizikë dhe bashkëpunime evropiane.',
    details: [
      { label: 'Komuniteti shkollor', text: 'Mbi 780 nxënës të shpërndarë në 26 klasa, me 54 mësimdhënës të përkushtuar.' },
      { label: 'Laboratori i Fizikës', text: 'Platforma interaktive «Fizika Interaktive» me QR code dhe simulime reale optike e lëkundëse.' },
      { label: 'Misioni i pandryshuar', text: '«Dituria • Përkushtimi • E ardhmja» — frymëzojmë ekselencën e çdo brezi të ri lezhjan.' }
    ]
  }
];

export const AboutSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'sequential' | 'timeline'>('sequential');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('Të gjithë');
  const [expandedEra, setExpandedEra] = useState<any | null>(null);
  const [expandedValue, setExpandedValue] = useState<any | null>(null);
  const [expandedMilestone, setExpandedMilestone] = useState<any | null>(null);

  const activeMilestone = chronologicalMilestones[currentStep];

  // Auto-play feature: smoothly advances through history 1 by 1
  useEffect(() => {
    let timer: any = null;
    if (isPlaying && viewMode === 'sequential') {
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % chronologicalMilestones.length);
      }, 4200);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, viewMode]);

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev + 1) % chronologicalMilestones.length);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev - 1 + chronologicalMilestones.length) % chronologicalMilestones.length);
  };

  const departments = [
    'Të gjithë',
    'Drejtoria',
    'Shkencat e Natyrës',
    'Gjuhë & Letërsi',
    'Shkenca Shoqërore & TIK',
    'Shërbimi Psiko-Social'
  ];

  const filteredStaff = selectedDepartment === 'Të gjithë'
    ? staffMembers
    : staffMembers.filter((s) => s.department === selectedDepartment);

  const getEraIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#AA7A1E]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-600" />;
      case 'School':
        return <School className="w-5 h-5 text-[#8E6516]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sky-700" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-sky-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-500" />;
      default:
        return <Calendar className="w-5 h-5 text-[#AA7A1E]" />;
    }
  };

  const getValueIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#AA7A1E]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-sky-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#AA7A1E]" />;
    }
  };

  return (
    <section id="rreth-nesh" className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header: Exact typography and verified subtitle from reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold uppercase tracking-widest border border-sky-300">
              <Bookmark className="w-3.5 h-3.5 text-[#AA7A1E]" />
              <span>{schoolHistory.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
              Gjashtë dekada, <span className="italic font-serif text-[#8E6516]">një rrugëtim</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {schoolHistory.subtitle}
            </p>
          </div>

          {/* Mode Switcher: "Kalimi me Radhë (1 nga 1)" vs "Kronologjia e Plotë" */}
          <div className="flex items-center gap-2 p-1.5 bg-sky-100/80 border border-sky-300 rounded-2xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => { setViewMode('sequential'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'sequential'
                  ? 'bg-white text-slate-950 shadow-md border border-[#D4AF37]'
                  : 'text-sky-900 hover:text-slate-950 hover:bg-white/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Kalimi me Radhë (1 nga 1)</span>
            </button>

            <button
              onClick={() => { setViewMode('timeline'); setIsPlaying(false); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'timeline'
                  ? 'bg-white text-slate-950 shadow-md border border-[#D4AF37]'
                  : 'text-sky-900 hover:text-slate-950 hover:bg-white/50'
              }`}
            >
              <Layers className="w-4 h-4 text-sky-700" />
              <span>Kronologjia e Plotë</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            MODE 1: ANIMATED SEQUENTIAL STEPPER (1 NGA 1 ME RADHË)
            As requested: "po animacionet e doja historine ashtu si rradhe qe sfaqet 1 nga 1 kur kalon"
           ======================================================== */}
        {viewMode === 'sequential' && (
          <div className="bg-white border-2 border-sky-300 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-100/40 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            {/* Stepper Control Header & Scrubber */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1 rounded-xl bg-sky-100 text-sky-900 font-mono text-xs font-extrabold border border-sky-300">
                    Ngjarja {currentStep + 1} nga {chronologicalMilestones.length}
                  </div>
                  <span className="text-xs font-bold text-[#8E6516] uppercase tracking-wider hidden sm:inline">
                    {activeMilestone.category}
                  </span>
                </div>

                {/* Interactive Controls: Prev, Play/Pause, Next */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevStep}
                    className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-900 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    title="Mëparshmja"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Kalo prapa</span>
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 cursor-pointer transition-all ${
                      isPlaying 
                        ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-xs' 
                        : 'bg-sky-100 text-sky-900 border border-sky-300 hover:bg-sky-200'
                    }`}
                    title={isPlaying ? "Ndalo" : "Luaj automatikisht"}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-[#AA7A1E]" />
                        <span>Ndalo</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-[#AA7A1E]" />
                        <span>Luaj me radhë</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleNextStep}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white text-xs font-extrabold flex items-center gap-1 cursor-pointer transition-all shadow-xs"
                    title="Tjetra"
                  >
                    <span>Kalo para</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Interactive Timeline Year Nodes Bar (Scrubber) */}
              <div className="relative pt-2">
                {/* Track line */}
                <div className="h-1.5 w-full bg-sky-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-sky-400 via-[#D4AF37] to-sky-600 rounded-full"
                    animate={{ width: `${((currentStep + 1) / chronologicalMilestones.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Nodes with Year Badges */}
                <div className="flex justify-between items-center pt-3 overflow-x-auto pb-1 gap-2 scrollbar-none">
                  {chronologicalMilestones.map((m, idx) => {
                    const isActive = idx === currentStep;
                    const isPassed = idx < currentStep;
                    return (
                      <button
                        key={m.id}
                        onClick={() => { setCurrentStep(idx); setIsPlaying(false); }}
                        className={`flex flex-col items-center gap-1 transition-all shrink-0 cursor-pointer group ${
                          isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-mono font-bold transition-all ${
                          isActive
                            ? 'bg-sky-900 text-[#D4AF37] shadow-gold-glow border-2 border-[#D4AF37]'
                            : isPassed
                            ? 'bg-sky-100 text-sky-800 border border-sky-300'
                            : 'bg-white text-slate-500 border border-slate-200'
                        }`}>
                          {idx + 1}
                        </div>
                        <span className={`text-[10px] font-bold font-mono transition-colors ${
                          isActive ? 'text-slate-950 font-extrabold' : 'text-slate-500'
                        }`}>
                          {m.year.split('–')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ANIMATED CARD: Displays 1 by 1 with Motion Transitions */}
            <div className="min-h-[380px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.id}
                  initial={{ opacity: 0, x: 30, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Big Year Badge, Title, and Visual Framing */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-sky-100 border-2 border-sky-300 flex items-center justify-center text-[#8E6516] shadow-xs">
                        {getEraIcon(activeMilestone.icon)}
                      </div>
                      <div>
                        <div className="font-mono text-2xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center gap-2">
                          <span className="text-[#8E6516]">{activeMilestone.year}</span>
                        </div>
                        <span className="text-xs text-sky-700 font-bold uppercase tracking-wider block">
                          {activeMilestone.subtitle}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display leading-tight">
                      {activeMilestone.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-sky-50/70 p-4 rounded-2xl border border-sky-200">
                      {activeMilestone.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button
                        onClick={() => setExpandedMilestone(activeMilestone)}
                        className="px-5 py-2.5 rounded-xl bg-gold-gradient hover:brightness-105 border border-[#D4AF37] text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-gold-glow cursor-pointer transition-all"
                      >
                        <Maximize2 className="w-4 h-4 text-[#8E6516]" />
                        <span>Zmadho dhe Shiko Detajet e Plota</span>
                      </button>

                      <button
                        onClick={handleNextStep}
                        className="px-4 py-2.5 rounded-xl bg-white hover:bg-sky-50 border border-sky-300 text-sky-900 font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <span>Kaloni tek ngjarja pasardhëse</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Step Highlights appearing sequentially */}
                  <div className="lg:col-span-7 bg-sky-50/60 rounded-3xl p-6 sm:p-7 border border-sky-200/90 space-y-4">
                    <div className="flex items-center justify-between border-b border-sky-200/80 pb-3">
                      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-950">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span>Fakte Historike & Dëshmi të Periudhës</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#8E6516] bg-amber-100/70 px-2.5 py-0.5 rounded-lg border border-amber-300">
                        Arkiva e Lezhës
                      </span>
                    </div>

                    <div className="space-y-3">
                      {activeMilestone.details.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + idx * 0.1, duration: 0.3 }}
                          className="p-4 rounded-2xl bg-white border border-sky-200 shadow-xs flex items-start gap-3 hover:border-[#D4AF37] transition-colors"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5 shadow-xs" />
                          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong className="text-slate-950 font-bold block sm:inline sm:mr-1.5">
                              {item.label}:
                            </strong>
                            <span>{item.text}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Quick navigation hint */}
                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Përdorni butonat lart ose shigjetat për të lëvizur 1 nga 1</span>
                      <span className="font-mono text-sky-700 font-bold">
                        Hapi {currentStep + 1} / {chronologicalMilestones.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ========================================================
            MODE 2: COMPLETE TIMELINE (4 EPOCAS AS IN REFERENCE)
            Animated sequentially as you scroll!
           ======================================================== */}
        {viewMode === 'timeline' && (
          <div className="relative pt-4">
            {/* Timeline Center Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-sky-300 to-[#D4AF37] -translate-x-1/2 rounded-full" />

            <div className="space-y-12">
              {schoolHistory.eras.map((era, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={era.id} 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-6 lg:gap-12 relative group`}
                  >
                    {/* Timeline Badge in the Center for desktop */}
                    <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-sky-400 shadow-gold-glow items-center justify-center text-[#8E6516] font-bold z-10 group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                    </div>

                    {/* Era Card - Click to expand larger */}
                    <div className="w-full lg:w-1/2">
                      <article 
                        onClick={() => setExpandedEra(era)}
                        className="bg-white border-2 border-sky-200/90 rounded-3xl p-6 sm:p-7 space-y-4 hover:border-[#D4AF37] hover:shadow-gold-glow transition-all duration-300 cursor-pointer relative overflow-hidden"
                      >
                        {/* Top Bar with Icon and Year Period */}
                        <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center shadow-xs">
                              {getEraIcon(era.icon)}
                            </div>
                            <div>
                              <div className="font-mono text-lg font-extrabold text-slate-950 flex items-center gap-2">
                                <span>{era.years}</span>
                              </div>
                              <span className="text-[11px] text-[#8E6516] font-bold uppercase tracking-wider block">
                                {era.periodLabel}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-xl border border-sky-200 group-hover:border-[#D4AF37] transition-colors">
                            <Maximize2 className="w-3.5 h-3.5 text-[#AA7A1E]" />
                            <span>Zmadho</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                          {era.title}
                        </h3>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                          {era.highlights.slice(0, 3).map((h: any, hIdx: number) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" />
                              <span className="leading-relaxed">
                                <strong className="text-slate-900 font-bold">{h.label}:</strong> {h.text}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {era.highlights.length > 3 && (
                          <div className="pt-2 text-xs font-bold text-sky-700 flex items-center gap-1">
                            <span>+ dhe {era.highlights.length - 3} ngjarje të tjera (Kliko për t&apos;i parë të gjitha)</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </article>
                    </div>

                    {/* Empty Spacer Column for Desktop alternating rhythm */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal for Expanded Era View (When clicking on any era) */}
        {expandedEra && (
          <div className="fixed inset-0 z-50 bg-sky-950/60 flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border-2 border-sky-300">
              <button
                onClick={() => setExpandedEra(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-9 h-9 rounded-full flex items-center justify-center hover:bg-sky-50 cursor-pointer"
                aria-label="Mbyll"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b border-sky-100 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold border border-sky-300">
                  <Calendar className="w-3.5 h-3.5 text-[#AA7A1E]" />
                  <span>Periudha Historike: {expandedEra.years}</span>
                  <span className="text-sky-300">·</span>
                  <span className="text-[#8E6516] font-bold">{expandedEra.periodLabel}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                  {expandedEra.title}
                </h3>
              </div>

              {/* Archival Photo Frame */}
              <div className="rounded-2xl overflow-hidden h-60 bg-sky-100 border border-sky-200 relative">
                <img
                  src={schoolImages.hero}
                  alt={expandedEra.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-xl text-xs font-bold text-slate-900 shadow-sm border border-sky-200">
                  Arkiva e Gjimnazit “Hydajet Lezha”
                </div>
              </div>

              {/* Full Detailed Bullet Highlights */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-sky-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Kronika e Plotë e Ngjarjeve</span>
                </h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  {expandedEra.highlights.map((h: any, idx: number) => (
                    <li key={idx} className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0 mt-1.5 shadow-xs" />
                      <div className="leading-relaxed">
                        <strong className="text-slate-950 font-bold block sm:inline mr-1">{h.label}:</strong>
                        <span>{h.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-sky-100 flex justify-end">
                <button
                  onClick={() => setExpandedEra(null)}
                  className="px-6 py-2.5 text-xs font-extrabold bg-gold-gradient hover:brightness-105 border border-[#D4AF37] text-slate-950 rounded-xl shadow-gold-glow cursor-pointer"
                >
                  Mbyll Pamjen
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Expanded Milestone View */}
        {expandedMilestone && (
          <div className="fixed inset-0 z-50 bg-sky-950/60 flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border-2 border-sky-300">
              <button
                onClick={() => setExpandedMilestone(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-9 h-9 rounded-full flex items-center justify-center hover:bg-sky-50 cursor-pointer"
                aria-label="Mbyll"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b border-sky-100 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold border border-sky-300">
                  <Calendar className="w-3.5 h-3.5 text-[#AA7A1E]" />
                  <span>Viti: {expandedMilestone.year}</span>
                  <span className="text-sky-300">·</span>
                  <span className="text-[#8E6516] font-bold">{expandedMilestone.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                  {expandedMilestone.title}
                </h3>
                <p className="text-xs text-sky-800 font-semibold">
                  {expandedMilestone.subtitle}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sm text-slate-700 leading-relaxed">
                {expandedMilestone.summary}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Ngjarjet dhe Detajet Historike</span>
                </h4>
                <ul className="space-y-2.5">
                  {expandedMilestone.details.map((d: any, idx: number) => (
                    <li key={idx} className="p-3.5 rounded-xl bg-white border border-sky-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />
                      <div>
                        <strong className="text-slate-950 font-bold mr-1">{d.label}:</strong>
                        <span>{d.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-sky-100 flex justify-end">
                <button
                  onClick={() => setExpandedMilestone(null)}
                  className="px-6 py-2.5 text-xs font-extrabold bg-gold-gradient hover:brightness-105 border border-[#D4AF37] text-slate-950 rounded-xl shadow-gold-glow cursor-pointer"
                >
                  Mbyll Pamjen
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Institutional Quote Box & Values */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-sky-100/80 via-white to-amber-50/50 border-l-4 border-[#D4AF37] rounded-r-3xl shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E6516]">
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span>Misioni dhe Fryma e Shkollës</span>
          </div>
          <p className="text-slate-800 italic font-serif text-base sm:text-lg leading-relaxed">
            {schoolHistory.mission}
          </p>
        </div>

        {/* 3. Vlerat e Shkollës (Click to expand larger!) */}
        <div className="space-y-4 pt-4">
          <div className="text-xs font-extrabold text-sky-900 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#AA7A1E]" />
            <span>Shtyllat dhe Vlerat Pedagogjike (Kliko për t&apos;i hapur më të mëdha)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schoolHistory.values.map((v, i) => (
              <div 
                key={i} 
                onClick={() => setExpandedValue(v)}
                className="p-5 bg-white border-2 border-sky-200 rounded-3xl space-y-2 hover:border-[#D4AF37] hover:shadow-gold-glow transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getValueIcon(v.icon)}
                  </div>
                  <span className="text-xs font-bold text-[#8E6516] font-mono">0{i+1}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{v.desc}</p>
                <span className="text-[11px] font-bold text-sky-600 group-hover:underline block pt-1">Zmadho vlerën →</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Expanded Value View */}
        {expandedValue && (
          <div className="fixed inset-0 z-50 bg-sky-950/60 flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 space-y-4 shadow-2xl relative border-2 border-sky-300">
              <button
                onClick={() => setExpandedValue(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-9 h-9 rounded-full flex items-center justify-center hover:bg-sky-50 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center shadow-xs">
                {getValueIcon(expandedValue.icon)}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950 font-display">
                  {expandedValue.title}
                </h3>
                <p className="text-xs text-sky-800 font-semibold mt-1">
                  Shtyllë Themelore e Gjimnazit “Hydajet Lezha”
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-sm text-slate-700 leading-relaxed">
                {expandedValue.desc}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setExpandedValue(null)}
                  className="px-5 py-2 text-xs font-extrabold bg-gold-gradient hover:brightness-105 border border-[#D4AF37] text-slate-950 rounded-xl shadow-gold-glow cursor-pointer"
                >
                  E kuptova
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4. Drejtoria & Trupa Pedagogjike */}
        <div className="space-y-6 pt-6 border-t border-sky-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-700" />
                <span>Drejtoria & Stafi Pedagogjik</span>
              </h3>
              <p className="text-xs text-slate-500">
                Mësimdhënës me përvojë dhe përkushtim për çdo nxënës.
              </p>
            </div>

            {/* Department Filter Bar */}
            <div className="flex flex-wrap gap-1 p-1 bg-sky-100 rounded-2xl border border-sky-200">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
                    selectedDepartment === dept
                      ? 'bg-sky-600 text-white font-bold shadow-xs'
                      : 'text-sky-900 hover:text-slate-900 hover:bg-white/70'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStaff.map((staff) => (
              <div
                key={staff.id}
                className="bg-white border-2 border-sky-200 rounded-3xl p-5 space-y-3 hover:border-[#D4AF37] hover:shadow-gold-glow transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-sky-100 border border-[#D4AF37]/50 text-[#8E6516] font-bold text-base flex items-center justify-center font-display shrink-0 shadow-xs">
                    {staff.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-sky-700 transition-colors">
                      {staff.name}
                    </h4>
                    <p className="text-xs text-sky-800 font-semibold">{staff.role}</p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 border-t border-sky-100 pt-2.5">
                  <div className="text-slate-700 font-medium">{staff.qualifications}</div>
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span className="text-sky-900 font-semibold">Dep: {staff.department}</span>
                    <span className="font-mono text-[#8E6516] font-bold">{staff.yearsOfExperience} vjet përvojë</span>
                  </div>
                  <div className="pt-1 flex items-center gap-1.5 text-slate-500 hover:text-sky-800 transition-colors">
                    <Mail className="w-3 h-3 text-sky-500" />
                    <a href={`mailto:${staff.email}`} className="text-[11px] truncate underline">
                      {staff.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
