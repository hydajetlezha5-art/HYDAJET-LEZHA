import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Trophy, 
  Cpu, 
  Atom, 
  Leaf, 
  Palette, 
  X, 
  Sparkles 
} from 'lucide-react';
import { studentClubs } from '../data/schoolData';
import { StudentClub } from '../types';

export const StudentLifeSection: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<StudentClub | null>(null);
  const [showJoinSuccess, setShowJoinSuccess] = useState(false);
  const [joinForm, setJoinForm] = useState({ name: '', grade: 'X-A', email: '' });

  const getClubIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-600" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-sky-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#8E6516]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-600" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#8E6516]" />;
      default:
        return <Users className="w-5 h-5 text-sky-600" />;
    }
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowJoinSuccess(true);
    setTimeout(() => {
      setShowJoinSuccess(false);
      setSelectedClub(null);
      setJoinForm({ name: '', grade: 'X-A', email: '' });
    }, 2500);
  };

  return (
    <section id="jeta-studentore" className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-widest border border-sky-300">
            <Users className="w-3.5 h-3.5 text-[#AA7A1E]" />
            <span>Komuniteti & Veprimtaritë</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Jeta Studentore & <span className="text-sky-700">Klubet Shkollore</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Një ambient edukativ i pasur me miqësi, organizime rinore, turne sportive dhe klube tematike të pasionit shkencor e artistik.
          </p>
        </div>

        {/* Student Council Highlight Banner in Baby Blue & Gold Card */}
        <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100/70 text-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-gold-glow grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative overflow-hidden">
          <div className="lg:col-span-8 space-y-3 relative z-10">
            <div className="text-xs uppercase tracking-widest text-[#8E6516] font-extrabold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-700" />
              <span>Zëri i Nxënësve · Demokracia Shkollore</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-display">
              Këshilli i Nxënësve të Gjimnazit “Hydajet Lezha”
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed max-w-2xl font-light">
              Këshilli përbëhet nga 29 senatorë të zgjedhur me votim demokratik nga çdo klasë. Ai përfaqëson interesat e nxënësve, organizon debatet shkollore, mbrëmjet tematike dhe vullnetarizmin qytetar në qytetin e Lezhës.
            </p>
          </div>
          <div className="lg:col-span-4 bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-sky-300 text-xs space-y-2.5 relative z-10 shadow-xs">
            <div className="flex justify-between items-center text-slate-600 pb-2 border-b border-sky-100">
              <span>Organi Drejtues:</span>
              <strong className="text-slate-950">Senati Studentor</strong>
            </div>
            <div className="flex justify-between items-center text-slate-600 pb-2 border-b border-sky-100">
              <span>Takimi i Radhës:</span>
              <strong className="text-[#8E6516]">Çdo të Premte, 13:30</strong>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Fokusi Vjetor:</span>
              <strong className="text-sky-800">Laboratori & Mjedisi</strong>
            </div>
          </div>
        </div>

        {/* Student Clubs Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#AA7A1E]" />
              <span>Klubet Jashtëshkollore & Pasionet</span>
            </h3>
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-xl border border-sky-300">
              6 Klube Aktive
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentClubs.map((club) => (
              <div
                key={club.id}
                className="bg-white border border-sky-200 rounded-3xl p-6 hover:border-[#D4AF37] hover:shadow-gold-glow transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {getClubIcon(club.iconName)}
                    </div>
                    <span className="text-xs text-slate-700 font-mono font-bold bg-sky-50 px-2.5 py-0.5 rounded-lg border border-sky-200">
                      {club.membersCount} Anëtarë
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                      {club.category}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {club.name}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {club.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 pt-3 border-t border-sky-100">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-sky-500" />
                      <span>{club.meetingSchedule}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Users className="w-3.5 h-3.5 text-[#AA7A1E]" />
                      <span>Udhëheqësi: <strong className="text-slate-900">{club.leader}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-sky-100">
                  <button
                    onClick={() => setSelectedClub(club)}
                    className="w-full py-2.5 px-3 text-xs font-extrabold bg-sky-50 hover:bg-gold-gradient text-sky-950 hover:text-slate-950 border border-sky-200 hover:border-[#D4AF37] rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Regjistrohu në Klub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Club Join Modal */}
        {selectedClub && (
          <div className="fixed inset-0 z-50 bg-sky-950/50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl relative border-2 border-sky-200">
              <button
                onClick={() => setSelectedClub(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-sky-50 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center shadow-xs">
                  {getClubIcon(selectedClub.iconName)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{selectedClub.name}</h4>
                  <div className="text-xs text-sky-700 font-semibold">{selectedClub.category}</div>
                </div>
              </div>

              {showJoinSuccess ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                  <h5 className="text-base font-bold text-slate-900">Kërkesa u regjistrua me sukses!</h5>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Kryetari i klubit do t&apos;ju kontaktojë para takimit të radhës ({selectedClub.meetingSchedule}).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleJoinSubmit} className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Emri dhe Mbiemri i Nxënësit:</label>
                    <input
                      type="text"
                      required
                      value={joinForm.name}
                      onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                      placeholder="p.sh. Alban Marku"
                      className="w-full px-3 py-2 text-xs border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Klasa & Paraleli:</label>
                    <select
                      value={joinForm.grade}
                      onChange={(e) => setJoinForm({ ...joinForm, grade: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="X-A">Klasa X-A (Shkencore)</option>
                      <option value="X-B">Klasa X-B (Shoqërore)</option>
                      <option value="XI-A">Klasa XI-A (Shkencore)</option>
                      <option value="XI-B">Klasa XI-B (TIK)</option>
                      <option value="XII-A">Klasa XII-A (Matura)</option>
                      <option value="XII-B">Klasa XII-B (Matura)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email ose Numër Celulari:</label>
                    <input
                      type="text"
                      required
                      value={joinForm.email}
                      onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                      placeholder="nxenesi@shembull.al"
                      className="w-full px-3 py-2 text-xs border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedClub(null)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                    >
                      Anulo
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-extrabold bg-gold-gradient hover:brightness-105 border border-[#D4AF37] text-slate-950 rounded-xl shadow-gold-glow cursor-pointer"
                    >
                      Dërgo Regjistrimin
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
