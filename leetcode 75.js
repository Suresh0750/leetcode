/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let again 
    let i 
    let temp;
    do{
        again = false
        i=0
        while(i<nums.length-1){

            if(nums[i]>nums[i+1]){
                temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
                again = true
            }
            i++
        }
        
    }while(again)
    return nums
};