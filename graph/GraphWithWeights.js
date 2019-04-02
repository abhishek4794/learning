class GraphWithWeights {
  constructor(noOfVertices) {
    // Initialize graph with no of vertices and Adjlist which will be array of link list
    this._noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  get noOfVertices() {
    return this._noOfVertices;
  }

  set noOfVertices(newNumber) {
    this._noOfVertices = newNumber;   // validation could be checked here such as only allowing non numerical values
  }
  addVertex(vertex) {
    // Function to add vertex in graph, Initailly it will set empty array as value
    this.AdjList.set(vertex, {})
  }

  addEdge(v, u, w) {
    // Function to add edges. Basically push w edge to v's link list and vice versa as this is a undirected graph
    this.AdjList.get(v)[u] = w

    this.AdjList.get(u)[v] = w
  }

  printGraph() {
    console.log(this.AdjList);
  }
}

module.exports = GraphWithWeights