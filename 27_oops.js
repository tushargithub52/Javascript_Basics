// javascript and classes

// Yes, JavaScript has classes. They were introduced in ECMAScript 6 (ES6) in 2015 as a more intuitive syntax for prototypical inheritance, which JavaScript has always used.

// JavaScript classes are primarily syntactical sugar over the existing prototype-based inheritance model, making the process of creating objects and working with inheritance easier and more familiar for developers coming from classical object-oriented programming languages like Java or C++

// OOP

// Object
// collection of properties and methods

// why use OOP
// provide many features

// parts of OOP
// Object literal
// const user = {
//     username:"Tushar", 
//     logincount: 5
// }
// console.log(user.username);


// Constructor functions
function User(username, logincount, isloggedIn){
   this.username = username
   this.logincount = logincount
   this.isloggedIn = isloggedIn
   return this          //not necessarily required
}
const userone = new User("Tushar", 12, true)
const usertwo = new User("Snigdha", 8, false)
console.log(userone);
console.log(usertwo); 

// When we use new keyword:- 
// (1). Empty object is created called as instance
// (2). Constructor function is called due to new keyword
// (3). constructor functions packs it in this keyword and return to the instance
 
// Prototypes
// Classes
// Instances (new, this)



// 4 Pillars
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


