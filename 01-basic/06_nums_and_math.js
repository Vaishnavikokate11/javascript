const score = 400

console.log(score);

//anather way for number to sure number
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const nextnumber = 123.45
console.log(nextnumber.toPrecision(4));

const hudnreds = 10000000
console.log(hudnreds.toLocaleString('en-IN'));

/***** maths */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.4));
console.log(Math.ceil(4.2));
console.log(Math.sqrt(4));
console.log(Math.max(4,5,87,8));

//most of time use math lib
console.log(Math.random());

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max-min+1)+ min));













