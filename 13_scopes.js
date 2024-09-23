// Block scope {} and Global scope....


// if (true) {
//     let a = 10          //local scope
//     const b = 20
//     var c = 30
//     console.log("INNER: ",a);
// }

// let a = 300             //global scope
// console.log("OUTER: ",a);
// console.log(b);
// console.log(c);         //var will be printed outside of its scope...as it has default global scope !!

//In case of nested functions child functions can access the variables of parent function !! Vice-versa is not true !!
// function one(){
//     const username = "Tushar"

//     function two(){
//         const website = "YouTube"
//         console.log(username);          //can be accessed
//     }
//     // console.log(website);           //can't be accessed

//     two()
// }
// one()

/***********************************************hoisting**************************************** */
// Hoisting is Javascript's default behaviour of moving declarations to the top....

addone(2)               //this won't generate error
function addone(num){
    return num + 1
}

// addtwo(3)                           //this will generate error
// const addtwo = function(num){
//     return num + 2
// }

