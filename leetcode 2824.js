/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {


    var c=0
    
    var i=0
    while(i<nums.length){
        
        var j=i+1
        while(j<nums.length)
        {
            if((nums[i]+nums[j])<target)
            {
                c++
            }
            j++
        }
        i++
    }
    return c
    
    };