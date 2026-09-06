import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { ArticleHero } from './components/ArticleHero';
import { DualModelComparison } from './components/DualModelComparison';
import { BenchmarkMatrix } from './components/BenchmarkMatrix';
import { AgenticCodingDemo } from './components/AgenticCodingDemo';
import { EnterpriseSafeguards } from './components/EnterpriseSafeguards';
import { CostCalculator } from './components/CostCalculator';
import { AvailabilityMatrix } from './components/AvailabilityMatrix';
import { TableOfContents } from './components/TableOfContents';
import { Footer } from './components/Footer';
import { ClayLoadingScreen } from './components/ClayLoadingScreen';
import { Search, X, ArrowRight, Sparkles, BookOpen, Layers, ShieldCheck, DollarSign } from 'lucide-react';

function MainAppContent() {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const searchResults = [
    { title: 'SWE-bench Pro & Coding Benchmarks', section: 'benchmarks', desc: '82.4% resolution rate on real-world multi-file pull requests.' },
    { title: '75% Prompt Cache Cost Reduction', section: 'pricing', desc: 'Cache read pricing reduced from $1.25 to $0.30 per million tokens.' },
    { title: 'Claude Mythos 5.1 & Life Sciences', section: 'safeguards', desc: 'Restricted access program under CB-1 Responsible Scaling Policy.' },
    { title: 'Enterprise Frontier Safeguards (EFS)', section: 'enterprise-safeguards', desc: 'Client-managed cloud VPC telemetry & zero data retention.' },
    { title: 'Autonomous Multi-Day Agentic Coding', section: 'coding-agents', desc: 'Test-driven self-correction, vision verification, and vulnerability scanning.' },
    { title: 'Platform Deployment & Cloud Partners', section: 'availability', desc: 'AWS Bedrock, Google Cloud Vertex AI, Azure, and Claude Code CLI.' },
  ].filter(item => 
    searchQuery === '' || 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* 3-second Claymorphism Loading Screen */}
      {loading && (
        <ClayLoadingScreen 
          onComplete={() => setLoading(false)} 
          durationMs={3200} 
        />
      )}

      <div 
        className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
          fontSize === 'large' ? 'text-lg' : 'text-base'
        }`}
        style={{
          backgroundColor: 'var(--clay-bg)',
          color: 'var(--clay-text-primary)'
        }}
      >
        {/* Top Header Navigation with Claymorphism theme toggle */}
        <Header 
          onSearchClick={() => setSearchOpen(true)} 
          onReplayIntro={() => setLoading(true)}
        />

        {/* Main Content Area with Sticky Side TOC */}
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="flex flex-col lg:flex-row gap-10 justify-center">
            
            {/* Main Article Stream */}
            <div className="w-full max-w-4xl">
              
              {/* Article Hero & Abstract */}
              <ArticleHero 
                fontSize={fontSize} 
                onToggleFontSize={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')} 
              />

              {/* Editorial Overview Narrative with Claymorphic Quote */}
              <section className="py-12 border-b border-[var(--clay-border)]">
                <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-6 text-[var(--clay-text-secondary)] font-serif-editorial text-lg sm:text-xl leading-[1.7]">
                  <p>
                    Today we are introducing a significant milestone in our frontier evaluation suite. <strong className="text-[var(--clay-text-primary)]">Claude: Fable and Mythos 5.1</strong> represents our next-generation foundation models—designed to measure and expand how frontier systems handle intricate narrative subtext, autonomous software architecture, and sustained agentic execution.
                  </p>
                  <p>
                    Built on a unified neural foundation, this release establishes a dual-tier deployment paradigm. Claude Fable 5.1 delivers general availability under enterprise production safeguards with a ~60% reduction in false-positive safety classifier triggers, while Claude Mythos 5.1 provides specialized research capabilities in biology and cybersecurity to vetted organizations via our trusted access programs.
                  </p>
                  
                  {/* Claymorphic Inset Quote Card */}
                  <blockquote className="my-8 p-6 sm:p-8 rounded-3xl clay-card border-l-4 border-l-[var(--clay-accent)] text-xl sm:text-2xl font-serif text-[var(--clay-text-primary)] italic">
                    "Fable 5.1 and Mythos 5.1 exhibit marked autonomy across long-form problem solving—maintaining distinct interiority, discovering subtle race conditions, and executing scientific workflows with minimal supervision."
                  </blockquote>
                </div>
              </section>

              {/* 1. Dual Model Architecture & Safeguards */}
              <DualModelComparison />

              {/* 2. Empirical Benchmarks Matrix */}
              <BenchmarkMatrix />

              {/* 3. Autonomous Software Engineering Demo */}
              <AgenticCodingDemo />

              {/* 4. Enterprise Frontier Safeguards (EFS) */}
              <EnterpriseSafeguards />

              {/* 5. Prompt Caching & 75% Cost Reduction */}
              <CostCalculator />

              {/* 6. Availability & Cloud Deployment */}
              <AvailabilityMatrix />

              {/* Related Research & Next Steps */}
              <section className="py-12 border-b border-[var(--clay-border)]">
                <div className="max-w-4xl mx-auto px-2 sm:px-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--clay-text-muted)] mb-2">
                    Publications
                  </div>
                  <h3 className="font-serif-editorial text-2xl font-bold text-[var(--clay-text-primary)] mb-6">
                    Related Releases & Research
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <a 
                      href="#safeguards"
                      className="p-6 rounded-3xl clay-card clay-card-hover transition-all group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--clay-accent)] block mb-2">
                        Safety Policy Report
                      </span>
                      <h4 className="font-semibold text-base text-[var(--clay-text-primary)] group-hover:text-[var(--clay-accent)] transition-colors mb-2">
                        Responsible Scaling Policy: Evaluation of Tier CB-1 Biological Risks
                      </h4>
                      <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed">
                        Comprehensive evaluation methodology for chemical, biological, and cyber capability boundaries.
                      </p>
                    </a>

                    <a 
                      href="#coding-agents"
                      className="p-6 rounded-3xl clay-card clay-card-hover transition-all group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--clay-accent)] block mb-2">
                        Technical Deep Dive
                      </span>
                      <h4 className="font-semibold text-base text-[var(--clay-text-primary)] group-hover:text-[var(--clay-accent)] transition-colors mb-2">
                        Agentic Tool-Use and Vision Feedback in Claude Code
                      </h4>
                      <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed">
                        How closed-loop test execution and headless browser verification boost pass rates on SWE-bench Pro.
                      </p>
                    </a>
                  </div>
                </div>
              </section>

            </div>

            {/* Table of Contents Floating Sidebar */}
            <TableOfContents onReplayIntro={() => setLoading(true)} />

          </div>
        </main>

        {/* Search Modal Dialog with Claymorphic Theme */}
        {searchOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 p-4 animate-in fade-in duration-200">
            <div className="clay-card rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
              <div className="p-4 border-b border-[var(--clay-border)] flex items-center space-x-3">
                <Search className="w-4 h-4 text-[var(--clay-text-muted)]" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search Fable 5.1 announcement topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-[var(--clay-text-primary)] placeholder-[var(--clay-text-muted)] focus:outline-none font-sans"
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="p-1.5 rounded-full clay-btn text-[var(--clay-text-muted)] hover:text-[var(--clay-text-primary)]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto p-3 space-y-2">
                {searchResults.length > 0 ? (
                  searchResults.map((res, i) => (
                    <a
                      key={i}
                      href={`#${res.section}`}
                      onClick={() => setSearchOpen(false)}
                      className="block p-3.5 rounded-2xl hover:clay-inset transition-colors group"
                    >
                      <div className="font-semibold text-sm text-[var(--clay-text-primary)] group-hover:text-[var(--clay-accent)] flex items-center justify-between">
                        <span>{res.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--clay-text-muted)] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="text-xs text-[var(--clay-text-secondary)] mt-0.5">{res.desc}</div>
                    </a>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-[var(--clay-text-muted)]">
                    No matching topics found for "{searchQuery}"
                  </div>
                )}
              </div>

              <div className="p-3.5 clay-inset border-t border-[var(--clay-border)] text-[10px] uppercase tracking-widest text-[var(--clay-text-muted)] flex justify-between font-bold">
                <span>Quick Navigation</span>
                <span>Press ESC to Close</span>
              </div>
            </div>
          </div>
        )}

        {/* Global Anthropic Footer */}
        <Footer onReplayIntro={() => setLoading(true)} />

      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainAppContent />
    </ThemeProvider>
  );
}
