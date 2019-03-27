const Graph = require('./Graph');

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


function dfs(G) {
  let i = 0;

  const list = G.AdjList
  const keys = Array.from(G.AdjList.keys()) // Conversion of map into array
  let stack = []
  let visited = {} // To avoid traversal of same node
  stack.push(keys[0]); // Start with first vertex

  let dfsOutput = "DFS Output : Start"; // Output String

  while (stack.length != 0) {
    if (visited[stack[stack.length - 1]]) { // Check top of the stack is visited or not 
      stack.pop() // Remove top of the stack if visited
    } else {
      dfsOutput += " => " + stack[stack.length - 1] // Print top of the stack
      visited[stack[stack.length - 1]] = true; // Mark unvisited item visited
      list.get(stack[stack.length - 1]).forEach(function (value) {
        stack.push(value) // Push all adjcent items at the top of the stack
      });
    }
  }
  console.log(dfsOutput);
}

dfs(G);

/*
  Sample Output

  Map {
  '1' => Set { '2', '3' },
  '2' => Set { '1', '4', '5' },
  '3' => Set { '1', '5' },
  '4' => Set { '2', '5', '6' },
  '5' => Set { '2', '3', '4', '6' },
  '6' => Set { '4', '5' } }

  DFS Output : Start => 1 => 3 => 5 => 6 => 4 => 2
*/