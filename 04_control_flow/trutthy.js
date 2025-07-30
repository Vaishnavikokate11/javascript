
const userLogin = []//"ht@gmail.com"

if (userLogin) {
    console.log("Got user mail");   
    
}else{
    console.log("Don't get mail");
    
}
//false value
//false, 0, -0, BigInt 0n, " ", null, undefined , NAN

//true value
// "0", 'false, " " , [], {}, function(){}

if (userLogin.length ==0) {
    console.log("array is empty");
    
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length == 0) {
    console.log("object is empty");
    
    
}

//Nulish Coalescing operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 12

console.log(val1);

//terniary operator

//condition ? true ? false
const icePrice = 200
icePrice <= 80 ? console.log("less then 80"): console.log("more than 80");



