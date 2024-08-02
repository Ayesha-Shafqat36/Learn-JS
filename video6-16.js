// Conversion of operations

let score = "sssss"

//type of variable

console.log(typeof score);
console.log(typeof(score));

let number = Number(score)
console.log(typeof number);
console.log(number);

// "33" = 33
// "jsla" = NaN (Not a number)
// true = 1, false = 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/// 1 = true; 0 = false
// "" = false
// "ayesha" = true

//+++++++++++++ Operations +++++++++++++++

let value = 3
let negValue = -value

console.log(2**2); // power

console.log("1" + 5 + 6); // 156
console.log(2 + 7 + "4"); // 94

let counter = 111
counter++;
console.log(counter);

// ------------------Video 8 ---------------------

console.log(2 >1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// datatype must be same

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// === (strict check)


//-------------- Video 9 ---------------- datatypes

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const Score = 111
const scoreValue = 111.3

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 939833983989

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["spiderman", "batman", "superman"];
let myObj =
{
    name: "ayesha",
    age: 21,
}

const myFunction = function()
{
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//=================Video 10 ---------- memory

// stack(premetive) heap (non premetive)

let myName = "AyeshaShaqat"
let otherName = myName

otherName = "Ayesha"

console.log(myName);
console.log(myName);

let user =
{
    name: "ayesha",
    age: 21,
}
user1 = user

user1.name = "aish"

//-------------------------video 11 ----------- strings

const Name = "ayesha"
const repoCount = 50

 console.log(Name + repoCount + " Value");

console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`);

const gameName = new String('ayesha-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ayesha    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

//----------------------- video 12 --------------numbers and maths

const _Score = 400
console.log(_Score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ------------------- Maths ==================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// -------------- video 13 ============== date and time

// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

'${newDate.getDay()} and the time'

newDate.toLocaleString
('default', 
    {
    weekday: "long",
    }
)

// =============== Video 14 ================ Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["spiderman", "superman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr = myArr.join()
console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// =============== Video 15 ========= Array part 2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ayesha"))
console.log(Array.from("Ayesha"))
console.log(Array.from({name: "ayesha"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//----------------Video 16 ============= Objects

// singleton

Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ayesha",
    "full name": "Ayesha Shafqat",
    [mySym]: "mykey1",
    age: 18,
    location: "Lahore",
    email: "ayeshfqat36@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "ayesha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ayesha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());