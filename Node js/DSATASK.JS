// 1)Find Missing Number 
function MissingNumber(arr) {
     const n = arr.length + 1;  
     const e= (n * (n + 1)) / 2
     const a = arr.reduce((sum, num) => sum + num, 0)
     return e - a
 }
 const inputArr = [1, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log ( ` Missing Number: ${ MissingNumber ( inputArr ) }` )
 

// 2)Remove Duplicates from Array 

function Duplicates(n) {
    if (n.length === 0) {
        return 0
    }
    let i = 0;
    for (let j = 1; j < n.length; j++) {
        if (n[j] !== n[i]) {
            i++
            n[i] = n[j]
        }
    }

    return i + 1
}
const inputArray = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5]
const newLength = Duplicates(inputArray)
console.log(`Original Array is  [${inputArray}] `)
console.log("Removing duplicates from original : ", inputArray.slice(0, newLength));
console.log("New Length : ",  newLength )

// 3)Factorial 
function fact(n) {
    if (n===0 || n===1) {
        return 1;
    }
    return n* fact(n-1)
}
const num = 10
console.log("Factorial of", num, ":", fact(num))

// 4) Reverse Array
function Reverse(a, start, end) {
    while (start < end) {
        [a[start], a[end]] = [a[end], a[start]]; // Swap elements
        start++;
        end--;
    }
}
function Rotate(a, k) {
    const n = a.length;
    k = k % n; 
    Reverse(a, 0, n - 1);
    Reverse(a, 0, k - 1);
    Reverse(a, k, n - 1);
    return a;
}
const InputArray = [3, 8, 9, 2, 5];
const K = 2;
console.log("Rotated Array:", Rotate(InputArray, K))
