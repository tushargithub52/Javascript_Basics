// promises are used in real world in cryptographic operations and network systems
// promise is a object 
//creating promise.........
const promiseOne = new Promise(function (resolve, reject) {
    // Do any async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()           //it is directely connected to .then()
    }, 1000)
})

// consumption of created promise.......

promiseOne.then(function () {
    console.log("Promise consumed");
})

// another promise creation and consumption.....

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');
})

// another one.......

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

// another one....

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Tushar", password: "123" })
        } else {
            reject('ERROR:Something went wrong')
        }
    }, 1000)
})

// chaining......

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => console.log(error)).finally(() => console.log('The promise is either resolved or rejected'))

// another one.......

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// one disadvantage of using async await is error handling ..... for this we have try - catch

async function consumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()      //response also takes time so we have to add await
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))