import React from 'react';
import HeroCover from './components/HeroCover.jsx';
import DashboardPrompt from './components/DashboardPrompt.jsx';
import LinkDemo from './components/LinkDemo.jsx';
import AcceptanceChecklist from './components/AcceptanceChecklist.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
      <HeroCover />
      <DashboardPrompt />
      <LinkDemo />
      <AcceptanceChecklist />
      <footer className="mx-auto my-12 max-w-6xl px-4 text-center text-xs text-slate-500 dark:text-slate-400">
        Built with React + Tailwind. External link label "37 dc" demo included. Spline cover active.
      </footer>
    </div>
  );
}

export default App;
