import React, { useState } from 'react';
import { ArrowUpRight, Check, Send, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer id="main-footer" className="clay-card rounded-t-[3rem] mt-16 pt-16 pb-12 border-t border-[var(--clay-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--clay-border)]">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl clay-elevated text-[var(--clay-accent)] flex items-center justify-center">
                <svg 
                  className="w-4 h-4 fill-current" 
                  viewBox="0 0 24 24" 
                >
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
              <span className="font-bold tracking-widest text-base uppercase font-sans text-[var(--clay-text-primary)]">
                ANTHROPIC
              </span>
            </div>
            <p className="text-xs text-[var(--clay-text-secondary)] leading-relaxed max-w-sm">
              Anthropic is an AI safety and research company that builds reliable, interpretable, and steerable AI systems.
            </p>

            {/* Newsletter Subscription in Clay Style */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--clay-text-muted)] block mb-2">
                Subscribe to Anthropic Research & Announcements
              </span>
              {subscribed ? (
                <div className="p-3.5 rounded-2xl clay-inset text-xs text-emerald-500 flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Thank you for subscribing to research updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 p-3 rounded-2xl clay-inset text-xs text-[var(--clay-text-primary)] placeholder-[var(--clay-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--clay-accent)]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-2xl clay-btn-primary text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>

            {onReplayIntro && (
              <div className="pt-2">
                <button
                  onClick={onReplayIntro}
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full clay-btn text-[11px] font-bold uppercase tracking-wider text-[var(--clay-accent)]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Replay 3-Second Clay Intro</span>
                </button>
              </div>
            )}
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            
            {/* Products */}
            <div className="space-y-3">
              <h4 className="font-bold text-[var(--clay-text-primary)] uppercase text-[10px] tracking-widest">
                Products
              </h4>
              <ul className="space-y-2 text-[var(--clay-text-secondary)]">
                <li><a href="#claude" className="hover:text-[var(--clay-accent)] transition-colors">Claude.ai</a></li>
                <li><a href="#safeguards" className="hover:text-[var(--clay-accent)] transition-colors">Claude Fable 5.1</a></li>
                <li><a href="#safeguards" className="hover:text-[var(--clay-accent)] transition-colors">Claude Mythos 5.1</a></li>
                <li><a href="#opus" className="hover:text-[var(--clay-accent)] transition-colors">Claude Opus 5</a></li>
                <li><a href="#coding-agents" className="hover:text-[var(--clay-accent)] transition-colors">Claude Code</a></li>
                <li><a href="#api" className="hover:text-[var(--clay-accent)] transition-colors">Anthropic API</a></li>
                <li><a href="#pricing" className="hover:text-[var(--clay-accent)] transition-colors">Pricing & Caching</a></li>
              </ul>
            </div>

            {/* Research */}
            <div className="space-y-3">
              <h4 className="font-bold text-[var(--clay-text-primary)] uppercase text-[10px] tracking-widest">
                Research
              </h4>
              <ul className="space-y-2 text-[var(--clay-text-secondary)]">
                <li><a href="#article-hero" className="hover:text-[var(--clay-accent)] transition-colors">Overview</a></li>
                <li><a href="#safeguards" className="hover:text-[var(--clay-accent)] transition-colors">Interpretability</a></li>
                <li><a href="#safeguards" className="hover:text-[var(--clay-accent)] transition-colors">Alignment Research</a></li>
                <li><a href="#safeguards" className="hover:text-[var(--clay-accent)] transition-colors">Responsible Scaling</a></li>
                <li><a href="#safeguards" className="hover:text-[var(--clay-accent)] transition-colors">Frontier Threats</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="font-bold text-[var(--clay-text-primary)] uppercase text-[10px] tracking-widest">
                Company
              </h4>
              <ul className="space-y-2 text-[var(--clay-text-secondary)]">
                <li><a href="#about" className="hover:text-[var(--clay-accent)] transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-[var(--clay-accent)] transition-colors flex items-center space-x-1.5">
                  <span>Careers</span>
                  <span className="text-[9px] px-2 py-0.5 clay-badge text-[var(--clay-accent)] font-bold rounded-full">Hiring</span>
                </a></li>
                <li><a href="#news" className="hover:text-[var(--clay-accent)] transition-colors">News & Press</a></li>
                <li><a href="#enterprise-safeguards" className="hover:text-[var(--clay-accent)] transition-colors">Trust Center</a></li>
                <li><a href="#availability" className="hover:text-[var(--clay-accent)] transition-colors">Contact Sales</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="font-bold text-[var(--clay-text-primary)] uppercase text-[10px] tracking-widest">
                Legal & Safety
              </h4>
              <ul className="space-y-2 text-[var(--clay-text-secondary)]">
                <li><a href="#privacy" className="hover:text-[var(--clay-accent)] transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-[var(--clay-accent)] transition-colors">Terms of Service</a></li>
                <li><a href="#usage" className="hover:text-[var(--clay-accent)] transition-colors">Usage Policy</a></li>
                <li><a href="#enterprise-safeguards" className="hover:text-[var(--clay-accent)] transition-colors">Zero Data Retention</a></li>
                <li><a href="#security" className="hover:text-[var(--clay-accent)] transition-colors">Responsible Disclosure</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--clay-text-muted)]">
          <div className="flex items-center space-x-4">
            <span>© 2026 Anthropic PBC. All rights reserved.</span>
            <span>·</span>
            <div className="flex items-center space-x-1.5 text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-[var(--clay-text-secondary)]">
            <a href="https://twitter.com/AnthropicAI" target="_blank" rel="noreferrer" className="hover:text-[var(--clay-accent)] transition-colors">X (Twitter)</a>
            <a href="https://linkedin.com/company/anthropicresearch" target="_blank" rel="noreferrer" className="hover:text-[var(--clay-accent)] transition-colors">LinkedIn</a>
            <a href="https://github.com/anthropics" target="_blank" rel="noreferrer" className="hover:text-[var(--clay-accent)] transition-colors">GitHub</a>
            <a href="https://youtube.com/@AnthropicAI" target="_blank" rel="noreferrer" className="hover:text-[var(--clay-accent)] transition-colors">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
