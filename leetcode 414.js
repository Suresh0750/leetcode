/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    let i = 0

    let first = -Infinity
    let second = -Infinity
    let third = -Infinity

    while(i<nums.length){
    
    if(nums[i]>first){
        third = second
        second = first
        first = nums[i]
    }else if(nums[i]>second && nums[i]<first){
        third = second
        second = nums[i]
    }else if(nums[i]>third && second>nums[i]){
        third = nums[i]
    }
    i++
}

return third == -Infinity ? first : third
 
};