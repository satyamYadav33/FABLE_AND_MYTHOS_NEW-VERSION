import React, { useState } from 'react';
import { ArrowUpRight, Check, Send, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer id="main-footer" className="bg-[#141414] text-[#fafafa] pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <svg 
                className="w-5 h-5 text-white" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
              <span className="font-bold tracking-widest text-base uppercase font-sans text-white">
                ANTHROPIC
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Anthropic is an AI safety and research company that builds reliable, interpretable, and steerable AI systems.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                Subscribe to Anthropic Research & Announcements
              </span>
              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-gray-900 border border-gray-800 text-xs text-emerald-400 flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Thank you for subscribing to research updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[#1b1b1b] border border-gray-800 rounded-l-full px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-200 text-[#111] px-5 py-2.5 rounded-r-full text-xs font-bold transition-colors flex items-center space-x-1"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            
            {/* Products */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">
                Products
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#claude" className="hover:text-white transition-colors">Claude.ai</a></li>
                <li><a href="#fable" className="hover:text-white transition-colors">Claude Fable 5.1</a></li>
                <li><a href="#mythos" className="hover:text-white transition-colors">Claude Mythos 5.1</a></li>
                <li><a href="#opus" className="hover:text-white transition-colors">Claude Opus 5</a></li>
                <li><a href="#code" className="hover:text-white transition-colors">Claude Code</a></li>
                <li><a href="#api" className="hover:text-white transition-colors">Anthropic API</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Caching</a></li>
              </ul>
            </div>

            {/* Research */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">
                Research
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#interpretability" className="hover:text-white transition-colors">Interpretability</a></li>
                <li><a href="#alignment" className="hover:text-white transition-colors">Alignment Research</a></li>
                <li><a href="#scaling" className="hover:text-white transition-colors">Responsible Scaling Policy</a></li>
                <li><a href="#frontier" className="hover:text-white transition-colors">Frontier Threats</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">
                Company
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors flex items-center space-x-1.5">
                  <span>Careers</span>
                  <span className="text-[9px] px-2 py-0.5 bg-white text-black font-bold rounded-full">Hiring</span>
                </a></li>
                <li><a href="#news" className="hover:text-white transition-colors">News & Press</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Trust Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">
                Legal & Safety
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#usage" className="hover:text-white transition-colors">Usage Policy</a></li>
                <li><a href="#zdr" className="hover:text-white transition-colors">Zero Data Retention</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Responsible Disclosure</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <span>© 2026 Anthropic PBC. All rights reserved.</span>
            <span>·</span>
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-gray-400">
            <a href="https://twitter.com/AnthropicAI" className="hover:text-white transition-colors">X (Twitter)</a>
            <a href="https://linkedin.com/company/anthropicresearch" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/anthropics" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://youtube.com/@AnthropicAI" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
