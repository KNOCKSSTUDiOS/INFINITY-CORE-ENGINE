export const origin = {
  core: {
    id: "INFINITY-CORE",
    version: "1.0.0",
    createdAt: Date.now(),
    laws: [
      "Nothing outside the Core can define it.",
      "Everything inside the Core can be rewritten.",
      "The Core regenerates any missing or corrupted part instantly.",
      "All subsystems are forged on demand through Origin → Forge → Pulse."
    ]
  },

  state: {
    subsystems: {},
    registry: {},
    config: {},
    healthy: true
  },

  defineConfig(config = {}) {
    this.state.config = { ...config };
  },

  registerSubsystem(name, factory) {
    if (!name || typeof factory !== "function") return;
    this.state.registry[name] = factory;
  },

  hasSubsystem(name) {
    return !!this.state.subsystems[name];
  },

  getSubsystem(name) {
    return this.state.subsystems[name] || null;
  },

  forgeSubsystem(name, context) {
    const factory = this.state.registry[name];
    if (!factory) return null;

    const instance = factory(context || this.createContext());
    this.state.subsystems[name] = instance;
    return instance;
  },

  ensureSubsystem(name, context) {
    if (this.hasSubsystem(name)) {
      return this.getSubsystem(name);
    }
    return this.forgeSubsystem(name, context);
  },

  regenerateSubsystem(name, context) {
    if (this.state.subsystems[name]) {
      delete this.state.subsystems[name];
    }
    return this.forgeSubsystem(name, context);
  },

  regenerateAll(context) {
    const names = Object.keys(this.state.subsystems);
    for (const name of names) {
      this.regenerateSubsystem(name, context);
    }
  },

  markHealthy() {
    this.state.healthy = true;
  },

  markUnhealthy() {
    this.state.healthy = false;
  },

  isHealthy() {
    return this.state.healthy === true;
  },

  createContext() {
    return {
      core: this.core,
      config: this.state.config,
      get: this.getSubsystem.bind(this),
      ensure: this.ensureSubsystem.bind(this),
      regenerate: this.regenerateSubsystem.bind(this),
      healthy: () => this.isHealthy()
    };
  }
};
