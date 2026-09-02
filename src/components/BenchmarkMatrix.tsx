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
      // Scale Elo (1600 to 2000)
      return Math.min(100, Math.max(10, ((value - 1600) / 350) * 100));
    }
    return Math.min(100, (value / max) * 100);
  };

  return (
    <section id="benchmarks" className="py-12 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
            Empirical Evaluations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#111] mb-4">
            Frontier Performance Across Knowledge & Coding
          </h2>
          <p className="font-serif-editorial text-lg text-[#2c2c2c] leading-[1.65]">
            Claude Fable 5.1 sets new state-of-the-art benchmarks in complex multi-step coding, autonomous terminal debugging, and economic knowledge work—often delivering higher output at lower compute tiers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-gray-200">
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
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
                selectedCategory === tab.id
                  ? 'bg-[#1b1b1b] text-white'
                  : 'border border-gray-300 text-gray-600 hover:border-gray-500 hover:bg-[#e8e6df]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Benchmark Visualizer */}
        <div className="bg-[#ffffff] rounded-2xl border border-gray-200 p-6 mb-8">
          
          {/* Active Benchmark Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-200">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold font-serif text-[#111]">
                  {currentBenchmark.name}
                </h3>
                <span className="px-2 py-0.5 rounded border border-gray-300 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {currentBenchmark.metric}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1.5">
                {currentBenchmark.description}
              </p>
            </div>

            {currentBenchmark.notes && (
              <div className="p-3 rounded-xl bg-[#f2efe9] border border-gray-200 text-xs text-[#2c2c2c] max-w-xs">
                <span className="font-bold uppercase tracking-wider text-[10px] text-gray-500 block mb-0.5">Key Insight:</span>
                <span>{currentBenchmark.notes}</span>
              </div>
            )}
          </div>

          {/* Bar Chart Comparison */}
          <div className="space-y-4 py-6">
            
            {/* Claude Fable 5.1 (Featured) */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-[#111] flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1b1b1b]"></span>
                  <span>Claude Fable 5.1 (GA)</span>
                </span>
                <span className="font-mono font-bold text-[#111] text-sm">
                  {currentBenchmark.fable51}{currentBenchmark.unit === '%' ? '%' : ` ${currentBenchmark.unit}`}
                </span>
              </div>
              <div className="h-6 w-full bg-[#f2efe9] rounded-lg overflow-hidden relative">
                <div 
                  className="h-full bg-[#1b1b1b] rounded-lg transition-all duration-500 flex items-center justify-end pr-2.5"
                  style={{ width: `${getPercentage(currentBenchmark.fable51)}%` }}
                >
                  <span className="text-[9px] font-mono text-white font-bold tracking-widest uppercase">LEADER</span>
                </div>
              </div>
            </div>

            {/* Claude Mythos 5.1 */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 text-gray-600">
                <span className="font-medium flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-600"></span>
                  <span>Claude Mythos 5.1 (Restricted)</span>
                </span>
                <span className="font-mono font-semibold text-[#111]">
                  {currentBenchmark.mythos51}{currentBenchmark.unit === '%' ? '%' : ` ${currentBenchmark.unit}`}
                </span>
              </div>
              <div className="h-4 w-full bg-[#f2efe9] rounded-md overflow-hidden">
                <div 
                  className="h-full bg-gray-600 rounded-md transition-all duration-500"
                  style={{ width: `${getPercentage(currentBenchmark.mythos51)}%` }}
                />
              </div>
            </div>

            {/* Claude Fable 5 */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 text-gray-500">
                <span className="font-medium">Claude Fable 5 (Previous Gen)</span>
                <span className="font-mono text-gray-700">
                  {currentBenchmark.fable5}{currentBenchmark.unit === '%' ? '%' : ` ${currentBenchmark.unit}`}
                </span>
              </div>
              <div className="h-3.5 w-full bg-[#f2efe9] rounded-md overflow-hidden">
                <div 
                  className="h-full bg-gray-400 rounded-md transition-all duration-500"
                  style={{ width: `${getPercentage(currentBenchmark.fable5)}%` }}
                />
              </div>
            </div>

            {/* GPT-5.6 Sol */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 text-gray-500">
                <span className="font-medium">GPT-5.6 Sol</span>
                <span className="font-mono text-gray-700">
                  {currentBenchmark.gpt56Sol}{currentBenchmark.unit === '%' ? '%' : ` ${currentBenchmark.unit}`}
                </span>
              </div>
              <div className="h-3.5 w-full bg-[#f2efe9] rounded-md overflow-hidden">
                <div 
                  className="h-full bg-gray-300 rounded-md transition-all duration-500"
                  style={{ width: `${getPercentage(currentBenchmark.gpt56Sol)}%` }}
                />
              </div>
            </div>

            {/* Claude Opus 5 */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 text-gray-500">
                <span className="font-medium">Claude Opus 5</span>
                <span className="font-mono text-gray-700">
                  {currentBenchmark.opus5}{currentBenchmark.unit === '%' ? '%' : ` ${currentBenchmark.unit}`}
                </span>
              </div>
              <div className="h-3 w-full bg-[#f2efe9] rounded-md overflow-hidden">
                <div 
                  className="h-full bg-gray-300 rounded-md transition-all duration-500"
                  style={{ width: `${getPercentage(currentBenchmark.opus5)}%` }}
                />
              </div>
            </div>

            {/* Gemini 2.5 Ultra */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 text-gray-500">
                <span className="font-medium">Gemini 2.5 Ultra</span>
                <span className="font-mono text-gray-700">
                  {currentBenchmark.gemini25Ultra}{currentBenchmark.unit === '%' ? '%' : ` ${currentBenchmark.unit}`}
                </span>
              </div>
              <div className="h-3 w-full bg-[#f2efe9] rounded-md overflow-hidden">
                <div 
                  className="h-full bg-gray-200 rounded-md transition-all duration-500"
                  style={{ width: `${getPercentage(currentBenchmark.gemini25Ultra)}%` }}
                />
              </div>
            </div>

          </div>

          {/* Quick Benchmark Selector Buttons */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Select benchmark to compare:</p>
            <div className="flex flex-wrap gap-2">
              {filteredBenchmarks.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBenchmark(b.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${
                    activeBenchmark === b.id
                      ? 'bg-[#1b1b1b] text-white border-[#1b1b1b]'
                      : 'bg-[#f9f8f4] text-gray-600 border-gray-300 hover:border-gray-500 hover:bg-[#ede9df]'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Complete Benchmark Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-[#ffffff]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f9f8f4] border-b border-gray-200 text-gray-600 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-3.5 pl-4">Benchmark</th>
                <th className="p-3.5">Category</th>
                <th className="p-3.5 font-bold text-[#111] bg-[#f2efe9]">Fable 5.1</th>
                <th className="p-3.5">Mythos 5.1</th>
                <th className="p-3.5">Fable 5</th>
                <th className="p-3.5">Opus 5</th>
                <th className="p-3.5">GPT-5.6 Sol</th>
                <th className="p-3.5 pr-4">Gemini 2.5 Ultra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-600 font-mono">
              {filteredBenchmarks.map((b) => (
                <tr 
                  key={b.id}
                  onClick={() => setActiveBenchmark(b.id)}
                  className={`cursor-pointer hover:bg-[#f9f8f4] transition-colors ${
                    activeBenchmark === b.id ? 'bg-[#f2efe9]/60' : ''
                  }`}
                >
                  <td className="p-3.5 pl-4 font-sans font-semibold text-[#111] flex items-center space-x-2">
                    {activeBenchmark === b.id && <span className="w-1.5 h-1.5 rounded-full bg-[#1b1b1b]"></span>}
                    <span>{b.name}</span>
                  </td>
                  <td className="p-3.5 uppercase text-[10px] text-gray-400 font-sans font-bold">{b.category}</td>
                  <td className="p-3.5 font-bold text-[#111] bg-[#f2efe9]/70">{b.fable51}{b.unit === '%' ? '%' : ''}</td>
                  <td className="p-3.5 text-[#111]">{b.mythos51}{b.unit === '%' ? '%' : ''}</td>
                  <td className="p-3.5 text-gray-500">{b.fable5}{b.unit === '%' ? '%' : ''}</td>
                  <td className="p-3.5 text-gray-500">{b.opus5}{b.unit === '%' ? '%' : ''}</td>
                  <td className="p-3.5 text-gray-500">{b.gpt56Sol}{b.unit === '%' ? '%' : ''}</td>
                  <td className="p-3.5 pr-4 text-gray-500">{b.gemini25Ultra}{b.unit === '%' ? '%' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Methodology Footer Note */}
        <p className="text-[11px] text-gray-400 mt-3 italic">
          * Note on OSWorld 2.0: Claude Fable 5.1 and Fable 5 score 0 on tests where production safety classifiers engage to prevent unintended desktop modifications. All benchmark evaluations are run standard with temperature=0.0 on zero-shot / few-shot standard harness protocol.
        </p>

      </div>
    </section>
  );
};
