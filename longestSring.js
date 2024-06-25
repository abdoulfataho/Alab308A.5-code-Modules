// longestString.js

// Function to find the longest string in an array of strings
export function longestString(array) {
    let longest = "";
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}