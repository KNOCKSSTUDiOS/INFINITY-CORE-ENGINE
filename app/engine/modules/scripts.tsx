"use client";

import { useState } from "react";

export default function ScriptStageModule() {
  const [scriptInput, setScriptInput] = useState("");
  const [scriptOutput, setScriptOutput] = useState(null);

  const handleGenerate = () => {
    if (!scriptInput.trim()) return;

    // Placeholder for INFINITY‑CORE‑ENGINE integration
    setScriptOutput({
      title: "Generated Script Package",
      summary:
        "Your INFINITY‑CORE‑ENGINE script, dialogue, and voice direction will appear here once integrated.",
      beats: [
        "Opening beat",
        "Inciting incident",
        "Rising tension",
        "Climax moment",
        "Resolution",
      ],
      dialogue: [
        "Sample dialogue line 1",
        "Sample dialogue line 2",
        "Sample dialogue line 3",
      ],
      voice: [
        "Narration tone",
        "Character voice direction",
        "Trailer VO style",
      ],
      prompts: {
        screenplay: "Screenplay‑ready scene prompt",
        dialogue: "Dialogue‑focused prompt",
        voice: "Voiceover‑ready prompt",
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Input */}
      <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <h3 className="text-xl font-semibold tracking-wide">Script & Voice Stage</h3>
        <p className="text-slate-400 text-sm mt-1">
          Describe a scene, emotion, or moment. The engine will write it.
        </p>

        <div className="mt-4 flex gap-3">
          <input
            type="text"
            value={scriptInput}
            onChange={(e) => setScriptInput(e.target.value)}
            placeholder="Example: Two rivals confront each other on a rooftop at sunset…"
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-red-400"
          />
          <button
            onClick={handleGenerate}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-400 via-cyan-400 to-indigo-400 text-black font-medium hover:opacity-90 transition"
          >
            Write
          </button>
        </div>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {!scriptOutput && (
          <div className="text-slate-500 text-sm">
            Your script package will appear here once generated.
          </div>
        )}

        {scriptOutput && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">{scriptOutput.title}</h4>

            <p className="text-slate-300">{scriptOutput.summary}</p>

            <div>
              <h5 className="text-lg font-semibold mb-2">Story Beats</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {scriptOutput.beats.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Dialogue Samples</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {scriptOutput.dialogue.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Voice Direction</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {scriptOutput.voice.map((v, i) => (
                  <li key={i}>• {v}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Model‑Ready Prompts</h5>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <span className="text-red-300 font-medium">Screenplay:</span>{" "}
                  {scriptOutput.prompts.screenplay}
                </li>
                <li>
                  <span className="text-cyan-300 font-medium">Dialogue:</span>{" "}
                  {scriptOutput.prompts.dialogue}
                </li>
                <li>
                  <span className="text-indigo-300 font-medium">Voice:</span>{" "}
                  {scriptOutput.prompts.voice}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
