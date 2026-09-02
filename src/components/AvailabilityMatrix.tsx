import React, { useState } from 'react';
import { Cloud, Terminal, Globe, Shield, Sparkles, Check, ArrowUpRight, Copy, Building, FlaskConical } from 'lucide-react';

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
    <section id="availability" className="py-12 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
            Deployment & Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#111] mb-4">
            Availability Across Platforms
          </h2>
          <p className="font-serif-editorial text-lg text-[#2c2c2c] leading-[1.65]">
            Claude Fable 5.1 is generally available worldwide starting today. Claude Mythos 5.1 is rolling out to vetted participants through our trusted access verification programs.
          </p>
        </div>

        {/* Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Claude Fable 5.1 (GA Channels) */}
          <div className="bg-[#ffffff] p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">General Availability</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-bold">Live Now</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#111] mb-3">
                Claude Fable 5.1
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Available to all developers and enterprise customers across our first-party platforms and major cloud hyperscalers.
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#f9f8f4] border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-[#111]" />
                    <div>
                      <span className="font-semibold block text-[#111]">Claude.ai Web & Desktop</span>
                      <span className="text-[11px] text-gray-500">Pro, Max, Team & Enterprise plans</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#111]">Included</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#f9f8f4] border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-4 h-4 text-[#111]" />
                    <div>
                      <span className="font-semibold block text-[#111]">Claude Code CLI</span>
                      <span className="text-[11px] text-gray-500">Default flagship engine</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyInstall}
                    className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
                    title="Copy npm command"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#f9f8f4] border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Cloud className="w-4 h-4 text-[#111]" />
                    <div>
                      <span className="font-semibold block text-[#111]">Cloud Hyperscalers</span>
                      <span className="text-[11px] text-gray-500">AWS Bedrock, Google Cloud Vertex AI, Azure</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-500">API Active</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <a 
                href="#pricing"
                className="w-full py-3 rounded-full bg-[#1b1b1b] text-white text-xs font-bold flex items-center justify-center space-x-1.5 hover:bg-black transition-colors"
              >
                <span>Read API Documentation</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Claude Mythos 5.1 (Restricted Programs) */}
          <div className="bg-[#141414] text-[#fafafa] p-6 rounded-2xl border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Trusted Access Program</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-gray-800 text-gray-300 font-bold border border-gray-700">Application Only</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-white mb-3">
                Claude Mythos 5.1
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Restricted access for vetted life-science researchers, computational biologists, and authorized defensive security teams.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#1f1f1f] border border-gray-800">
                  <div className="flex items-center space-x-2 text-white font-bold mb-1">
                    <FlaskConical className="w-4 h-4 text-gray-300" />
                    <span>Life Sciences Verification Program</span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Allows academic and biotech labs to utilize protein binder design and molecular modeling under RSP compliance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1f1f1f] border border-gray-800">
                  <div className="flex items-center space-x-2 text-white font-bold mb-1">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>Cyber Defense Verification Program</span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Authorizes institutional SOCs and defensive red-teams for automated binary auditing and firmware threat modeling.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800">
              <button 
                onClick={() => setShowApplyModal(true)}
                className="w-full py-3 rounded-full bg-white text-[#111] text-xs font-bold flex items-center justify-center space-x-1.5 hover:bg-gray-200 transition-colors"
              >
                <span>Apply for Mythos 5.1 Verification</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal for Application */}
        {showApplyModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#ffffff] rounded-2xl max-w-lg w-full border border-gray-200 p-6 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-[#111] mb-2">
                Apply for Claude Mythos 5.1 Access
              </h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Organizations applying for Mythos 5.1 must complete institutional credentialing and agree to isolated VPC logging terms under Anthropic’s Responsible Scaling Policy.
              </p>

              {applicationSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm text-emerald-900">Application Received</h4>
                  <p className="text-xs text-emerald-700">
                    Our safety review team will evaluate your organization credentials and contact {applicantEmail} within 2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setShowApplyModal(false);
                      setApplicationSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#1b1b1b] text-white text-xs font-bold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#111] mb-1">Work / Institutional Email</label>
                    <input
                      type="email"
                      required
                      placeholder="researcher@university.edu or ciso@enterprise.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-gray-300 bg-[#ffffff] text-[#111] focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111] mb-1">Organization / Lab Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Stanford Bioengineering / CyberSec Defense Labs"
                      value={applicantOrg}
                      onChange={(e) => setApplicantOrg(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-gray-300 bg-[#ffffff] text-[#111] focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#111] mb-1">Primary Domain Track</label>
                    <select
                      value={researchArea}
                      onChange={(e) => setResearchArea(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-gray-300 bg-[#ffffff] text-[#111] focus:outline-none focus:border-black"
                    >
                      <option value="life-sciences">Life Sciences & Protein Synthesis (CB-1 Track)</option>
                      <option value="cyber-defense">Defensive Cyber Auditing & Vulnerability Research</option>
                      <option value="national-lab">National Laboratory / Public Sector Research</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => setShowApplyModal(false)}
                      className="px-4 py-2 rounded-lg text-xs font-medium text-gray-500 hover:text-black"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-full bg-[#1b1b1b] text-white text-xs font-bold hover:bg-black"
                    >
                      Submit Verification Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
