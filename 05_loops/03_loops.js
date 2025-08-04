//for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greeting = "Hello' world"
for (const grrek of greeting) {
    console.log(`Each value of ${grrek}`);
      
}

//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA',"Unitied state of America")
map.set('FN', "france")

for (const [key, value] of map ) {
    console.log(key, '-' ,value);
    
    
}

//object

const myObj = {
    'gamme1': 'NES',
    'game2': 'Kabbddi',
    'game3': 'Football'
}