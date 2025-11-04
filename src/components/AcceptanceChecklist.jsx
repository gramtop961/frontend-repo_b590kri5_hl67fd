import React from 'react';
import { CheckCircle } from 'lucide-react';

const items = [
  'Dashboard menampilkan data saham, crypto, dan forex yang update dan dapat diverifikasi.',
  'Setiap link berita/market berlabel "37 dc" dan membuka situs resmi di tab baru.',
  'Animasi & transisi halus, lancar di perangkat mid-range.',
  'Outbound links aman: rel="noopener noreferrer"; kunci API tidak tampil di client.',
  'Responsif, aksesibilitas: navigasi keyboard & kontras warna memadai.',
  'Fallback/cache tersedia saat API down, menampilkan timestamp last-updated.',
];

export default function AcceptanceChecklist() {
  return (
    <section className="mx-auto my-10 max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Acceptance Criteria</h3>
        <ul className="mt-4 space-y-3">
          {items.map((it, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span className="text-sm text-slate-700 dark:text-slate-300">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
