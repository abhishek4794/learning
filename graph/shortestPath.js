const GraphWithWeights = require('./GraphWithWeights');

const G = new GraphWithWeights(6);
G.addVertex('1')
G.addVertex('2')
G.addVertex('3')
G.addVertex('4')
G.addVertex('5')
G.addVertex('6')

G.addEdge('1', '2', 5)
G.addEdge('1', '3', 6)
G.addEdge('2', '4', 3)
G.addEdge('2', '5', 8)
// G.addEdge('3', '1', 6)
G.addEdge('3', '5', 8)
//G.addEdge('4', '2', 3)
G.addEdge('4', '5', 34)
G.addEdge('4', '6', 5)
//G.addEdge('5', '3', 8)
//G.addEdge('5', '4', 34)
G.addEdge('5', '6', 1)
//G.addEdge('6', '5', 1)


G.printGraph();

function shortestPath(G, startVertex) {
    const sptSet = {}
    const vertices = G.AdjList;
    for (i of vertices) {
        sptSet[i[0]] = (i[0] === startVertex) ? 0 : Infinity
    }
    console.log(sptSet);

    const keys = Array.from(G.AdjList.keys())
    let iter = 0
    while (iter < keys.length) {
        console.log(vertices.get(keys[i]))
        iter++
    }
}

shortestPath(G, '1');
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
*/