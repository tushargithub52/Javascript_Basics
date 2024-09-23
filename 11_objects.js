// two ways of declaring objects...literals and constructors
// singleton will be formed when declared as constructors i.e. object.create()
// singleton will not be formed when declared as literals 

//object literals

// const mysymbol = Symbol("key1");        //using symbol in object as a key
// const Jsuser = {
//     name: "Tushar",
//     "full name": "Tushar Rai",      //this value can't be accessed using dot so we use the other method
//     age: 21,
//     location: "Delhi",
//     email: "tushar@gmail.com",
//     isLoggedIn: false,
//     LastLogInDays: ["Monday", "Saturday"],
//     [mysymbol]: "mykey1"                        //for symbol we use []
// }

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);

// console.log(Jsuser["full name"]);       //can't use dot here !!

// console.log(Jsuser[mysymbol]);

// //changing values of any element of object
// Jsuser.email = "tushar@google.com"
// console.log(Jsuser["email"]);

// Object.freeze(Jsuser)       //Prevents the modification 
// Jsuser.email = "tushar@microsoft.com"
// console.log(Jsuser);

//adding function to the object

// Jsuser.greeting = function(){
//     console.log("Hello JS user");
// }
// Jsuser.greetingtwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingtwo());
// console.log(Jsuser);

/****************************************************************************************** */

//object constructor

const tinderuser = new Object()

tinderuser.name = "Sammy"
tinderuser.id = "123abc"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

// const regularuser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Tushar",
//             lastname: "Rai"
//         }
//     }
// }

// console.log(regularuser.fullname.userfullname.firstname);

// const obj1 = {1 : "a", 2 : "b"}
// const obj2 = {3 : "c", 4 : "d"}

// const obj3 = {obj1, obj2}       //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2)      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = {...obj1, ...obj2}     //mostly used 
// console.log(obj3); 

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));       //takes all the keys and stores them in an array
// console.log(Object.values(tinderuser));     //takes all the values and stores them in an array

// console.log(tinderuser.hasOwnProperty("isLoggedIn"));   //return boolean value


// de-structuring of objects

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course 
const {courseInstructor: instructor} = course 
// console.log(instructor);



//JSON (Javascript object notation)....similar to objects...api are present in json format 
