// EASY: Using ES6 syntax, write a function that takes in an array of numbers and outputs the maximum number.
// Input: [1, 2, 3]  Output: 3
// Input: [3, 6, 4, 5, 2, 1]  Output: 6
// Input: [3, 3, 3]  Output: 3
let nums = [5,8,4,2,20]

function compareNumbers(a,b){
    return a-b;
};
 myFunction = () => {
    return (nums.sort(compareNumbers)[nums.length-1]);

};


console.log(myFunction());


