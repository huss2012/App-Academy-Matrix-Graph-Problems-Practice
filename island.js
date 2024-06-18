function getNeighbors(row, col, graph) {
  let graphRowLength = graph.length;
  let graphColumnLength = graph[0].length;
  let validNeighbor = [];
  // Check top
  if (row - 1 >= 0 && row - 1 < graphRowLength && col >= 0 && graph[row - 1][col] === 1) validNeighbor.push([row - 1, col]);
  // Check bottom
  if (row + 1 >= 0 && row + 1 < graphRowLength && col >= 0 && graph[row + 1][col] === 1) validNeighbor.push([row + 1, col]);
  // Check left
  if (row >= 0 && col + 1 >= 0 && col + 1 < graphColumnLength && graph[row][col + 1]) validNeighbor.push([row, col + 1]);
  // Check right
  if (row >= 0 && col + 1 >= 0 && col - 1 < graphColumnLength && graph[row][col - 1]) validNeighbor.push([row, col - 1]);
  // Return neighbors
  return validNeighbor;
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add(stack[0].toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let currentNode = stack.pop();//[row, col]
    // DO THE THING (increment size by 1)
    size++;
    let neighbors = getNeighbors(currentNode[0], currentNode[1], graph)
    //console.log(neighbors);
    for (let i = 0; i < neighbors.length; i++){
      if (!visited.has(neighbors[i].toString())) {
        stack.push(neighbors[i]);
        visited.add(neighbors[i].toString());
      }
    }
  }
  return size;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
