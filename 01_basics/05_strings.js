const name  = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshCoudhary')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 14)
// console.log(newString);

const anotherString = gameName.slice(-10, 4)
// console.log(anotherString);
// return empty string because length = 14
// then negative index = -10 
// slice(14-10, 4) ==> slice(4, 4)


const newStringOne = "  Shivansh  "
// console.log(newStringOne);
// console.log(newStringOne.trim()) remove spaces

const url = "https://hitesh.in/hitesh%20choudhary"

// console.log(url.replace('%20', '-'));
// url --> https://hitesh.in/hitesh-choudhary

// console.log(url.includes('hitesh'));  true
// console.log(url.includes('amit'));  false

const freefiregame = new String('hitesh-hc-com')
// console.log(freefiregame.split('-'));
// [ 'hitesh', 'hc', 'com' ]

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"

