// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB Connected`);
})();

//chai()

// (function)(executioncall)


( (name) => {
    //unnamed IIFE
    console.log(`DB Connected through = > function ${name} `);
    
})('Rohit')

// when we write two IIFE we use semicolon at the end of first IIFE

