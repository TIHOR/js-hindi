// Primitive

// around 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log( id === anotherId);

const bigNumber = 12313122432434324n

// --------------------------


// Reference type(Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraj","doga"]

let myObj = {
    name: "Rohit",
    age: 37
}

const myFunction = function(){
    console.log("Hello World");    
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof heroes);


