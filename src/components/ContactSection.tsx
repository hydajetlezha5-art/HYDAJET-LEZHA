import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Globe, 
  Sparkles, 
  MessageSquare 
} from 'lucide-react';
import { schoolGeneralInfo } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Kërkesë Informacioni',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedTicket = `HL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedCode(generatedTicket);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Kërkesë Informacioni',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="kontakt" className="py-20 bg-gradient-to-b from-sky-50/50 via-white to-sky-100/50 border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-widest border border-sky-300">
            <MapPin className="w-3.5 h-3.5 text-[#AA7A1E]" />
            <span>Sekretaria & Komunikimi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Kontakti & <span className="text-sky-700">Vendndodhja në Lezhë</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Jemi në dispozicion të nxënësve, prindërve dhe bashkëpunëtorëve në godinën tonë në zemër të qytetit të Lezhës.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Map (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-sky-200 shadow-baby-glow space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-sky-100 pb-3 flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-sky-700" />
                <span>Informacioni Zyrtar i Kontaktit</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Adresa e Shkollës:</span>
                    <span className="text-slate-600 leading-relaxed">{schoolGeneralInfo.address}</span>
                    <span className="block text-[11px] text-sky-600 mt-0.5">Lezhë, Shqipëri</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFDF5] text-[#8E6516] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Telefonat e Kontaktit:</span>
                    <a href={`tel:${schoolGeneralInfo.phone}`} className="text-slate-700 hover:text-sky-700 block font-mono">
                      Sekretaria: {schoolGeneralInfo.phone}
                    </a>
                    <a href={`tel:${schoolGeneralInfo.mobile}`} className="text-slate-700 hover:text-sky-700 block font-mono">
                      Kujdestaria: {schoolGeneralInfo.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Zyrtar:</span>
                    <a href={`mailto:${schoolGeneralInfo.email}`} className="text-sky-700 hover:text-sky-900 underline block font-medium">
                      {schoolGeneralInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Portali Zyrtar:</span>
                    <a href="https://gjimnazihydajetlezha.com" target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-900 underline block font-mono text-xs">
                      gjimnazihydajetlezha.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFDF5] text-[#8E6516] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Orari i Sekretarisë:</span>
                    <span className="text-slate-600 block">{schoolGeneralInfo.secretaryHours}</span>
                    <span className="text-[11px] text-sky-700 font-semibold block">Pritja e Prindërve: Çdo të Mërkurë 11:00 – 13:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Lezhë Map Frame with Drin River & Landmarks */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sky-200 p-4 shadow-baby-glow space-y-2">
              <div className="flex items-center justify-between px-2 pt-1 text-xs text-slate-600">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  Vendndodhja në Qytetin e Lezhës
                </span>
                <span className="text-[11px] font-mono text-sky-700">Lagjja Besëlidhja</span>
              </div>

              <div className="relative h-52 bg-slate-50 rounded-2xl overflow-hidden border border-sky-200">
                <svg viewBox="0 0 400 200" className="w-full h-full bg-[#f0f9ff]">
                  {/* Drin River Flow in Baby Blue */}
                  <path
                    d="M 0,90 Q 100,120 180,80 T 320,110 T 400,95"
                    fill="none"
                    stroke="#bae6fd"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0,90 Q 100,120 180,80 T 320,110 T 400,95"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray="5,5"
                  />

                  {/* Roads */}
                  <line x1="80" y1="0" x2="160" y2="200" stroke="#e2e8f0" strokeWidth="6" />
                  <line x1="160" y1="20" x2="380" y2="180" stroke="#e2e8f0" strokeWidth="6" />
                  <line x1="20" y1="150" x2="380" y2="150" stroke="#cbd5e1" strokeWidth="4" />

                  {/* Bridges */}
                  <line x1="140" y1="75" x2="155" y2="95" stroke="#94a3b8" strokeWidth="6" />
                  <line x1="270" y1="95" x2="285" y2="115" stroke="#94a3b8" strokeWidth="6" />

                  {/* Landmarks: Kalaja e Lezhes */}
                  <rect x="230" y="25" width="40" height="22" rx="4" fill="#FFFDF5" stroke="#D4AF37" strokeWidth="1.5" />
                  <text x="234" y="40" fill="#7A530C" fontSize="8" fontWeight="bold">Kalaja</text>

                  {/* Memoriali i Skenderbeut */}
                  <rect x="180" y="115" width="48" height="22" rx="4" fill="#FFFDF5" stroke="#D4AF37" strokeWidth="1.5" />
                  <text x="184" y="130" fill="#7A530C" fontSize="7.5" fontWeight="bold">Memoriali</text>

                  {/* School Marker Pin */}
                  <g transform="translate(195, 75)">
                    <circle cx="0" cy="0" r="16" fill="rgba(2, 132, 199, 0.25)" className="animate-ping" />
                    <circle cx="0" cy="0" r="10" fill="#0284c7" />
                    <circle cx="0" cy="0" r="4.5" fill="#d4af37" />
                    <rect x="-70" y="-30" width="140" height="20" rx="6" fill="#0f2b48" opacity="0.95" />
                    <text x="0" y="-17" fill="#bae6fd" fontSize="8" fontWeight="bold" textAnchor="middle">
                      Gjimnazi “Hydajet Lezha”
                    </text>
                  </g>
                </svg>

                <div className="absolute bottom-2 right-2 bg-white/95 px-2.5 py-1 rounded-xl text-[10px] text-slate-700 font-semibold shadow-xs border border-sky-200">
                  Lumi Drin · Qendra e Qytetit
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-baby-glow space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-600" />
                <span>Dërgoni një Mesazh Sekretarisë</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Për çdo pyetje mbi pranimet, vërtetimet, olimpiadat ose bashkëpunimet shkollore.
              </p>
            </div>

            {submittedCode ? (
              <div className="p-8 text-center bg-sky-50 rounded-2xl border border-sky-300 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900">Mesazhi u Dërgua me Sukses!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Kërkesa juaj u regjistrua në protokollin elektronik të shkollës.
                  </p>
                </div>
                <div className="p-3 bg-white border border-sky-200 rounded-xl inline-block text-xs font-mono text-slate-800">
                  Numri i Protokollit: <strong className="text-sky-700">{submittedCode}</strong>
                </div>
                <div>
                  <button
                    onClick={() => setSubmittedCode(null)}
                    className="px-5 py-2.5 text-xs font-extrabold bg-gold-gradient hover:brightness-105 border border-[#D4AF37] text-slate-950 rounded-xl shadow-gold-glow cursor-pointer"
                  >
                    Dërgo një Mesazh Tjetër
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Emri dhe Mbiemri *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="p.sh. Artur Nikolla"
                      className="w-full px-3.5 py-2.5 text-xs bg-sky-50/50 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Adresa Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="artur@shembull.al"
                      className="w-full px-3.5 py-2.5 text-xs bg-sky-50/50 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Numri i Telefonit</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+355 6X XX XX XXX"
                      className="w-full px-3.5 py-2.5 text-xs bg-sky-50/50 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Lloji i Kërkesës *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-sky-50/50 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500"
                    >
                      <option value="Kërkesë Informacioni">Kërkesë Informacioni të Përgjithshëm</option>
                      <option value="Regjistrimi në Gjimnaz">Regjistrimi i Nxënësve të Rinj (Klasa X)</option>
                      <option value="Matura Shtetërore">Pyetje mbi Provimet e Maturës</option>
                      <option value="Vërtetim / Lista Notash">Kërkesë Vërtetimi ose Notash</option>
                      <option value="Bashkëpunim / Projekte">Propozim për Projekte & Partneritete</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Mesazhi Juaj *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Shkruani me hollësi kërkesën tuaj..."
                    className="w-full px-3.5 py-2.5 text-xs bg-sky-50/50 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 resize-y"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">
                    * Mbrojtje e plotë e të dhënave personale.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 text-xs font-extrabold text-slate-950 bg-gold-gradient hover:brightness-105 border border-[#D4AF37] disabled:opacity-50 rounded-xl transition-all flex items-center gap-2 shadow-gold-glow cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Po dërgohet...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-slate-950" />
                        <span>Dërgo Mesazhin</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
