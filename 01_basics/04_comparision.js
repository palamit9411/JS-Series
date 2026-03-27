// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 < 1);

// console.log("2" > 1);
// console.log("02" > 1);

/////////////////////////////////////////////////
// Avoid this type conversion
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* The reason is that an equality check == and 
comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That’s why (13) null >= 0 is true and (11) null > 0 is false. */


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
/////////////////////////////////////////////////

// === & ==
console.log("2" == 2); // true
console.log("2" === 2); // false
