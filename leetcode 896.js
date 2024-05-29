/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    function isIncrease(nums){
        let i = 0
        while(i<nums.length-1){
            if(nums[i]>nums[i+1]){
                return false
            }
            i++
        }   
        return true
    }
        function inDerease(nums){
        let i = 0
        while(i<nums.length-1){
            if(nums[i]<nums[i+1]){
                return false
            }
            i++
        }
        return true
        
    }
        let result = isIncrease(nums) || inDerease(nums) ? true : false;
    
        return result
     };