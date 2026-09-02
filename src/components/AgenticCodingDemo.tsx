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
  const [autoPlay, setAutoPlay] = useState(false);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % DEMO_STEPS.length);
  };

  const reset = () => {
    setActiveStep(0);
    setAutoPlay(false);
  };

  const step = DEMO_STEPS[activeStep];

  return (
    <section id="coding-agents" className="py-12 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
            Autonomous Software Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#111] mb-4">
            Built for Multi-Day Autonomous Problem Solving
          </h2>
          <p className="font-serif-editorial text-lg text-[#2c2c2c] leading-[1.65]">
            Claude Fable 5.1 is engineered for sustained agentic execution. It can maintain context across extensive multi-hour sessions, create its own automated tests, discover code vulnerabilities, and inspect visual UI outputs with multimodal vision.
          </p>
        </div>

        {/* Interactive Terminal Demo */}
        <div className="bg-[#141414] text-[#fafafa] rounded-2xl border border-gray-800 overflow-hidden shadow-xl mb-8">
          
          {/* Terminal Window Chrome */}
          <div className="bg-[#1b1b1b] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-gray-400">
                claude-code — session: fable-5-1-agent
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={reset}
                className="p-1 text-gray-400 hover:text-white transition-colors rounded hover:bg-gray-800"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextStep}
                className="flex items-center space-x-1.5 px-3 py-1 rounded bg-[#ffffff] text-[#111] text-xs font-bold hover:bg-gray-200 transition-colors"
              >
                <span>Next Step ({activeStep + 1}/{DEMO_STEPS.length})</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-gray-800 bg-[#171717] text-xs font-mono">
            {DEMO_STEPS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 text-left transition-colors border-r border-gray-800 last:border-r-0 ${
                  activeStep === idx 
                    ? 'bg-[#222222] text-white font-bold border-b-2 border-b-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="text-[10px] text-gray-500 mb-0.5">STEP 0{idx + 1}</div>
                <div className="truncate">{s.title.split('. ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-xs space-y-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-gray-100">{step.command}</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0b0b0b] border border-gray-800/80 text-gray-300 whitespace-pre-wrap leading-relaxed font-mono">
              {step.output}
            </div>

            {/* Step Explanation Callout */}
            <div className="p-3 rounded-lg bg-[#222222] border border-gray-700 flex items-start space-x-2.5 text-xs text-gray-200">
              {step.type === 'vision' ? (
                <Eye className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
              ) : step.type === 'security' ? (
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <FileCode className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
              )}
              <div>
                <span className="font-bold text-white mr-1.5">{step.title}:</span>
                <span className="text-gray-300">{step.detail}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Key Coding Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-[#ffffff] border border-gray-200">
            <h4 className="font-bold text-sm text-[#111] mb-1.5 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#1b1b1b]"></span>
              <span>Vision in the Loop</span>
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Fable 5.1 inspects rendered browsers, Figma mocks, and UI components in real-time, catching CSS alignment and visual defects before deployment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#ffffff] border border-gray-200">
            <h4 className="font-bold text-sm text-[#111] mb-1.5 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>60% Fewer False Positives</span>
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Calibrated classifiers differentiate between benign security audits (e.g. penetration tests, auth refactors) and harmful exploit scripts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#ffffff] border border-gray-200">
            <h4 className="font-bold text-sm text-[#111] mb-1.5 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              <span>Multi-Day Autonomous Jobs</span>
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Designed to execute as a managed background agent across dozens of integrated enterprise toolchains and CLI environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
