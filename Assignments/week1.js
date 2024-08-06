//#1 (Variables , Datatypes , Operators)

//Create a variable for each of the following: your favorite color, your height in centimeters, 
//and whether you like pizza. Use appropriate variable declarations (let, const, or var).

const favColor = "Black";
let heightInCm = 170;
let isLikePizza = true;

console.log(favColor);
console.log(heightInCm);
console.log(isLikePizza);

//#2 (Function)

//Write a function sum that finds the sum of two numbers. 
//Side quest - Try passing in a string instead of a number and see what happens?

function sum(a , b){
    console.log(a+b);
}
sum(1,3);

//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    if(age >= 18)
        console.log("Can Vote");
    else
        console.log("Cannpt Vote");

}

canVote(19);

//#3 (Conditional Statements - if/else)
//Write an if/else statement that checks if a number is even or odd. 
//If it's even, print "The number is even." Otherwise, print "The number is odd."

function isEverOrOdd(num){
    if(num % 2 == 0)
        console.log(num + " is a EVEN Number.");
    else 
        console.log(num + " is a ODD Number");
}

isEverOrOdd(10);

//#4 (Loops)
//Write a function called sum that finds the sum from 1 to a number

function sumUptoN(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum = sum + i;
    }
    return sum;
}

let totalSum = sumUptoN(10);
console.log(totalSum);