/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {

    let final = new Array(nums.length)
    
    let pos = 0
    
    let neg = 1
    
    for(let i=0;i<nums.length;i++){
        
        if(nums[i]>0){
            
            final[pos]=nums[i]
            pos+=2
        }else{
            
            final[neg] = nums[i]
            neg+=2
        }
    }
    
    return final
    };