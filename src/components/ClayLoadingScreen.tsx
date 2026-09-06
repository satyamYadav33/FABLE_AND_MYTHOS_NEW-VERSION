import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Cpu } from 'lucide-react';

interface ClayLoadingScreenProps {
  onComplete: () => void;
  durationMs?: number;
}

export const ClayLoadingScreen: React.FC<ClayLoadingScreenProps> = ({ 
  onComplete, 
  durationMs = 3200 
}) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [statusText, setStatusText] = useState('Initializing Frontier Architecture...');

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);

      if (pct < 30) {
        setStatusText('Inflating Neural Clay Foundation...');
      } else if (pct < 65) {
        setStatusText('Synthesizing Fable & Mythos 5.1 Safeguards...');
      } else if (pct < 95) {
        setStatusText('Calibrating Tactile Claymorphic Surfaces...');
      } else {
        setStatusText('Ready.');
      }

      if (elapsed >= durationMs) {
        clearInterval(interval);
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [durationMs, onComplete]);

  return (
    <div 
      id="clay-loading-screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-6 transition-all duration-500 ${
        isFadingOut ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: 'var(--clay-bg)',
      }}
    >
      {/* Decorative ambient clay orbs in background */}
      <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full pointer-events-none opacity-40 blur-2xl bg-amber-200/40 dark:bg-slate-800/40" />
      <div className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full pointer-events-none opacity-30 blur-2xl bg-orange-300/30 dark:bg-purple-900/20" />

      {/* Main Claymorphic Vessel / Container */}
      <div className="relative w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] clay-card text-center flex flex-col items-center shadow-2xl animate-in fade-in zoom-in-95 duration-700">
        
        {/* Floating 3D Clay Emblem */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-3xl clay-elevated flex items-center justify-center text-[var(--clay-text-primary)] transition-transform duration-700 hover:scale-105">
            <svg 
              className="w-10 h-10 drop-shadow-md text-[var(--clay-text-primary)]" 
              viewBox="0 0 24 24" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 19.5H22L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          {/* Subtle clay highlight dot */}
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--clay-accent)] text-white flex items-center justify-center shadow-md animate-pulse">
            <Sparkles className="w-3 h-3" />
          </div>
        </div>

        {/* Website Name in Faded Claymorphism Mode */}
        <div className="space-y-2 mb-6">
          <div className="inline-block px-3 py-1 rounded-full clay-badge text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--clay-text-muted)] animate-pulse">
            Anthropic Research Announcement
          </div>
          
          {/* Faded title reveal with clay relief */}
          <h1 
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[var(--clay-text-primary)] transition-all duration-1000"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.06), 0 -1px 1px rgba(255,255,255,0.7)',
            }}
          >
            ANTHROPIC
          </h1>

          <div className="text-sm sm:text-base font-serif italic text-[var(--clay-text-secondary)] font-medium">
            Claude: Fable & Mythos 5.1
          </div>
        </div>

        {/* Claymorphic Recessed Progress Bar */}
        <div className="w-full space-y-3 mb-6">
          <div className="w-full h-4 rounded-full clay-inset p-0.5 overflow-hidden flex items-center">
            <div 
              className="h-full rounded-full transition-all duration-75 flex items-center justify-end pr-1"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #d9532f 0%, #ea580c 100%)',
                boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.3)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/90 shadow-sm" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-[var(--clay-text-muted)]">
            <span className="truncate max-w-[240px] text-left">{statusText}</span>
            <span className="font-bold text-[var(--clay-text-primary)]">{progress}%</span>
          </div>
        </div>

        {/* Features badges row */}
        <div className="grid grid-cols-3 gap-2 w-full text-[10px] font-bold uppercase tracking-wider text-[var(--clay-text-secondary)] mb-6">
          <div className="py-2 px-1 rounded-xl clay-inset flex flex-col items-center">
            <Cpu className="w-3.5 h-3.5 mb-1 text-[var(--clay-accent)]" />
            <span>Dual Model</span>
          </div>
          <div className="py-2 px-1 rounded-xl clay-inset flex flex-col items-center">
            <Shield className="w-3.5 h-3.5 mb-1 text-emerald-500" />
            <span>EFS VPC</span>
          </div>
          <div className="py-2 px-1 rounded-xl clay-inset flex flex-col items-center">
            <Sparkles className="w-3.5 h-3.5 mb-1 text-amber-500" />
            <span>82.4% SWE</span>
          </div>
        </div>

        {/* Quick Skip button if needed */}
        <button
          onClick={() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 300);
          }}
          className="text-xs text-[var(--clay-text-muted)] hover:text-[var(--clay-text-primary)] transition-colors py-1 px-3 rounded-full hover:clay-badge"
        >
          Skip Intro →
        </button>

      </div>
    </div>
  );
};
