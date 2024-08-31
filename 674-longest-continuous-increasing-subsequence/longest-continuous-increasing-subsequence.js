/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
   
    let c = 0
    let res = 0
    let i =0
   while(i<nums.length-1){
    if(nums[i]<nums[i+1]){
         c++
         res = res>c ? res : c
    }
    else{
        console.log(res)
        res = res>c ? res : c
        c = 0
    }
    i++
   }
   return res+1 
};