// if statement
const isUserLogin = true
const temp = 41

if(temp > 41){
    console.log("less than 50");
    
}else{
console.log("temp is greater than 50 ");
}

//
const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`power of user ${power}`);
    
    
// }
// console.log(`power of user ${power}`); // blog scope

//multiple condiation

const balance = 1000
if (balance < 500) {
    console.log("less than");
}else if(balance < 750){
    console.log("less than 750");
    
}else{
    console.log("less than 1200");
    
}

const loginUser = true
const debitCard = true
const logginFromGoogle = false
const logginFromEmail = true

if (loginUser && debitCard) {
    console.log("allow to buy course");
    
    
}

if (logginFromEmail || logginFromGoogle) {
    console.log("user login ");
    
    
}


