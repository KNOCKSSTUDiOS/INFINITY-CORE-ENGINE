import { origin } from "./origin.js";

export const manifest = {
  listRegistry() {
    return Object.keys(origin.state.registry);
  },

  listActive() {
    return Object.keys(origin.state.subsystems);
  },

  snapshot() {
    return {
      registry: this.listRegistry(),
      active: this.listActive(),
      config: { ...origin.state.config },
      healthy: origin.isHealthy()
    };
  }
};
