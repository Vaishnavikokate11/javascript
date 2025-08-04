// const coding = ['js', 'java', 'cpp', 'ruby']
// const value = coding.forEach( function (item) {
//     console.log(item);
    
// })
// console.log(value); //This is not working when we perform operation for each of item

const Mynums = [1,2,3,4,5,6,7]

const myval = Mynums.filter( (num) => {
    return num > 3})
console.log(myval);

const books = [
    {
        title : 'book one', genre : 'history', publish: 1990, edition: 2004
    },
     {
        title : 'book two', genre : 'fiction', publish: 1994, edition: 2007
    },
    {
        title : 'book three', genre : 'history', publish: 1996, edition: 2010
    },
    {
        title : 'book four', genre : 'non-fiction', publish: 2002, edition: 2020
    },

]

//const myBook = books.filter( (bk)=> bk.genre === 'history')

const myBook = books.filter(  (bk) => bk.publish >= 1970 && bk.genre == 'history')

console.log(myBook);

