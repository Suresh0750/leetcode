/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let i = min
    while(i<=max){
        if(!nums.includes(i)){
            return i
        }
        i++
    }
    return min>0 ? min-1 : max+1
};