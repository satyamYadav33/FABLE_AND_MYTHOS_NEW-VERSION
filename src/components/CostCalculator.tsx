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
    <section id="pricing" className="py-12 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
            Token Economics & Prompt Caching
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#111] mb-4">
            75% Reduction in Cache Read Costs
          </h2>
          <p className="font-serif-editorial text-lg text-[#2c2c2c] leading-[1.65]">
            With Claude Fable 5.1, we have cut the cost of reading from prompt cache by 75% ($0.30/MTok vs $1.25/MTok previously). For iterative coding agents and long-context knowledge retrieval, this reduces total end-to-end workload costs by up to 45%.
          </p>
        </div>

        {/* Pricing Matrix Table */}
        <div className="bg-[#ffffff] rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="p-4 bg-[#f9f8f4] border-b border-gray-200 flex items-center justify-between">
            <span className="font-bold text-xs text-[#111] uppercase tracking-wider">
              API Pricing (USD per Million Tokens)
            </span>
            <span className="text-[11px] font-mono text-gray-400">Effective September 1, 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#f9f8f4] border-b border-gray-200 text-gray-600 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3.5 pl-4 font-sans font-bold">Model</th>
                  <th className="p-3.5">Prompt Input</th>
                  <th className="p-3.5">Cache Write (5m)</th>
                  <th className="p-3.5 font-bold text-[#111] bg-[#f2efe9]">Cache Read</th>
                  <th className="p-3.5">Output Tokens</th>
                  <th className="p-3.5 pr-4">Context / Max Out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-600">
                {PRICING_DATA.map((tier, idx) => (
                  <tr 
                    key={idx} 
                    className={tier.model.includes('5.1') ? 'bg-[#f2efe9]/40 font-medium' : 'hover:bg-[#f9f8f4]'}
                  >
                    <td className="p-3.5 pl-4 font-sans font-semibold text-[#111] flex items-center space-x-2">
                      {tier.model.includes('5.1') && <span className="w-1.5 h-1.5 rounded-full bg-[#1b1b1b]"></span>}
                      <span>{tier.model}</span>
                    </td>
                    <td className="p-3.5">${tier.inputPerMillion.toFixed(2)}</td>
                    <td className="p-3.5">${tier.cacheWritePerMillion.toFixed(2)}</td>
                    <td className="p-3.5 font-bold text-[#111] bg-[#f2efe9]/70">
                      ${tier.cacheReadPerMillion.toFixed(2)}
                      {tier.model === 'Claude Fable 5.1' && (
                        <span className="ml-1 text-[10px] text-emerald-700 font-sans font-bold">(-75%)</span>
                      )}
                    </td>
                    <td className="p-3.5">${tier.outputPerMillion.toFixed(2)}</td>
                    <td className="p-3.5 pr-4 text-gray-400 text-[11px]">{tier.contextWindow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Caching Savings Calculator */}
        <div className="bg-[#ffffff] rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
            <Calculator className="w-3.5 h-3.5 text-black" />
            <span>Interactive Agentic Workload Calculator</span>
          </div>
          <h3 className="text-xl font-bold font-serif text-[#111] mb-6">
            Estimate Your Savings with 75% Cache Read Discount
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            
            {/* Sliders Form */}
            <div className="space-y-5 text-xs text-[#2c2c2c]">
              
              {/* Context Size */}
              <div>
                <div className="flex justify-between font-medium mb-1.5">
                  <span>Context Size per Call:</span>
                  <span className="font-mono font-bold text-[#111]">{contextSizeK}k tokens</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="200" 
                  step="10"
                  value={contextSizeK} 
                  onChange={(e) => setContextSizeK(Number(e.target.value))}
                  className="w-full accent-[#1b1b1b] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>10k (Small Repo)</span>
                  <span>100k (Full Workspace)</span>
                  <span>200k (Enterprise Monorepo)</span>
                </div>
              </div>

              {/* Cache Hit Rate */}
              <div>
                <div className="flex justify-between font-medium mb-1.5">
                  <span>Prompt Cache Hit Ratio:</span>
                  <span className="font-mono font-bold text-[#111]">{cacheHitRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="95" 
                  step="5"
                  value={cacheHitRate} 
                  onChange={(e) => setCacheHitRate(Number(e.target.value))}
                  className="w-full accent-[#1b1b1b] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>0% (No Caching)</span>
                  <span>50% (Standard)</span>
                  <span>85%+ (Agent Loop)</span>
                </div>
              </div>

              {/* Requests Per Day */}
              <div>
                <div className="flex justify-between font-medium mb-1.5">
                  <span>Requests / Agent Turns per Day:</span>
                  <span className="font-mono font-bold text-[#111]">{requestsPerDay}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="5000" 
                  step="50"
                  value={requestsPerDay} 
                  onChange={(e) => setRequestsPerDay(Number(e.target.value))}
                  className="w-full accent-[#1b1b1b] cursor-pointer"
                />
              </div>

            </div>

            {/* Calculated Output Card */}
            <div className="bg-[#f9f8f4] p-5 rounded-xl border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1">
                  Projected Monthly Cost Comparison
                </span>
                
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="p-3.5 rounded-xl bg-[#ffffff] border border-gray-200">
                    <div className="text-[10px] uppercase font-bold text-gray-400">Claude Fable 5</div>
                    <div className="text-base font-mono font-semibold text-gray-400 line-through mt-0.5">
                      ${monthlyCostFable5.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1b1b1b] border border-gray-800 text-white">
                    <div className="text-[10px] uppercase font-bold text-gray-400">Claude Fable 5.1</div>
                    <div className="text-lg font-mono font-bold text-white mt-0.5">
                      ${monthlyCostFable51.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-gray-200 text-xs text-[#111] flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <TrendingDown className="w-4 h-4 text-black" />
                    <span className="font-semibold">Total Net Savings:</span>
                  </div>
                  <span className="font-mono font-bold text-sm text-[#111]">
                    -${monthlySavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo ({savingsPercent}%)
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 mt-4 pt-3 border-t border-gray-200">
                Calculated with 30 days/month active agent usage. Cached prompt reads are billed at $0.30 per million tokens.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
