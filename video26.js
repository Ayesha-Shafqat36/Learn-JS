//                                                         LOGICAL CONTROLS AND CONTROL FLOWS

// in this tutorial we learn about that code will execute on conditional base
// if you want to logged in then a specific condition will trigger and that part of the code or function will run
// same with other conditions like logged out or opening a specific page, in such cases not all the code will execute only 
// the required code will execute and flfill the requirement. This whole concept is known as overflow

// if statements
const isUserloggedIn = true
const temperature = 41

// if the condition in the parenthesis is true then the code will execute otherwise it will not

if ( temperature === 40 ) // if the temperature will 40 then rhis value will execute
{
    console.log("less than 50");
}
 else // if above cobdition will not true then this value will execute
{
    console.log("temperature is greater than 50");
}

console.log("Execute");  //this will execute surely

// less then, greater then, greater then equal to, less then equal to, equal operator, not equal to operator 
// <        , >           , >=                   , <=                , ==            , !=
// strict equal operator(also check the type of the variable) , strict not equal operator(also check the type of the variable)
// ===                                                        , !==

//Scope related

const score = 200

if (score > 100) 
{
    let power = "fly" // scope pf this variable is within the paranthesis
    console.log(`User power: ${power}`);
}
  
console.log(`User power: ${power}`); // this will not run and give that the variable "power" is not defined , this is block scope

//short hand notation

const balance = 1000

if (balance > 500) console.log("test"); // this is know as implicit scope

// nesting of if conditions

if (balance < 500) 
{
    console.log("less than 500");
} 
else if (balance < 750) 
{
    console.log("less than 750");
} 
else if (balance < 900) 
{
    console.log("less than 750");
}
else 
{
    console.log("less than 1200");
}

// example if you create an account on any website

const userLoggedIn = true // flag 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//LOGICAL OPERATOR

// && <== This operator "And operator" will check both statement and execute if both are true
// if either one of the statement will false then we will not enter into this code and it will not execute

if (userLoggedIn && debitCard && 2==3) // multiple conditions within one if statement
{
    console.log("Allow to buy course");
}

// || <== This operator "Or operator" will check both statement and execute if both or any of the statement is true
// if either one of the statement will false then this will execute

if (loggedInFromGoogle || loggedInFromEmail) 
{
    console.log("User logged in");
}

// sometimes we have a value which we want to check for multiple conditions
// basic syntax for a switch statement
switch (key) 
{
    case value:
        
        break;

    default:
        break;
}

// key is the value which we want to check everytime
// break breaks the control flow and not execute the remaining code
// if there is no break then even after finding the case whole code will execute except default value

// for int value

const monthh = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// for string value

const month = "march"

switch (month) 
{
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//------------------------------

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) 
{
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) 
{
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // 

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")