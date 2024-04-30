/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let again = true
    let i
    let temp
    while(again){
        again = false
        i = 0
        while(i<nums.length-1){
            if(nums[i]<nums[i+1]){
                temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
                again = true
            }
            i++
        }
    }

    return (nums[0]-1)*(nums[1]-1)

};