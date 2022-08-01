// Given than
// var fruits = new Array("Apple", "Banana", "Orange");
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
console.log(fruits.indexOf("Banana"));

fruits[fruits.indexOf("Banana")] = "Mango";

console.log(fruits);

// b) Remove ‘Orange’ and add ‘Watermelon’.
fruits.pop();
console.log(fruits);
fruits.push("Watermelon");
console.log(fruits);


// Extra Remove 'Apple' and add 'Grapes'
fruits.shift()
console.log(fruits);
fruits.unshift("Grapes");
console.log(fruits);