
// arrow functions  = >

const user = {
    username: "rohit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
                
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let username = "rohit"
//     console.log(this.username);
    
// }

// chai()


// const chai = function (){
//     let username = "rohit"
//     console.log(this.username);    
// }

// chai()

// const chai = () => {
//     let username = "rohit"
//     console.log(this);    
// }

// chai()


// basic arrow function 
// const addTwo = (num1 , num2) => {
//     return num1+ num2
// }

// implicit arrow function 
//const addTwo = (num1 , num2) => num1+ num2

const addTwo = (num1, num2) => (num1+ num2)

console.log(addTwo(3,4));

const myArray = [2,3,4,5]

//myArray.forEach(() => {})

    

