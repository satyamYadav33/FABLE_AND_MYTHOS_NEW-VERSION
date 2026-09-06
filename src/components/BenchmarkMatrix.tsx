import React, { useState } from 'react';
import { BENCHMARKS } from '../data/benchmarkData';
import { BenchmarkItem } from '../types';
import { BarChart3, ChevronRight, Info, Check, Filter, Sparkles, TrendingUp } from 'lucide-react';

export const BenchmarkMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'coding' | 'agents' | 'reasoning' | 'knowledge' | 'science'>('all');
  const [activeBenchmark, setActiveBenchmark] = useState<string>(BENCHMARKS[0].id);

  const filteredBenchmarks = selectedCategory === 'all' 
    ? BENCHMARKS 
    : BENCHMARKS.filter(b => b.category === selectedCategory);

  const currentBenchmark = BENCHMARKS.find(b => b.id === activeBenchmark) || BENCHMARKS[0];

  const getPercentage = (value: number, max: number = 100) => {
    if (currentBenchmark.unit === 'Elo') {
      return Math.min(100, Math.max(10, ((value - 1600) / 350) * 100));
    }
    return Math.min(100, (value / max) * 100);
  };

  return (
    <section id="benchmarks" className="py-12 border-b border-[var(--clay-border)]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        
        {/* Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--clay-text-muted)] mb-2">
            Empirical Evaluations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--clay-text-primary)] mb-4">
            Frontier Performance Across Knowledge & Coding
          </h2>
          <p className="font-serif-editorial text-lg text-[var(--clay-text-secondary)] leading-[1.7]">
            Claude Fable 5.1 sets new state-of-the-art benchmarks in complex multi-step coding, autonomous terminal debugging, and economic knowledge work—often delivering higher output at lower compute tiers.
          </p>
        </div>

        {/* Category Filters with Clay Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 pb-4 border-b border-[var(--clay-border)]">
          {[
            { id: 'all', label: 'All Benchmarks' },
            { id: 'coding', label: 'Software & IDEs' },
            { id: 'agents', label: 'Autonomous Agents' },
            { id: 'reasoning', label: 'STEM & Reasoning' },
            { id: 'knowledge', label: 'Knowledge Work' },
            { id: 'science', label: 'Computational Science' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
                selectedCategory === tab.id
                  ? 'clay-btn-primary'
                  : 'clay-btn text-[var(--clay-text-secondary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Benchmark Visualizer in Clay Card */}
        <div className="clay-card rounded-[2rem] p-6 sm:p-8 mb-8">
          
          {/* Active Benchmark Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--clay-border)]">
            <div>
              <div className="flex items-center space-x-3">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[var(--clay-text-primary)]">
                  {currentBenchmark.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full clay-badge text-[10px] font-bold uppercase tracking-widest text-[var(--clay-accent)]">
                  {currentBenchmark.metric}
                </span>
              </div>
              <p className="text-xs text-[var(--clay-text-secondary)] mt-1.5 leading-relaxed max-w-xl">
                {currentBenchmark.description}
              </p>
            </div>

            {currentBenchmark.notes && (
              <div className="p-3.5 rounded-2xl clay-inset text-xs text-[var(--clay-text-secondary)] max-w-xs shrink-0">
                <span className="font-bold uppercase tracking-wider text-[10px] text-[var(--clay-accent)] block mb-0.5">Key Insight:</span>
                <span>{currentBenchmark.notes}</span>
              </div>
            )}
          </div>

          {/* Bar Chart Comparison with Tactile 3D Clay Bars */}
          <div className="space-y-4 py-6">
            
            {/* Claude Fable 5.1 (Featured) */}
            <div className="p-3 rounded-2xl clay-inset">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-[var(--clay-text-primary)] flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--clay-accent)]"></span>
                  <span>Claude Fable 5.1 (GA)</span>
                </span>
                <span className="font-mono font-bold text-sm text-[var(--clay-accent)]">
                  {currentBenchmark.fable51}{currentBenchmark.unit}
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-[var(--clay-surface)] overflow-hidden shadow-inner p-0.5">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${getPercentage(currentBenchmark.fable51)}%`,
                    background: 'linear-gradient(90deg, #d9532f 0%, #ea580c 100%)',
                    boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.6), inset -1px -1px 2px rgba(0,0,0,0.3)',
                  }}
                />
              </div>
            </div>

            {/* Claude Mythos 5.1 (Restricted) */}
            <div className="p-3 rounded-2xl clay-inset">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-[var(--clay-text-primary)] flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                  <span>Claude Mythos 5.1 (Restricted)</span>
                </span>
                <span className="font-mono font-bold text-sm text-indigo-400">
                  {currentBenchmark.mythos51}{currentBenchmark.unit}
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-[var(--clay-surface)] overflow-hidden shadow-inner p-0.5">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${getPercentage(currentBenchmark.mythos51)}%`,
                    background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                    boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.6), inset -1px -1px 2px rgba(0,0,0,0.3)',
                  }}
                />
              </div>
            </div>

            {/* Claude 3.5 Sonnet / Fable 5 */}
            <div className="px-3 py-2">
              <div className="flex items-center justify-between text-xs mb-1 text-[var(--clay-text-muted)]">
                <span>Claude Fable 5 (Prior Gen)</span>
                <span className="font-mono font-semibold">{currentBenchmark.fable5}{currentBenchmark.unit}</span>
              </div>
              <div className="w-full h-2 rounded-full clay-inset overflow-hidden">
                <div 
                  className="h-full rounded-full bg-[var(--clay-text-muted)] opacity-60"
                  style={{ width: `${getPercentage(currentBenchmark.fable5)}%` }}
                />
              </div>
            </div>

            {/* Industry Peer A */}
            <div className="px-3 py-2">
              <div className="flex items-center justify-between text-xs mb-1 text-[var(--clay-text-muted)]">
                <span>GPT-5.6 Sol</span>
                <span className="font-mono font-semibold">{currentBenchmark.gpt56Sol}{currentBenchmark.unit}</span>
              </div>
              <div className="w-full h-2 rounded-full clay-inset overflow-hidden">
                <div 
                  className="h-full rounded-full bg-[var(--clay-text-muted)] opacity-40"
                  style={{ width: `${getPercentage(currentBenchmark.gpt56Sol)}%` }}
                />
              </div>
            </div>

            {/* Industry Peer B */}
            <div className="px-3 py-2">
              <div className="flex items-center justify-between text-xs mb-1 text-[var(--clay-text-muted)]">
                <span>Gemini 2.5 Ultra</span>
                <span className="font-mono font-semibold">{currentBenchmark.gemini25Ultra}{currentBenchmark.unit}</span>
              </div>
              <div className="w-full h-2 rounded-full clay-inset overflow-hidden">
                <div 
                  className="h-full rounded-full bg-[var(--clay-text-muted)] opacity-40"
                  style={{ width: `${getPercentage(currentBenchmark.gemini25Ultra)}%` }}
                />
              </div>
            </div>

          </div>

          {/* Quick Select Benchmark Chips */}
          <div className="pt-6 border-t border-[var(--clay-border)]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--clay-text-muted)] block mb-3">
              Select Benchmark Evaluation:
            </span>
            <div className="flex flex-wrap gap-2">
              {filteredBenchmarks.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBenchmark(b.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeBenchmark === b.id
                      ? 'clay-btn-primary'
                      : 'clay-btn text-[var(--clay-text-secondary)]'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
