// index.js

import { sumArray } from './sumArray.js';
// import { avgArray } from './avgArray';
import { longestString } from './longestString.js';

// Example usage
let arr = [5, 10, 2, 4, 3, 6];
console.log(`The sum of the array is ${sumArray(arr)}.`);
console.log(`The average of the array is ${avgArray(arr)}.`);

let strArr = ["Hello", "How", "are", "you"];
console.log(`The longest string in the array is "${longestString(strArr)}".`);