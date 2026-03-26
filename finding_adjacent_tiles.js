const data = {
  '1A': { isOccupied: true, adjacentTiles: ['2A', '1B'] },
  '2A': { isOccupied: true, adjacentTiles: ['1A', '2B',] },
  '1B': { isOccupied: false, adjacentTiles: ['1A'] },
  '2B': { isOccupied: true, adjacentTiles: ['1A'] },
}

const getAdjacentTiles = (data, currTile, visited = {}) => {
  if (!data[currTile].isOccupied || visited[currTile]) return;

  console.log(currTile);
  visited[currTile] = true;
  const connectedTiles = data[currTile].adjacentTiles;
  connectedTiles.forEach(tile => {
    return getAdjacentTiles(data, tile, visited);
  });
}

getAdjacentTiles(data, '2A');