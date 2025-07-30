//const user = new Object() // constructor way
// const user = {}   //singlton way

const tinderUser = {
    id: "2321",
    fullName:{
        username:{
            firstName : "sam",
            lastName : "gupta"
        }
    },
    email: "sam3@gmail.com"
}

console.log(tinderUser.fullName.username);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}  // easy way for concate 
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('email'));
console.log(tinderUser.valueOf('email'));

const course = {
    name: "javascript",
    price: "453",
    Teacher : "hitesh"
}

//destructure in object
const {Teacher} = course

console.log(Teacher);







