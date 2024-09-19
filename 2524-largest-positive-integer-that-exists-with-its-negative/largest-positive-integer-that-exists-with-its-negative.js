/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    let k = -1

    let i=0
    while(i<nums.length){
        if(nums.includes(Number(`-${nums[i]}`))){
        console.log(nums[i])
            k = k > nums[i] ? k : nums[i]
        }
        i++
    }

    return k


};