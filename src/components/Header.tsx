import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface HeaderProps {
  onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
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
        className="fixed top-0 left-0 h-[2px] bg-[#1b1b1b] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        id="main-navigation"
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled 
            ? 'bg-[#f9f8f4]/95 backdrop-blur-md border-b border-[#e8e6df] py-4' 
            : 'bg-[#f9f8f4] border-b border-[#e8e6df] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Main Nav */}
          <div className="flex items-center space-x-10">
            <a 
              href="#" 
              id="anthropic-logo-link"
              className="flex items-center space-x-2 group focus:outline-none"
            >
              {/* Anthropic Minimalist Geometric Delta Glyph */}
              <svg 
                className="w-5 h-5 text-[#1b1b1b]" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 19.5H22L12 2Z" fill="currentColor"/>
              </svg>
              <span className="text-xl font-semibold tracking-tighter text-[#1b1b1b]">
                ANTHROPIC
              </span>
            </a>

            <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
              <a href="#claude" className="hover:text-[#1b1b1b] transition-colors">Claude</a>
              <a href="#research" className="hover:text-[#1b1b1b] transition-colors">Research</a>
              <a href="#benchmarks" className="hover:text-[#1b1b1b] transition-colors">Benchmarks</a>
              <a href="#safeguards" className="hover:text-[#1b1b1b] transition-colors">Safeguards</a>
              <a href="#pricing" className="hover:text-[#1b1b1b] transition-colors">Pricing</a>
              <a href="#news" className="text-[#1b1b1b] font-bold border-b border-[#1b1b1b] pb-0.5">
                News
              </a>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              id="header-search-btn"
              onClick={onSearchClick}
              className="p-2 text-gray-500 hover:text-[#1b1b1b] hover:bg-[#e8e6df]/50 rounded-full transition-colors focus:outline-none"
              title="Search announcements"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              id="header-share-btn"
              onClick={handleCopyLink}
              className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-[#e8e6df]/30 transition-colors flex items-center space-x-1.5"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-black" /> : null}
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            <a 
              href="#availability"
              id="header-try-claude-btn"
              className="text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full bg-[#1b1b1b] text-white hover:opacity-90 transition-all duration-150 flex items-center space-x-1.5"
            >
              <span>Try Claude</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1b1b1b] hover:bg-[#e8e6df]/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f9f8f4] border-b border-[#e8e6df] px-6 pt-4 pb-6 space-y-4">
            <a 
              href="#claude" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-[#1b1b1b]"
            >
              Claude
            </a>
            <a 
              href="#benchmarks" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-[#1b1b1b]"
            >
              Benchmarks
            </a>
            <a 
              href="#safeguards" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-[#1b1b1b]"
            >
              Safeguards & EFS
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-[#1b1b1b]"
            >
              Pricing & Caching
            </a>
            <a 
              href="#availability" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-[#1b1b1b]"
            >
              Availability
            </a>
            <div className="pt-2">
              <a 
                href="#availability"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 rounded-full bg-[#1b1b1b] text-white font-bold text-xs uppercase tracking-widest hover:opacity-90"
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
