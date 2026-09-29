import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowUpRight, 
  X, 
  Share2, 
  Check, 
  Newspaper,
  Sparkles,
  Award,
  Tag,
  Bookmark
} from 'lucide-react';
import { newsList } from '../data/schoolData';
import { NewsItem } from '../types';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Të gjitha');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNewsModal, setActiveNewsModal] = useState<NewsItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['Të gjitha', 'Olimpiada', 'Aktivitete', 'Projekte', 'Ekskursione', 'Njoftime'];

  const filteredNews = newsList.filter((item) => {
    const matchesCategory = selectedCategory === 'Të gjitha' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="lajme" className="py-20 bg-gradient-to-b from-sky-50/30 via-white to-sky-50/60 border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header with Title and Search */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest border border-sky-300">
              <Newspaper className="w-3.5 h-3.5 text-amber-600" />
              <span>Informacioni Zyrtar & Ngjarjet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Lajme & <span className="text-sky-700">Njoftime</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Arritjet më të fundit shkencore, rezultatet në olimpiada kombëtare, jetën kulturore dhe njoftimet thelbësore të shkollës.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-sky-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kërko lajme, olimpiada..."
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-sky-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all placeholder:text-slate-400 shadow-xs"
            />
          </div>
        </div>

        {/* Filter buttons with Baby Blue styling */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-sky-100/70 rounded-xl border border-sky-200 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-sky-900 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-sky-200 space-y-2">
            <Newspaper className="w-10 h-10 text-sky-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-700">Nuk u gjet asnjë lajm për këtë kërkim</h3>
            <p className="text-xs text-slate-500">Provoni me një fjalë tjetër kyçe ose zgjidhni një kategori tjetër.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => {
              const isFirst = index === 0 && selectedCategory === 'Të gjitha' && !searchQuery;
              return (
                <article
                  key={news.id}
                  onClick={() => setActiveNewsModal(news)}
                  className={`group bg-white rounded-2xl border border-sky-200/90 overflow-hidden cursor-pointer hover:border-amber-400 hover:shadow-[0_8px_30px_rgb(2,132,199,0.12)] transition-all flex flex-col justify-between ${
                    isFirst ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Image */}
                    <div className={`relative overflow-hidden bg-sky-100 ${isFirst ? 'h-64 sm:h-76' : 'h-48'}`}>
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Quiet Category & Read Time */}
                      <div className="absolute bottom-3 left-3 text-xs text-white flex items-center gap-2">
                        <span className="font-bold text-amber-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-400" />
                          {news.category}
                        </span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-sky-200 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {news.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-sky-800 font-medium">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-sky-500" />
                          {news.date}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate text-sky-700">{news.author}</span>
                      </div>

                      <h3 className={`font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug ${
                        isFirst ? 'text-xl sm:text-2xl' : 'text-base'
                      }`}>
                        {news.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {news.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 flex items-center justify-between text-xs text-sky-700 font-bold border-t border-sky-100 group-hover:text-amber-600 transition-colors">
                    <span>Lexo artikullin e plotë</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Read Full News Modal */}
        {activeNewsModal && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative border border-sky-200">
              <button
                onClick={() => setActiveNewsModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 cursor-pointer"
                aria-label="Mbyll"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-bold text-sky-700">{activeNewsModal.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeNewsModal.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeNewsModal.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight font-display">
                  {activeNewsModal.title}
                </h2>

                <div className="text-xs text-slate-500 flex items-center gap-1.5 pb-2 border-b border-sky-100">
                  <User className="w-3.5 h-3.5 text-sky-600" />
                  <span>Burimi: <strong className="text-slate-800">{activeNewsModal.author}</strong></span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden h-64 sm:h-80 bg-sky-50 border border-sky-200">
                <img
                  src={activeNewsModal.image}
                  alt={activeNewsModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-editorial">
                <p className="font-semibold text-slate-900 text-base">
                  {activeNewsModal.summary}
                </p>
                <p>
                  {activeNewsModal.content}
                </p>
                <p>
                  Gjimnazi “Hydajet Lezha” vijon të jetë në krye të arsimit cilësor në qarkun e Lezhës, duke promovuar vlerat më të larta të dijes dhe qytetarisë.
                </p>
              </div>

              <div className="pt-4 border-t border-sky-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-sky-900 px-3 py-1.5 rounded-lg border border-sky-200 hover:bg-sky-50 transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-sky-600" />}
                  <span>{copiedLink ? 'Linku u kopjua' : 'Shpërndaj artikullin'}</span>
                </button>

                <button
                  onClick={() => setActiveNewsModal(null)}
                  className="px-5 py-2 text-xs font-bold bg-slate-900 hover:bg-sky-950 text-white rounded-xl transition-colors cursor-pointer"
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
