/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
   
let n = nums.length
let leftMin = [nums[0]]
let rightMax = new Array(n)
rightMax[n-1] =nums[n-1]

for(let i=1;i<n;i++){
    leftMin[i] = Math.min(leftMin[i-1],nums[i])
}

for(let i=n-2;i>=0;i--){
    rightMax[i] = Math.max(rightMax[i+1],nums[i])
}

for(let i=0;i<n;i++){
    if(leftMin[i]<nums[i] && nums[i]<rightMax[i]){
        return true
    }
}
return false
};