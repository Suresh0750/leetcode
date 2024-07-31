/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    
  let addDigit = 0
    let sum = 0

    let i = 0
    function addDigitSum(nums){
        if(!nums) return
        addDigit+=(nums%10)
        console.log(addDigit)
        addDigitSum(Math.floor(nums/10))
    }
    while(i<nums.length){
        if(nums[i]>9){
            sum+=nums[i]
            addDigitSum(nums[i])
        }
        i++
    }
    console.log(sum,addDigit)
    console.log(sum-addDigit)
    return sum-addDigit
};