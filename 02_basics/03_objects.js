// singleton (via constructor)
// Object.create


// object literals

const addSym = Symbol("Full Address")

const JsUser = {
    name: "Rohit",
    "full name": "Rohit Tewari",
    [addSym]: "Dewal Chaur, Haldwani, UK04",
    age: 19,
    location: "Haldwani",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[addSym]);

JsUser.email = "rohit@gpt.com"
//Object.freeze(JsUser)
JsUser.email = "rohit@miscrosoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser !");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




