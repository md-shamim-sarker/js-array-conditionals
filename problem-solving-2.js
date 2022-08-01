/*
You and your friends Tom, Jane, Peter and John got their final exam results. Your total 
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is 
    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade
Write a program to find your and your friends’ grades using if-else.
*/

var stdName = "Sneha Mony";
var score = 50;

if (score <= 100 && score >= 80) {
    console.log("Your name is : " + stdName);
    console.log("Your score is : " + score);
    console.log("Result: You have got A grade.");
} else if (score <= 79 && score >= 60) {
    console.log("Your name is : " + stdName);
    console.log("Your score is : " + score);
    console.log("You have got B grade.");
} else if (score <= 59 && score >= 50) {
    console.log("Your name is : " + stdName);
    console.log("Your score is : " + score);
    console.log("You have got C grade.");
} else if (score <= 49 && score >= 40) {
    console.log("Your name is : " + stdName);
    console.log("Your score is : " + score);
    console.log("You have got D grade.");
} else if (score <= 39 && score >= 0) {
    console.log("Your name is : " + stdName);
    console.log("Your score is : " + score);
    console.log("You have got F grade (Fail)");
} else {
    console.log("Warning: Your input is not correct.");
}