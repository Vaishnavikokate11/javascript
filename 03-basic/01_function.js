function addtwonube(num1, num2) {
    //console.log(num1+ num2);
    return num1+ num2
    
    
}
const result = addtwonube(3,7)
console.log("result is "+ result);

function loginUser(username) {
    if(!username){
        console.log("plz enter user");
        return
        
    }
    return `${username} just login`
    
}

console.log(loginUser());

function calculteCardPrice(val1, val2,...numb1) {
    return numb1
    
}
console.log(calculteCardPrice(200,400,600));

//using object
const users = {
    name : "rohan",
    price : "455"
}

function accesOject(anyobj) {
    console.log(`the user is ${anyobj.name} and price is ${anyobj.price}`);
    
    
}
accesOject(users)

//using array
const myArray = [200,600,300]

function returnSecval(getMyaray) {
    return getMyaray[1];
    
}
console.log(returnSecval(myArray));



