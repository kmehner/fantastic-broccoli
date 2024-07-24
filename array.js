
// ARRAY METHODS 

// Push: add an item to the end of an array (append in python)
let ingredients = ['flour', 'sugar', 'eggs'];
ingredients.push('butter');
console.log(ingredients); // [ 'flour', 'sugar', 'eggs', 'butter' ]



// POP: removes the last item in your array
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); 
console.log(lastFruit); // orange
console.log(fruits); // [ 'apple', 'banana' ]



// MAP: creates a new array by applying a function to each element (https://www.w3schools.com/jsref/jsref_map.asp)
  // - map() creates a new array from calling a function for every array element.
  // - map() does not execute the function for empty elements.
  // - map() does not change the original array.

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [ 2, 4, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

// Square root example via mapping 
const lst_sqr_roots = [4, 9, 16, 25];
const found_the_roots = lst_sqr_roots.map(Math.sqrt); 
console.log(found_the_roots); // [ 2, 3, 4, 5 ]



// Complicated mapping example 
const numbersArr = [65, 44, 12, 4];


// Using MAP 
const newArr = numbersArr.map(myFunction);
function myFunction(num) {
  return num * 10;
}

console.log("Returning myFunction", newArr); // [ 650, 440, 120, 40 ]


// How you would write it without mapping 
function newFunc(arrayNums){
	array_to_return = []
	for (let num of arrayNums) {
    	array_to_return.push(num * 10); 
    }
  return array_to_return
}

console.log("Returning newFunc:", newFunc(numbersArr)) // [ 650, 440, 120, 40 ]



// FILTER: constructs a new array with elements that pass a specified condition (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
let scores = [75, 80, 65, 90, 85];
let passingScores = scores.filter(score => score >= 70); 
console.log(passingScores); // [ 75, 80, 90, 85 ]



// REDUCE: applies a function against an accumulator (the sum) and each element, reducing the array to a single value (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
// Reddit explanation (https://www.reddit.com/r/learnjavascript/comments/wedo1z/can_anyone_explain_to_me_easily_reduce_in_js/)


let expenses = [100, 50, 75, 120];
// sum = keeping track of the sum of the array
// item = item in array
// 0 = starting value 
let total = expenses.reduce((sum, item) => sum + item, 0); // 0 = starting value 

let exampleReduce = expenses.reduce((acc, curr) => acc + curr, 0); // 0 = starting value 

console.log(total); // Output: 345

// Example with separate function 
// function add(x, y) {
//   return x + y;
// }
// const nums = [1, 2, 3];
// const sum_of_add = reduce(nums, add, 0);
// console.log(sum_of_add);  // 6


// note acc = the accumulator
// note item = each array element, same as when you map or forEach over an array
const arr = [0, 1, 2, 3, 4, 5];
const sum = arr.reduce((acc, item) => {
    // for each item, add it to the current accumulator (count or sum)
    acc += item;

    // reduce always ends with returning the current accumulator, because each iteration through the reduce function modifies the accumulator, so you return what you just modified and that newest accumulator goes into the next iteration
    return acc;
}, 0);

console.log(sum); // Output: 15 



// ARRAY EXAMPLES

// Array of numbers
let numArr = [10, 20, 30, 40, 50];

// PUSH - add a new number
function addNumber(arr, num){
  arr.push(num);
  return arr; 
}

// POP - remove the last number from the array
function removeLastNumber(arr){
  arr.pop(); 
  return arr; 
}

// Function to double each number in the array (MAP) 
function doubleNumbers(arr){
  return arr.map(num => num * 2); 
}

// FILTER the numbers greater than 25
function filterNumbers(arr){
  return arr.filter(num => num > 25); 
}

// Function to calculate the SUM of all numbers in the array (REDUCE)
function calculateSum(arr){
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Testing each function with the array 
console.log("Original Array:", numArr); // Output: [ 10, 20, 30, 40, 50 ]
console.log("After adding 60:", addNumber(numArr, 60)); // Output: [ 10, 20, 30, 40, 50, 60 ]
console.log("After removing the last number:", removeLastNumber(numArr)); // Output: [ 10, 20, 30, 40, 50 ]
console.log("After doubling each number:", doubleNumbers(numArr)); // Output: [ 20, 40, 60, 80, 100 ]
console.log("Numbers greater than 25:", filterNumbers(numArr)); // Output: [ 30, 40, 50 ]
console.log("Total sum of numbers:", calculateSum(numArr)); // Output: Total sum of numbers: 150