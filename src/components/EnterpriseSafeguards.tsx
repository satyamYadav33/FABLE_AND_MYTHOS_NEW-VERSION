import React, { useState } from 'react';
import { Shield, Lock, EyeOff, FileText, CheckCircle2, Server, Key, ChevronRight, Fingerprint } from 'lucide-react';

export const EnterpriseSafeguards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'efs' | 'zdr' | 'watermark'>('efs');

  return (
    <section id="enterprise-safeguards" className="py-12 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
            Enterprise Frontier Safeguards
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#111] mb-4">
            Security & Privacy by Design
          </h2>
          <p className="font-serif-editorial text-lg text-[#2c2c2c] leading-[1.65]">
            Enterprise Frontier Safeguards (EFS) introduces a new trust framework for sensitive enterprise AI deployments—combining zero data retention with client-managed observability in your own VPC.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <div 
            onClick={() => setActiveTab('efs')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'efs'
                ? 'bg-[#ffffff] border-[#1b1b1b] shadow-sm'
                : 'bg-[#f2efe9] border-gray-200 hover:bg-[#ede9df]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#1b1b1b] text-white flex items-center justify-center mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#111] mb-1.5">Client-Managed Telemetry</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              All policy monitoring logs and security classifiers execute directly within your own cloud VPC (AWS, GCP, Azure).
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('zdr')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'zdr'
                ? 'bg-[#ffffff] border-[#1b1b1b] shadow-sm'
                : 'bg-[#f2efe9] border-gray-200 hover:bg-[#ede9df]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#1b1b1b] text-white flex items-center justify-center mb-4">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#111] mb-1.5">Zero Data Retention (ZDR)</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Proprietary source code and inference inputs are processed in volatile memory and never persisted or used for model training.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('watermark')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer ${
              activeTab === 'watermark'
                ? 'bg-[#ffffff] border-[#1b1b1b] shadow-sm'
                : 'bg-[#f2efe9] border-gray-200 hover:bg-[#ede9df]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#1b1b1b] text-white flex items-center justify-center mb-4">
              <Fingerprint className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#111] mb-1.5">Invisible Watermarking</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Statistical provenance embedded into outputs with an enterprise verification API available in private preview.
            </p>
          </div>

        </div>

        {/* Deep Dive Tab Content */}
        <div className="bg-[#ffffff] p-6 rounded-2xl border border-gray-200 text-xs text-[#2c2c2c]">
          {activeTab === 'efs' && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#111] font-serif">
                How Enterprise Frontier Safeguards (EFS) Operates
              </h4>
              <p className="leading-relaxed text-gray-600">
                Traditionally, frontier safety classifiers required routing inference metadata back to provider infrastructure for auditing. With EFS, Anthropic provides containerized security monitoring sidecars that run natively within the customer’s private VPC.
              </p>
              <div className="p-4 rounded-xl bg-[#f2efe9] border border-gray-200 font-mono text-[11px] space-y-2 text-[#111]">
                <div className="flex items-center space-x-2 text-[#111]">
                  <Shield className="w-4 h-4 text-black" />
                  <span className="font-bold">Customer VPC Boundary Protection:</span>
                </div>
                <div>[Client App] → [Encrypted VPC Enclave] → [Claude Fable 5.1 Inference Node]</div>
                <div className="text-gray-500">Telemetry: Local customer-owned S3/GCS bucket only · Zero external telemetry leakage</div>
              </div>
            </div>
          )}

          {activeTab === 'zdr' && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#111] font-serif">
                Contractual Zero Data Retention (ZDR)
              </h4>
              <p className="leading-relaxed text-gray-600">
                All Enterprise, Team, and API customers under Enterprise agreements are guaranteed zero data retention across all endpoints. Inputs and outputs are deleted from memory immediately upon completion of streaming generation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="p-3.5 rounded-xl bg-[#f9f8f4] border border-gray-200 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>No model training on customer prompts or code</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f9f8f4] border border-gray-200 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>SOC 2 Type II & ISO 27001 certified</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f9f8f4] border border-gray-200 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>HIPAA & GDPR BAA compliant options</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f9f8f4] border border-gray-200 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Volatile GPU memory wiping post-session</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'watermark' && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#111] font-serif">
                Statistical Provenance & Invisible Watermarking
              </h4>
              <p className="leading-relaxed text-gray-600">
                Claude Fable 5.1 includes our new statistical watermarking technique. It encodes non-perceptible token frequency distributions during sampling without modifying text readability or syntax accuracy.
              </p>
              <p className="leading-relaxed text-gray-600">
                Eligible enterprise compliance officers can request access to the <strong>Anthropic Watermark Detection API</strong> in private preview to verify provenance in automated document pipelines and intellectual property audits.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
