import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  HardDrive, 
  CheckCircle2, 
  X, 
  FileCheck,
  Search,
  BookOpen,
  Clock,
  Award,
  Layers
} from 'lucide-react';
import { officialDocuments } from '../data/schoolData';
import { DocumentItem } from '../types';

export const DocumentsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchDocQuery, setSearchDocQuery] = useState<string>('');
  const [previewDoc, setPreviewDoc] = useState<DocumentItem | null>(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Të Gjitha Dokumentet', icon: Layers },
    { id: 'rregullore', label: 'Rregullore', icon: BookOpen },
    { id: 'orari', label: 'Orari & Klasat', icon: Clock },
    { id: 'matura', label: 'Matura Shtetërore', icon: Award },
    { id: 'formulare', label: 'Formularë Shkarkues', icon: FileText },
  ];

  const filteredDocs = officialDocuments.filter((doc) => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchDocQuery.toLowerCase()) ||
                          doc.code.toLowerCase().includes(searchDocQuery.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchDocQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (doc: DocumentItem) => {
    setDownloadSuccessToast(`Dokumenti "${doc.title}" u shkarkua me sukses (${doc.fileSize})`);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 3500);
  };

  return (
    <section id="dokumente" className="py-20 bg-gradient-to-b from-sky-50/40 via-white to-sky-50/60 border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest border border-sky-300">
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Transparencë & Shërbime Digjitale</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Dokumente & <span className="text-sky-700">Formularë Zyrtarë</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Qasje e shpejtë në rregulloren shkollore, oraret mësimore, udhëzimet e maturës dhe formularët administrativë.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-sky-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchDocQuery}
              onChange={(e) => setSearchDocQuery(e.target.value)}
              placeholder="Kërko kodin, rregulloren..."
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-sky-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all placeholder:text-slate-400 shadow-xs"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-sky-100/80 rounded-2xl border border-sky-200 max-w-fit">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white font-bold shadow-xs'
                    : 'text-sky-900 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-sky-600'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-sky-200/90 rounded-2xl p-6 space-y-4 hover:border-amber-400 hover:shadow-[0_8px_30px_rgb(2,132,199,0.12)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-sky-900 bg-sky-100 border border-sky-300 px-2.5 py-0.5 rounded-lg">
                    {doc.code}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <span className="font-bold text-sky-800">{doc.format}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.fileSize}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {doc.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {doc.description}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-sky-600 pt-2 border-t border-sky-100">
                  <Calendar className="w-3 h-3 text-sky-500" />
                  <span>Përditësuar: {doc.updateDate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex items-center justify-between gap-2 border-t border-sky-100">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="px-3.5 py-2 text-xs font-semibold text-sky-900 hover:text-sky-950 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-600" />
                  <span>Shiko</span>
                </button>

                <button
                  onClick={() => handleDownload(doc)}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Shkarko</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Download Success Toast */}
        {downloadSuccessToast && (
          <div className="fixed bottom-20 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-sky-400/50 flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs font-semibold text-sky-100">{downloadSuccessToast}</span>
          </div>
        )}

        {/* Document Preview Modal */}
        {previewDoc && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative border border-sky-200">
              <button
                onClick={() => setPreviewDoc(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-sky-900 bg-sky-100 px-3 py-1 rounded-xl w-fit border border-sky-300">
                <FileCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>KODI ZYRTAR: {previewDoc.code}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-display">
                {previewDoc.title}
              </h3>

              <div className="p-5 bg-sky-50/70 border border-sky-200 rounded-2xl space-y-3 text-xs text-slate-700">
                <div className="flex justify-between border-b border-sky-200 pb-2">
                  <span className="text-slate-500">Kategoria:</span>
                  <span className="font-bold text-slate-900">{previewDoc.categoryLabel}</span>
                </div>
                <div className="flex justify-between border-b border-sky-200 pb-2">
                  <span className="text-slate-500">Formati & Madhësia:</span>
                  <span className="font-mono text-slate-900">{previewDoc.format} · {previewDoc.fileSize}</span>
                </div>
                <div className="flex justify-between border-b border-sky-200 pb-2">
                  <span className="text-slate-500">Miratimi:</span>
                  <span className="text-slate-900">{previewDoc.updateDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Përshkrimi:</span>
                  <p className="text-slate-800 leading-relaxed">{previewDoc.description}</p>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium">
                Ky dokument është miratuar nga Drejtoria e Gjimnazit “Hydajet Lezha” dhe Zyra Vendore Arsimore (ZVA Lezhë).
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Mbyll
                </button>
                <button
                  onClick={() => {
                    handleDownload(previewDoc);
                    setPreviewDoc(null);
                  }}
                  className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Shkarko Dokumentin</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
