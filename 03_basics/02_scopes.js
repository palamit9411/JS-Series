// var c = 300
let a = 100
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // c = 30
    console.log("INNER: ", a);
    
}

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

console.log(a)
// INNER:  10
// 100
// console.log(b)
// console.log(c) 
// 30


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}