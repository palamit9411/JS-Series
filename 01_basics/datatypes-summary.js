// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 23656732745233453845345237865423n
// console.log(typeof(bigNumber));



// Reference(Non-Primitive)

// Array, Objects, Functions


const heros = ["shaktimaan", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
} 




// +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "AmitLearnsAI"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user123@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);
