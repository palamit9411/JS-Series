// Dates

let myDate = new Date()
// console.log(myDate);
// // 2026-04-02T09:43:42.661Z

// console.log(myDate.toString());
// // Thu Apr 02 2026 09:43:42 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());
// // Thu Apr 02 2026

// console.log(myDate.toISOString());
// // 2026-04-02T09:43:42.661Z

// console.log(myDate.toJSON());
// // 2026-04-02T09:43:42.661Z

// console.log(myDate.toLocaleDateString());
// // 4/2/2026

// console.log(myDate.toLocaleString());
// // 4/2/2026, 9:43:42 AM

// console.log(myDate.toLocaleTimeString());
// // 9:43:42 AM

// console.log(myDate.toTimeString());
// // 09:43:42 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toUTCString());
// // Thu, 02 Apr 2026 09:43:42 GMT

// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2026, 3, 2)
// console.log(myCreatedDate.toDateString());
// Thu Apr 02 2026

// let myCreatedDate = new Date(2026, 3, 2, 15, 30)
// console.log(myCreatedDate.toLocaleString());
// 4/2/2026, 3:30:00 PM

let myCreatedDate = new Date("04-02-2026") // MM-DD-YY
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));
// Thursday