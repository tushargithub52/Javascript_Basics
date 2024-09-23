// Immediately Invoked Function Expressions (IIFE)...)(
// 2 problems.....one is immediate execution of function and second is pollution due to global scope

(function chai () {
    //named IIFE
    console.log("DB Connected");
})();                                       //to end the code in IIFE we have to explicitly use ;

( (name) => {
    //simple or unnamed IIFE
    console.log(`DB Connected 2 ${name}`);
})('Tushar')

