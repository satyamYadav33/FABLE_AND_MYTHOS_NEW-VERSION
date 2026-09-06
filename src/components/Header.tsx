import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowUpRight, Check, Sparkles, RotateCcw } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onSearchClick?: () => void;
  onReplayIntro?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchClick, onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll * 100);
      setScrolled(totalScroll > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        id="reading-progress-bar"
        className="fixed top-0 left-0 h-[3px] bg-[var(--clay-accent)] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        id="main-navigation"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-[var(--clay-bg)]/95 backdrop-blur-md shadow-md border-b border-[var(--clay-border)]' 
            : 'py-4 bg-[var(--clay-bg)] border-b border-[var(--clay-border)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <a 
              href="#" 
              id="anthropic-logo-link"
              className="flex items-center space-x-2.5 group focus:outline-none"
            >
              {/* Anthropic Tactile Clay Glyph */}
              <div className="w-8 h-8 rounded-2xl clay-elevated flex items-center justify-center text-[var(--clay-text-primary)] transition-transform group-hover:scale-105">
                <svg 
                  className="w-4 h-4 text-[var(--clay-text-primary)]" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 19.5H22L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-[var(--clay-text-primary)] font-sans">
                  ANTHROPIC
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--clay-text-muted)] -mt-1">
                  Research 5.1
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Claymorphism hover */}
            <nav className="hidden lg:flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[var(--clay-text-secondary)]">
              <a href="#claude" className="px-3 py-1.5 rounded-full hover:clay-badge transition-all">Claude</a>
              <a href="#benchmarks" className="px-3 py-1.5 rounded-full hover:clay-badge transition-all">Benchmarks</a>
              <a href="#coding-agents" className="px-3 py-1.5 rounded-full hover:clay-badge transition-all">Agentic Code</a>
              <a href="#safeguards" className="px-3 py-1.5 rounded-full hover:clay-badge transition-all">Safeguards</a>
              <a href="#pricing" className="px-3 py-1.5 rounded-full hover:clay-badge transition-all">Pricing</a>
              <a href="#availability" className="px-3 py-1.5 rounded-full hover:clay-badge transition-all">Availability</a>
            </nav>
          </div>

          {/* Right Actions: Dark/Light Toggle, Search, Share, CTA */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Replay Loading Animation Button */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="p-2 text-[var(--clay-text-muted)] hover:text-[var(--clay-text-primary)] clay-btn text-xs rounded-full transition-colors flex items-center justify-center"
                title="Replay 3-second Claymorphism Intro Animation"
              >
                <Sparkles className="w-3.5 h-3.5 text-[var(--clay-accent)]" />
              </button>
            )}

            {/* Claymorphic Dark / Light Theme Toggle Button */}
            <ThemeToggle />

            {/* Search Button */}
            <button 
              id="header-search-btn"
              onClick={onSearchClick}
              className="p-2.5 text-[var(--clay-text-secondary)] hover:text-[var(--clay-text-primary)] clay-btn rounded-full transition-colors focus:outline-none"
              title="Search announcements"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            {/* Share Link Button */}
            <button
              id="header-share-btn"
              onClick={handleCopyLink}
              className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 clay-btn flex items-center space-x-1.5 text-[var(--clay-text-secondary)]"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : null}
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            {/* Try Claude CTA Button */}
            <a 
              href="#availability"
              id="header-try-claude-btn"
              className="text-xs font-bold uppercase tracking-widest px-5 py-2 clay-btn-primary flex items-center space-x-1.5"
            >
              <span>Try Claude</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-2xl clay-btn text-[var(--clay-text-primary)] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 mx-4 p-5 rounded-3xl clay-card space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--clay-border)]">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--clay-text-muted)]">Theme Mode</span>
              <ThemeToggle showLabels />
            </div>

            <a 
              href="#claude" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-xl hover:clay-inset text-xs font-bold uppercase tracking-widest text-[var(--clay-text-secondary)]"
            >
              Claude Foundation
            </a>
            <a 
              href="#benchmarks" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-xl hover:clay-inset text-xs font-bold uppercase tracking-widest text-[var(--clay-text-secondary)]"
            >
              Benchmarks & Evaluations
            </a>
            <a 
              href="#coding-agents" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-xl hover:clay-inset text-xs font-bold uppercase tracking-widest text-[var(--clay-text-secondary)]"
            >
              Autonomous Coding
            </a>
            <a 
              href="#safeguards" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-xl hover:clay-inset text-xs font-bold uppercase tracking-widest text-[var(--clay-text-secondary)]"
            >
              Safeguards & EFS
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-xl hover:clay-inset text-xs font-bold uppercase tracking-widest text-[var(--clay-text-secondary)]"
            >
              Pricing & Caching
            </a>
            <a 
              href="#availability" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-xl hover:clay-inset text-xs font-bold uppercase tracking-widest text-[var(--clay-text-secondary)]"
            >
              Availability
            </a>

            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full text-center py-2.5 rounded-full clay-btn text-xs font-bold uppercase tracking-widest text-[var(--clay-text-primary)] flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[var(--clay-accent)]" />
                <span>Replay Intro Animation</span>
              </button>
            )}

            <div className="pt-2">
              <a 
                href="#availability"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 clay-btn-primary font-bold text-xs uppercase tracking-widest"
              >
                Try Claude Fable 5.1
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
