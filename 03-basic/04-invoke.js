
//Invoke fumction automatically // this is called (IIFE) global scope polution remove
(function chai() {
    console.log(`DB connected`);
    
    
})();

((name)=> {
    console.log(`DB two connected ${name}`);
    

})('vaishu')