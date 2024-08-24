/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    
let c = 0

nums.forEach((val,i)=>{
    let j = nums.length-1
    while(j>i){
        if(val==nums[j])
        c++
        j--
    }
})
 return c
};