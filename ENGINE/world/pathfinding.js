export const pathfinding = {
  find(start, goal, grid) {
    const open = [start];
    const came = {};
    const visited = new Set();

    while (open.length > 0) {
      const current = open.shift();
      const key = current.x + "," + current.y;

      if (visited.has(key)) continue;
      visited.add(key);

      if (current.x === goal.x && current.y === goal.y) {
        const path = [];
        let k = key;
        while (came[k]) {
          path.push(came[k].pos);
          k = came[k].from;
        }
        return path.reverse();
      }

      const dirs = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 }
      ];

      for (const d of dirs) {
        const nx = current.x + d.x;
        const ny = current.y + d.y;
        const tile = grid.get(grid, nx, ny);
        if (tile === null || tile === 1) continue;

        const nk = nx + "," + ny;
        if (!visited.has(nk)) {
          open.push({ x: nx, y: ny });
          came[nk] = { from: key, pos: { x: nx, y: ny } };
        }
      }
    }

    return [];
  },

  update(delta) {
  }
};
