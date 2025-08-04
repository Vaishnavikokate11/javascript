//In array we use for of or for each loop

const coding = ['js', 'java', 'cpp', 'ruby']
coding.forEach( function (item) {
    console.log(item);
    
})

coding.forEach( (val) =>{
    console.log(val);
    
})

coding.forEach( (valu, index, arr)=> {
    console.log(valu, index); //print item with index like 0-1-2
    
})

//using array object for each loop

const myCoding = [
    {
        langName : 'javascipt',
        langFileName : 'js'
    },
    {
        langName : 'java',
        langFileName : 'java'
    },
    {
        langName : 'python',
        langFileName : 'py'
    }

]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
})
