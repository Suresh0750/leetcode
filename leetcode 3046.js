
// Input: nums = [1,1,2,2,3,4]
// Output: true
// Explanation: One of the possible ways to split nums is nums1 = [1,2,3] and nums2 = [1,2,4].



var isPossibleToSplit = function(nums) {
    let nums1 =[]

let nums2=[]

let i=0
let j=0
let k=0
while(i<nums.length){
    
    if(!nums1.includes(nums[i])){        
        nums1[j++] = nums[i]
    }else if(!nums2.includes(nums[i])){
        
        nums2[k++]=nums[i]
    }else{
        
        return false
    }
    
    i++
}
return true
};