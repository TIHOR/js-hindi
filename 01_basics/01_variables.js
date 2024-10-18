const accountId  = 12323
let accountEmail = "rotew@ikea.com"
var accountPassword = "124345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

//  {} curly braces signifies scope 
// var may give scope problems , let is used to avoid these scope problems

/*
prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "hc@hc.com"
accountPassword = "232323"
accountCity = "Bangalore"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState ])

