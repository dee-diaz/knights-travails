import Graph from "./Graph.js";

const graph = new Graph();
const vertices = createVertices();

function createVertices(boardSize = 8) {
  let arr = [];

  // Create rows
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      arr.push(`${row},${col}`);
    }
  }

  return arr;
}

function createEdges() {
  vertices.forEach((vertex) => {
    const coord = vertex.split(",");
    const row = Number(coord[0]);
    const col = Number(coord[1]);

    if (row <= 5 && col - 1 >= 0) {
      const moveUpLeft = `${row + 2},${col - 1}`;
      graph.addEdge(vertex, moveUpLeft);
    }

    if (row <= 5 && col + 1 <= 7) {
      const moveUpRight = `${row + 2},${col + 1}`;
      graph.addEdge(vertex, moveUpRight);
    }

    if (row >= 2 && col - 1 >= 0) {
      const moveDownLeft = `${row - 2},${col - 1}`;
      graph.addEdge(vertex, moveDownLeft);
    }

    if (row >= 2 && col + 1 <= 7) {
      const moveDownRight = `${row - 2},${col + 1}`;
      graph.addEdge(vertex, moveDownRight);
    }

    if (col >= 2 && row + 1 <= 7) {
      const moveLeftUp = `${row + 1},${col - 2}`;
      graph.addEdge(vertex, moveLeftUp);
    }

    if (col >= 2 && row - 1 >= 0) {
      const moveLeftDown = `${row - 1},${col - 2}`;
      graph.addEdge(vertex, moveLeftDown);
    }

    if (col <= 5 && row + 1 <= 7) {
      const moveRightUp = `${row + 1},${col + 2}`;
      graph.addEdge(vertex, moveRightUp);
    }

    if (col <= 5 && row - 1 >= 0) {
      const moveRightDown = `${row - 1},${col + 2}`;
      graph.addEdge(vertex, moveRightDown);
    }
  });
}

function knightMoves(start, end) {
  const startStr = start.join(",");
  const endStr = end.join(",");
  
  const queue = [startStr];
  const visited = new Set([startStr]);
  const prev = new Map();

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === endStr) {
      return reconstructPath(prev, startStr, endStr);
    }

    const neighbors = graph.getNeighbors(current);
    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        prev.set(neighbor, current);
        visited.add(neighbor);
        queue.push(neighbor);
      }
    });
  }
}

function reconstructPath(prev, start, end) {
  const path = [];
  let current = end;

  while (current !== start) {
    path.push(current);
    current = prev.get(current);
  }

  path.push(start);
  return {
    moves: path.length,
    path: path.reverse(),
  };
}

function initGraph() {
  vertices.forEach((vertex) => graph.addVertex(vertex));
  createEdges();
}

initGraph();
