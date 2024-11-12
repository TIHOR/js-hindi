// if
const isUSerloggedIn = true
const temprature = 56

// strict equals
// if (2 === "2"){
//     console.log("executed");    

// }

// // equals
// if (2 == "2"){
//     console.log("executed for equals");    

// }

// if (temprature < 50){
//     console.log("temperature less than 50");    
// } else {
//     console.log("temperature is greater than 50");
// }


//<, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`user power : ${power}`);    
// }

// console.log(`user power : ${power}`);   

//const balance = 1000

// implicit scope used only for one directionaly flow execution 
// if (balance > 500) console.log("test"),
// console.log("second line");

// above can be done but not good practise for code readibility 


// if (balance < 500){
//     console.log("less than 500");    
// } else if (balance < 750){
//     console.log("less than 750");    
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false
const guestUser = false

if ( userLoggedIn && debitCard ){
    console.log("Allowed to buy Courses");    
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User logged in");    
}
