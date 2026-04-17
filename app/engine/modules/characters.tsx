"use client";

import { useState } from "react";

export default function CharacterFoundryModule() {
  const [charInput, setCharInput] = useState("");
  const [charOutput, setCharOutput] = useState(null);

  const handleGenerate = () => {
    if (!charInput.trim()) return;

    // Placeholder for INFINITY‑CORE‑ENGINE integration
    setCharOutput({
      name: "Generated Character",
      summary:
        "Your INFINITY‑CORE‑ENGINE character output will appear here once integrated.",
      traits: [
        "Personality",
        "Motivations",
        "Flaws",
        "Strengths",
        "Backstory",
        "Role in world",
      ],
      visuals: [
        "Face structure",
        "Body type",
        "Clothing style",
        "Color palette",
        "Lighting style",
        "Pose / Expression",
      ],
      prompts: [
        "Veo-ready character prompt",
        "Runway-ready portrait prompt",
        "Flux/Firefly/Fabrica stylized prompt",
      ],
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Input */}
      <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <h3 className="text-xl font-semibold tracking-wide">Character Foundry</h3>
        <p className="text-slate-400 text-sm mt-1">
          Describe a character, style, personality, or role. The engine will forge them.
        </p>

        <div className="mt-4 flex gap-3">
          <input
            type="text"
            value={charInput}
            onChange={(e) => setCharInput(e.target.value)}
            placeholder="Example: A cyberpunk street samurai with neon tattoos and a tragic past…"
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-400"
          />
          <button
            onClick={handleGenerate}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-indigo-400 text-black font-medium hover:opacity-90 transition"
          >
            Forge
          </button>
        </div>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {!charOutput && (
          <div className="text-slate-500 text-sm">
            Your character will appear here once generated.
          </div>
        )}

        {charOutput && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">{charOutput.name}</h4>

            <p className="text-slate-300">{charOutput.summary}</p>

            <div>
              <h5 className="text-lg font-semibold mb-2">Core Traits</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {charOutput.traits.map((t, i) => (
                  <li key={i}>• {t}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Visual Breakdown</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {charOutput.visuals.map((v, i) => (
                  <li key={i}>• {v}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Cinematic Prompts</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {charOutput.prompts.map((p, i) => (
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
