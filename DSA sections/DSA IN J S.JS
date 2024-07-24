// 
function MissingNumber(arr) {
     const n = arr.length + 1;  
     const e= (n * (n + 1)) / 2
     const a = arr.reduce((sum, num) => sum + num, 0)
     return e - a
 }
 const inputArr = [1, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log ( ` Missing Number: ${ MissingNumber ( inputArr ) }` )
 