const tiles = {
  "1A": { isOccupied: true, adjacentTiles: ["2A", "1B"] },
  "2A": { isOccupied: true, adjacentTiles: ["1A", "2B"] },
  "1B": { isOccupied: false, adjacentTiles: ["1A"] },
  "2B": { isOccupied: true, adjacentTiles: ["1A"] },
};

const getAdjacentTiles = (tiles, currentTile, visitedTiles = {}) => {
  const adjacentTiles = tiles[currentTile].adjacentTiles;

  if (!tiles[currentTile].isOccupied || visitedTiles[currentTile]) {
    return;
  }
  
  console.log(currentTile);
  visitedTiles[currentTile] = true;

  adjacentTiles.forEach((currentTile) => {
    return getAdjacentTiles(tiles, currentTile, visitedTiles);
  });
};

getAdjacentTiles(tiles, "2A");
