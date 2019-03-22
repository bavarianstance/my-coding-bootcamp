// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

let input = process.argv 
let numArray = [];
for (i = 2 ; i < input.length; i++) {
  numArray.push(process.argv[i]);
}

console.log("Unsorted: " + numArray);

numArray.sort();
console.log("Sorted: " + numArray);