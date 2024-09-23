// this keyword refers to the current context...

const user = {
    username: "Tushar",
    price: 999,

    welcomemessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()

// console.log(this);          //{} i.e. no current context ....empty
// In browser same above command will print window object 

// function chai(){
//     let username = "Tushar"
//     console.log(this.username);         //undefined as we cannot use this in function...only used in objects
// }

// chai()

// arrow function........() => {}

// const chai = () => {
//     let username = "Tushar"
//     console.log(this.username)  //undefined
//     console.log(this);          //{}
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                           //explicit return
// }
// const addTwo = (num1, num2) =>  num1 + num2         //implicit return
const addTwo = (num1, num2) => ({username : "Tushar"})      //in this case () are compulsion

// console.log(addTwo(3,4));

