//singleton

//object literal

//declare symbol
const mySym = Symbol("key1")

const jsUser = {
    name : "vaishu",
    [mySym] : "mykey1", // for writing in object
    age: 23,
    location: "pune",
    email: "vaishu33@gmail.com",
    isLoggin : false,
    DayOut: ["monday", "saturday"]
}

console.log(jsUser.name);
console.log(jsUser["email"]); // anather way to access element from object

//acces symbol
console.log(jsUser[mySym]);

//lock this means not change
//Object.freeze(jsUser)
const email = "vaihu45gmail.com"
console.log(jsUser);

//add function
jsUser.greeting = function(){
    console.log("hello ");
    
}
//add another function for define object or acces name email
jsUser.greetingTwo = function(){
    console.log(`hello my ${this.name}`);
    
}
console.log(jsUser.greetingTwo());

console.log(jsUser.greeting());





