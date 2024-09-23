// Arrays are objects in js .....collection of multiple items stored in single variable.... 
// Arrays are resizable in js !!
// Arrays can store elements of different datatypes !!
// Arrays creates shallow copies on applying copy operation 
// Shallow copies (same reference point) and deep copies(not same reference)

const myArr = [0, 1, 2, 3, 4, 5,"Tushar"]
const myHeroes = ["Shaktimaan","Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[6]);

// Array methods...........

// myArr.push(6)       //adds element to the array
// myArr.pop()         //pops last element
// console.log(myArr);

// myArr.unshift(10)       //adds element in start
// myArr.shift()           //pops element from start
// console.log(myArr);

// console.log(myArr.includes(9));     //returns boolean value
// console.log(myArr.indexOf(19));     //return index of element is present in array else, -1

const newArr = myArr.join('-')         //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);

// slice and splice
// slice does not make any changes in the original array
// splice removes the elements from the original arrays

// console.log("A ",myArr);

// const mya1 = myArr.slice(1,3)

// console.log(mya1);

// console.log("B ",myArr);

// const mya2 = myArr.splice(1,3)

// console.log(mya2);
// console.log("C ",myArr);


/*************************************************************************************************************************/

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)       //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)      //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]     //spread operator...

// console.log(all_new_heroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)     //Returns a new array with all sub-array elements concatenated into it upto given depth

// console.log(real_another_array);


// console.log(Array.isArray("Tushar"));       //checks if the given object is an array
// console.log(Array.from("Tushar"));          //converts given object into array 

//interesting case
// console.log(Array.from({name: "Tushar"}));      //returns an empty array because unable to convert key-value pair into an array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));      //converts into array


