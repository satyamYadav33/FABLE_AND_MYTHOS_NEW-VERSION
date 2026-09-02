import React, { useState } from 'react';
import { Shield, ShieldAlert, Cpu, Globe, Lock, Key, CheckCircle2, AlertTriangle, ArrowRight, Layers } from 'lucide-react';
import { SAFEGUARD_COMPARISON } from '../data/benchmarkData';

export const DualModelComparison: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'fable' | 'mythos' | 'both'>('both');

  return (
    <section id="safeguards" className="py-12 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
            Architectural Paradigm
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#111] mb-4">
            One Foundation, Two Tiers of Safeguards
          </h2>
          <p className="font-serif-editorial text-lg text-[#2c2c2c] leading-[1.65]">
            Claude Fable 5.1 and Claude Mythos 5.1 are built on the identical underlying frontier model. The distinction lies in their safeguard layers, designed to balance safety, defensive security utility, and accelerated scientific research.
          </p>
        </div>

        {/* Interactive Dual Card Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Claude Fable 5.1 Card */}
          <div 
            id="card-fable-5-1"
            className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
              selectedModel === 'fable' || selectedModel === 'both'
                ? 'bg-[#ffffff] border-[#1b1b1b] shadow-sm'
                : 'bg-[#f2efe9] border-gray-200 opacity-70'
            }`}
            onClick={() => setSelectedModel(selectedModel === 'fable' ? 'both' : 'fable')}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#f2efe9] text-[#1b1b1b] border border-gray-300">
                General Availability (GA)
              </span>
              <span className="text-[11px] font-mono text-gray-400">claude-fable-5-1-20260901</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#111] mb-2 flex items-center space-x-2">
              <span>Claude Fable 5.1</span>
            </h3>

            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              Our flagship model for broad enterprise and developer deployment. Features calibrated production safeguards that allow defensive vulnerability analysis while preventing offensive weaponization.
            </p>

            <div className="space-y-3 text-xs border-t border-gray-200 pt-4">
              <div className="flex items-start space-x-2 text-[#2c2c2c]">
                <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <span><strong>Access:</strong> Claude API, Claude Code, claude.ai Pro/Max/Team/Enterprise, AWS Bedrock, Google Cloud, Azure.</span>
              </div>
              <div className="flex items-start space-x-2 text-[#2c2c2c]">
                <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <span><strong>Security Classifiers:</strong> ~60% reduction in false-positive blocks for developers & code reviews.</span>
              </div>
              <div className="flex items-start space-x-2 text-[#2c2c2c]">
                <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <span><strong>EFS Compatible:</strong> Zero data retention (ZDR) and customer VPC telemetry.</span>
              </div>
            </div>
          </div>

          {/* Claude Mythos 5.1 Card */}
          <div 
            id="card-mythos-5-1"
            className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
              selectedModel === 'mythos' || selectedModel === 'both'
                ? 'bg-[#1b1b1b] border-gray-800 text-white shadow-sm'
                : 'bg-[#262626] border-gray-800 text-gray-400 opacity-70'
            }`}
            onClick={() => setSelectedModel(selectedModel === 'mythos' ? 'both' : 'mythos')}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2e2e2e] text-gray-200 border border-gray-700">
                Restricted Access Program
              </span>
              <span className="text-[11px] font-mono text-gray-400">claude-mythos-5-1</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-white mb-2 flex items-center space-x-2">
              <span>Claude Mythos 5.1</span>
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              Tailored for vetted research institutions, national labs, and cybersecurity defense teams requiring unconstrained domain capabilities in bio-engineering and binary analysis.
            </p>

            <div className="space-y-3 text-xs border-t border-gray-800 pt-4 text-gray-300">
              <div className="flex items-start space-x-2">
                <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                <span><strong>Access:</strong> Trusted Access Program for vetted U.S. organizations and scientific partners.</span>
              </div>
              <div className="flex items-start space-x-2">
                <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                <span><strong>Biology & Chemistry:</strong> Advanced molecular simulations & high-affinity protein binder synthesis (CB-1 rating).</span>
              </div>
              <div className="flex items-start space-x-2">
                <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                <span><strong>Claude Security:</strong> Powers autonomous red-team simulations and threat hunting.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Deep Dive Matrix */}
        <div className="bg-[#ffffff] rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-[#f9f8f4] border-b border-gray-200 flex items-center justify-between">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#111] flex items-center space-x-2">
              <Layers className="w-4 h-4 text-gray-500" />
              <span>Safeguards & Compliance Breakdown</span>
            </h4>
            <span className="text-[11px] font-mono text-gray-400">Anthropic RSP 4.2 Standard</span>
          </div>

          <div className="divide-y divide-gray-200">
            {SAFEGUARD_COMPARISON.map((feature, idx) => (
              <div key={idx} className="p-6 hover:bg-[#f9f8f4]/60 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <span className="font-bold text-sm text-[#111]">{feature.title}</span>
                  <span className="text-xs text-gray-500">{feature.description}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs">
                  <div className="p-4 rounded-xl bg-[#f9f8f4] border border-gray-200">
                    <span className="font-bold uppercase tracking-wider text-[10px] text-gray-600 block mb-1">Claude Fable 5.1 (GA):</span>
                    <span className="text-[#2c2c2c] leading-relaxed">{feature.fable51}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1b1b1b] border border-gray-800 text-white">
                    <span className="font-bold uppercase tracking-wider text-[10px] text-gray-400 block mb-1">Claude Mythos 5.1 (Restricted):</span>
                    <span className="text-gray-300 leading-relaxed">{feature.mythos51}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Scaling Policy (RSP) Notice */}
        <div className="mt-6 p-5 rounded-xl bg-[#f2efe9] border border-gray-200 flex items-start space-x-3 text-xs text-[#2c2c2c]">
          <AlertTriangle className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>RSP Risk Evaluation:</strong> Mythos 5.1 was evaluated under Anthropic’s Responsible Scaling Policy for chemical and biological risks (CB-1 rating), confirming it assists in structured research workflows while remaining below the CB-2 threshold for novel weapon design. Organizations can apply for access via the Life Sciences Verification Program.
          </p>
        </div>

      </div>
    </section>
  );
};
