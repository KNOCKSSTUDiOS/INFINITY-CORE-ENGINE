"use client";

import { useState } from "react";

export default function WorldForgeModule() {
  const [worldInput, setWorldInput] = useState("");
  const [worldOutput, setWorldOutput] = useState(null);

  const handleGenerate = () => {
    if (!worldInput.trim()) return;

    // Placeholder for INFINITY‑CORE‑ENGINE integration
    setWorldOutput({
      title: "Generated World",
      description:
        "Your INFINITY‑CORE‑ENGINE world output will appear here once integrated.",
      visuals: [
        "Atmosphere",
        "Architecture",
        "Culture",
        "Technology",
        "Energy",
        "Environment",
      ],
      prompts: [
        "Veo-ready cinematic world prompt",
        "Runway-ready environment prompt",
        "Flux/Firefly/Fabrica visual prompt",
      ],
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Input */}
      <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <h3 className="text-xl font-semibold tracking-wide">World Forge</h3>
        <p className="text-slate-400 text-sm mt-1">
          Describe a universe, city, planet, or timeline. The engine will forge it.
        </p>

        <div className="mt-4 flex gap-3">
          <input
            type="text"
            value={worldInput}
            onChange={(e) => setWorldInput(e.target.value)}
            placeholder="Example: A neon-drenched megacity ruled by AI syndicates…"
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
          <button
            onClick={handleGenerate}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 text-black font-medium hover:opacity-90 transition"
          >
            Forge
          </button>
        </div>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {!worldOutput && (
          <div className="text-slate-500 text-sm">
            Your world will appear here once generated.
          </div>
        )}

        {worldOutput && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">{worldOutput.title}</h4>

            <p className="text-slate-300">{worldOutput.description}</p>

            <div>
              <h5 className="text-lg font-semibold mb-2">Core Visuals</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {worldOutput.visuals.map((v, i) => (
                  <li key={i}>• {v}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Cinematic Prompts</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {worldOutput.prompts.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
