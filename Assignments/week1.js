/*Basic JS Week-1 Assignment*/


//#1 (Variables , Datatypes , Operators)


//Create a variable for each of the following: your favorite color, your height in centimeters, 
//and whether you like pizza. Use appropriate variable declarations (let, const, or var).

const favColor = "Black";
let heightInCm = 170;
let isLikePizza = true;

console.log(favColor);
console.log(heightInCm);
console.log(isLikePizza);

isLikePizza = false;
console.log(isLikePizza)

heightInCm = 175;
console.log(heightInCm);



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



//#5 (Array Objects)


//Write a function that takes a user as an input and greets them with their name and age 

function greet(user){
    return "Hello " + user.name +  " , Your age is " + user.age;
}

let user = {
    name : "Mayank Arya",
    age : 19
};

const result  = greet(user);
console.log(result);


//Write a function that takes a new object as input
// which has name , age  and gender and greets the user with their gender 
//(Hi Mr/Mrs/Others harkirat, your age is 21)

function greeet(userr){
    if(userr.gender == "Male"){
        console.log("Hello Mr. " + userr.name +  " , Your age is " + userr.age);
    }
    else if(userr.gender == "Female"){
        console.log("Hello Mrs. " + userr.name +  " , Your age is " + userr.age);
    }
    else{
        console.log("Hello Others " + userr.name +  " , Your age is " + userr.age);
    }
}

let userr = {
    name : "Mayank Arya",
    age : 19,
    gender : "Male"
};
console.log(greeet(userr));


//Also tell the user if they are legal to vote or not

function greeeet(userrr){
    if(userrr.age >= 18)
        console.log(userrr.name + " can Vote")
    else
        console.log(userrr.name + " cannot Vote")
}

console.log(greeeet(userrr = {
    name : "Mayank Arya",
    age : 19,
}));


//Write a function that takes an array of numbers as input, and returns a new array with only even values.

function evenValues(arr){
    const arr2 = arr.filter((n) =>{
        if (n % 2 == 0) {
            return true;
        }
        return false;
    })
    console.log(arr2);
}

const arr = [1,2,3,4,5,6]
evenValues(arr);


//Write a function that takes an array of users as inputs 
//and returns only the users who are more than 18 years old

function canVotee(arrr){
    let arrr2 = []
    for(let i = 0 ; i < arrr.length ; i++){
        if(arrr[i].age >= 18){
            arrr2.push(arrr[i].fullName);
        }
    }
    console.log(arrr2);
}

const arrr = [{
    fullName : "Mayank Arya",
    age : 19
}, {
    fullName : "Arya",
    age : 17
}]

canVotee(arrr);


//Create a function that takes an array of objects as input,
//and returns the users whose age > 18 and are male

function canVoteee(array){
    let array2 = []
    for(let i = 0 ; i < array.length ; i++){
        if(array[i].age >= 18 && array[i].gender == "Male"){
            array2.push(array[i].fullName);
        }
    }
    console.log(array2);
}

const array = [{
    fullName : "Mayank Arya",
    age : 19,
    gender : "Male"
}, {
    fullName : "Arya Madha",
    age : 18,
    gender : "Female"
}, {
    fullName : "Arya Nar",
    age : 17,
    gender : "Male"
}, {
    fullName : "Arya Nar 2",
    age : 21,
    gender : "Male"
}]

canVoteee(array);


 /*Week 1 Assignment Completed*/