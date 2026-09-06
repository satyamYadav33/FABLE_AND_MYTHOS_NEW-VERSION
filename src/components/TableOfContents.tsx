import React, { useState, useEffect } from 'react';
import { ListFilter, ChevronRight, Sparkles } from 'lucide-react';

interface TableOfContentsProps {
  onReplayIntro?: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ onReplayIntro }) => {
  const [activeSection, setActiveSection] = useState('article-hero');

  const sections = [
    { id: 'article-hero', label: 'Announcement Overview' },
    { id: 'safeguards', label: 'Dual Model Architecture' },
    { id: 'benchmarks', label: 'Empirical Benchmarks' },
    { id: 'coding-agents', label: 'Autonomous Coding & Agents' },
    { id: 'enterprise-safeguards', label: 'Enterprise Frontier Safeguards' },
    { id: 'pricing', label: '75% Cache Cost Reduction' },
    { id: 'availability', label: 'Platform Availability' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:block sticky top-28 p-5 rounded-[2rem] clay-card text-xs w-64 shrink-0 self-start">
      <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-[var(--clay-text-muted)] mb-4 pb-2 border-b border-[var(--clay-border)]">
        <ListFilter className="w-3.5 h-3.5 text-[var(--clay-accent)]" />
        <span>Contents</span>
      </div>

      <nav className="space-y-1.5">
        {sections.map((section, idx) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center space-x-2 py-2 px-3 rounded-xl transition-all ${
                isActive
                  ? 'clay-btn-primary font-bold'
                  : 'text-[var(--clay-text-secondary)] hover:text-[var(--clay-text-primary)] hover:clay-inset'
              }`}
            >
              <span className={`font-mono text-[10px] ${isActive ? 'text-white/80' : 'text-[var(--clay-text-muted)]'}`}>0{idx + 1}</span>
              <span className="truncate">{section.label}</span>
            </a>
          );
        })}
      </nav>

      {onReplayIntro && (
        <div className="mt-5 pt-4 border-t border-[var(--clay-border)]">
          <button
            onClick={onReplayIntro}
            className="w-full py-2 px-3 rounded-xl clay-btn flex items-center justify-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--clay-accent)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Replay Intro</span>
          </button>
        </div>
      )}

      <div className="mt-5 pt-4 border-t border-[var(--clay-border)] text-[11px] text-[var(--clay-text-muted)] leading-relaxed">
        <div className="font-bold text-[var(--clay-text-primary)] mb-1">Published by Anthropic</div>
        <p>AI research and safety company based in San Francisco, CA.</p>
      </div>
    </div>
  );
};
