// forof loop

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// maps.....holds unique value in form of key-value pair

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {           //destructuring of map using [] 
    // console.log(key,":-",value);
}

// objects are not iterable using forof loop instead we use forin loop

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

// in case of arrays forin loop prints values of key and not the actual array element i.e.

const programming = ["js", "c++", "py", "rb"]

for (const key in programming) {
    // console.log(programming[key]);
}

// maps are not iterable so we cannot use forin loop with them


/*********************************************************foreach loop*********************************************************************** */

const coding = ["javascript", "c++", "python", "ruby", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (val) => {
//         console.log(val);
// })

// function printme(item){      
//     console.log(item);
// }
// coding.forEach(printme)          //another syntax for forEach loop

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        langname: "javascript",
        langfilename: "js"
    },
    {
        langname: "ruby",
        langfilename: "rb"
    },
    {
        langname: "python",
        langfilename: "py"
    }
]

mycoding.forEach((item) => {
    // console.log(item.langfilename);
})

// forEach loop do not return any value....

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);        //values = undefined


/***********************************************************filter operation*********************************************************************** */

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newnums = mynums.filter( (num) => num > 4)
// const newnums = mynums.filter( (num) => {
//     return num > 4
// })
// console.log(newnums);

// same thing can also be done using forEach loop
// const newnums = []
// mynums.forEach( (num) => {
//     if (num > 4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);

/****************************************************************map function************************************************************ */

// const newnums = mynums.map( (num) => num + 10)
// console.log(newnums);

// chaining i.e. using more than one methods at a time
// const newnums = mynums
//                     .map( (num) => num * 10)
//                     .map( (num) => num + 1)
//                     .filter( (num) => num >= 40)

// console.log(newnums);

/**************************************************************reduce method************************************************************** */
// it has accumulator and a current value.....value passed after comma is for accumulator
// const mynums = [1, 2, 3]

// const myTotal = mynums.reduce( function (acc, currval) {
//     console.log(`Acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = mynums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        course: "js course",
        price: 2999
    },
    {
        course: "py course",
        price: 999
    },
    {
        course: "mobile dev course",
        price: 5999
    },
    {
        course: "data science course",
        price: 12999
    },
]
const TotalValue = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
// console.log(TotalValue); 