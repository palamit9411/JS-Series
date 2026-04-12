function sayMyname(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    
}
// sayMyname()

// function addTwonumber(number1, number2){
//     console.log(number1 + number2);
    
// }
// const result = addTwonumber(3, 5)
// console.log("Result: ", result);
// 8
// Result:  undefined

function addTwonumber(number1, number2){
    // let add = number1 + number2
    // return add
    return number1 + number2
    
}
// const result = addTwonumber(3, 5)
// console.log("Result: ", result);
// Result:  8


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 40, 600, 2000));
// [ 200, 40, 600, 2000 ]
// [ 600, 2000 ]

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewarray = [200, 400, 600, 300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewarray));
console.log(returnSecondValue([100, 200, 300, 400]));