/*
You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.
*/

var num1 = 89;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is the largest number.");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is the largest number.");
} else {
    console.log(num3 + " is the largest number.");
}

/*
You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
    Isosceles => two sides are equal
*/
var side1 = 7;
var side2 = 8;
var side3 = 7;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("This triangle is Isosceles.");
} else {
    console.log("This triangle is not Isosceles.");
}