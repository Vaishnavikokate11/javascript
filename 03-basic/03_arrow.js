const chai =  () => {
    let username = "vaishu"
    console.log(this.username);
    
    
}
chai()

const addTwo = (num1, num2) => {
return num1+ num2
}
console.log(addTwo(4,5));

//anather way
//const addOne = (num, num3) => num + num3

const addOne = (num, num3) => (num + num3)

//object return
const addthree = (num4, num5) => ({username : "sam"})

console.log(addthree(4,6));
