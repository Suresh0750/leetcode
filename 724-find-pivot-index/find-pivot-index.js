/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = nums.reduce((acc,curr)=> acc+curr)
    let leftIndexSum = 0
    for(let i=0;i<nums.length;i++){
        if(sum-(leftIndexSum+nums[i])==leftIndexSum){
            return i
        }
        leftIndexSum+=nums[i]
    }
    return -1
};