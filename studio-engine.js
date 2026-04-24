window.runStudioPipeline = async function (script) {
  const core = window.createInfinityCoreEngine(script); // from your repo

  const motionPlan = MotionEngine.plan(core);
  const atmospherePlan = AtmosphereEngine.plan(core);
  const soundPlan = SoundstageEngine.plan(core);
  const logoIntro = LogoEngine.buildIntro();
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

Core Status: ${core.status || "OK"}

Motion Plan: ${JSON.stringify(motionPlan, null, 2)}
Atmosphere: ${JSON.stringify(atmospherePlan, null, 2)}
Sound: ${JSON.stringify(soundPlan, null, 2)}
Intro: ${JSON.stringify(logoIntro, null, 2)}

Final Video:
${finalVideo}
`;
};
