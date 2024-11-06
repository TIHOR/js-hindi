

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

console.log(loginUserMessage("Rohit"));


