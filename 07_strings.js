const name = "Tushar"
const count = 40

console.log(name + count + "Rai");
//But in modern days above method is very less used

//String interpolation method (we use backticks)
console.log(`Hello!! My name is ${name} and my count is ${count}`);     

//Another way of declaring string

const gameName = new String("Brutus-is-Tushar")

console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt([2]));
console.log(gameName.indexOf("t"));

const newstring = gameName.substring(0,4)       //no negative values
console.log(newstring);

const anotherstring = name.slice(0,-4)          //negative values can be given
console.log(anotherstring);

const newstringone = "    Tushar    "
console.log(newstringone);
console.log(newstringone.trim());       //removes starting and end spaces....trimEnd() and trimStart() are also there

const url = "https://Tushar.com/Tushar%20Rai"
console.log(url.replace("%20","-"));        
console.log(url.includes("Tushar"));

console.log(gameName.split('-'));
console.log(typeof url.split('/'));



