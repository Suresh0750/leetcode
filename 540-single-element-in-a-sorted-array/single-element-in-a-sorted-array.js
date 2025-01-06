/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let i = 0
    let j = nums.length-1
    while(i<nums.length/2){
        if(nums[i]!==nums[i+1]){
            return nums[i]
        }
        if(nums[j]!=nums[j-1]){
            return nums[j]
        }
        i+=2
        j-=2
    }

};