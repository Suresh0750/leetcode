/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    
    let res = []
    let i =0
    while(i<nums.length){
        res.push(nums[nums[i++]])
    }
    return res
};