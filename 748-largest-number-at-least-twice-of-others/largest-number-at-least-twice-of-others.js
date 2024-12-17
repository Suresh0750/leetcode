/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    /*
    first we will find largest and second largest index then
    then multiply second largest element and check is the first largest equal or greater then that then we return the index otherwise return -1
    */ 
    if(nums.length < 2) return -1
    
    let max1 = 0;
    let max2 = -1;

    for(let i = 1; i < nums.length; i++){
        if(nums[max1] < nums[i]){
            max2 = max1
            max1 = i
        }else if(nums[max2] < nums[i] || max2 == -1){
            max2 = i
        }
    }
    console.log(max1,max2)
    return (!nums[max2] || nums[max1] >= nums[max2] * 2)  ? max1 : -1
};