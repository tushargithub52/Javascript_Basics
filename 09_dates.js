// dates in javascript are calculated from 01-jan-1970 (as standard) in milliseconds... 

let myDate = new Date()
// console.log(typeof myDate);             //object
// console.log(myDate.toString());         //Wed Sep 04 2024 13:21:36 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     //Wed Sep 04 2024
// console.log(myDate.toISOString());      //2024-09-04T07:51:36.112Z
// console.log(myDate.toJSON());           //2024-09-04T07:51:36.112Z
// console.log(myDate.toLocaleDateString());   //4/9/2024
// console.log(myDate.toLocaleString());       //4/9/2024, 1:21:36 pm
// console.log(myDate.toLocaleTimeString());   //1:21:36 pm

// let myCreatedDate = new Date(2024,0,23);        //(year,month,day) ; month => 0-11
// let myCreatedDate = new Date(2024,0,23,5,3);    //(year,month,day,hours,minutes,seconds)
// let myCreatedDate = new Date("2024-09-04");     //(yyyy-mm-dd)
let myCreatedDate = new Date("01-14-2024");     //(mm-dd-yyyy)

// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));           //date present in milliseconds is converted into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

// We can customize our own date format using localestring...

console.log(newDate.toLocaleString('default',{
    weekday:"short",
}));

