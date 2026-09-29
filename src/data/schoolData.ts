import { 
  NewsItem, 
  Announcement, 
  Project, 
  Achievement, 
  StudentClub, 
  GalleryItem, 
  DocumentItem, 
  StaffMember 
} from '../types';

import heroBuildingImg from '../assets/images/hero_school_building_1790719109677.jpg';
import scienceLabImg from '../assets/images/students_science_lab_1790719126742.jpg';
import roboticsTechImg from '../assets/images/school_robotics_tech_1790719137986.jpg';
import awardsImg from '../assets/images/trophy_awards_celebration_1790719149840.jpg';

export const schoolImages = {
  hero: heroBuildingImg,
  scienceLab: scienceLabImg,
  robotics: roboticsTechImg,
  awards: awardsImg,
};

export const schoolGeneralInfo = {
  name: 'Gjimnazi “Hydajet Lezha”',
  city: 'Lezhë',
  country: 'Shqipëri',
  motto: 'Dituria • Përkushtimi • E ardhmja',
  tagline: 'Frymëzojmë ekselencën akademike te nxënësit në një mjedis arsimor mbështetës, modern dhe gjithëpërfshirës.',
  foundedYear: 1957,
  celebrationNote: 'Mbi 65 vite traditë e pandërprerë arsimore në qytetin e Lezhës (1957–2026)',
  address: 'Rruga “Luigj Gurakuqi”, Lagjja “Besëlidhja”, Lezhë, Shqipëri',
  phone: '+355 215 22 340',
  mobile: '+355 68 20 45 119',
  email: 'info@gjimnazihydajetlezha.com',
  officialWebsite: 'gjimnazihydajetlezha.com',
  secretaryHours: 'E Hënë – E Premte: 07:30 – 15:30',
  stats: {
    students: 864,
    teachers: 54,
    classes: 29,
    matriculationSuccessRate: '98.6%',
    universityAdmissions: '94%',
    nationalAwards: 58,
  }
};

export const schoolHistory = {
  title: 'Historia e Gjimnazit “Hydajet Lezha”',
  eyebrow: 'Historiku dhe zhvillimi',
  headingAccent: 'Gjashtë dekada, një rrugëtim',
  subtitle: 'Nga katër mësues dhe një ndërtesë e thjeshtë, te godina moderne me 26 klasa. Ky është rrugëtimi i plotë i gjimnazit të Lezhës që nga gushti i vitit 1957.',
  address: 'Rruga “Gjon Pali II”, Lezhë',
  phone: '+355 68 679 0093',
  email: 'hydajetlezha_lezhe@yahoo.com',
  mission: '«Që nga gushti i vitit 1957 formojmë breza të tërë në zemër të Lezhës, mes kalasë, lagunës dhe maleve. Shkolla e mesme "Hydajet Lezha" frymëzon ekselencën akademike te nxënësit në një mjedis arsimor mbështetës.»',
  vision: 'Të mbetemi qendra lider e arsimit parauniversitar në rajonin verior, duke ofruar mësimdhënie interaktive digjitale, projekte ndërkombëtare (Erasmus+, RYCO) dhe përgatitje shembullore për universitetet më prestigjioze.',
  eras: [
    {
      id: 'era-1',
      years: '1957–1961',
      periodLabel: 'deri 1961, themelimi',
      title: 'Vitet e para dhe themelimi',
      icon: 'Sprout',
      highlights: [
        { label: 'Gusht 1957', text: 'Hapet shkolla e mesme në Lezhë, institucioni i parë i arsimit të mesëm në qytet; emri vjen nga intelektuali dhe patrioti lezhjan Hydajet Lezha.' },
        { label: 'Drejtori i parë', text: 'Mark Vuji viziton familjet derë më derë në qytet e rrethina për të inkurajuar regjistrimin e nxënësve të parë.' },
        { label: 'Sfidat fillestare', text: 'Vetëm katër mësues, një ndërtesë e thjeshtë, mungesë tekstesh dhe pajisjesh didaktike.' },
        { label: 'Viti 1959', text: 'Ndërtohet konvikti i parë me 35 shtretër (më vonë 120), që hap derën për nxënësit nga zonat rurale të Zadrimës e Mirditës.' },
        { label: 'Viti 1961', text: 'Diplomohet brezi i parë me 17 maturantë; shkolla konsolidohet përfundimisht si institucion i plotë i arsimit të mesëm.' }
      ]
    },
    {
      id: 'era-2',
      years: '1962–1987',
      periodLabel: 'deri 1987, konsolidimi',
      title: 'Konsolidimi nën drejtimin e Mark Vujit',
      icon: 'BookOpen',
      highlights: [
        { label: 'Rritja e stafit', text: 'Nga 7 mësues më 1961 në 10 që në 1962; shumë kualifikohen me studime të larta universitare.' },
        { label: 'Suksese akademike', text: 'Deri më 1972 diplomohen 369 nxënës; shumë prej tyre vijojnë studimet në Universitetin e Tiranës dhe Institutin e Shkodrës.' },
        { label: 'Inovacion pedagogjik', text: 'Në vitet ’70 dhe ’80 shkolla bëhet qendër eksperimentale e metodave aktive, me seminare kombëtare e rajonale.' },
        { label: 'Art e kulturë', text: 'Teatri vë në skenë vepra me tema sociale si „Vdekjen duke mposhtur”; orkestra udhëhiqet nga Viktor Luca, Paulin Gjeçi e Alfons Lacaj.' },
        { label: 'Sporti', text: 'Nikolin Lorenci (atletikë), Vasil Bici (futboll), Bledar Kola (basketboll), emra sportistësh që nderuan qytetin.' }
      ]
    },
    {
      id: 'era-3',
      years: '1987–1997',
      periodLabel: 'deri 1997, tranzicioni',
      title: 'Tranzicioni dhe sfidat e viteve ’90',
      icon: 'Layers',
      highlights: [
        { label: 'Ndryshimet në drejtim', text: 'Pas Mark Vujit, shkollën e udhëheqin E. Rama, E. Sokoli, L. Malaj, R. Isufi e Q. Dushku.' },
        { label: 'Rritja e nxënësve', text: 'Më 1992 diplomohen 56 nxënës; në vitin 1993 numri dyfishohet me 110 maturantë.' },
        { label: '1997, zjarri dhe rindërtimi', text: 'Godina digjet gjatë trazirave të vitit 1997; menjëherë nis rindërtimi dhe ngrihet një ndërtesë moderne me 26 klasa.' }
      ]
    },
    {
      id: 'era-4',
      years: '1998 deri sot',
      periodLabel: 'modernizimi dhe ekselenca',
      title: 'Rindërtimi dhe modernizimi',
      icon: 'School',
      highlights: [
        { label: 'Infrastruktura moderne', text: 'Laboratorë shkencorë modernë (Fizikë, Kimi, Biologji, TIK), bibliotekë e pasur dhe ambiente sportive të reja.' },
        { label: 'Sukses në Olimpiadë (2024)', text: 'Shkolla organizon Olimpiadën e Biologjisë dhe nxënësja Irsa Brahimi fiton fazën e dytë të Olimpiadës Kombëtare.' },
        { label: 'Sportet', text: 'Ekipet e basketbollit, djem e vajza, shpallen kampionë të qarkut me trajnere Ardiana Kola.' },
        { label: 'Pedagogë të shquar', text: 'Prof. Dr. Selami Pulaha, Prof. Dr. Skender Malja, Prof. Asoc. Dr. Natasha Xhafkaj e shumë personalitete të tjerë të shquar.' },
        { label: 'Sot (Viti Shkollor 2026)', text: 'Mbi 780 nxënës dhe 45+ mësues, 26 klasa, një institucion model që bashkon traditën historike me inovacionin digjital.' }
      ]
    }
  ],
  values: [
    { 
      title: 'Integriteti & Ndershmëria', 
      desc: 'Kultura e meritokracisë, transparencës dhe respektit reciprok mes nxënësve, prindërve dhe mësuesve.',
      icon: 'ShieldCheck'
    },
    { 
      title: 'Ekselenca Akademike', 
      desc: 'Përkushtim i vazhdueshëm për rezultate të nivelit më të lartë në Maturën Shtetërore dhe olimpiada.',
      icon: 'Award'
    },
    { 
      title: 'Inovacioni & Fizika Digjitale', 
      desc: 'Mësimdhënie praktike në laboratorët e fizikës interaktive, robotikës dhe teknologjisë së informacionit.',
      icon: 'Cpu'
    },
    { 
      title: 'Qytetaria & Trashëgimia', 
      desc: 'Krenari për historinë e lashtë të Lezhës së Besëlidhjes dhe edukim me frymë evropiane.',
      icon: 'HeartHandshake'
    }
  ]
};

export const urgentAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Fillimi i Regjistrimeve për Provimet me Zgjedhje – Matura Shtetërore 2026',
    date: '28 Shtator 2026',
    priority: 'urgjente',
    targetAudience: 'Nxënës',
    content: 'Të gjithë maturantët e klasave të 12-ta janë të lutur të paraqiten pranë sekretarisë mësimore ose të plotësojnë formularin digjital A1Z deri më 15 Tetor.'
  },
  {
    id: 'ann-2',
    title: 'Takimi i Parë i Këshillit të Prindërve për Vitin Shkollor 2026–2027',
    date: '26 Shtator 2026',
    priority: 'normale',
    targetAudience: 'Prindër',
    content: 'Takimi do të mbahet të premten në orën 17:00 në sallën e konferencave të gjimnazit. Rendi i ditës: Miratimi i planit vjetor dhe organizimi i klubeve.'
  },
  {
    id: 'ann-3',
    title: 'Hapja e Thirrjes për Projektin “Fizika Interaktive 2026”',
    date: '24 Shtator 2026',
    priority: 'lartë',
    targetAudience: 'Të Gjithë',
    content: 'Nxënësit e apasionuar pas simulimeve optike dhe lëkundësve harmonikë mund të regjistrohen në ekipin e laboratorit digjital me mësuesen e fizikës.'
  }
];

export const newsList: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Sukses i Jashtëzakonshëm në Olimpiadën Kombëtare të Fizikës dhe Matematikës',
    category: 'Olimpiada',
    date: '22 Shtator 2026',
    author: 'Departamenti i Shkencave të Natyrës',
    summary: 'Nxënësit e Gjimnazit “Hydajet Lezha” u nderuan me 2 Medalje Ari dhe 1 të Argjendtë në fazën kombëtare të organizuar në Tiranë.',
    content: 'Ekipi përfaqësues i shkollës sonë dëshmoi edhe një herë përgatitjen e lartë teorike dhe eksperimentale. Nxënësi Kejdi Malaj (klasa XII-A) zuri vendin e parë në nivel kombëtar në lëndën e Fizikës, ndërsa Erjon Rama fitoi Medalje Ari në Matematikë. Ky rezultat vjen pas një pune disamujore përgatitore në laboratorin tonë të fizikës interaktive nën kujdesin e stafit pedagogjik.',
    image: scienceLabImg,
    readTime: '3 min lexim',
    isFeatured: true
  },
  {
    id: 'news-2',
    title: 'Prezantohet Platforma “Fizika Interaktive”: Laboratori Virtual për Nxënësit',
    category: 'Projekte',
    date: '18 Shtator 2026',
    author: 'Klubi i Shkencës dhe TIK',
    summary: 'Një projekt inovativ i integruar me QR kod që u mundëson nxënësve të kryejnë simulime fizike me celular ose kompjuter.',
    content: 'Në bashkëpunim me Departamentin e TIK-ut, gjimnazi ynë lançoi modulin e ri "Fizika Interaktive". Çdo nxënës thjesht skanon QR kodin e afishuar në laborator për të hyrë në simulimet grafike të lëkundësit të thjeshtë, pasqyrimit të dritës dhe ligjit të Njutonit. Projekti u vlerësua si një hap i rëndësishëm në dixhitalizimin e kurrikulës.',
    image: roboticsTechImg,
    readTime: '4 min lexim',
    isFeatured: true
  },
  {
    id: 'news-3',
    title: 'Pjesëmarrja në Programin Ndërkombëtar Erasmus+ & RYCO në Bashkëpunim me Italinë',
    category: 'Projekte',
    date: '12 Shtator 2026',
    author: 'Zyra e Marrëdhënieve Ndërkombëtare',
    summary: 'Një delegacion prej 12 gjimnazistësh mori pjesë në shkëmbimin kulturor rinor në Milano me temë “Trashëgimia dhe Teknologjia e Gjelbër”.',
    content: 'Përfaqësuesit e Gjimnazit “Hydajet Lezha” prezantuan historinë dhe biodiversitetin e lagunës së Kune-Vainit dhe qytetit të Lezhës, duke shpalosur punimet e tyre në teknologjitë miqësore me mjedisin. Nxënësit fituan certifikata të njohura ndërkombëtare të pjesëmarrjes.',
    image: heroBuildingImg,
    readTime: '3 min lexim'
  },
  {
    id: 'news-4',
    title: 'Ekskursion Mësimor dhe Trashëgimi: Vizitë në Memorialin e Skënderbeut dhe Kalanë',
    category: 'Ekskursione',
    date: '05 Shtator 2026',
    author: 'Departamenti i Historisë & Gjuhës',
    summary: 'Klasat e 10-ta zhvilluan orën e hapur të historisë mesjetare duke lidhur trashëgiminë historike të Lezhës me vlerat evropiane.',
    content: 'Nxënësit zbuluan artefakte të reja arkeologjike, dëgjuan leksionin e hapur të kuratorëve të muzeut dhe krijuan minidokumentarë me video me smartphone, të cilat u publikuan në stendën e shkollës.',
    image: awardsImg,
    readTime: '2 min lexim'
  },
  {
    id: 'news-5',
    title: 'Kampionati i Volejbollit për Vajza: “Hydajet Lezha” Shpallet Kampion Rajonal',
    category: 'Aktivitete',
    date: '28 Gusht 2026',
    author: 'Katedra e Edukimit Fizik',
    summary: 'Ekipi i volejbollit të vajzave triumfoi në finalen rajonale me një lojë të shkëlqyer dhe mbështetje entuziaste.',
    content: 'Në një ndeshje dramatike me 5 sete, vajzat e shkollës treguan shpirt të lartë gare dhe disiplinë taktike, duke ngritur kupën e kampionatit të shkollave të mesme.',
    image: awardsImg,
    readTime: '2 min lexim'
  }
];

export const projectsList: Project[] = [
  {
    id: 'proj-fizika',
    title: 'Fizika Interaktive (fizikainteraktive.com)',
    category: 'shkencore',
    categoryLabel: 'Projekt Shkencor & Digjital i Nxënësve',
    mentor: 'Prof. Mimoza Nikolla (Departamenti i Fizikës & TIK)',
    students: ['Kejdi Malaj', 'Alesia Marku', 'Genti Deda', 'Sara Kola'],
    description: 'Uebsajti dhe laboratori inovativ virtual i krijuar posaçërisht nga nxënësit e Gjimnazit “Hydajet Lezha” me simulime fizike dhe qasje të hapur.',
    extendedDescription: 'Projekti “Fizika Interaktive” (fizikainteraktive.com) është një faqe dhe platformë eksperimentale e ndërtuar me krenari nga nxënësit e Gjimnazit “Hydajet Lezha”. Ajo mundëson kryerjen e eksperimenteve virtuale të mekanikës, optikës dhe lëkundësve harmonikë në kohë reale. Duke klikuar ose skanuar kodin QR, çdo nxënës dhe vizitor mund të aksesojë direkt uebsajtin e dedikuar të krijuar nga nxënësit tanë.',
    tags: ['fizikainteraktive.com', 'Krijuar nga Nxënësit', 'Simulime Virtuale', 'QR Code', 'Optikë & Mekanikë'],
    image: scienceLabImg,
    hasInteractiveLab: true,
    qrCodeUrl: 'https://fizikainteraktive.com/',
    externalUrl: 'https://fizikainteraktive.com/',
    status: 'Aktiv',
    year: '2025–2026'
  },
  {
    id: 'proj-robotika',
    title: 'Stacioni Inteligjent Mjedisor me Arduino & TIK',
    category: 'tik',
    categoryLabel: 'Teknologji & Robotikë',
    mentor: 'Ing. Alban Prenga (Mësues i TIK)',
    students: ['Erjon Rama', 'Ester Biba', 'Kristian Gjoka'],
    description: 'Ndërtimi i një stacioni meteorologjik autonom në çatinë e shkollës që mat temperaturën, lagështinë dhe cilësinë e ajrit të qytetit të Lezhës.',
    extendedDescription: 'Nxënësit programuan mikrokontrollorët Arduino dhe sensorët DHT22 dhe MQ-135, duke ndërtuar një panel online ku të dhënat mjedisore shfaqen me grafikë të përditësuar çdo 5 minuta.',
    tags: ['Arduino', 'IoT', 'C++', 'Mjedis', 'TIK'],
    image: roboticsTechImg,
    status: 'Aktiv',
    year: '2025–2026'
  },
  {
    id: 'proj-erasmus',
    title: 'Erasmus+ & RYCO: Ura Rinore për Trashëgiminë Kulturore',
    category: 'nderkombetare',
    categoryLabel: 'Projekt Ndërkombëtar',
    mentor: 'Msc. Besnik Tusha (Zv. Drejtor)',
    students: ['Anisa Lleshaj', 'Denis Frroku', 'Klaudia Marku'],
    description: 'Shkëmbim kulturor dhe akademik me gjimnaze partnere nga Italia, Maqedonia e Veriut dhe Mali i Zi me fokus në dialogun ndërkulturor.',
    extendedDescription: 'Projekti përfshiu punëtori mbi ruajtjen e monumenteve historike të Lezhës, Kalanë mesjetare dhe digjitalizimin e tregimeve gojore nga komuniteti lokal.',
    tags: ['Erasmus+', 'RYCO', 'Bashkimi Evropian', 'Trashëgimi'],
    image: heroBuildingImg,
    status: 'I Përfunduar',
    year: '2024–2025'
  },
  {
    id: 'proj-letersi',
    title: 'Revista Shkollore “Drini i Fjalës” & Gazetaria Rinore',
    category: 'artistike',
    categoryLabel: 'Projekt Letrar & Artistik',
    mentor: 'Prof. Valbona Zefi (Gjuhë-Letërsi)',
    students: ['Fjoralba Gjergji', 'Rei Ndreca', 'Dorina Voci'],
    description: 'Botimi periodik i revistës shkollore me ese filozofike, poezi, intervista me personalitete të Lezhës dhe kritikë letrare.',
    extendedDescription: 'Nxënësit kujdesen për çdo fazë: redaktimin e teksteve, fotoreportazhet, faqosjen grafike dhe shpërndarjen e revistës për nxënësit dhe komunitetin.',
    tags: ['Krijimtari', 'Poezi', 'Eseistikë', 'Dizajn Grafik'],
    image: awardsImg,
    status: 'Aktiv',
    year: '2025–2026'
  }
];

export const achievementsTimeline: Achievement[] = [
  {
    id: 'ach-1',
    year: 2026,
    title: 'Medalje Ari në Olimpiadën Kombëtare të Fizikës',
    event: 'Olimpiada Kombëtare e Shkencave (Tiranë)',
    recipient: 'Kejdi Malaj (Klasa XII)',
    level: 'Kombëtare',
    type: 'ari',
    description: 'Vendi i parë absolut me 99 pikë nga 100 të mundshme në zgjidhjen e problemeve të mekanikës kuantike dhe elektrodinamikës.'
  },
  {
    id: 'ach-2',
    year: 2025,
    title: 'Çmimi i Parë në Panairin Kombëtar të Robotikës Rinore',
    event: 'Panairi Inovativ Digjital (MAS)',
    recipient: 'Klubi i Robotikës “Hydajet Lezha”',
    level: 'Kombëtare',
    type: 'ari',
    description: 'Vlerësim maksimal për prototipin e pastrimit inteligjent të ujërave sipërfaqësore me energji diellore.'
  },
  {
    id: 'ach-3',
    year: 2025,
    title: 'Përfaqësim me Nder në Olimpiadën Ballkanike të Matematikës',
    event: 'Balkan Mathematical Olympiad (BMO)',
    recipient: 'Erjon Rama (Klasa XI)',
    level: 'Ballkanike',
    type: 'argjend',
    description: 'Medalje Argjendi për nxënësin tonë mes përfaqësuesve të 18 shteteve të rajonit.'
  },
  {
    id: 'ach-4',
    year: 2024,
    title: 'Çmimi “Shkolla e Gjelbër e Vitit” – Eko-Shkollat',
    event: 'Programi Kombëtar Mjedisor',
    recipient: 'Komuniteti i Nxënësve dhe Eko-Klubi',
    level: 'Kombëtare',
    type: 'cmim_nderi',
    description: 'Certifikim ndërkombëtar me Flamurin e Gjelbër për nismat e riciklimit dhe kursimit të energjisë në shkollë.'
  },
  {
    id: 'ach-5',
    year: 2024,
    title: 'Vendi i Parë në Debatin Rinor Kombëtar Karl Popper',
    event: 'Kampionati Kombëtar i Debatit Rinor',
    recipient: 'Ekipi i Debatit “Hydajet Lezha”',
    level: 'Kombëtare',
    type: 'ari',
    description: 'Fitore në 6 raunde debati mbi politikat arsimore dhe integrimin evropian.'
  },
  {
    id: 'ach-6',
    year: 2023,
    title: 'Kampion Rajonal në Atletikë dhe Lojëra me Dorë',
    event: 'Kampionati i Shkollave të Mesme – Qarku Lezhë',
    recipient: 'Ekipi Sportiv i Gjimnazit',
    level: 'Rajonale',
    type: 'ari',
    description: 'Dominim në garat e vrapimit 400m, kërcimit së larti dhe kampion në volejboll për djem dhe vajza.'
  }
];

export const studentClubs: StudentClub[] = [
  {
    id: 'club-robotics',
    name: 'Klubi i Robotikës & Kodimit',
    category: 'TIK & Inovacion',
    leader: 'Kristian Gjoka (Kryetar)',
    membersCount: 28,
    meetingSchedule: 'E Martë & E Enjte, 14:00',
    description: 'Punë praktike me mikrokontrollorë Arduino, Raspberry Pi, Python dhe modelim 3D për projekte të zgjuara.',
    highlights: ['Pjesëmarrje në panairin kombëtar të TIK', 'Krijimi i stacionit meteorologjik shkollor'],
    iconName: 'Cpu'
  },
  {
    id: 'club-physics',
    name: 'Laboratori i Fizikës Interaktive',
    category: 'Shkencë Ekzakte',
    leader: 'Alesia Marku (Kryetare)',
    membersCount: 34,
    meetingSchedule: 'E Mërkurë, 13:30',
    description: 'Eksperimente laboratorike, përgatitje për olimpiada dhe ndërtimi i modeleve virtuale fizike me QR code.',
    highlights: ['Medalje ari në olimpiadën kombëtare', 'Simulime me softuer të hapur shkencor'],
    iconName: 'Atom'
  },
  {
    id: 'club-debate',
    name: 'Klubi i Debatit & Retorikës',
    category: 'Qytetari & Mendim Kritik',
    leader: 'Dorina Voci (Kryetare)',
    membersCount: 22,
    meetingSchedule: 'E Premte, 14:30',
    description: 'Zhvillimi i oratorisë, argumentimit logjik dhe analizës së temave politiko-shoqërore sipas formatit Karl Popper.',
    highlights: ['Vendi i parë në kampionatin kombëtar të debatit', 'Sesione debati të hapura me komunitetin'],
    iconName: 'MessageSquare'
  },
  {
    id: 'club-eco',
    name: 'Eko-Klubi “Lezha e Gjelbër”',
    category: 'Mjedis & Qëndrueshmëri',
    leader: 'Denis Frroku (Kryetar)',
    membersCount: 45,
    meetingSchedule: 'E Hënë, 13:30',
    description: 'Mbrojtja e mjedisit, mbjellja e pemëve në oborrin e shkollës, monitorimi i lumit Drin dhe ndërgjegjësimi ekologjik.',
    highlights: ['Fitues i Flamurit të Gjelbër Eko-Shkollat', 'Pastrimi i bregdetit të Shëngjinit'],
    iconName: 'Leaf'
  },
  {
    id: 'club-arts',
    name: 'Trupa Teatrore & Klubi Letrar',
    category: 'Art & Kulturë',
    leader: 'Rei Ndreca (Kryetar)',
    membersCount: 30,
    meetingSchedule: 'E Enjte, 15:00',
    description: 'Dramatizimi i veprave klasike shqiptare dhe botërore, organizimi i mbrëmjeve poetike dhe festave tradicionale.',
    highlights: ['Shfaqja vjetore në Teatrin e Lezhës', 'Botimi i antologjisë me poezi të nxënësve'],
    iconName: 'Palette'
  },
  {
    id: 'club-sports',
    name: 'Ekipet Sportive “Shqiponjat e Lezhës”',
    category: 'Sport & Shëndet',
    leader: 'Arbër Doda (Kapiten)',
    membersCount: 50,
    meetingSchedule: 'E Hënë – E Premte, 15:30',
    description: 'Stërvitje në volejboll, basketboll, futboll dhe atletikë në terrenet e reja sportive të gjimnazit.',
    highlights: ['Kampion rajonal në volejboll vajzash', 'Kupa e Pavarësisë në basketboll'],
    iconName: 'Trophy'
  }
];

export const galleryList: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Fasada Kryesore dhe Oborri i Gjimnazit',
    category: 'shkolla',
    categoryLabel: 'Shkolla',
    date: 'Shtator 2026',
    image: heroBuildingImg,
    caption: 'Pamje e hyrjes kryesore të shkollës në ditën e parë të vitit të ri shkollor.'
  },
  {
    id: 'gal-2',
    title: 'Eksperimente në Laboratorin e Fizikës dhe Optikës',
    category: 'projekte',
    categoryLabel: 'Projekte',
    date: 'Shtator 2026',
    image: scienceLabImg,
    caption: 'Nxënësit duke kalibruar lazerat optikë dhe lëkundësin harmonik.'
  },
  {
    id: 'gal-3',
    title: 'Punëtori e Robotikës dhe Programimit me Arduino',
    category: 'projekte',
    categoryLabel: 'Projekte',
    date: 'Qershor 2026',
    image: roboticsTechImg,
    caption: 'Nxënësit e apasionuar pas TIK-ut duke testuar sensorët mjedisorë.'
  },
  {
    id: 'gal-4',
    title: 'Ceremonia e Nderimit të Fituesve të Olimpiadës',
    category: 'gara',
    categoryLabel: 'Gara',
    date: 'Maj 2026',
    image: awardsImg,
    caption: 'Dorëzimi i medaljeve dhe certifikatave të meritës në sallën e bibliotekës.'
  },
  {
    id: 'gal-5',
    title: 'Ora e Hapur e Historisë në Memorialin e Skënderbeut',
    category: 'ekskursione',
    categoryLabel: 'Ekskursione',
    date: 'Prill 2026',
    image: heroBuildingImg,
    caption: 'Klasat e 10-ta gjatë guidës historike në qytetin e Lezhës.'
  },
  {
    id: 'gal-6',
    title: 'Mbrëmja Festive e Maturës dhe Diplomimit',
    category: 'evente',
    categoryLabel: 'Evente',
    date: 'Qershor 2026',
    image: awardsImg,
    caption: 'Maturantët e gjeneratës 2025–2026 duke festuar përfundimin e shkollës së mesme.'
  },
  {
    id: 'gal-7',
    title: 'Kampionati i Volejbollit në Palestrën Shkollore',
    category: 'aktivitete',
    categoryLabel: 'Aktivitete',
    date: 'Mars 2026',
    image: scienceLabImg,
    caption: 'Momente entuziaste nga finalja e kampionatit rajonal.'
  },
  {
    id: 'gal-8',
    title: 'Ekspozita e Arteve Pamore dhe Pikturës',
    category: 'aktivitete',
    categoryLabel: 'Aktivitete',
    date: 'Shkurt 2026',
    image: roboticsTechImg,
    caption: 'Punimet me bojëra vaji dhe grafika të punuara nga nxënësit e talentuar.'
  }
];

export const officialDocuments: DocumentItem[] = [
  {
    id: 'doc-1',
    title: 'Rregullorja e Brendshme e Gjimnazit “Hydajet Lezha”',
    code: 'RREG-2026-HL',
    category: 'rregullore',
    categoryLabel: 'Rregullore',
    fileSize: '1.4 MB',
    format: 'PDF',
    updateDate: '10 Shtator 2026',
    description: 'Kodi i sjelljes, të drejtat dhe detyrimet e nxënësve, mësuesve dhe rregullat e frekuentimit.'
  },
  {
    id: 'doc-2',
    title: 'Orari Mësimor dhe Ndarja e Sallave (Semestri I 2026–2027)',
    code: 'ORAR-SEM1-26',
    category: 'orari',
    categoryLabel: 'Orari',
    fileSize: '850 KB',
    format: 'PDF',
    updateDate: '15 Shtator 2026',
    description: 'Orari ditor për të gjitha klasat (X, XI, XII) me mësimdhënësit dhe laboratorët përkatës.'
  },
  {
    id: 'doc-3',
    title: 'Udhëzuesi Zyrtar i Provimeve të Maturës Shtetërore 2026',
    code: 'MAT-SHTET-2026',
    category: 'matura',
    categoryLabel: 'Matura',
    fileSize: '2.1 MB',
    format: 'PDF',
    updateDate: '01 Shtator 2026',
    description: 'Datat e provimeve, programet orientuese, kriteret e pranimit në universitete dhe formulari A1.'
  },
  {
    id: 'doc-4',
    title: 'Formular Kërkese për Vërtetim Nxënësi dhe Notash',
    code: 'FORM-VERT-01',
    category: 'formulare',
    categoryLabel: 'Formularë',
    fileSize: '320 KB',
    format: 'PDF',
    updateDate: '20 Gusht 2026',
    description: 'Shkarkoni formularin tip për kërkesa vërtetimi të frekuentimit ose listë notash pranë sekretarisë.'
  },
  {
    id: 'doc-5',
    title: 'Kalendari Vjetor i Aktiviteteve dhe Pushimeve Zyrtare',
    code: 'KAL-VJET-26',
    category: 'udhezime',
    categoryLabel: 'Udhëzime',
    fileSize: '540 KB',
    format: 'PDF',
    updateDate: '05 Shtator 2026',
    description: 'Data e provimeve të ndërmjetme, periudhave të vlerësimit, festave kombëtare dhe olimpiadave.'
  },
  {
    id: 'doc-6',
    title: 'Formulari i Regjistrimit në Klubet Jashtëshkollore',
    code: 'FORM-KLUB-26',
    category: 'formulare',
    categoryLabel: 'Formularë',
    fileSize: '280 KB',
    format: 'DOCX',
    updateDate: '12 Shtator 2026',
    description: 'Përzgjidhni klubin ku dëshironi të merrni pjesë (Debat, Robotikë, Eko, Fizikë, Art).'
  }
];

export const staffMembers: StaffMember[] = [
  {
    id: 'staff-1',
    name: 'Prof. Dr. Bardhyl Marku',
    role: 'Drejtor i Gjimnazit',
    department: 'Drejtoria',
    qualifications: 'Doktor i Shkencave Filologjike, Mësues i Kualifikuar',
    yearsOfExperience: 24,
    email: 'drejtoria@gjimnazihydajetlezha.edu.al',
  },
  {
    id: 'staff-2',
    name: 'Msc. Besnik Tusha',
    role: 'Nëndrejtor / Marrëdhëniet me Jashtë',
    department: 'Drejtoria',
    qualifications: 'Master në Shkenca Politike & Menaxhim Arsimor',
    yearsOfExperience: 18,
    email: 'b.tusha@gjimnazihydajetlezha.edu.al',
  },
  {
    id: 'staff-3',
    name: 'Prof. Mimoza Nikolla',
    role: 'Përgjegjëse e Departamentit të Fizikës',
    department: 'Shkencat e Natyrës',
    qualifications: 'Master në Fizikë Teorike, Trajnere e Olimpiadave',
    yearsOfExperience: 21,
    email: 'm.nikolla@gjimnazihydajetlezha.edu.al',
  },
  {
    id: 'staff-4',
    name: 'Ing. Alban Prenga',
    role: 'Mësues i TIK & Robotikës',
    department: 'Shkenca Shoqërore & TIK',
    qualifications: 'Inxhinier Kompjuteri, Zhvillues Softueri',
    yearsOfExperience: 12,
    email: 'a.prenga@gjimnazihydajetlezha.edu.al',
  },
  {
    id: 'staff-5',
    name: 'Prof. Valbona Zefi',
    role: 'Mësuese e Gjuhës Shqipe dhe Letërsisë',
    department: 'Gjuhë & Letërsi',
    qualifications: 'Master në Letërsi Shqipe, Redaktore e Revistës',
    yearsOfExperience: 19,
    email: 'v.zefi@gjimnazihydajetlezha.edu.al',
  },
  {
    id: 'staff-6',
    name: 'Msc. Lindita Gjergji',
    role: 'Psikologe e Shkollës',
    department: 'Shërbimi Psiko-Social',
    qualifications: 'Master në Psikologji Zhvillimi dhe Këshillim Shkollor',
    yearsOfExperience: 14,
    email: 'psikologjia@gjimnazihydajetlezha.edu.al',
  }
];
