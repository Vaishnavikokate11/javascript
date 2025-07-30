const name = "vaishu"
const repoCount = 6

console.log(name + repoCount) // its bad practice

//use this
console.log(`hi my name is ${name} and my repo is ${repoCount}`);

//anather way to declare string
const gameName = new String('pub g')
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const onestring = gameName.substring(0, 4)
console.log(onestring);

const anotherstring = gameName.slice(-5, 4)
console.log(anotherstring);

const newOne = "   vaishu    "
console.log(newOne);
console.log(newOne.trim());

const replname = "https://vaishu.com/vaihs"
console.log(replname.replace('vaishu', '-'))

console.log(gameName.split('-'));

console.log(gameName.bold());
console.log(gameName.concat('hello'));












