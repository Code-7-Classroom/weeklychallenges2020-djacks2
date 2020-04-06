// Easy Challenge #1
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.You may assume that each input would have exactly one solution, and you may not use the same element twice.
//  integers numbers= [5,2,10,4,7],  target = 11,
//  Because numbers[3] + numbers[4] = 4 + 7 = 11,
//  [3,4] .

public int = [3,6,8,5,11]
 public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return new int[] { i, j };
            }
        }
    }
    throw new IllegalArgumentException("No two sum solution");
}

// // Easy Challenge #2
// var input=['racecar']
// var input1=['race a car']
// Boolean(input===input1)
// console.log(input===input1)