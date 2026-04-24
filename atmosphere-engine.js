const AtmosphereEngine = {
  plan(core, script) {
    const hasDarkWords = /dark|night|shadow|void|unknown|fear/i.test(script);
    const hasBrightWords = /light|hope|dawn|sunrise|sky|glow/i.test(script);

    return {
      fogDensity: hasDarkWords ? 0.7 : 0.3,
      lightRays: hasBrightWords,
      particleIntensity: 0.6,
      depthLayers: 4,
      colorTemperature: hasDarkWords ? "cool" : "neutral",
      notes: "Atmosphere tuned from script tone keywords."
    };
  }
};

window.AtmosphereEngine = AtmosphereEngine;
