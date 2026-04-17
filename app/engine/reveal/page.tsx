"use client";

import { useEffect, useState } from "react";

export default function EngineReveal() {
  const [phase, setPhase] = useState<"boot" | "calibrate" | "activate" | "open">("boot");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("calibrate"), 1600);
    const t2 = setTimeout(() => setPhase("activate"), 3200);
    const t3 = setTimeout(() => setPhase("open"), 5200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-black text-white overflow-hidden relative flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 20% 0%, rgba(0,255,255,0.12), transparent 55%), radial-gradient(circle at 80% 100%, rgba(255,0,128,0.18), transparent 60%), radial-gradient(circle at 50% 50%, #02010a 0, #02010a 40%, #000 100%)",
      }}
    >
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

      {/* Particle / energy field */}
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full blur-3xl bg-cyan-500/30 animate-pulse" />
        <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full blur-3xl bg-fuchsia-500/25 animate-pulse" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-indigo-500/25 animate-ping" />
      </div>

      {/* Central engine core */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
        {/* Engine rings */}
        <div className="relative h-64 w-64 md:h-80 md:w-80">
          {/* Outer ring */}
          <div
            className={`absolute inset-0 rounded-full border border-cyan-400/40 shadow-[0_0_60px_rgba(34,211,238,0.45)] transition-transform duration-[2600ms] ease-out ${
              phase === "boot" ? "scale-75 opacity-40" : "scale-100 opacity-100 animate-spin-slow"
            }`}
          />
          {/* Middle ring */}
          <div
            className={`absolute inset-6 rounded-full border border-fuchsia-400/40 shadow-[0_0_50px_rgba(232,121,249,0.45)] transition-transform duration-[2600ms] ease-out ${
              phase === "boot" ? "scale-50 opacity-30" : "scale-100 opacity-100 animate-spin-reverse-slow"
            }`}
          />
          {/* Inner ring */}
          <div
            className={`absolute inset-12 rounded-full border border-indigo-300/60 shadow-[0_0_40px_rgba(129,140,248,0.7)] transition-all duration-[2200ms] ease-out ${
              phase === "activate" || phase === "open"
                ? "scale-100 opacity-100"
                : "scale-50 opacity-40"
            }`}
          />
          {/* Core */}
          <div
            className={`absolute inset-[30%] rounded-full bg-[radial-gradient(circle_at_30%_0%,#e0f2fe,transparent_55%),radial-gradient(circle_at_70%_100%,#f5d0fe,transparent_55%),radial-gradient(circle_at_center,#0f172a,#020617)] shadow-[0_0_80px_rgba(59,130,246,0.9)] transition-all duration-[1800ms] ${
              phase === "open" ? "scale-110 opacity-100" : "scale-90 opacity-90"
            }`}
          />
          {/* Core pulse */}
          <div
            className={`absolute inset-[32%] rounded-full border border-cyan-200/40 animate-ping ${
              phase === "activate" || phase === "open" ? "opacity-80" : "opacity-0"
            }`}
          />
        </div>

        {/* Text stack */}
        <div className="space-y-4 max-w-3xl">
          {/* Studio name */}
          <div className="text-xs tracking-[0.35em] uppercase text-slate-300/70">
            Hollywood Imaging Studio
          </div>

          {/* Main line */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            {phase === "boot" && (
              <span className="text-slate-100">
                Initializing <span className="text-cyan-300">Studio Engine</span>…
              </span>
            )}
            {phase === "calibrate" && (
              <span className="text-slate-100">
                Calibrating to your{" "}
                <span className="text-fuchsia-300">creative DNA</span>…
              </span>
            )}
            {phase === "activate" && (
              <span className="text-slate-100">
                Activating{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                  Ultra Instinct God Mode
                </span>
                .
              </span>
            )}
            {phase === "open" && (
              <span className="text-slate-50">
                Your{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                  cinematic AI engine
                </span>{" "}
                is online.
              </span>
            )}
          </h1>

          {/* Subcopy */}
          <p className="text-sm md:text-base text-slate-300/80 leading-relaxed">
            Forge worlds, characters, scenes, and realities that rival and surpass the
            biggest studios on Earth. This isn&apos;t a dashboard. It&apos;s a
            supercharged, quadruple‑turbo creation core tuned to you.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className={`px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-500 ${
              phase === "open"
                ? "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:shadow-[0_0_60px_rgba(244,114,182,0.9)] hover:-translate-y-0.5"
                : "bg-slate-700/60 text-slate-300 cursor-wait"
            }`}
            disabled={phase !== "open"}
            onClick={() => {
              // Navigate to Creation Hub (replace with your router)
              window.location.href = "/engine";
            }}
          >
            Enter the Engine
          </button>

          <div className="text-xs text-slate-400/80">
            {phase !== "open" ? (
              <span>Stand by — aligning systems with your profile…</span>
            ) : (
              <span>Worlds, characters, scenes, prompts, and more — all under your command.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
Add these to your global CSS (e.g., globals.css) for the slow spins:

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-reverse-slow {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.animate-spin-slow {
  animation: spin-slow 26s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin-reverse-slow 32s linear infinite;
}
*/
