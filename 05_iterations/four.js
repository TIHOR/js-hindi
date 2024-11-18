// forin loop used for objects
const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

for (const key in myObject) {
    //console.log(`${key} is shortcut for ${myObject[key]}`);    
}

const programming = ["js","rb","java","cpp"]

for (const key in programming) {
    //console.log(programming[key])
}

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'United States OF America')
// map.set('FR', 'France')
// map.set('IN', 'India')

// for (const key in map) {
//     console.log(key);    
// }

