// MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2


var nums= [5,7,13,4,3];

function average(){
    var sum =0;
for(var i =0; i < nums.length; i++){
sum += nums[i];}
console.log(sum)
{
    return sum/nums.length
}
};

console.log(average());