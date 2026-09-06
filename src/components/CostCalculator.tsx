import React, { useState } from 'react';
import { PRICING_DATA } from '../data/benchmarkData';
import { Calculator, DollarSign, ArrowDownRight, Zap, Database, TrendingDown } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [contextSizeK, setContextSizeK] = useState<number>(100); // 100k tokens
  const [cacheHitRate, setCacheHitRate] = useState<number>(85); // 85% cache hit rate for agentic work
  const [requestsPerDay, setRequestsPerDay] = useState<number>(500);
  const [outputTokensPerReq, setOutputTokensPerReq] = useState<number>(1500);

  // Math Calculations
  const totalInputTokensPerDay = (contextSizeK * 1000) * requestsPerDay;
  const cachedTokensPerDay = totalInputTokensPerDay * (cacheHitRate / 100);
  const uncachedTokensPerDay = totalInputTokensPerDay * (1 - cacheHitRate / 100);
  const totalOutputTokensPerDay = outputTokensPerReq * requestsPerDay;

  // Costs with Claude Fable 5.1
  // Input: $3.00/M, Cache Write: $3.75/M, Cache Read: $0.30/M, Output: $15.00/M
  const dailyCostFable51 = 
    (uncachedTokensPerDay / 1000000) * 3.00 +
    (cachedTokensPerDay / 1000000) * 0.30 +
    (totalOutputTokensPerDay / 1000000) * 15.00;

  // Costs with previous generation Fable 5 (Cache Read: $1.25/M)
  const dailyCostFable5 = 
    (uncachedTokensPerDay / 1000000) * 3.00 +
    (cachedTokensPerDay / 1000000) * 1.25 +
    (totalOutputTokensPerDay / 1000000) * 15.00;

  const monthlyCostFable51 = dailyCostFable51 * 30;
  const monthlyCostFable5 = dailyCostFable5 * 30;
  const monthlySavings = monthlyCostFable5 - monthlyCostFable51;
  const savingsPercent = Math.round(((monthlyCostFable5 - monthlyCostFable51) / monthlyCostFable5) * 100);

  return (
    <section id="pricing" className="py-12 border-b border-[var(--clay-border)]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--clay-text-muted)] mb-2">
            Token Economics & Prompt Caching
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--clay-text-primary)] mb-4">
            75% Reduction in Cache Read Costs
          </h2>
          <p className="font-serif-editorial text-lg text-[var(--clay-text-secondary)] leading-[1.7]">
            With Claude Fable 5.1, we have cut the cost of reading from prompt cache by 75% ($0.30/MTok vs $1.25/MTok previously). For iterative coding agents and long-context knowledge retrieval, this reduces total end-to-end workload costs by up to 45%.
          </p>
        </div>

        {/* Pricing Matrix Table in Clay Card */}
        <div className="clay-card rounded-[2.2rem] overflow-hidden mb-8">
          <div className="p-4 sm:p-5 clay-inset border-b border-[var(--clay-border)] flex items-center justify-between">
            <span className="font-bold text-xs text-[var(--clay-text-primary)] uppercase tracking-wider">
              API Pricing (USD per Million Tokens)
            </span>
            <span className="text-[11px] font-mono text-[var(--clay-text-muted)]">Effective September 1, 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="clay-inset border-b border-[var(--clay-border)] text-[var(--clay-text-muted)] font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3.5 pl-5 font-sans font-bold">Model</th>
                  <th className="p-3.5">Prompt Input</th>
                  <th className="p-3.5">Cache Write</th>
                  <th className="p-3.5 font-bold text-[var(--clay-accent)]">Cache Read</th>
                  <th className="p-3.5">Output Tokens</th>
                  <th className="p-3.5 pr-5">Context Window</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--clay-border)] text-[var(--clay-text-secondary)]">
                {PRICING_DATA.map((tier, idx) => (
                  <tr 
                    key={idx} 
                    className={tier.model.includes('5.1') ? 'bg-[var(--clay-accent)]/5 font-semibold text-[var(--clay-text-primary)]' : 'hover:bg-[var(--clay-surface-elevated)]/40'}
                  >
                    <td className="p-3.5 pl-5 font-sans font-semibold text-[var(--clay-text-primary)] flex items-center space-x-2">
                      {tier.model.includes('5.1') && <span className="w-2 h-2 rounded-full bg-[var(--clay-accent)]"></span>}
                      <span>{tier.model}</span>
                    </td>
                    <td className="p-3.5">${tier.inputPerMillion.toFixed(2)}</td>
                    <td className="p-3.5">${tier.cacheWritePerMillion.toFixed(2)}</td>
                    <td className={`p-3.5 font-bold ${tier.model.includes('5.1') ? 'text-[var(--clay-accent)]' : ''}`}>
                      ${tier.cacheReadPerMillion.toFixed(2)}
                      {tier.model.includes('5.1') && (
                        <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full clay-badge text-[var(--clay-accent)] uppercase">
                          -75%
                        </span>
                      )}
                    </td>
                    <td className="p-3.5">${tier.outputPerMillion.toFixed(2)}</td>
                    <td className="p-3.5 pr-5 font-sans text-xs">{tier.contextWindow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Workload Savings Calculator in Clay Card */}
        <div className="clay-card rounded-[2.2rem] p-6 sm:p-8">
          <div className="flex items-center space-x-2.5 mb-6">
            <div className="w-9 h-9 rounded-2xl clay-elevated text-[var(--clay-accent)] flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[var(--clay-text-primary)]">Agentic Workload Cost Simulator</h3>
              <p className="text-xs text-[var(--clay-text-muted)]">Model the economic impact of the 75% prompt cache reduction on your stack.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Context Size Slider */}
              <div className="p-4 rounded-2xl clay-inset">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-bold text-[var(--clay-text-primary)]">Codebase Context Size:</span>
                  <span className="font-mono text-[var(--clay-accent)] font-bold">{contextSizeK}k tokens</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={contextSizeK}
                  onChange={(e) => setContextSizeK(Number(e.target.value))}
                  className="w-full accent-[var(--clay-accent)] cursor-pointer"
                />
              </div>

              {/* Cache Hit Rate Slider */}
              <div className="p-4 rounded-2xl clay-inset">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-bold text-[var(--clay-text-primary)]">Agent Cache Hit Rate:</span>
                  <span className="font-mono text-[var(--clay-accent)] font-bold">{cacheHitRate}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="98"
                  step="1"
                  value={cacheHitRate}
                  onChange={(e) => setCacheHitRate(Number(e.target.value))}
                  className="w-full accent-[var(--clay-accent)] cursor-pointer"
                />
              </div>

              {/* Daily Requests Slider */}
              <div className="p-4 rounded-2xl clay-inset">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-bold text-[var(--clay-text-primary)]">Agent Invocations / Day:</span>
                  <span className="font-mono text-[var(--clay-accent)] font-bold">{requestsPerDay}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="50"
                  value={requestsPerDay}
                  onChange={(e) => setRequestsPerDay(Number(e.target.value))}
                  className="w-full accent-[var(--clay-accent)] cursor-pointer"
                />
              </div>

            </div>

            {/* Savings Result Card */}
            <div className="lg:col-span-5 p-6 rounded-3xl clay-card text-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--clay-text-muted)] block">
                Estimated Monthly Savings
              </span>

              <div className="text-4xl sm:text-5xl font-mono font-bold text-emerald-500">
                ${Math.round(monthlySavings).toLocaleString()}
              </div>

              <div className="inline-block px-3 py-1 rounded-full clay-badge text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {savingsPercent}% Total Workload Reduction
              </div>

              <div className="border-t border-[var(--clay-border)] pt-3 text-xs space-y-1.5 text-[var(--clay-text-muted)] text-left">
                <div className="flex justify-between">
                  <span>Prior Generation Fable 5:</span>
                  <span className="font-mono text-[var(--clay-text-primary)] font-semibold">${Math.round(monthlyCostFable5).toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between font-bold text-[var(--clay-text-primary)]">
                  <span>Claude Fable 5.1:</span>
                  <span className="font-mono text-[var(--clay-accent)]">${Math.round(monthlyCostFable51).toLocaleString()}/mo</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
