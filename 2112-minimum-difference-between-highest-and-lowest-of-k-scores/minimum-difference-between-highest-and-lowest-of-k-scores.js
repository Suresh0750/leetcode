/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
 
    nums.sort((a, b) => a - b);

    let result = Infinity;

    for (let i = k - 1; i < nums.length; i++) {
        result = Math.min(result, nums[i] - nums[i - k + 1]);
    }

    return result;
};