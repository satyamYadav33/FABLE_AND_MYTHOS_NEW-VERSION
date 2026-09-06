import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, AlertCircle, Eye, ShieldCheck, FileCode, ArrowRight } from 'lucide-react';

interface LogStep {
  title: string;
  command: string;
  output: string;
  detail: string;
  type: 'terminal' | 'vision' | 'test' | 'security';
}

const DEMO_STEPS: LogStep[] = [
  {
    title: '1. Autonomous Codebase Ingestion & Plan',
    command: 'claude code --task "Audit auth token race condition and refactor session cache"',
    output: `> Scanning repo (412 files, TypeScript, PostgreSQL, Redis)
> Identified race condition in /src/auth/sessionManager.ts:84
> Plan generated:
  - Write failing concurrency test case in /tests/auth.test.ts
  - Implement distributed Redis mutex with exponential backoff
  - Inspect rendered login state in headless Chrome via Vision
  - Run full test suite & security audit`,
    detail: 'Claude Fable 5.1 parses the entire AST and generates a verifiable, test-first execution plan.',
    type: 'terminal'
  },
  {
    title: '2. Test Synthesis & Defensive Vulnerability Audit',
    command: 'npm run test:concurrency',
    output: `> Running concurrency stress harness (500 simultaneous login requests)
> [FAIL] Expected 1 valid active session, found 3 duplicate token allocations.
> Vulnerability flagged: CWE-362 (Race Condition in Session Regeneration).
> Note: Defensive patch initialized. Exploit generation restricted by Fable 5.1 safeguards.`,
    detail: 'Fable 5.1 flags real vulnerabilities defensively without generating weaponized payloads.',
    type: 'security'
  },
  {
    title: '3. Autonomous Patch & Multi-File Refactor',
    command: 'git diff src/auth/sessionManager.ts',
    output: `@@ -82,6 +82,12 @@ export async function refreshSession(userId: string) {
-  const token = await generateToken(userId);
-  await db.sessions.insert({ userId, token });
+  const lock = await redis.acquireLock(\`lock:session:\${userId}\`, 5000);
+  try {
+    const existing = await db.sessions.findActive(userId);
+    if (existing) return existing.token;
+    const token = await generateToken(userId);
+    return await db.sessions.insert({ userId, token });
+  } finally {
+    await lock.release();
+  }`,
    detail: 'Applies robust distributed locking with graceful error and lease recovery.',
    type: 'test'
  },
  {
    title: '4. Vision-Assisted UI & Session State Verification',
    command: 'claude vision --screenshot /tmp/auth-flow-verify.png',
    output: `> Headless browser snapshot captured (1920x1080)
> Vision Classifier: Verifying DOM state & session toast
> [SUCCESS] Visual confirmation: Single valid auth bearer cookie confirmed.
> [SUCCESS] No UI flickering or double-mount toast observed.
> All 128 integration tests passed (0 failures, 100% assertions met).`,
    detail: 'Uses multimodal vision to verify rendered UI states, layout integrity, and browser storage.',
    type: 'vision'
  }
];

export const AgenticCodingDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % DEMO_STEPS.length);
  };

  const reset = () => {
    setActiveStep(0);
  };

  const step = DEMO_STEPS[activeStep];

  return (
    <section id="coding-agents" className="py-12 border-b border-[var(--clay-border)]">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--clay-text-muted)] mb-2">
            Autonomous Software Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[var(--clay-text-primary)] mb-4">
            Built for Multi-Day Autonomous Problem Solving
          </h2>
          <p className="font-serif-editorial text-lg text-[var(--clay-text-secondary)] leading-[1.7]">
            Claude Fable 5.1 is engineered for sustained agentic execution. It can maintain context across extensive multi-hour sessions, create its own automated tests, discover code vulnerabilities, and inspect visual UI outputs with multimodal vision.
          </p>
        </div>

        {/* Interactive Terminal Demo with Claymorphic Frame */}
        <div className="clay-card rounded-[2.2rem] overflow-hidden shadow-2xl mb-8 p-3 sm:p-5">
          
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 rounded-2xl clay-inset flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-inner"></div>
              <span className="ml-2 text-xs font-mono text-[var(--clay-text-muted)] flex items-center space-x-1">
                <Terminal className="w-3.5 h-3.5 text-[var(--clay-accent)]" />
                <span>claude-code-session — v5.1.0-agent</span>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full clay-badge text-[10px] font-mono text-emerald-500 font-bold">
                Closed-Loop Active
              </span>
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {DEMO_STEPS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`py-2 px-3 rounded-xl text-[11px] font-bold uppercase tracking-wider text-left transition-all ${
                  activeStep === idx
                    ? 'clay-btn-primary'
                    : 'clay-btn text-[var(--clay-text-muted)]'
                }`}
              >
                <div className="text-[9px] opacity-70">Step 0{idx + 1}</div>
                <div className="truncate">{s.title.split('. ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Recessed Clay Terminal Code Body */}
          <div className="p-5 sm:p-6 rounded-2xl clay-inset font-mono text-xs sm:text-sm text-[var(--clay-text-primary)] space-y-4">
            <div>
              <span className="text-[var(--clay-accent)] font-bold select-none">$ </span>
              <span className="font-semibold text-[var(--clay-text-primary)]">{step.command}</span>
            </div>

            <pre className="whitespace-pre-wrap text-xs text-[var(--clay-text-secondary)] leading-relaxed overflow-x-auto bg-black/10 dark:bg-black/30 p-4 rounded-xl">
              {step.output}
            </pre>
          </div>

          {/* Terminal Footer with Explanation & Play Next Controls */}
          <div className="mt-4 p-3.5 rounded-2xl clay-inset flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2 text-[var(--clay-text-secondary)]">
              {step.type === 'terminal' && <FileCode className="w-4 h-4 text-[var(--clay-accent)]" />}
              {step.type === 'security' && <ShieldCheck className="w-4 h-4 text-emerald-500" />}
              {step.type === 'test' && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
              {step.type === 'vision' && <Eye className="w-4 h-4 text-amber-500" />}
              <span className="leading-snug">{step.detail}</span>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={reset}
                className="p-2 rounded-full clay-btn text-[var(--clay-text-muted)] hover:text-[var(--clay-text-primary)]"
                title="Reset agent simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={nextStep}
                className="px-4 py-1.5 clay-btn-primary text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5"
              >
                <span>{activeStep === DEMO_STEPS.length - 1 ? 'Start Over' : 'Next Step'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
