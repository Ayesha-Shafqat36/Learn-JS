// ------------------video 17 ----------- Objects

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sid"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sid@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayesha",
            lastname: "Shafqat"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = 
[
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//=========== Video 18 ====== Object Destructure and JSON API
const course = 
{
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
[
    {},
    {},
    {}
]

//--------------- Video 19 ------------- Functions and Parameters

function sayMyName()
{
    console.log("A");
    console.log("Y");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");
}

sayMyName()

function addTwoNumbers(number1, number2)
{

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2)
{
    let result = number1 + number2
    return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function loginUserMessage(username = "sam")
{
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ayesha"))
// console.log(loginUserMessage("ayesha"))

//------------- Video 20 -------------- Functions with objets and array

function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = 
{
    username: "ayesha",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sid",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

//----------------video 21 --------- global and local scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//-------------- Video 22 ---------- Scope level and mini hoisting

function one(){
    const username = "ayesha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "ayesha"
    if (username === "ayesha") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ---------------- interesting ---------------

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}

//-------------------- Video 23 ------------ THIS and arrow function

const User = {
    username: "ayesha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "ali"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "ayesha"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "ayesha"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "ayesha"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) =>
//{
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const add = (num1, num2) => ({username: "ayesha"})

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// ------------Video 24 -------- immediately invoked function expressions IIFE

// why we use IIFE?

// sometimes there is problem from global scope pollution, to remove global scope variables or declaration pollution we use IIFE sometimes

(function chai(){
    // named IIFE
    console.log('DB CONNECTED');
})();

( (name) => {
    console.log('DB CONNECTED TWO ${name}');
} )('hitesh')