/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    
    let c = 0
    nums.forEach((val)=>{
        if(val>=k)c++
    })
    return nums.length-c
};