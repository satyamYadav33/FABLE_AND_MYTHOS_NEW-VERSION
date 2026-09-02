import React, { useState, useEffect } from 'react';
import { ListFilter, ChevronRight } from 'lucide-react';

export const TableOfContents: React.FC = () => {
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
    <div className="hidden lg:block sticky top-28 p-5 rounded-2xl bg-[#ffffff] border border-gray-200 text-xs w-64 shrink-0">
      <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-200">
        <ListFilter className="w-3.5 h-3.5 text-black" />
        <span>Contents</span>
      </div>

      <nav className="space-y-1">
        {sections.map((section, idx) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center space-x-2 py-1.5 px-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#1b1b1b] text-white font-bold'
                  : 'text-gray-500 hover:text-black hover:bg-gray-100'
              }`}
            >
              <span className={`font-mono text-[10px] ${isActive ? 'text-gray-400' : 'text-gray-400'}`}>0{idx + 1}</span>
              <span className="truncate">{section.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-200 text-[11px] text-gray-400 leading-relaxed">
        <div className="font-bold text-[#111] mb-1">Published by Anthropic</div>
        <p>AI research and safety company based in San Francisco, CA.</p>
      </div>
    </div>
  );
};
