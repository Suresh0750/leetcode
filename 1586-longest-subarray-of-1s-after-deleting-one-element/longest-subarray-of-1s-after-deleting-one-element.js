/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    if(nums.every((val)=> val==1)) return nums.length-1
// 0,1,1,1,0
// 1,1,1,0,1,1,0
// 0,1,1,0,1


// 0 -> 
    let i = 0 
    let j = i
    let c = 0
    let oneExcep = 1
    let res = 0
    while(j<nums.length){
        if(nums[j]==1) c++
        else if(nums[j]==0 && oneExcep==1){
            oneExcep--
            i = j
        }else if(!nums[j]){
            res = Math.max(res,c)
            c = 0 
            oneExcep = 1
            j = i
        }else if(j==nums.length-1){
            res = Math.max(res,c)
            break;
        }
        j++
    }
    console.log(res)
    if(c) res = Math.max(res,c)

    return res
};