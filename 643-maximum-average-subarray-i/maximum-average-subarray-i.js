/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0
   
    let sum = 0
    while(i<k){
        sum+=nums[i]
        i++
    }
    let max = sum
    while(i<nums.length){
         sum = (sum+nums[i])-nums[i-k]
        max = Math.max(max,sum)
        i++
    }

    return max/k
};