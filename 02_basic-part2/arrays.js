//aarays

const myArr = [0,1,2,343,4];
const myArr1 = ["vaishu", "kokate"]

const myarr3 = new Array(1,2,3,4)
console.log(myArr[2]);

//arrays method
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

//slice and splice

console.log("A", myArr);

const mynewArray1 = myArr.slice(1,3)

console.log(mynewArray1);
console.log("B", myArr);

const mynewArray2 = myArr.splice(1,3);
console.log(mynewArray2);
console.log("C", myArr);



 




