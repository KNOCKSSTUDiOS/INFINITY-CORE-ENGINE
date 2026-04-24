window.runStudioPipeline = async function (script) {
  if (typeof window.createInfinityCoreEngine !== "function") {
    throw new Error("createInfinityCoreEngine not found. Check engine-core.js binding.");
  }

  const core = window.createInfinityCoreEngine(script);

  const motionPlan = MotionEngine.plan(core, script);
  const atmospherePlan = AtmosphereEngine.plan(core, script);
  const soundPlan = SoundstageEngine.plan(core, script);
  const logoIntro = LogoEngine.buildIntro(core);
  const finalVideo = await RenderEngine.export({
    core,
    motionPlan,
    atmospherePlan,
    soundPlan,
    logoIntro
  });

  return `
KNOCKSSTUDiOS Hollywood MOTiON Pictures
HollywoodImaging.studio
======================================

Core Status: ${core.status || "OK"}
Core Timestamp: ${core.timestamp || new Date().toISOString()}

Motion Plan:
${JSON.stringify(motionPlan, null, 2)}

Atmosphere Plan:
${JSON.stringify(atmospherePlan, null, 2)}

Soundstage Plan:
${JSON.stringify(soundPlan, null, 2)}

Intro Blueprint:
${JSON.stringify(logoIntro, null, 2)}

Final Video Artifact:
${finalVideo}
`;
};
