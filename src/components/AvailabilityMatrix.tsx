import React, { useState } from 'react';
import { Cloud, Terminal, Globe, Shield, Sparkles, Check, ArrowUpRight, Copy, Building, FlaskConical, X } from 'lucide-react';

export const AvailabilityMatrix: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantOrg, setApplicantOrg] = useState('');
  const [researchArea, setResearchArea] = useState('life-sciences');

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install -g @anthropic-ai/claude-code');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantEmail) return;
    setApplicationSubmitted(true);
  };

  return (
    <section id="availability" className="py-12 border-b border-[var(--clay-border)]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--clay-text-muted)] mb-2">
            Deployment & Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--clay-text-primary)] mb-4">
            Availability Across Platforms
          </h2>
          <p className="font-serif-editorial text-lg text-[var(--clay-text-secondary)] leading-[1.7]">
            Claude Fable 5.1 is generally available worldwide starting today. Claude Mythos 5.1 is rolling out to vetted participants through our trusted access verification programs.
          </p>
        </div>

        {/* Access Grid in Claymorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Claude Fable 5.1 (GA Channels) */}
          <div className="clay-card p-6 sm:p-7 rounded-[2rem] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--clay-text-muted)]">General Availability</span>
                <span className="px-3 py-1 rounded-full text-[10px] clay-badge text-emerald-600 dark:text-emerald-400 font-bold">Live Now</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-[var(--clay-text-primary)] mb-3">
                Claude Fable 5.1
              </h3>
              <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed mb-6">
                Available to all developers and enterprise customers across our first-party platforms and major cloud hyperscalers.
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-2xl clay-inset">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-[var(--clay-accent)]" />
                    <div>
                      <span className="font-semibold block text-[var(--clay-text-primary)]">Claude.ai Web & Desktop</span>
                      <span className="text-[11px] text-[var(--clay-text-muted)]">Pro, Max, Team & Enterprise plans</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-500">Included</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl clay-inset">
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-4 h-4 text-[var(--clay-accent)]" />
                    <div>
                      <span className="font-semibold block text-[var(--clay-text-primary)]">Claude Code CLI</span>
                      <span className="text-[11px] text-[var(--clay-text-muted)]">Default flagship engine</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyInstall}
                    className="p-2 rounded-xl clay-btn text-[var(--clay-text-muted)] hover:text-[var(--clay-text-primary)] transition-colors"
                    title="Copy npm install command"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl clay-inset">
                  <div className="flex items-center space-x-3">
                    <Cloud className="w-4 h-4 text-[var(--clay-accent)]" />
                    <div>
                      <span className="font-semibold block text-[var(--clay-text-primary)]">AWS Bedrock & Google Cloud Vertex</span>
                      <span className="text-[11px] text-[var(--clay-text-muted)]">Global serverless endpoints</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-500">Available</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--clay-border)]">
              <a 
                href="https://console.anthropic.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 rounded-xl clay-btn-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <span>Deploy in Anthropic Console</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Claude Mythos 5.1 (Restricted Program) */}
          <div className="clay-card p-6 sm:p-7 rounded-[2rem] flex flex-col justify-between border-2 border-indigo-500/20">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--clay-text-muted)]">Selective Access</span>
                <span className="px-3 py-1 rounded-full text-[10px] clay-badge text-indigo-400 font-bold">Vetted Preview</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-[var(--clay-text-primary)] mb-3 flex items-center space-x-2">
                <span>Claude Mythos 5.1</span>
              </h3>
              <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed mb-6">
                Offered via our Trusted Access Framework for national security, biological research institutions, and defense cybersecurity labs.
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-2xl clay-inset">
                  <div className="flex items-center space-x-3">
                    <FlaskConical className="w-4 h-4 text-indigo-400" />
                    <div>
                      <span className="font-semibold block text-[var(--clay-text-primary)]">Life Sciences Verification</span>
                      <span className="text-[11px] text-[var(--clay-text-muted)]">Molecular binding, enzymes & oncology</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-400">CB-1 Rated</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl clay-inset">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-4 h-4 text-indigo-400" />
                    <div>
                      <span className="font-semibold block text-[var(--clay-text-primary)]">Cyber Defense Red Team</span>
                      <span className="text-[11px] text-[var(--clay-text-muted)]">Autonomous adversary simulation</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-400">Vetted</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl clay-inset">
                  <div className="flex items-center space-x-3">
                    <Building className="w-4 h-4 text-indigo-400" />
                    <div>
                      <span className="font-semibold block text-[var(--clay-text-primary)]">Government Enclaves</span>
                      <span className="text-[11px] text-[var(--clay-text-muted)]">FedRAMP High & IL5/IL6 isolation</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-400">Restricted</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--clay-border)]">
              <button 
                onClick={() => setShowApplyModal(true)}
                className="w-full py-3 rounded-xl clay-btn text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 text-[var(--clay-text-primary)]"
              >
                <span>Request Trusted Access Review</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal for Requesting Mythos Access */}
        {showApplyModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="clay-card rounded-[2.2rem] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
              <button 
                onClick={() => setShowApplyModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full clay-btn text-[var(--clay-text-muted)] hover:text-[var(--clay-text-primary)]"
              >
                <X className="w-4 h-4" />
              </button>

              {!applicationSubmitted ? (
                <div>
                  <div className="w-12 h-12 rounded-2xl clay-elevated text-indigo-400 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[var(--clay-text-primary)] mb-2">
                    Request Claude Mythos 5.1 Verification
                  </h3>
                  <p className="text-xs text-[var(--clay-text-secondary)] mb-6 leading-relaxed">
                    Under Anthropic’s Responsible Scaling Policy, access to Claude Mythos 5.1 requires organization accreditation, identity verification, and security posture checks.
                  </p>

                  <form onSubmit={handleApply} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-[var(--clay-text-primary)] mb-1">Work Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="researcher@lab.org or security@agency.gov"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full p-3 rounded-xl clay-inset text-[var(--clay-text-primary)] placeholder-[var(--clay-text-muted)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[var(--clay-text-primary)] mb-1">Organization Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="University, Hospital, or Enterprise Lab"
                        value={applicantOrg}
                        onChange={(e) => setApplicantOrg(e.target.value)}
                        className="w-full p-3 rounded-xl clay-inset text-[var(--clay-text-primary)] placeholder-[var(--clay-text-muted)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[var(--clay-text-primary)] mb-1">Primary Research Domain</label>
                      <select 
                        value={researchArea}
                        onChange={(e) => setResearchArea(e.target.value)}
                        className="w-full p-3 rounded-xl clay-inset text-[var(--clay-text-primary)] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="life-sciences">Bio-Engineering & Life Sciences (CB-1)</option>
                        <option value="cyber-defense">Defensive Cyber & Binary Analysis</option>
                        <option value="national-lab">National Science Laboratory</option>
                        <option value="aerospace">Aerospace & Physics Simulation</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full py-3 rounded-xl clay-btn-primary text-xs font-bold uppercase tracking-wider"
                      >
                        Submit Verification Request
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full clay-elevated text-emerald-500 flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[var(--clay-text-primary)]">
                    Application Received
                  </h3>
                  <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed max-w-sm mx-auto">
                    Thank you, our Frontier Trust & Safety team will review your organization’s credentials at <strong>{applicantEmail}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setApplicationSubmitted(false);
                      setShowApplyModal(false);
                    }}
                    className="px-6 py-2.5 rounded-full clay-btn text-xs font-bold uppercase tracking-wider text-[var(--clay-text-primary)]"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
