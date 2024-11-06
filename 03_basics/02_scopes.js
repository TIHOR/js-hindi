
// var is not used as it does not respect scope
// let is used 

let a = 300

//var c = 300 // global scope

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
    //var c = 30 // block scope
}


console.log(a);
//console.log(b);
//console.log(c);


// global scope in node is different than global scope 
// in Window that we see in Console of devtools in browser