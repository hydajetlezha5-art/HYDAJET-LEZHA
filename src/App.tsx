import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { UrgentAlertTicker } from './components/UrgentAlertTicker';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { NewsSection } from './components/NewsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { GallerySection } from './components/GallerySection';
import { DocumentsSection } from './components/DocumentsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectionConnector } from './components/SectionConnector';
import { RubricDetailModal } from './components/RubricDetailModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [expandedRubricId, setExpandedRubricId] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenRubric = (rubricId: string) => {
    setExpandedRubricId(rubricId);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'rreth-nesh',
        'lajme',
        'projekte',
        'arritjet',
        'jeta-studentore',
        'galeria',
        'dokumente',
        'kontakt'
      ];

      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        if (sectionId === 'hero') {
          if (window.scrollY < 380) {
            setActiveSection('hero');
            break;
          }
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f9ff] flex flex-col font-sans selection:bg-sky-200 selection:text-sky-950">
      {/* 1. Header & Navigation (Clean, uncluttered, top-only) */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Urgent Announcements Ribbon */}
      <UrgentAlertTicker />

      {/* Main Content Sections with Fluid Bridges */}
      <main className="flex-1">
        {/* 1. Kryefaqja (Hero, Logo, Slogan, Quick Buttons, Stats) */}
        <Hero onNavigate={handleNavigate} onOpenRubric={handleOpenRubric} />

        <SectionConnector
          currentSection="hero"
          nextSectionId="rreth-nesh"
          nextSectionTitle="Rreth Nesh & Historia"
          nextSectionDescription="Zbuloni rrugëtimin e plotë të gjimnazit nga themelimi në 1957 deri në ditët e sotme."
          onNavigate={handleNavigate}
        />

        {/* 2. Rreth Shkollës (Struktura e Historisë me 4 Epokat: 1957–1961, 1962–1987, 1987–1997, 1998–Sot) */}
        <AboutSection />

        <SectionConnector
          currentSection="rreth-nesh"
          nextSectionId="lajme"
          nextSectionTitle="Lajmet & Njoftimet"
          nextSectionDescription="Informohuni mbi ngjarjet më të fundit, olimpiadat dhe njoftimet zyrtare të shkollës."
          onNavigate={handleNavigate}
        />

        {/* 3. Lajme & Njoftime */}
        <NewsSection />

        <SectionConnector
          currentSection="lajme"
          nextSectionId="projekte"
          nextSectionTitle="Projektet & Fizika Interaktive"
          nextSectionDescription="Eksploroni uebsajtin fizikainteraktive.com të krijuar nga nxënësit me kodin zyrtar QR për celular."
          onNavigate={handleNavigate}
        />

        {/* 4. Projekte (Shkencore, TIK, Ndërkombëtare, & "Fizika Interaktive") */}
        <ProjectsSection />

        <SectionConnector
          currentSection="projekte"
          nextSectionId="arritjet"
          nextSectionTitle="Arritjet & Olimpiadat"
          nextSectionDescription="Shikoni medaljet e arta kombëtare, çmimet e nderit dhe historikun e sukseseve."
          onNavigate={handleNavigate}
        />

        {/* 5. Arritjet 🏆 */}
        <AchievementsSection />

        <SectionConnector
          currentSection="arritjet"
          nextSectionId="jeta-studentore"
          nextSectionTitle="Jeta Studentore & Klubet"
          nextSectionDescription="Këshilli i nxënësve, 6 klubet aktive, debati, sportet dhe traditat tona."
          onNavigate={handleNavigate}
        />

        {/* 6. Jeta Studentore 🎓 */}
        <StudentLifeSection />

        <SectionConnector
          currentSection="jeta-studentore"
          nextSectionId="galeria"
          nextSectionTitle="Galeria Fotografike"
          nextSectionDescription="Shfletoni albumin me fotografi nga shkolla, garat, projektet dhe ekskursionet."
          onNavigate={handleNavigate}
        />

        {/* 7. Galeria 📸 */}
        <GallerySection />

        <SectionConnector
          currentSection="galeria"
          nextSectionId="dokumente"
          nextSectionTitle="Dokumente & Shërbime"
          nextSectionDescription="Rregullorja e brendshme, oraret mësimore dhe formularët e shkarkueshëm."
          onNavigate={handleNavigate}
        />

        {/* 8. Dokumente */}
        <DocumentsSection />

        <SectionConnector
          currentSection="dokumente"
          nextSectionId="kontakt"
          nextSectionTitle="Kontakti & Vendndodhja"
          nextSectionDescription="Adresa në Lezhë, oraret e sekretarisë, harta interaktive dhe formulari i mesazheve."
          onNavigate={handleNavigate}
        />

        {/* 9. Kontakt */}
        <ContactSection />
      </main>

      {/* Expanded Rubric Detail Modal (When user clicks any rubric to open it larger!) */}
      <RubricDetailModal
        rubricId={expandedRubricId}
        onClose={() => setExpandedRubricId(null)}
        onNavigate={handleNavigate}
      />

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
