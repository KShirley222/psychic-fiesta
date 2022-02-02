import React from "react";

function buildRoom() {

}

function buildHall() {

}

function placeObjects() {

}

function MapGenerator(mapLength, mapHeight) {
  let mapTable = [];
  let currentCol =  Math.floor(Math.random() * mapLength);
  let currentRow =  Math.floor(Math.random() * mapHeight);
  let directions = [[-1,0], [1,0], [0,-1], [0,1]];
  let lastDirection = [], randomDirection;
  let maxTunnels = 3;
  let maxLength = 5;
  for(let i = 0; i<mapHeight; i++){
    let newRow = [];
    for(let j = 0; j<mapLength;j++){
      newRow.push(1);
    }
    console.log(newRow);
    mapTable.push(newRow);
  }
  do {
    randomDirection = directions[Math.floor(Math.random()*directions.length)];
  } while ((randomDirection[0] === -lastDirection[0] &&
    randomDirection[1] === -lastDirection[1]) ||
    (randomDirection[0] === lastDirection[0] &&
      randomDirection[1] === lastDirection[1]));

  let randomLength = Math.ceil(Math.random() * maxLength),
  tunnelLength = 0;

  while(tunnelLength < randomLength) {
    if(((currentRow === 0) && (randomDirection[0] === -1)) ||
      ((currentCol === 0) && (randomDirection[1] === -1)) ||
      ((currentRow === mapLength - 1) && (randomDirection[0] === 1)) ||
      ((currentCol === mapHeight - 1) && (randomDirection[1] === 1)))
    {break; }
    else {
      mapTable[currentRow][currentCol] = 0;
      currentRow += randomDirection[0];
      currentCol += randomDirection[1];
      tunnelLength++;
    }
  }

  if (tunnelLength) {
    lastDirection = randomDirection;
    maxTunnels--;
  }

  return mapTable;
}

export default MapGenerator;
