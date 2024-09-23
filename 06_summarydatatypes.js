// On the basis of how data is stored and accessed in memory , datatypes are of 2 types:-

// (1). Primitive(Copy of original is made and then the changes are made in the copy)

// ? types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsidetemp = null
let useremail

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id);
console.log(anotherid);



console.log(id === anotherid);

const BigNumber = 35254664242n

// (2). Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman","Naagraj","Doga"]
let myObj = {
    name: "Tushar",
    age: 21,
}

const myfunction = function(){
    console.log("Hello World");
}



// JS is a dynamically typed language i.e. explicit declaration of variable is not required , variable types are determined at runtime.

//*******************************************************memory****************************************************************************

// Stack (Primitive), Heap (Non-Primitive)
// In Stack a copy is passed and changes are made in that copy while in heap orginal refrence is given

let myYoutubename = "tusharrai"

let anothername = myYoutubename
anothername = "Brutus"
console.log(myYoutubename);
console.log(anothername);   //only value of copy changed not original value

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}
let usertwo = userone
usertwo.email = "Tushar@gmail.com"

console.log(userone.email);
console.log(usertwo.email);     //original value gets changed