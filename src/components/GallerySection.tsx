import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar,
  Sparkles,
  Camera,
  School,
  Trophy,
  Activity,
  Compass
} from 'lucide-react';
import { galleryList } from '../data/schoolData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Të Gjitha', icon: Sparkles },
    { id: 'shkolla', label: 'Shkolla', icon: School },
    { id: 'aktivitete', label: 'Aktivitete', icon: Activity },
    { id: 'projekte', label: 'Projekte', icon: Sparkles },
    { id: 'gara', label: 'Gara', icon: Trophy },
    { id: 'ekskursione', label: 'Ekskursione', icon: Compass },
    { id: 'evente', label: 'Evente', icon: Camera },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryList
    : galleryList.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/60 border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest border border-sky-300">
              <Camera className="w-3.5 h-3.5 text-amber-500" />
              <span>Arkiva Fotografike</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Galeria e <span className="text-sky-700">Shkollës</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Dëshmi vizuale nga jeta e gjallë akademike, orët e laboratorëve të fizikës, ekskursionet historike dhe ceremonitë festive.
            </p>
          </div>

          {/* Category Filters with Baby Blue & Icons */}
          <div className="flex flex-wrap gap-1 p-1 bg-sky-100/80 rounded-2xl border border-sky-200 max-w-fit">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
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
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group bg-white rounded-2xl border border-sky-200/90 overflow-hidden cursor-pointer hover:border-amber-400 hover:shadow-[0_8px_30px_rgb(2,132,199,0.15)] transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 bg-sky-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-sky-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-2xl bg-white/95 text-sky-900 flex items-center justify-center shadow-lg border border-sky-200">
                    <Maximize2 className="w-5 h-5 text-amber-500" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 bg-sky-950/80 backdrop-blur-xs px-2.5 py-0.5 rounded-lg text-[10px] font-bold text-sky-200 border border-sky-400/40">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-sky-600 font-medium">
                  <Calendar className="w-3 h-3 text-sky-500" />
                  <span>{item.date}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md">
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Mbyll"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev / Next buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Foto e mëparshme"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Foto pasuese"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center space-y-4">
              <div className="relative max-h-[65vh] overflow-hidden rounded-2xl bg-black border border-sky-500/30">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[65vh] w-auto object-contain mx-auto rounded-xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center text-white space-y-1 max-w-xl">
                <div className="text-xs text-amber-300 font-bold tracking-wider uppercase">
                  {filteredItems[lightboxIndex].categoryLabel} · {filteredItems[lightboxIndex].date}
                </div>
                <h3 className="text-lg font-bold font-display text-sky-100">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300">
                  {filteredItems[lightboxIndex].caption}
                </p>
                <div className="text-[11px] text-sky-400 font-mono pt-1">
                  {lightboxIndex + 1} nga {filteredItems.length} fotografi
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
