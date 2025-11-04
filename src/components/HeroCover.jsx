import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full" aria-label="Hero cover scene">
      <div className="relative h-[68vh] w-full overflow-hidden rounded-b-2xl">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability; doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/80 dark:from-slate-900/10 dark:via-slate-900/0 dark:to-slate-900/80" />
      </div>

      {/* Foreground content */}
      <div className="mx-auto -mt-24 max-w-6xl px-4 sm:px-6 md:-mt-28">
        <div className="relative z-10 rounded-2xl border border-slate-200/60 bg-white/80 p-6 backdrop-blur-md shadow-xl dark:border-slate-800/60 dark:bg-slate-900/70">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                Market Dashboard Blueprint
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                A production-ready prompt and interactive demo for building a real-time dashboard across stocks, crypto, and forex with secure APIs, fast UX, and accessible design.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium">Optimized UX • Secure • Performant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
