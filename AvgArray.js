// avgArray.js

import { sumArray } from './sumArray.js'; // Importing sumArray function

// Function to calculate the average of an array of numbers
export function avgArray(array) {
    if (array.length === 0) {
        return 0; // To handle division by zero scenario
    }
    let sum = sumArray(array); // Reusing sumArray function
    return sum / array.length;
}