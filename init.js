import { Engine } from "../core/engine.js";
import { BufferSystem } from "../systems/buffer.js";
import { Sync } from "../systems/sync.js";

Engine.init();
Sync.syncRepoToEngine();
console.log("Runtime initialized.");
