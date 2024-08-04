/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

nums = nums.sort((a,b)=>a-b)
let left,right
let res = []
for(let i=0;i<nums.length-2;i++){
    if(nums[i]!==nums[i-1]){
        left = i+1
        right = nums.length-1
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right]
            if(!sum){
                res.push([nums[i],nums[left],nums[right]])
                while(nums[left]==nums[left+1]) left++
                while(nums[right]==nums[right-1]) right--
                left++
                right--
            }else if(sum<0) left++
            else if(sum>0) right--
        }
    }
}
return res
};