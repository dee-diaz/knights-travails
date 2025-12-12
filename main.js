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

function initGraph() {
  vertices.forEach((vertex) => graph.addVertex(vertex));
}

initGraph();
