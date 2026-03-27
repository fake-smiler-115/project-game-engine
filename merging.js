
const connectedHotels = (data, hotels, currTile) => {
  const adjacentTiles = data[currTile].adjacentTiles;
  const hotelNames = Object.keys(hotels);
  const counter = new Set();
  adjacentTiles.forEach(tile => {
    hotelNames.forEach(name => {
      if(hotels[name].tiles.includes(tile)) {
        counter.add(name);
      }
    })
  })
  console.log(counter);
  return counter;
}

// const checkMerge = () => {
  
// }

const placeHotelTiles = (hotels, name, tiles) => hotels[name].tiles.push(...tiles);


const placeTilesOnBoard = (data, tiles) => {
  tiles.forEach(tile => {
    data[tile].isOccupied = true;
  });
}

const main = () => {
  const jsonData = Deno.readTextFileSync('./data/board.json');
  const data = JSON.parse(jsonData);
  const hotels = JSON.parse(Deno.readTextFileSync('./data/hotel.json'));
  placeTilesOnBoard(data, ['1C', '2C', '4C', '5C']);
  placeHotelTiles(hotels, 'sackson', ['1C', '2C', '3B']);
  placeHotelTiles(hotels, 'festival', ['3D', '3E']);
  placeHotelTiles(hotels, 'tower', ['4C', '5C']);
  const result = connectedHotels(data, hotels, '3C');
  // if (result.size >= 2) {
  //   areSta
  // }
}

main()