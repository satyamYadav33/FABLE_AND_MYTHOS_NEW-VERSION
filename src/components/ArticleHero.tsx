import React, { useState, useEffect, useRef } from 'react';
import { Share2, Link2, Check, Bookmark, Twitter, Linkedin, Sparkles, Shield, Cpu, Zap } from 'lucide-react';

interface ArticleHeroProps {
  fontSize: 'normal' | 'large';
  onToggleFontSize: () => void;
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({ fontSize, onToggleFontSize }) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Procedural Generative Art in Anthropic's clean minimalist style
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = 340;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Clean warm stone background
      ctx.fillStyle = '#f2efe9';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw clean subtle architectural grid lines
      ctx.lineWidth = 1;
      for (let i = 24; i < canvas.width; i += 48) {
        ctx.strokeStyle = 'rgba(212, 209, 198, 0.45)';
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 24; j < canvas.height; j += 48) {
        ctx.strokeStyle = 'rgba(212, 209, 198, 0.45)';
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      // Minimalist organic harmonic wave bands
      const layers = [
        { color: 'rgba(27, 27, 27, 0.04)', speed: 0.8, freq: 0.006, amp: 40, yOffset: 40 },
        { color: 'rgba(27, 27, 27, 0.07)', speed: 0.5, freq: 0.010, amp: 30, yOffset: 70 },
        { color: 'rgba(27, 27, 27, 0.12)', speed: 1.1, freq: 0.014, amp: 22, yOffset: 0 },
      ];

      layers.forEach((layer) => {
        ctx.fillStyle = layer.color;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 12) {
          const y =
            canvas.height * 0.55 +
            Math.sin(x * layer.freq + time * layer.speed) * layer.amp +
            Math.cos(x * 0.003 - time * 0.4) * (layer.amp * 0.3) +
            layer.yOffset;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();
      });

      // Geometric star/delta glyph accent
      const centerX = canvas.width * 0.72;
      const centerY = canvas.height * 0.48;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.08);

      const numPoints = 8;
      const radius = 80 + Math.sin(time * 1.5) * 6;
      ctx.strokeStyle = '#1b1b1b';
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      for (let i = 0; i < numPoints; i++) {
        const angle = (i * Math.PI * 2) / numPoints;
        const r = i % 2 === 0 ? radius : radius * 0.4;
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      ctx.strokeStyle = 'rgba(27, 27, 27, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.3, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="article-hero" className="pt-8 pb-12 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb & Metadata Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-2 py-0.5 border border-gray-300 text-[10px] font-bold uppercase tracking-widest text-gray-700">
            Product Announcement
          </span>
          <span className="text-xs font-medium text-gray-400">•</span>
          <span className="text-xs font-medium text-gray-500 italic">September 1, 2026</span>
          <span className="text-xs font-medium text-gray-400">•</span>
          <span className="text-xs font-medium text-gray-500">7 min read</span>
          <span className="ml-auto hidden sm:inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Series 5.1
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          id="article-main-title"
          className="text-4xl sm:text-5xl lg:text-[68px] font-serif leading-[1.05] tracking-tight mb-6 text-[#111]"
        >
          Claude: Fable and <br className="hidden sm:inline" /> Mythos 5.1
        </h1>

        {/* Subtitle / Lead Paragraph */}
        <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl font-light leading-relaxed mb-8">
          An evaluation of narrative intelligence, autonomous agentic software engineering, and the expansion of model personality.
        </p>

        {/* Author / Date / Action Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-gray-200 text-sm text-[#2c2c2c] mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#1b1b1b] text-white flex items-center justify-center font-serif text-sm font-semibold">
              A
            </div>
            <div>
              <p className="font-semibold text-xs uppercase tracking-wider text-[#111]">Anthropic Research</p>
              <p className="text-[11px] text-gray-400">San Francisco, CA</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="font-size-toggle-btn"
              onClick={onToggleFontSize}
              className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-gray-300 text-gray-600 hover:border-gray-500 hover:bg-[#e8e6df]/30 transition-colors"
              title="Toggle reading text size"
            >
              Text: {fontSize === 'large' ? 'Large' : 'Normal'}
            </button>

            <button
              id="bookmark-btn"
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-1.5 rounded-full border transition-colors ${
                bookmarked ? 'bg-[#1b1b1b] border-[#1b1b1b] text-white' : 'border-gray-300 text-gray-600 hover:bg-[#e8e6df]/30'
              }`}
              title="Bookmark article"
            >
              <Bookmark className="w-3.5 h-3.5" />
            </button>

            <button
              id="copy-link-btn"
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-full border border-gray-300 text-[11px] font-bold uppercase tracking-wider text-[#1b1b1b] hover:bg-[#e8e6df]/30 transition-colors"
              title="Copy URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Link2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Hero Graphic Canvas Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 mb-6 group bg-[#f2efe9]">
          <canvas ref={canvasRef} className="w-full h-[280px] sm:h-[340px] block" />
          
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 max-w-md bg-[#f9f8f4]/95 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-200 text-xs text-[#1b1b1b]">
            <div className="flex items-center space-x-2 font-bold uppercase tracking-widest text-[10px] text-gray-500 mb-1">
              <Sparkles className="w-3 h-3 text-[#1b1b1b]" />
              <span>Unified Dual-Frontier Architecture</span>
            </div>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              Claude Fable 5.1 (General Availability) & Claude Mythos 5.1 (Restricted Trusted Access for Life Sciences & Cyber).
            </p>
          </div>

          <div className="absolute top-5 right-5 hidden sm:flex items-center space-x-2 bg-[#1b1b1b] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>GA: Sept 1, 2026</span>
          </div>
        </div>

        {/* Feature quick badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
          <div className="p-4 rounded-xl bg-[#ffffff] border border-gray-200">
            <div className="font-bold text-[#111] text-base font-mono">82.4%</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-wider font-bold mt-1">SWE-bench Pro</div>
          </div>
          <div className="p-4 rounded-xl bg-[#ffffff] border border-gray-200">
            <div className="font-bold text-[#111] text-base font-mono">-75%</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-wider font-bold mt-1">Cache Read Cost</div>
          </div>
          <div className="p-4 rounded-xl bg-[#ffffff] border border-gray-200">
            <div className="font-bold text-[#111] text-base font-mono">1853 Elo</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-wider font-bold mt-1">GDPval-AA v2</div>
          </div>
          <div className="p-4 rounded-xl bg-[#ffffff] border border-gray-200">
            <div className="font-bold text-[#111] text-base font-mono">Zero ZDR</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-wider font-bold mt-1">Enterprise Privacy</div>
          </div>
        </div>

      </div>
    </section>
  );
};
