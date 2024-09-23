// function sayMyName(){       
//     console.log("T");
//     console.log("u");
//     console.log("s");
//     console.log("h");
//     console.log("a");
//     console.log("r");
// }

// sayMyName()             //execution

// function addtwonumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addtwonumbers(3, "a")       //3a
// // addtwonumbers(3, "4")       //34
// // addtwonumbers(3, 4)        //7

// //In the above example 3 and "a" are arguments (passed during function call)
// //num1 and num2 are parameters (in function definition)

// const result = addtwonumbers(3, 5)

// console.log("Result: ", result);    //undefined as we have not returned any value from the function


// function loginusermessage(username){
//     return `${username} Just logged in `
// }

// console.log(loginusermessage("Tushar"));
// console.log(loginusermessage());                //undefined Just logged in


/*****************************arrays and functions************************************** */


// function calculateCardPrice(...num1){       //... is rest operator
//     return num1                             //jitni bhi values pass kroge sbko ek array ke bundle mein pack krdega

// }
// console.log(calculateCardPrice(200, 400, 500));     //[ 200, 400, 500 ]


/****************************objects and functions***************************** */

const user = {
    username: "Tushar",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user)
handleobject({
    username: "Sammy",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnsecondvalue(anyarray){
    return anyarray[1]
}

// console.log(returnsecondvalue(myNewArray));
// console.log(returnsecondvalue([200, 400, 100, 600]));
