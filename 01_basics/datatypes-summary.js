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