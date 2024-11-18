// for each

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (val){
//     console.log(val);    
// })

// coding.forEach((item) => {
//     console.log(item);    
// })

// function printMe(item){
//     console.log(item);    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);    
// })

// [{},{},{}]

const myCoding = [
    {
        langName: "Javascript",
        langFileNameExt: ".js"
    },
    {
        langName: "Java",
        langFileNameExt: ".java"
    },
    {
        langName: "Python",
        langFileNameExt: ".py"
    },
]

myCoding.forEach( (item) => {
    console.log(`${item.langName} has file extenion ${item.langFileNameExt}`);  
})