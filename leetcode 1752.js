/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
   
    let c = 0
    
    // console.log(nums.slice(0,3))
    
    let i = 0
    while(i<nums.length-1 && c<=2){
        
        if(c==2) return false
        if(nums[i]>nums[i+1]){
            nums = (nums.slice(i+1)).concat(nums.slice(0,i+1))
            c++ 
            i=-1
        }
        i++
    }
    
    return true
    };