//dates
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCurrentdate = new Date(2025, 4, 9)
console.log(myCurrentdate.toString());

let anotherdate = new Date("2025-01-14");
console.log(anotherdate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(anotherdate.getTime());

//important 
console.log(Math.floor(Date.now()/1000));

anotherdate.toLocaleString('default',{
    weekday: "long"
})








