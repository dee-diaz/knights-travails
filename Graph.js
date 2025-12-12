class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    } else {
      throw new Error(`Vertex ${vertex} already exists.`);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
      this.adjList.get(vertex1).push(vertex2);
    } else {
      throw new Error("One or both vertices do not exist.");
    }
  }

  getNeighbors(vertex) {
    return this.adjList.get(vertex);
  }

  hasEdge(vertex1, vertex2) {
    if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
      return this.adjList.get(vertex1).includes(vertex2);
    } else {
      throw new Error("One or both vertices do not exist.");
    }
  }
}

export default Graph;
