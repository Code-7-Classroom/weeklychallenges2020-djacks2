// //Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

var num = [1,2,5,8,4,7];
var target = 5;

function medIndex(num,target) {
    if(num.indexOf(target) != -1) {
        return num.indexOf(target);
    } else{
        return -1;
    }
};

console.log(medIndex(num,target));