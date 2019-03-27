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


function bfs(G) {
  let i = 0;

  const list = G.AdjList
  const keys = Array.from(G.AdjList.keys()) // Conversion of map into array
  let queue = []
  let visited = {} // To avoid traversal of same node
  queue.push(keys[0]); // Start with first vertex

  let bfsOutput = "BFS Output : Start"; // Output String

  while (queue.length != 0) {
    //console.log(visited);
    if (visited[queue[0]]) { // Check top of the queue is visited or not 
      queue.shift() // Remove top of the queue if visited
    } else {
      visited[queue[0]] = true; // Mark unvisited item visited
      list.get(queue[0]).forEach(function (value) {
        queue.push(value) // Add all adjcent items at the end of the queue
      });
      bfsOutput += " => " + queue[0] // Print top of the queue
      queue.shift() // Remove top of the queue
    }
  }
  console.log(bfsOutput);
}


bfs(G)

/*
  Sample Output

  Map {
  '1' => Set { '2', '3' },
  '2' => Set { '1', '4', '5' },
  '3' => Set { '1', '5' },
  '4' => Set { '2', '5', '6' },
  '5' => Set { '2', '3', '4', '6' },
  '6' => Set { '4', '5' } }

  BFS Output : Start => 1 => 2 => 3 => 4 => 5 => 6
  DFS Output : Start => 1 => 3 => 5 => 6 => 4 => 2
*/