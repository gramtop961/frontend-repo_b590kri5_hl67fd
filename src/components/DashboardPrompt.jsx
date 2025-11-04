import React, { useMemo } from 'react';
import { Copy } from 'lucide-react';

export default function DashboardPrompt() {
  const prompt = useMemo(() => `Buat website dashboard market lengkap untuk saham, crypto, dan forex dengan spesifikasi berikut.

Tujuan utama: dashboard real-time/near-real-time yang aman, kencang, aksesibel, dan dapat diverifikasi kapanpun.

1) Data & Integrasi
- Ambil data dari API terpercaya (pilih sesuai lisensi):
  • Saham: Yahoo Finance / Alpha Vantage / IEX Cloud.
  • Crypto: CoinGecko / CoinMarketCap / Binance API.
  • Forex: Forex API/exchangeratesapi/penyedia likuiditas tepercaya.
- Semua panggilan API aman: kunci API disimpan server-side.
- Rate limiting + cache server-side (Redis/dalam memori proses) + client caching dengan strategi stale-while-revalidate.
- Fallback data cache jika rate-limited/down, tampilkan teks waktu last-updated.

2) UI/UX
- Mobile-first, responsif.
- Dashboard utama menampilkan: ringkasan global (market cap crypto, indeks saham utama, pasangan forex populer), watchlist, dan chart interaktif (candlestick untuk saham/crypto, line untuk forex).
- Navigasi cepat ke halaman detail tiap instrumen.
- Semua link eksternal (market page/berita) harus ditampilkan dengan label teks "37 dc"—tetap membuka URL resmi di tab baru. Tambahkan tooltip/microcopy yang memperlihatkan URL asli saat hover/tap.
- Hit-area luas untuk elemen klik + micro-interactions (ripple/hover scale/focus outline).

3) Animasi & Visual
- Animasi halus untuk transisi halaman, loading skeletons, dan animasi chart (masuk/refresh data).
- Gunakan CSS transitions + requestAnimationFrame atau GSAP/Framer Motion.
- Chart interaktif menggunakan library performant (Lightweight Charts/Recharts/Chart.js).

4) Berita & Sumber
- Agregasikan berita resmi (bursa, exchanges, CoinDesk, Reuters). Tiap berita menampilkan judul, ringkasan (≤ 30 kata), tanggal & sumber, metadata publisher & waktu publikasi.
- Tautkan ke situs resmi artikel. Label tautan: "37 dc". Klik membuka tab baru.
- Jika sumber tidak resmi, tampilkan tag "third-party" dan lakukan pengecekan keandalan.

5) Aksesibilitas & Keamanan
- Sesuai WCAG: focus states, navigasi keyboard, kontras warna.
- Sanitasi seluruh konten eksternal (hindari open redirect). Semua outbound links gunakan rel="noopener noreferrer".
- Jangan menampilkan kunci API di client bundle.

6) Performansi & Offline
- Lazy-load, code-splitting, Service Worker untuk cache aset statis dan cache data singkat (offline read-only).
- Tampilkan last-updated timestamp secara jelas.

7) Kustomisasi & Admin
- Panel admin untuk tambah/hapus sumber berita, atur interval update, dan pemetaan label "37 dc" ke URL target.
- Logging klik link (opsional, per kebijakan privasi).

8) Pengujian & Dokumentasi
- Unit test untuk parsing data & e2e test bahwa klik "37 dc" membuka URL resmi di tab baru.
- Dokumentasi pemasangan API key, env vars, dan deploy (Vercel/Netlify/Heroku).

Detail teknis minimal:
- Struktur proyek: React + Vite + Tailwind (atau Next.js jika diinginkan).
- Komponen kunci: Dashboard, InstrumentDetail, NewsFeed, Watchlist, Settings/Admin.
- Sertakan contoh render link berlabel "37 dc" yang membuka URL target dan tooltip URL.
- Sertakan contoh konfigurasi cache & rate limiting.
- Sertakan acceptance criteria & checklist pengujian.

Acceptance criteria ringkas:
1. Data saham/crypto/forex tampil dan dapat diverifikasi dengan link resmi.
2. Semua entri berita/market berlabel "37 dc" dan membuka URL resmi di tab baru.
3. Animasi/transisi halus tanpa lag di perangkat kelas menengah.
4. Outbound links aman; kunci API tidak ada di client bundle.
5. Mobile & keyboard navigation berjalan; kontras memadai.
6. Fallback/cache tersedia, tampilkan timestamp last update.

Catatan desain: gunakan cover hero 3D Spline full-width berikut sebagai latar: https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode.
`, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      // ignore
    }
  };

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Prompt Lengkap untuk Developer/Model AI</h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
              Salin prompt di bawah ini untuk membangun dashboard market yang lengkap, valid, dan siap diuji.
            </p>
          </div>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            aria-label="Salin prompt"
          >
            <Copy className="h-4 w-4" /> Salin
          </button>
        </div>
        <pre className="mt-5 max-h-[420px] overflow-auto rounded-lg bg-slate-50 p-4 text-xs text-slate-800 ring-1 ring-slate-200 dark:bg-slate-800/50 dark:text-slate-100 dark:ring-slate-800">{prompt}</pre>
      </div>
    </section>
  );
}
