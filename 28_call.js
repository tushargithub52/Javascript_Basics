function SetUsername(username) {
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)       //this will only give reference and do not actually call the function
    // SetUsername.call(username)      //this keyword will refer to the function context which will be deleted after the function call
    SetUsername.call(this, username)  // giving reference of this so that the function uses this keyword to refer the createUser context
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail.com", "133")
console.log(chai);
