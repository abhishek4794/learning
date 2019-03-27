
class Graph {
  constructor(noOfVertices) {
    // Initialize graph with no of vertices and Adjlist which will be array of link list
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(vertex) {
    // Function to add vertex in graph, Initailly it will set empty array as value
    this.AdjList.set(vertex, new Set())
  }

  addEdge(v, w) {
    // Function to add edges. Basically push w edge to v's link list and vice versa as this is a undirected graph
    this.AdjList.get(v).add(w)

    this.AdjList.get(w).add(v)
  }

  printGraph() {
    console.log(this.AdjList);
  }
}

const G = new Graph(6);
G.addVertex('1')
G.addVertex('2')
G.addVertex('3')
G.addVertex('4')
G.addVertex('5')
G.addVertex('6')

G.addEdge('1', '2')
G.addEdge('1', '3')
G.addEdge('2', '4')
G.addEdge('2', '5')
G.addEdge('3', '1')
G.addEdge('3', '5')
G.addEdge('4', '2')
G.addEdge('4', '5')
G.addEdge('4', '6')
G.addEdge('5', '3')
G.addEdge('5', '4')
G.addEdge('5', '6')
G.addEdge('6', '5')
G.addEdge('6', '5')


G.printGraph();


