import React, { useState } from 'react';
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
import { Search, X, ArrowRight, Sparkles, BookOpen, Layers, ShieldCheck, DollarSign } from 'lucide-react';

export default function App() {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    <div className={`min-h-screen bg-[#f9f8f4] text-[#1b1b1b] flex flex-col font-sans selection:bg-[#1b1b1b]/10 selection:text-[#1b1b1b] ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      
      {/* Top Header Navigation */}
      <Header onSearchClick={() => setSearchOpen(true)} />

      {/* Main Content Area with Sticky Side TOC */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          
          {/* Main Article Stream */}
          <div className="w-full max-w-4xl">
            
            {/* Article Hero & Abstract */}
            <ArticleHero 
              fontSize={fontSize} 
              onToggleFontSize={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')} 
            />

            {/* Editorial Overview Narrative */}
            <section className="py-10 border-b border-gray-200">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-[#2c2c2c] font-serif-editorial text-lg sm:text-xl leading-[1.65]">
                <p>
                  Today we are introducing a significant milestone in our frontier evaluation suite. <strong>Claude: Fable and Mythos 5.1</strong> represents our next-generation foundation models—designed to measure and expand how frontier systems handle intricate narrative subtext, autonomous software architecture, and sustained agentic execution.
                </p>
                <p>
                  Built on a unified neural foundation, this release establishes a dual-tier deployment paradigm. Claude Fable 5.1 delivers general availability under enterprise production safeguards with a ~60% reduction in false-positive safety classifier triggers, while Claude Mythos 5.1 provides specialized research capabilities in biology and cybersecurity to vetted organizations via our trusted access programs.
                </p>
                <blockquote className="my-8 pl-6 border-l-2 border-[#1b1b1b] text-xl sm:text-2xl font-serif text-[#111] italic">
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
            <section className="py-12 border-b border-gray-200">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
                  Publications
                </div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#111] mb-6">
                  Related Releases & Research
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="#safeguards"
                    className="p-6 rounded-2xl bg-[#ffffff] border border-gray-200 hover:border-gray-800 transition-all group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                      Safety Policy Report
                    </span>
                    <h4 className="font-semibold text-base text-[#111] group-hover:text-black transition-colors mb-2">
                      Responsible Scaling Policy: Evaluation of Tier CB-1 Biological Risks
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Comprehensive evaluation methodology for chemical, biological, and cyber capability boundaries.
                    </p>
                  </a>

                  <a 
                    href="#coding-agents"
                    className="p-6 rounded-2xl bg-[#ffffff] border border-gray-200 hover:border-gray-800 transition-all group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                      Technical Deep Dive
                    </span>
                    <h4 className="font-semibold text-base text-[#111] group-hover:text-black transition-colors mb-2">
                      Agentic Tool-Use and Vision Feedback in Claude Code
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      How closed-loop test execution and headless browser verification boost pass rates on SWE-bench Pro.
                    </p>
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* Table of Contents Floating Sidebar */}
          <TableOfContents />

        </div>
      </main>

      {/* Search Modal Dialog */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 p-4">
          <div className="bg-[#f9f8f4] border border-gray-300 rounded-2xl w-full max-w-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                autoFocus
                placeholder="Search Fable 5.1 announcement topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-[#111] placeholder-gray-400 focus:outline-none font-sans"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded text-gray-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-3 divide-y divide-gray-100">
              {searchResults.length > 0 ? (
                searchResults.map((res, i) => (
                  <a
                    key={i}
                    href={`#${res.section}`}
                    onClick={() => setSearchOpen(false)}
                    className="block p-3 rounded-xl hover:bg-[#ede9df]/60 transition-colors"
                  >
                    <div className="font-semibold text-sm text-[#111] flex items-center justify-between">
                      <span>{res.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{res.desc}</div>
                  </a>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-gray-400">
                  No matching topics found for "{searchQuery}"
                </div>
              )}
            </div>

            <div className="p-3 bg-[#f2efe9] border-t border-gray-200 text-[10px] uppercase tracking-widest text-gray-500 flex justify-between font-bold">
              <span>Quick Navigation</span>
              <span>Press ESC to Close</span>
            </div>
          </div>
        </div>
      )}

      {/* Global Anthropic Footer */}
      <Footer />

    </div>
  );
}
