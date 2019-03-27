
class Graph {
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


function bfs(G) {
  let i = 0;

  const list = G.AdjList
  const keys = Array.from(G.AdjList.keys())
  let queue = []
  let visited = {}
  queue.push(keys[0]);

  let bfsOutput = "BFS Output : Start";

  while (queue.length != 0) {
    //console.log(visited);
    if (visited[queue[0]]) {
      queue.shift()
    } else {
      visited[queue[0]] = true;
      list.get(queue[0]).forEach(function (value) {
        queue.push(value)
      });
      bfsOutput += " => " + queue[0]
      queue.shift()
    }
  }
  console.log(bfsOutput);
}

function dfs(G) {
  let i = 0;

  const list = G.AdjList
  const keys = Array.from(G.AdjList.keys())
  let stack = []
  let visited = {}
  stack.push(keys[0]);

  let dfsOutput = "DFS Output : Start";

  while (stack.length != 0) {
    if (visited[stack[stack.length - 1]]) {
      stack.pop()
    } else {
      dfsOutput += " => " + stack[stack.length - 1]
      visited[stack[stack.length - 1]] = true;
      list.get(stack[stack.length - 1]).forEach(function (value) {
        stack.push(value)
      });
    }
  }
  console.log(dfsOutput);
}

bfs(G)
dfs(G);