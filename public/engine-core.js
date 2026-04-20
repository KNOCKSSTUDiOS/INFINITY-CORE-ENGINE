function createInfinityCoreEngine() {
  const root = {
    owner: 'KNOCKS',
    mode: 'MASTER-ARCHITECT',
    state: 'FULLY-ASSEMBLED',
    createdAt: new Date().toISOString()
  };

  const frame = {
    elements: [
      {
        id: 'element_01',
        type: 'CORE-FORM',
        role: 'FOUNDATION',
        status: 'INSTALLED',
        owner: 'KNOCKS'
      }
    ],
    nextSlot: 'element_02'
  };

  const systems = [
    {
      id: 'system_01',
      name: 'CORE-SYSTEM',
      role: 'PRIMARY SYSTEM',
      status: 'BUILT',
      bindsTo: 'CORE-FORM'
    },
    {
      id: 'system_02',
      name: 'STRUCTURE-SYSTEM',
      role: 'SECONDARY SYSTEM',
      status: 'BUILT',
      bindsTo: 'CORE-SYSTEM'
    },
    {
      id: 'system_03',
      name: 'FUNCTION-SYSTEM',
      role: 'ACTION + CAPABILITY ENGINE',
      status: 'BUILT',
      bindsTo: 'STRUCTURE-SYSTEM'
    }
  ];

  const sentinel = {
    identity: 'SENTINEL-PRIME',
    owner: 'KNOCKS',
    mode: 'ROOT',
    state: 'ACTIVE',
    binding: 'ABSOLUTE'
  };

  const engine = {
    kernel: {
      mode: 'ROOT',
      function: 'PROCESS + EXECUTE'
    },
    loop: {
      state: 'READY',
      type: 'RUNTIME',
      heartbeat: 'STABLE'
    },
    links: {
      rootToFrame: true,
      frameToSystems: true,
      systemsToSentinel: true,
      sentinelToOwner: true
    }
  };

  return { root, frame, systems, sentinel, engine };
}

function formatInfinityCoreEngine(core) {
  const lines = [];

  lines.push('INFINITY-CORE-ENGINE');
  lines.push('============================================================');
  lines.push(`OWNER: ${core.root.owner}`);
  lines.push(`MODE: ${core.root.mode}`);
  lines.push(`STATE: ${core.root.state}`);
  lines.push(`CREATED: ${core.root.createdAt}`);
  lines.push('------------------------------------------------------------');
  lines.push('FRAME:');
  core.frame.elements.forEach(el => {
    lines.push(`  - ${el.id}: ${el.type} (${el.role}) [${el.status}]`);
  });
  lines.push(`  NEXT SLOT: ${core.frame.nextSlot}`);
  lines.push('------------------------------------------------------------');
  lines.push('SYSTEMS:');
  core.systems.forEach(sys => {
    lines.push(`  - ${sys.id}: ${sys.name} (${sys.role}) [${sys.status}] -> ${sys.bindsTo}`);
  });
  lines.push('------------------------------------------------------------');
  lines.push('SENTINEL:');
  lines.push(`  IDENTITY: ${core.sentinel.identity}`);
  lines.push(`  MODE: ${core.sentinel.mode}`);
  lines.push(`  STATE: ${core.sentinel.state}`);
  lines.push(`  BINDING: ${core.sentinel.binding}`);
  lines.push('------------------------------------------------------------');
  lines.push('ENGINE:');
  lines.push(`  KERNEL MODE: ${core.engine.kernel.mode}`);
  lines.push(`  KERNEL FUNCTION: ${core.engine.kernel.function}`);
  lines.push(`  LOOP STATE: ${core.engine.loop.state}`);
  lines.push(`  LOOP TYPE: ${core.engine.loop.type}`);
  lines.push(`  HEARTBEAT: ${core.engine.loop.heartbeat}`);
  lines.push('------------------------------------------------------------');
  lines.push('LINKS:');
  Object.entries(core.engine.links).forEach(([k, v]) => {
    lines.push(`  ${k}: ${v ? 'ONLINE' : 'OFFLINE'}`);
  });
  lines.push('============================================================');

  return lines.join('\n');
}

window.createInfinityCoreEngine = createInfinityCoreEngine;
window.formatInfinityCoreEngine = formatInfinityCoreEngine;

