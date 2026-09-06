import React, { useState } from 'react';
import { Shield, Lock, EyeOff, FileText, CheckCircle2, Server, Key, ChevronRight, Fingerprint } from 'lucide-react';

export const EnterpriseSafeguards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'efs' | 'zdr' | 'watermark'>('efs');

  return (
    <section id="enterprise-safeguards" className="py-12 border-b border-[var(--clay-border)]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--clay-text-muted)] mb-2">
            Enterprise Frontier Safeguards
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--clay-text-primary)] mb-4">
            Security & Privacy by Design
          </h2>
          <p className="font-serif-editorial text-lg text-[var(--clay-text-secondary)] leading-[1.7]">
            Enterprise Frontier Safeguards (EFS) introduces a new trust framework for sensitive enterprise AI deployments—combining zero data retention with client-managed observability in your own VPC.
          </p>
        </div>

        {/* Feature Highlights Grid in Claymorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <div 
            onClick={() => setActiveTab('efs')}
            className={`p-6 rounded-[2rem] transition-all cursor-pointer ${
              activeTab === 'efs'
                ? 'clay-card clay-card-hover ring-2 ring-[var(--clay-accent)]'
                : 'clay-inset opacity-80'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl clay-elevated text-[var(--clay-accent)] flex items-center justify-center mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[var(--clay-text-primary)] mb-1.5">Client-Managed Telemetry</h3>
            <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed">
              All policy monitoring logs and security classifiers execute directly within your own cloud VPC (AWS, GCP, Azure).
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('zdr')}
            className={`p-6 rounded-[2rem] transition-all cursor-pointer ${
              activeTab === 'zdr'
                ? 'clay-card clay-card-hover ring-2 ring-emerald-500'
                : 'clay-inset opacity-80'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl clay-elevated text-emerald-500 flex items-center justify-center mb-4">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[var(--clay-text-primary)] mb-1.5">Zero Data Retention (ZDR)</h3>
            <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed">
              Proprietary source code and inference inputs are processed in volatile memory and never persisted or used for model training.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('watermark')}
            className={`p-6 rounded-[2rem] transition-all cursor-pointer ${
              activeTab === 'watermark'
                ? 'clay-card clay-card-hover ring-2 ring-indigo-400'
                : 'clay-inset opacity-80'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl clay-elevated text-indigo-400 flex items-center justify-center mb-4">
              <Fingerprint className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[var(--clay-text-primary)] mb-1.5">Invisible Watermarking</h3>
            <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed">
              Statistical provenance embedded into outputs with an enterprise verification API available in private preview.
            </p>
          </div>

        </div>

        {/* Deep Dive Tab Content in Clay Card */}
        <div className="clay-card rounded-[2.2rem] p-6 sm:p-8">
          {activeTab === 'efs' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider clay-badge text-[var(--clay-accent)]">
                  VPC Integration
                </span>
                <h4 className="font-bold text-lg text-[var(--clay-text-primary)]">Client-Hosted Telemetry & Guardrail Classifiers</h4>
              </div>
              <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed">
                Organizations with stringent regulatory constraints can run Anthropic’s frontier policy classifiers within their own AWS PrivateLink or Google Cloud Service Connect perimeter. Inference never leaves your secure enclave without customer cryptographic authorization.
              </p>

              {/* VPC Diagram in Clay Inset */}
              <div className="p-6 rounded-2xl clay-inset text-xs font-mono space-y-3">
                <div className="text-[var(--clay-text-muted)] uppercase text-[10px] tracking-wider font-bold">Encrypted Telemetry Architecture</div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="p-3 rounded-xl clay-card w-full sm:w-auto text-center">
                    <span className="text-[var(--clay-text-primary)] font-bold block">Enterprise VPC</span>
                    <span className="text-[10px] text-[var(--clay-text-muted)]">Code & DB Secrets</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--clay-text-muted)] hidden sm:block" />
                  <div className="p-3 rounded-xl clay-card w-full sm:w-auto text-center">
                    <span className="text-[var(--clay-accent)] font-bold block">Client Enclave</span>
                    <span className="text-[10px] text-[var(--clay-text-muted)]">Guardrail Proxy</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--clay-text-muted)] hidden sm:block" />
                  <div className="p-3 rounded-xl clay-card w-full sm:w-auto text-center">
                    <span className="text-emerald-500 font-bold block">Anthropic Core</span>
                    <span className="text-[10px] text-[var(--clay-text-muted)]">Zero-Retention API</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'zdr' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider clay-badge text-emerald-500">
                  Data Governance
                </span>
                <h4 className="font-bold text-lg text-[var(--clay-text-primary)]">Strict Zero Data Retention (ZDR) Guarantees</h4>
              </div>
              <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed">
                By default on API and Enterprise tier accounts, user prompt content and model completions are destroyed immediately upon stream conclusion. Logs are restricted to metadata required for billing and rate-limiting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl clay-inset flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-[var(--clay-text-primary)] mb-0.5">No Training on Customer Data</strong>
                    <span className="text-[var(--clay-text-secondary)]">Your IP and codebase are never ingested into future model training datasets.</span>
                  </div>
                </div>
                <div className="p-4 rounded-2xl clay-inset flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-[var(--clay-text-primary)] mb-0.5">SOC 2 Type II & ISO 27001</strong>
                    <span className="text-[var(--clay-text-secondary)]">Independently audited controls across compute clusters and physical infrastructure.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'watermark' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider clay-badge text-indigo-400">
                  Provenance
                </span>
                <h4 className="font-bold text-lg text-[var(--clay-text-primary)]">Cryptographic & Statistical Provenance</h4>
              </div>
              <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed">
                Claude Fable 5.1 and Mythos 5.1 embed subtle, imperceptible probability perturbations in generated code and natural language text. This allows compliance teams to verify whether an asset was generated by an authorized internal agent.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
