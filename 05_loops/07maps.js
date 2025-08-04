const Mynums = [1,2,3,4,5,6,7,8,9,10]

// const myNumb = Mynums.map( (num) => num + 10)

const myNumb = Mynums
    .map( (num) => num * 10) //use two map inside
    .map( (num) => num +2)
    .filter( (num) => num >= 30)
   .push( (num) => num[35])
console.log(myNumb);
