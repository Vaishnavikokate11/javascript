const myNumb = [1,2,3]

const myTotal = myNumb.reduce( function(acc, curVal) {
    console.log(`acc: ${acc} currVal : ${curVal}`);
    return acc + curVal}, 3)
console.log(myTotal);
