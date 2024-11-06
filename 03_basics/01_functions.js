

function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}

//sayMyName()

// function addTwoNumbers(num1, num2){
//     // num1, num2 are parameters of the function
//     console.log(num1 + num2);    
// NOTICE return statement is missing in this function 
// this only prints to console but doesn't return the result
// }

function addTwoNumbers(num1, num2){
    // num1, num2 are parameters of the function
    
    //let result = num1+num2
    //return result
    return num1+num2
    //console.log("Rohit"); anothing after return is Unreachable code
    
}


// 3, null are arguments given to the function
//addTwoNumbers(3,null)

const result = addTwoNumbers(3,5)

//console.log("Result: ", result);

function loginUserMessage(username){ // can also give default value in paramater eg - username = "sam"

    //if(username === undefined){
    if(!username){
        console.log("Please Enter a User Name");
        return        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Rohit"))
//console.log(loginUserMessage("Rohit"));


// rest operator
function calculateCartPrice1(...num1){
    return num1
}

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice1(200,300,500));
// console.log(calculateCartPrice2(200,300,500,2000));

const user = {
    username: "rohit",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 500, 600]))


