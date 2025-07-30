const marvel_heros = ["thor", "Ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);

const newArr = marvel_heros.concat(dc);
console.log(newArr);

//another method for concat is spred

const newSpred =  [...marvel_heros, ...dc]
console.log(newSpred);

const myBadarray = [2,3,4,[5,6,7],[6,9,10]];

const realarray = myBadarray.flat(Infinity);
console.log(realarray);

console.log(Array.isArray("vaishu"));
console.log(Array.from("vaishu"));







