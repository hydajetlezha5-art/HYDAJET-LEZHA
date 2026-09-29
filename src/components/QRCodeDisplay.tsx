import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { ExternalLink, Download, CheckCircle2, QrCode, Smartphone } from 'lucide-react';

interface QRCodeDisplayProps {
  url?: string;
  size?: number;
  className?: string;
  showActions?: boolean;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  url = 'https://fizikainteraktive.com/',
  size = 220,
  className = '',
  showActions = true,
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: size * 2, // 2x for retina sharpness
      margin: 2,
      errorCorrectionLevel: 'H',
      color: {
        dark: '#0f172a', // Deep slate for instant camera recognition
        light: '#ffffff',
      },
    })
      .then((dataUrl) => {
        setQrDataUrl(dataUrl);
      })
      .catch((err) => {
        console.error('Failed to generate QR code', err);
      });
  }, [url, size]);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = 'QR-Fizika-Interaktive-Hydajet-Lezha.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* QR Code Container */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 bg-white border-2 border-sky-300 rounded-3xl shadow-md hover:border-[#D4AF37] hover:shadow-gold-glow transition-all duration-300 group block relative cursor-pointer"
        title="Kliko për të hapur uebsajtin fizikainteraktive.com"
      >
        {qrDataUrl ? (
          <div className="relative">
            <img
              src={qrDataUrl}
              alt="Kodi QR për fizikainteraktive.com"
              style={{ width: `${size}px`, height: `${size}px` }}
              className="rounded-2xl transition-transform group-hover:scale-[1.02]"
            />
            {/* Center School/Physics Icon Badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] shadow-sm flex items-center justify-center">
                <span className="text-xs font-black text-sky-900 font-mono">FI</span>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{ width: `${size}px`, height: `${size}px` }}
            className="flex items-center justify-center bg-sky-50 rounded-2xl animate-pulse text-xs text-sky-600 font-bold"
          >
            Duke gjeneruar QR...
          </div>
        )}

        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-sky-800 group-hover:text-slate-950 transition-colors">
          <span>fizikainteraktive.com</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#AA7A1E]" />
        </div>
      </a>

      {showActions && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 w-full max-w-xs">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 text-xs font-extrabold bg-gold-gradient hover:brightness-105 border border-[#D4AF37] text-slate-950 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-gold-glow cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-slate-950" />
            <span>Hap Uebsajtin (fizikainteraktive.com) ↗</span>
          </a>

          <div className="flex gap-2 w-full">
            <button
              onClick={handleCopyLink}
              className="flex-1 py-2 px-3 text-xs font-bold bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-900 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>U Kopjua!</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-3.5 h-3.5 text-sky-600" />
                  <span>Kopjo Linkun</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadQr}
              className="py-2 px-3 text-xs font-bold bg-white hover:bg-sky-50 border border-sky-300 text-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              title="Shkarko imazhin e Kodit QR"
            >
              <Download className="w-3.5 h-3.5 text-slate-700" />
              <span>Shkarko QR</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
