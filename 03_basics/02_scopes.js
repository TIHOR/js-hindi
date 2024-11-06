
// var is not used as it does not respect scope
// let is used 

let a = 300

//var c = 300 // global scope

if (true) {
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
    
    //var c = 30 // block scope
}


//console.log(a);
//console.log(b);
//console.log(c);


// global scope in node is different than global scope 
// in Window that we see in Console of devtools in browser


// DOM,  Closures, nested scope 

function one(){
    const username = "rohit"

    function two(){
        const website ="youtube"
        console.log(username);        
    }
    //console.log(website);
    two()    
}

//one()

if (true){
    const username = "rohit"
    if (username === "rohit"){
        const website = " youtube"
        //console.log(username + website);        
    }
    //console.log(website);    
}

//console.log(username);


// ++++++++++++++  interesting  +++++++++++++

console.log(addone(5));


function addone(num){
    return num + 1
}




//addTwo(5) // gives ReferenceError: Cannot access 'addTwo' before initialization

// this is called expression 
const addTwo = function(num){
    return num +2
}
addTwo(5)


