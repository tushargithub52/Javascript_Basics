// if

// if-else

// if - else-if - else

// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn && debitCard) {
//     console.log(`Allow to buy course`);
// }

// for multiple conditions we have....&&, ||

/***************************switch case*************************** */

// const month = 3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         break;
// }

/**************************************************************interesting****************************************************** */

const useremail = "hitesh.ai"

// if (useremail) {
//     console.log("Got user e-mail");
// } else {
//     console.log("Don't got user e-mail");
// }

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values => true, "0", "false", " ", [], {}, function(){}

//detecting empty array....
if (useremail.length === 0) {
    console.log("Array is Empty");
}

//detecting empty objects....
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Nullish coalescing operator (??): provides safety check for null and undefined

// let val1;
// val1 = 5 ?? 10           //val1=5
// val1 = null ?? 10        //val1=10
// val1 = undefined ?? 15      //val1 =15

//Ternary Operator    =>   condition ? true : false

