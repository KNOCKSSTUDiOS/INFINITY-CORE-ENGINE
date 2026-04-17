"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { id: "hub", label: "Creative Hub", path: "/engine" },
  { id: "worlds", label: "World Forge", path: "/engine/worlds" },
  { id: "characters", label: "Character Foundry", path: "/engine/characters" },
  { id: "scenes", label: "Scene Director", path: "/engine/scenes" },
  { id: "prompts", label: "Prompt Forge", path: "/engine/prompts" },
  { id: "posters", label: "Poster & Key Art", path: "/engine/posters" },
  { id: "scripts", label: "Script & Voice", path: "/engine/scripts" },
  { id: "social", label: "Social Cuts Lab", path: "/engine/social" },
  { id: "producer", label: "Producer Console", path: "/engine/producer" },
  { id: "godmode", label: "GOD MODE", path: "/engine/godmode" },
];

export default function EngineLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen w-full bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black/60 backdrop-blur-xl border-r border-white/10 flex flex-col">
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
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`block px-6 py-3 text-sm tracking-wide transition-all ${
                pathname === item.path
                  ? "bg-white/10 text-cyan-300 border-l-4 border-cyan-400"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
