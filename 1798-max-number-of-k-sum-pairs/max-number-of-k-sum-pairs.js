/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    
    nums = nums.sort((a,b)=>a-b)
    let i = 0
    let j = nums.length-1
    let c = 0
    while(i<j){
        let sum = nums[i]+nums[j]
        if(sum==k){
            i++
            j--
            c++
        }else if(sum<k) i++
        else j--
    }
    return c
};