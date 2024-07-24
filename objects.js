
// Objects

let superhero = {
  name: "Iron Man",
  powers: ["Flight", "Super Strength", "Genius-level Intellect"],
  suitColor: "Red and Gold", 
  introduce: function() {
    console.log("I am " + this.name + ", and I am ready to save the world!");  
  }
}

// Accessing object properties 
console.log(superhero.name); // Iron Man
console.log(superhero.powers); // [ 'Flight', 'Super Strength', 'Genius-level Intellect' ]
console.log(superhero["powers"]); 

// Using the THIS keyword to call an object function 
superhero.introduce(); // I am Iron Man, and I am ready to save the world!



// Constructor function 
function Superhero(name, powers, suitColor){
  this.name = name; 
  this.powers = powers; 
  this.suitColor = suitColor; 
}

// Prototype method 
Superhero.prototype.introduce = function() {
  console.log("I am " + this.name + ", and I am ready to save the world!");  
}

// Create superhero objects 
let ironMan = new Superhero("Iron Man", ["Flight", "Super Strength", "Genius-level Intellect"], "Red and Gold");
let spiderMan = new Superhero("Spiderman", ["Wall-crawling", "Superhuman agility", "Spider-sense"], "Red and Blue"); 

ironMan.introduce(); // I am Iron Man, and I am ready to save the world!
spiderMan.introduce(); // I am Spiderman, and I am ready to save the world!