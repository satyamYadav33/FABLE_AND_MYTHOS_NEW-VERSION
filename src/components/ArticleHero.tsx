import React, { useState, useEffect, useRef } from 'react';
import { Share2, Link2, Check, Bookmark, Twitter, Linkedin, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ArticleHeroProps {
  fontSize: 'normal' | 'large';
  onToggleFontSize: () => void;
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({ fontSize, onToggleFontSize }) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Procedural Generative Art in Anthropic's Claymorphic style
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

    const isDark = theme === 'dark';

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Adaptive clay canvas background
      ctx.fillStyle = isDark ? '#191b22' : '#f0ece3';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clay grid coordinates
      ctx.lineWidth = 1;
      const gridColor = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(180, 168, 146, 0.35)';
      for (let i = 24; i < canvas.width; i += 48) {
        ctx.strokeStyle = gridColor;
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 24; j < canvas.height; j += 48) {
        ctx.strokeStyle = gridColor;
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      // 3D Inflated harmonic wave bands with tactile relief
      const layers = isDark
        ? [
            { color: 'rgba(255, 107, 74, 0.07)', speed: 0.8, freq: 0.006, amp: 45, yOffset: 40 },
            { color: 'rgba(255, 255, 255, 0.05)', speed: 0.5, freq: 0.010, amp: 35, yOffset: 70 },
            { color: 'rgba(255, 107, 74, 0.12)', speed: 1.1, freq: 0.014, amp: 26, yOffset: 0 },
          ]
        : [
            { color: 'rgba(217, 83, 47, 0.08)', speed: 0.8, freq: 0.006, amp: 45, yOffset: 40 },
            { color: 'rgba(50, 40, 30, 0.06)', speed: 0.5, freq: 0.010, amp: 35, yOffset: 70 },
            { color: 'rgba(217, 83, 47, 0.15)', speed: 1.1, freq: 0.014, amp: 26, yOffset: 0 },
          ];

      layers.forEach((layer) => {
        ctx.fillStyle = layer.color;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 10) {
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
      ctx.strokeStyle = isDark ? '#f2f3f7' : '#1f1f23';
      ctx.lineWidth = 1.5;

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

      ctx.strokeStyle = isDark ? 'rgba(255, 107, 74, 0.3)' : 'rgba(217, 83, 47, 0.3)';
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
  }, [theme]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="article-hero" className="pt-6 pb-12 border-b border-[var(--clay-border)]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        
        {/* Breadcrumb & Metadata Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full clay-badge text-[10px] font-bold uppercase tracking-widest text-[var(--clay-accent)]">
            Product Announcement
          </span>
          <span className="text-xs font-medium text-[var(--clay-text-muted)]">•</span>
          <span className="text-xs font-medium text-[var(--clay-text-secondary)] italic">September 1, 2026</span>
          <span className="text-xs font-medium text-[var(--clay-text-muted)]">•</span>
          <span className="text-xs font-medium text-[var(--clay-text-secondary)]">7 min read</span>
          <span className="ml-auto hidden sm:inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[var(--clay-text-muted)]">
            Series 5.1
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          id="article-main-title"
          className="text-4xl sm:text-5xl lg:text-[66px] font-serif leading-[1.08] tracking-tight mb-6 text-[var(--clay-text-primary)]"
        >
          Claude: Fable and <br className="hidden sm:inline" /> Mythos 5.1
        </h1>

        {/* Subtitle / Lead Paragraph */}
        <p className="text-xl sm:text-2xl text-[var(--clay-text-secondary)] max-w-2xl font-light leading-relaxed mb-8 font-serif-editorial">
          An evaluation of narrative intelligence, autonomous agentic software engineering, and the expansion of model personality.
        </p>

        {/* Author / Date / Action Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-3xl clay-card text-sm mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl clay-elevated text-[var(--clay-accent)] flex items-center justify-center font-serif text-base font-bold">
              A
            </div>
            <div>
              <p className="font-bold text-xs uppercase tracking-wider text-[var(--clay-text-primary)]">Anthropic Research</p>
              <p className="text-[11px] text-[var(--clay-text-muted)]">San Francisco, CA</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="font-size-toggle-btn"
              onClick={onToggleFontSize}
              className="px-3.5 py-1.5 clay-btn text-[11px] font-bold uppercase tracking-wider text-[var(--clay-text-secondary)]"
              title="Toggle reading text size"
            >
              Text: {fontSize === 'large' ? 'Large' : 'Normal'}
            </button>

            <button
              id="bookmark-btn"
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-full clay-btn transition-colors ${
                bookmarked ? 'text-[var(--clay-accent)]' : 'text-[var(--clay-text-muted)]'
              }`}
              title="Bookmark article"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <button
              id="copy-link-btn"
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 clay-btn text-[11px] font-bold uppercase tracking-wider text-[var(--clay-text-primary)]"
              title="Copy URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Link2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Hero Graphic Canvas Banner with Clay Frame */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden clay-card mb-8 group p-2">
          <div className="rounded-[2.2rem] overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-[280px] sm:h-[340px] block" />
          </div>
          
          <div className="absolute bottom-6 left-6 max-w-md clay-card p-4 rounded-2xl text-xs backdrop-blur-md">
            <div className="flex items-center space-x-2 font-bold uppercase tracking-widest text-[10px] text-[var(--clay-accent)] mb-1">
              <Sparkles className="w-3 h-3" />
              <span>Unified Dual-Frontier Architecture</span>
            </div>
            <p className="text-[var(--clay-text-secondary)] text-[11px] leading-relaxed">
              Claude Fable 5.1 (General Availability) & Claude Mythos 5.1 (Restricted Trusted Access for Life Sciences & Cyber).
            </p>
          </div>

          <div className="absolute top-6 right-6 hidden sm:flex items-center space-x-2 clay-btn-primary text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>GA: Sept 1, 2026</span>
          </div>
        </div>

        {/* Feature quick badges in Claymorphism */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-5 rounded-3xl clay-card clay-card-hover">
            <div className="font-bold text-[var(--clay-text-primary)] text-2xl font-mono">82.4%</div>
            <div className="text-[var(--clay-text-muted)] text-[10px] uppercase tracking-wider font-bold mt-1">SWE-bench Pro</div>
          </div>
          <div className="p-5 rounded-3xl clay-card clay-card-hover">
            <div className="font-bold text-[var(--clay-accent)] text-2xl font-mono">-75%</div>
            <div className="text-[var(--clay-text-muted)] text-[10px] uppercase tracking-wider font-bold mt-1">Cache Read Cost</div>
          </div>
          <div className="p-5 rounded-3xl clay-card clay-card-hover">
            <div className="font-bold text-[var(--clay-text-primary)] text-2xl font-mono">1853 Elo</div>
            <div className="text-[var(--clay-text-muted)] text-[10px] uppercase tracking-wider font-bold mt-1">GDPval-AA v2</div>
          </div>
          <div className="p-5 rounded-3xl clay-card clay-card-hover">
            <div className="font-bold text-[var(--clay-text-primary)] text-2xl font-mono">Zero ZDR</div>
            <div className="text-[var(--clay-text-muted)] text-[10px] uppercase tracking-wider font-bold mt-1">Enterprise Privacy</div>
          </div>
        </div>

      </div>
    </section>
  );
};
