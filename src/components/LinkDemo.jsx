import React, { useState } from 'react';
import { ExternalLink, Shield } from 'lucide-react';

export default function LinkDemo() {
  const [showTip, setShowTip] = useState(false);
  const url = 'https://www.reuters.com/markets/';

  const openSafe = () => {
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Contoh Render Link "37 dc"</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Setiap berita atau link market menggunakan label teks <span className="font-mono">37 dc</span> namun tetap membuka URL resmi di tab baru. Tooltip menampilkan URL asli saat hover/tap untuk transparansi.
            </p>
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-slate-800/40">
              <div className="news-item">
                <h4 className="headline text-base font-medium text-slate-900 dark:text-white">Judul Berita Pasar (Demo)</h4>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    className="relative rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                    aria-label="Buka sumber resmi berita"
                    onClick={openSafe}
                    onMouseEnter={() => setShowTip(true)}
                    onMouseLeave={() => setShowTip(false)}
                    onFocus={() => setShowTip(true)}
                    onBlur={() => setShowTip(false)}
                  >
                    37 dc
                    <ExternalLink className="ml-2 inline h-3 w-3 align-middle" aria-hidden="true" />
                    {/* Tooltip */}
                    {showTip && (
                      <span role="tooltip" className="absolute left-1/2 top-full z-20 mt-2 w-max -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-[11px] text-white shadow-lg">
                        {url}
                      </span>
                    )}
                  </button>
                  <small className="meta text-slate-500 dark:text-slate-400">Reuters · 2025-11-04</small>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden shrink-0 md:block">
            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800">
              <Shield className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs">rel="noopener noreferrer" & sanitized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
