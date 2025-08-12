const { response } = require("express");

const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, network call

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    }, 1000)
}) 

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

//anather way to create promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed');
        resolve()
        
    },1000)

}).then(function(){
    console.log('Promise 2 Consumed');
    
})

//how to get data from datyabase

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'vaishu', email: 'vashu@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

//handle error

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'Raj', password: '123'})
        }else{
            reject('something went wrong')
        }
        
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username

}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log('showing error');
    
}).finally(function(){
    console.log("Finally The promise either resolve or reject");
    
})

//using async await
async function consumedPromiseFive() {
    try {
        const repsonse =  await promiseFour
        console.log(repsonse);
        
    } catch (error) {
        console.log(error);
        
    }
   
   
    
}
consumedPromiseFive()

// async function getAllusers() {
//    try {
//     const repsonse = await fetch('https://jsonplaceholder.typicode.com/users')
   
//     const data = await repsonse.json()
//     console.log(data);
    
    
//    } catch (error) {
//     console.log(error);
    
    
//    }

// }
// getAllusers()

//using for promises

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
