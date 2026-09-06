import React, { useState } from 'react';
import { Shield, ShieldAlert, Cpu, Globe, Lock, Key, CheckCircle2, AlertTriangle, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { SAFEGUARD_COMPARISON } from '../data/benchmarkData';

export const DualModelComparison: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'fable' | 'mythos' | 'both'>('both');

  return (
    <section id="safeguards" className="py-12 border-b border-[var(--clay-border)]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--clay-text-muted)] mb-2">
            Architectural Paradigm
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--clay-text-primary)] mb-4">
            One Foundation, Two Tiers of Safeguards
          </h2>
          <p className="font-serif-editorial text-lg text-[var(--clay-text-secondary)] leading-[1.7]">
            Claude Fable 5.1 and Claude Mythos 5.1 are built on the identical underlying frontier model. The distinction lies in their safeguard layers, designed to balance safety, defensive security utility, and accelerated scientific research.
          </p>
        </div>

        {/* Interactive Dual Card Comparison in Claymorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Claude Fable 5.1 Card */}
          <div 
            id="card-fable-5-1"
            className={`p-7 rounded-[2rem] transition-all duration-300 cursor-pointer ${
              selectedModel === 'fable' || selectedModel === 'both'
                ? 'clay-card clay-card-hover ring-2 ring-[var(--clay-accent)]/30'
                : 'clay-inset opacity-75'
            }`}
            onClick={() => setSelectedModel(selectedModel === 'fable' ? 'both' : 'fable')}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider clay-badge text-[var(--clay-accent)]">
                General Availability (GA)
              </span>
              <span className="text-[11px] font-mono text-[var(--clay-text-muted)]">claude-fable-5-1</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[var(--clay-text-primary)] mb-2 flex items-center space-x-2">
              <span>Claude Fable 5.1</span>
            </h3>

            <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed mb-6">
              Our flagship model for broad enterprise and developer deployment. Features calibrated production safeguards that allow defensive vulnerability analysis while preventing offensive weaponization.
            </p>

            <div className="space-y-3 text-xs border-t border-[var(--clay-border)] pt-4">
              <div className="flex items-start space-x-2.5 text-[var(--clay-text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--clay-text-primary)]">Access:</strong> Claude API, Claude Code, claude.ai Pro/Max/Team/Enterprise, AWS Bedrock, Google Cloud, Azure.</span>
              </div>
              <div className="flex items-start space-x-2.5 text-[var(--clay-text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--clay-text-primary)]">Security Classifiers:</strong> ~60% reduction in false-positive blocks for developers & code reviews.</span>
              </div>
              <div className="flex items-start space-x-2.5 text-[var(--clay-text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--clay-text-primary)]">EFS Compatible:</strong> Zero data retention (ZDR) and customer VPC telemetry.</span>
              </div>
            </div>
          </div>

          {/* Claude Mythos 5.1 Card */}
          <div 
            id="card-mythos-5-1"
            className={`p-7 rounded-[2rem] transition-all duration-300 cursor-pointer ${
              selectedModel === 'mythos' || selectedModel === 'both'
                ? 'clay-card clay-card-hover ring-2 ring-indigo-500/30'
                : 'clay-inset opacity-75'
            }`}
            onClick={() => setSelectedModel(selectedModel === 'mythos' ? 'both' : 'mythos')}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider clay-badge text-indigo-400">
                Restricted Access Program
              </span>
              <span className="text-[11px] font-mono text-[var(--clay-text-muted)]">claude-mythos-5-1</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[var(--clay-text-primary)] mb-2 flex items-center space-x-2">
              <span>Claude Mythos 5.1</span>
            </h3>

            <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed mb-6">
              Tailored for vetted research institutions, national labs, and cybersecurity defense teams requiring unconstrained domain capabilities in bio-engineering and binary analysis.
            </p>

            <div className="space-y-3 text-xs border-t border-[var(--clay-border)] pt-4 text-[var(--clay-text-secondary)]">
              <div className="flex items-start space-x-2.5">
                <Lock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--clay-text-primary)]">Access:</strong> Trusted Access Program for vetted U.S. organizations and scientific partners.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Lock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--clay-text-primary)]">Biology & Chemistry:</strong> Advanced molecular simulations & high-affinity protein binder synthesis (CB-1 rating).</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Lock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong className="text-[var(--clay-text-primary)]">Claude Security:</strong> Powers autonomous red-team simulations and threat hunting.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Deep Dive Matrix in Clay Container */}
        <div className="clay-card rounded-[2rem] overflow-hidden">
          <div className="px-6 py-4.5 clay-inset border-b border-[var(--clay-border)] flex items-center justify-between">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--clay-text-primary)] flex items-center space-x-2">
              <Layers className="w-4 h-4 text-[var(--clay-accent)]" />
              <span>Safeguards & Compliance Breakdown</span>
            </h4>
            <span className="text-[11px] font-mono text-[var(--clay-text-muted)]">Anthropic RSP 4.2 Standard</span>
          </div>

          <div className="divide-y divide-[var(--clay-border)]">
            {SAFEGUARD_COMPARISON.map((feature, idx) => (
              <div key={idx} className="p-6 transition-colors hover:bg-[var(--clay-surface-elevated)]/40">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                  <span className="font-bold text-sm text-[var(--clay-text-primary)]">{feature.title}</span>
                  <span className="text-xs text-[var(--clay-text-muted)]">{feature.description}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4.5 rounded-2xl clay-inset">
                    <span className="font-bold uppercase tracking-wider text-[10px] text-[var(--clay-accent)] block mb-1">Claude Fable 5.1 (GA):</span>
                    <span className="text-[var(--clay-text-secondary)] leading-relaxed">{feature.fable51}</span>
                  </div>
                  <div className="p-4.5 rounded-2xl clay-inset">
                    <span className="font-bold uppercase tracking-wider text-[10px] text-indigo-400 block mb-1">Claude Mythos 5.1 (Restricted):</span>
                    <span className="text-[var(--clay-text-secondary)] leading-relaxed">{feature.mythos51}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Scaling Policy (RSP) Notice in Clay Inset */}
        <div className="mt-6 p-5 rounded-2xl clay-card border-l-4 border-l-amber-500 flex items-start space-x-3 text-xs text-[var(--clay-text-secondary)]">
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[var(--clay-text-primary)]">RSP Risk Evaluation:</strong> Mythos 5.1 was evaluated under Anthropic’s Responsible Scaling Policy for chemical and biological risks (CB-1 rating), confirming it assists in structured research workflows while remaining below the CB-2 threshold for novel weapon design. Organizations can apply for access via the Life Sciences Verification Program.
          </p>
        </div>

      </div>
    </section>
  );
};
