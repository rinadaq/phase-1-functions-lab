// Code your solution in this file!
// helpers.js

function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
  }
  
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264; // 1 block = 264 feet
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * 264; // 1 block = 264 feet
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distance over 2000 feet
    } else {
      return 'cannot travel that far';
    }
  }
  

  