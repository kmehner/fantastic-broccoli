
// SORTING, ITERATING, AND DESTRUCTURING 

// SORT: arranges elements in ascending order - it manipulates the original array 
let numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers); // Output: [ 1, 2, 3, 4, 5 ]

// Sort the array in alphabetical order
let fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.sort();
console.log("Sorted fruits:", fruits); // Output: Sorted fruits: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// For... of loop
console.log("Iterating over fruits:");
for (let fruit of fruits){
  console.log(fruit); 
}

/* Output
Iterating over fruits:
  Apple
  Banana
  Mango
  Orange
*/


// forEach - a method for traversing each element in our array (for loop)

let colors = ['red', 'green', 'blue']; 
colors.forEach(color => {
  console.log(color); 
})

// Output: 
/* 
  red
  green
  blue
 */

// DESTRUCTURING  - assign each element in an array to separate variables 
let [first, second, third] = ['one', 'two', 'three']; 
console.log(first); // one
console.log(second); // two
console.log(third); // three



// SPREAD AND REST OPERATORS 

// Spread operator: Combining arrays 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [ 1, 2, 3, 4, 5, 6 ]

let plusArray = [arr1 + arr2];
console.log(plusArray); // [ '1,2,34,5,6' ]

let commaArry = [arr1, arr2];
console.log(commaArry); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// Copying array using spread operator 
let originalArray = [7, 8, 9];
let copiedArray = [...originalArray, 10];
let copiedArray2 = originalArray 
console.log("Copied array", copiedArray); // Copied array [ 7, 8, 9 ]
console.log("Copied array2", copiedArray2); // Copied array2 [ [ 7, 8, 9 ], 10 ]

// Rest operator: extracting remaining elements
let [a, b, ...remaining] = combinedArray;
console.log("First element:", a); // First element: 1
console.log("Second element:", b); // Second element: 2
console.log("Remaining elements:", remaining); // Remaining elements: [ 3, 4, 5, 6 ]