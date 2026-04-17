"use client";

import { useState } from "react";

const modes = [
  { id: "worlds", label: "World Forge" },
  { id: "characters", label: "Character Foundry" },
  { id: "scenes", label: "Scene Director" },
  { id: "prompts", label: "Prompt Forge" },
  { id: "posters", label: "Poster & Key Art" },
  { id: "scripts", label: "Scripts & Voice" },
  { id: "social", label: "Social Cuts" },
  { id: "godmode", label: "God Mode" },
];

export default function CreativeHub() {
  const [activeMode, setActiveMode] = useState("worlds");

  return (
    <div className="min-h-screen w-full bg-black text-white flex overflow-hidden">
      {/* Sidebar */}
      <aside
        className="w-64 bg-[rgba(10,10,20,0.65)] backdrop-blur-xl border-r border-white/10 flex flex-col"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(10,10,20,0.85))",
        }}
      >
        <div className="px-6 py-8 border-b border-white/10">
          <h1 className="text-xl font-semibold tracking-wide">
            KNOCKS HOLLYWOOD<br />
            <span className="text-cyan-300">MOTION PICTURES</span>
          </h1>
          <p className="text-xs text-slate-400 mt-2 tracking-widest">
            INFINITY‑CORE‑ENGINE
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveMode(m.id)}
              className={`w-full text-left px-6 py-3 text-sm tracking-wide transition-all ${
                activeMode === m.id
                  ? "bg-white/10 text-cyan-300 border-l-4 border-cyan-400"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {m.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 relative flex flex-col">
        {/* Header */}
        <header className="px-10 py-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            {modes.find((m) => m.id === activeMode)?.label}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Powered by the INFINITY‑CORE‑ENGINE
          </p>
        </header>

        {/* Chat + Output */}
        <div className="flex flex-1 overflow-hidden">
          {/* Chat */}
          <section className="flex-1 flex flex-col border-r border-white/10">
            <div className="flex-1 overflow-y-auto p-10 space-y-6">
              <div className="text-slate-400 text-sm">
                Your cinematic AI engine is online. Describe what you want to create.
              </div>
            </div>

            <div className="p-6 border-t border-white/10 bg-black/40 backdrop-blur-xl">
              <input
                type="text"
                placeholder="Describe a world, character, scene, or idea…"
                className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </section>

          {/* Engine Panel */}
          <aside className="w-96 bg-[rgba(10,10,20,0.65)] backdrop-blur-xl border-l border-white/10 flex flex-col">
            <div className="px-6 py-6 border-b border-white/10">
              <h3 className="text-lg font-semibold tracking-wide">Engine Panel</h3>
              <p className="text-xs text-slate-400 mt-1">
                Structured breakdowns, prompts, assets, and chains.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="text-slate-400 text-sm">
                Outputs from the INFINITY‑CORE‑ENGINE will appear here.
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
