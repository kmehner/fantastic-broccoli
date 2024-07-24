
// String manipulation and methods 

let greeting = "Hello, world!";
console.log(greeting.length); // 13 
console.log(greeting.toUpperCase()); // HELLO, WORLD!

// Start at index 0 and finish at index 4 (5 is exclusive)
console.log(greeting.substring(0,5)); // Hello

// split the array of substrings based on a delimiter resulting in two substrings 
console.log(greeting.split(",")); // [ 'Hello', ' world!' ]



// Search techniques
let sentence = "the quick brown fox jumps over the lazy dog"; 

// includes: check if the string is in the sentence 
console.log(sentence.includes("fox")); // true

// indexOf: this returns the index of the substring within the sentence 
// if the substring is not found, it returns an index of 1 
console.log(sentence.indexOf("fox")); // 16

// lastIndexOf: returns the index of the LAST occurence of the substring within the sentence (multiple occurances)
// if the substring is not found, it returns 1 
console.log(sentence.indexOf("the")); 
console.log(sentence.lastIndexOf("the")); // 31 



// REGEX: defined using (/) and consists of patterns to match againt the string 

// let pattern = /hello/; 
// console.log(pattern.test("hello, world")); // true 


let pattern2 = /\d+/; // Matches one or more digits 

// test: check if the string matches a regular expression pattern
console.log(pattern2.test("abc123")); // true 

// match: extracts substrings that match the pattern 
console.log("abc123".match(pattern2)); // ["123"] => [ '123', index: 3, input: 'abc123', groups: undefined ]

// Example: analyzing social media posts 
let post = "Hey @JohnDoe, did you see the new #Java0_Script tutorial? #coding";


// Extract metions (usernames = @JohnDoe) from the post

// Output with g: mentions: [ '@JohnDoe' ]

/* Without the g
  mentions: [
  '@JohnDoe',
  index: 4,
  input: 'Hey @JohnDoe, did you see the new #Java0_Script tutorial? #coding',
  groups: undefined
]
*/

let mentions = post.match(/@[A-Za-z0-9_]+/g); 
console.log("mentions:", mentions);

// Extract hastags from the post (#JavaScript, #coding)
let hastags = post.match(/#\w+/g); 
console.log("hashtags:", hastags); 











/* 

The code starts by declaring a variable called mentions using the let keyword. This variable will store the results of the matching operation.

The match() method is called on the post string. This method is used to search for a specified pattern within a string and returns an array of all matches found.

Inside the match() method, a regular expression is provided as an argument: /@[A-Za-z0-9_]+/g. This regular expression pattern is enclosed between two forward slashes (/).

The pattern itself is @[A-Za-z0-9_]+. Let's break it down further:

@ matches the "@" character literally.
[A-Za-z0-9_] is a character class that matches any uppercase letter, lowercase letter, digit, or underscore.
+ is a quantifier that matches one or more occurrences of the preceding pattern.
The g flag at the end of the regular expression stands for "global" and ensures that all matches in the string are found, rather than just the first one.

The result of the match() method is assigned to the mentions variable, which will contain an array of all the mentions found in the post string.
 */
