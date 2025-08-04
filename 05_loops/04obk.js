const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby'
}

for (const key in myObj) {
    console.log(`${key} is the ${myObj[key]}`);
      
}

//using array for in

const myArray = ['js', 'java', 'cpp']

for (const key in myArray) {
    console.log(myArray[key]);   
    
}
const map = new Map()
map.set('IN', 'India');
map.set('USA',"Unitied state of America") // for map for in not work
map.set('FN', "france")

for (const key in map) {
    console.log(map);
    
    
}