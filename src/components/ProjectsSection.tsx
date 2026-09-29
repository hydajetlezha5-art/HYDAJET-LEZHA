import React, { useState } from 'react';
import { 
  Atom, 
  Cpu, 
  Globe2, 
  Palette, 
  QrCode, 
  Users, 
  BookOpen, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  X,
  Code2,
  CheckCircle2,
  Smartphone
} from 'lucide-react';
import { projectsList } from '../data/schoolData';
import { Project } from '../types';
import { QRCodeDisplay } from './QRCodeDisplay';
import { PhysicsQRModal } from './PhysicsQRModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [isQRModalOpen, setIsQRModalOpen] = useState<boolean>(false);

  const filterTabs = [
    { id: 'all', label: 'Të Gjitha Projektet', icon: Sparkles },
    { id: 'shkencore', label: 'Shkencore & Fizikë', icon: Atom },
    { id: 'tik', label: 'TIK & Robotikë', icon: Cpu },
    { id: 'nderkombetare', label: 'Erasmus+ / RYCO', icon: Globe2 },
    { id: 'artistike', label: 'Artistike & Letrare', icon: Palette },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsList
    : projectsList.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'shkencore':
        return <Atom className="w-4 h-4 text-sky-600" />;
      case 'tik':
        return <Cpu className="w-4 h-4 text-sky-700" />;
      case 'nderkombetare':
        return <Globe2 className="w-4 h-4 text-sky-800" />;
      case 'artistike':
        return <Palette className="w-4 h-4 text-[#AA7A1E]" />;
      default:
        return <Sparkles className="w-4 h-4 text-sky-600" />;
    }
  };

  return (
    <section id="projekte" className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-widest border border-sky-300">
            <Atom className="w-3.5 h-3.5 text-[#AA7A1E]" />
            <span>Kërkim & Inovacion Rinor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Projektet Shkencore & <span className="text-sky-700">“Fizika Interaktive”</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nga platforma digjitale e krijuar nga nxënësit te robotika autonome mjedisore, projektet evropiane Erasmus+ dhe botimet letrare.
          </p>
        </div>

        {/* Featured Showcase: Luminous Baby Blue & Real Gold Marquee with REAL SCANNABLE QR CODE */}
        <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 rounded-3xl p-7 sm:p-9 text-white border-2 border-[#D4AF37] shadow-[0_12px_40px_rgba(2,132,199,0.25)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-[#D4AF37] text-amber-200 text-xs font-extrabold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span className="text-white">Krijuar nga Nxënësit e Gjimnazit “Hydajet Lezha”</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display leading-tight">
                Platforma “Fizika Interaktive” (fizikainteraktive.com)
              </h3>
              
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed font-light">
                Një faqe e plotë dhe laborator digjital i zhvilluar nga nxënësit tanë të apasionuar pas shkencës. Eksploroni eksperimentet virtuale, mekanikën, lëkundësit harmonikë dhe thjerrëzat optike direkt në uebsajtin e tyre të dedikuar.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                {/* Direct link to students' live website */}
                <a
                  href="https://fizikainteraktive.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 bg-gold-gradient hover:brightness-105 border border-[#D4AF37] rounded-xl transition-all shadow-gold-glow flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                  <span>Hap Uebsajtin (fizikainteraktive.com) ↗</span>
                </a>

                {/* Open full QR Code modal */}
                <button
                  onClick={() => setIsQRModalOpen(true)}
                  className="px-5 py-3.5 text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 border-2 border-white/40 rounded-xl transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
                >
                  <QrCode className="w-4 h-4 text-amber-200" />
                  <span>Zmadho QR Kodin 📱</span>
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-sky-200 font-medium">
                <Smartphone className="w-4 h-4 text-amber-300" />
                <span>Skanoni kodin QR në të djathtë me kamerën e celularit për hapje të menjëhershme.</span>
              </div>
            </div>

            {/* Right Column: REAL SCAN-READY QR CODE DISPLAY */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border-2 border-[#D4AF37] shadow-xl text-slate-900 max-w-xs w-full text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-[11px] font-extrabold uppercase tracking-wider border border-sky-300">
                  <QrCode className="w-3.5 h-3.5 text-[#AA7A1E]" />
                  <span>Kodi Zyrtar QR</span>
                </div>

                <div className="flex justify-center">
                  <QRCodeDisplay url="https://fizikainteraktive.com/" size={170} showActions={false} />
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-900">
                    Skano me Kamerën e Celularit
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Drejto kamerën për të hyrë menjëherë te <strong>fizikainteraktive.com</strong>
                  </p>
                </div>

                <a
                  href="https://fizikainteraktive.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 px-3 text-xs font-bold text-sky-700 hover:text-sky-950 bg-sky-50 hover:bg-sky-100 rounded-xl border border-sky-200 transition-colors"
                >
                  fizikainteraktive.com ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters with Baby Blue icons */}
        <div className="flex flex-wrap gap-2 justify-center p-1.5 bg-sky-100/70 border border-sky-200 rounded-2xl max-w-fit mx-auto">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-white text-sky-950 shadow-xs border border-sky-300'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#AA7A1E]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-sky-200 rounded-3xl overflow-hidden shadow-xs hover:border-[#D4AF37] hover:shadow-gold-glow transition-all flex flex-col group"
            >
              {/* Image Banner */}
              <div className="h-48 overflow-hidden relative bg-sky-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-xl text-xs font-bold text-sky-900 border border-sky-200 shadow-xs flex items-center gap-1.5">
                  {getCategoryIcon(project.category)}
                  <span>{project.categoryLabel}</span>
                </div>
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-xl text-[11px] font-mono text-white font-bold">
                  {project.year}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-editorial">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs text-slate-600 space-y-1 pt-3 border-t border-sky-100">
                    <div>
                      <strong className="text-slate-800">Mentori:</strong> {project.mentor}
                    </div>
                    <div>
                      <strong className="text-slate-800">Nxënësit:</strong> {project.students.join(', ')}
                    </div>
                  </div>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap gap-2 text-xs text-sky-700 font-semibold pt-1">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="after:content-['·'] last:after:content-none after:ml-2">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-2 border-t border-sky-50">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Lexo detajet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-xs font-extrabold bg-gold-gradient hover:brightness-105 text-slate-950 border border-[#D4AF37] rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                      title="Hap uebsajtin fizikainteraktive.com"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Hap Uebsajtin ↗</span>
                    </a>
                  )}

                  {project.qrCodeUrl && (
                    <button
                      onClick={() => setIsQRModalOpen(true)}
                      className="px-3 py-1.5 text-xs font-bold bg-sky-100 hover:bg-sky-200 text-sky-900 border border-sky-300 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                      title="Shiko Kodin QR për celular"
                    >
                      <QrCode className="w-3.5 h-3.5 text-sky-700" />
                      <span>QR Code</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated QR Code Modal */}
        {isQRModalOpen && (
          <PhysicsQRModal onClose={() => setIsQRModalOpen(false)} />
        )}

        {/* Project Details Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 bg-sky-950/50 flex items-center justify-center p-4 backdrop-blur-xs overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border-2 border-sky-200">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-sky-50 cursor-pointer"
                aria-label="Mbyll"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <div className="text-xs text-sky-700 font-bold uppercase tracking-wider">
                  {activeProjectModal.categoryLabel} · Viti {activeProjectModal.year}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  {activeProjectModal.title}
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden h-64 bg-sky-50 border border-sky-200">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-editorial">
                <p className="font-semibold text-slate-900">
                  {activeProjectModal.description}
                </p>
                <p>
                  {activeProjectModal.extendedDescription}
                </p>
              </div>

              {/* If it's Fizika Interaktive, embed the real QR Code directly inside the modal! */}
              {activeProjectModal.id === 'proj-fizika' && (
                <div className="p-4 bg-sky-50/80 border border-sky-300 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
                  <QRCodeDisplay url="https://fizikainteraktive.com/" size={130} showActions={false} />
                  <div className="text-xs space-y-2 text-center sm:text-left">
                    <div className="font-bold text-slate-900 text-sm">
                      Kodi QR për Qasje me Celular
                    </div>
                    <p className="text-slate-600">
                      Skanoni këtë kod me kamerën e telefonit tuaj për të hyrë menjëherë në uebsajtin <strong>fizikainteraktive.com</strong> të krijuar nga nxënësit.
                    </p>
                    <a
                      href="https://fizikainteraktive.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-extrabold text-sky-700 hover:text-sky-950 underline"
                    >
                      <span>Hap direkt në shfletues</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl space-y-2 text-xs">
                <div className="flex items-center gap-2 text-sky-900 font-bold">
                  <Users className="w-4 h-4 text-[#AA7A1E]" />
                  <span>Ekipi Drejtues & Nxënësit Pjesëmarrës</span>
                </div>
                <div><strong>Mentori:</strong> {activeProjectModal.mentor}</div>
                <div><strong>Nxënësit:</strong> {activeProjectModal.students.join(', ')}</div>
              </div>

              <div className="pt-2 flex flex-wrap justify-between items-center gap-3 border-t border-sky-100">
                <div className="flex flex-wrap items-center gap-2">
                  {activeProjectModal.externalUrl && (
                    <a
                      href={activeProjectModal.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-extrabold bg-gold-gradient hover:brightness-105 text-slate-950 border border-[#D4AF37] rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                      <span>Hap fizikainteraktive.com ↗</span>
                    </a>
                  )}

                  {activeProjectModal.qrCodeUrl && (
                    <button
                      onClick={() => {
                        setActiveProjectModal(null);
                        setIsQRModalOpen(true);
                      }}
                      className="px-4 py-2 text-xs font-bold bg-sky-100 hover:bg-sky-200 text-sky-900 border border-sky-300 rounded-xl flex items-center gap-1.5 cursor-pointer"
                    >
                      <QrCode className="w-3.5 h-3.5 text-sky-700" />
                      <span>Zmadho QR Kodin</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2 text-xs font-bold bg-slate-900 hover:bg-sky-950 text-white rounded-xl cursor-pointer"
                >
                  Mbyll
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
