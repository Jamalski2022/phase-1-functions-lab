// Code your solution in this file!
// index.js

// index.js

// Define the HQ location (e.g., 42nd street)
const hqLocation = 42;
const feetPerBlock = 264;

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - hqLocation);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * feetPerBlock;
}


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
}

