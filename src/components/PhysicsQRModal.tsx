import React from 'react';
import { X, Smartphone, QrCode, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { QRCodeDisplay } from './QRCodeDisplay';

interface PhysicsQRModalProps {
  onClose: () => void;
}

export const PhysicsQRModal: React.FC<PhysicsQRModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-sky-950/65 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border-2 border-sky-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold w-9 h-9 rounded-full flex items-center justify-center hover:bg-sky-50 cursor-pointer"
          aria-label="Mbyll"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 border-b border-sky-100 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold border border-sky-300">
            <QrCode className="w-3.5 h-3.5 text-[#AA7A1E]" />
            <span>Kodi Zyrtar QR · Celular & Tablet</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
            Fizika Interaktive
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Uebsajti i krijuar me krenari nga nxënësit e Gjimnazit “Hydajet Lezha”
          </p>
        </div>

        {/* Real Scannable QR Code */}
        <div className="flex justify-center py-1">
          <QRCodeDisplay url="https://fizikainteraktive.com/" size={210} showActions={true} />
        </div>

        {/* How to scan instructions */}
        <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 space-y-2 text-xs text-slate-700">
          <div className="font-bold text-sky-950 flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-sky-700" />
            <span>Si ta skanoni me celular:</span>
          </div>
          <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
            <li>Hapni aplikacionin e kamerës në smartphone (iOS ose Android).</li>
            <li>Drejtojeni kamerën drejt kodit QR më sipër pa pasur nevojë të shkarkoni aplikacione shtesë.</li>
            <li>Klikoni njoftimin që shfaqet në ekran për të hapur menjëherë uebsajtin <strong>fizikainteraktive.com</strong>.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-between items-center border-t border-sky-100">
          <span className="text-[11px] text-slate-500 font-mono">
            URL: fizikainteraktive.com
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold bg-slate-900 hover:bg-sky-950 text-white rounded-xl cursor-pointer"
          >
            Mbyll
          </button>
        </div>
      </div>
    </div>
  );
};
