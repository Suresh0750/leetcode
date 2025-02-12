/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let max = Math.max(...nums)
    let sum = 0
    console.log(sum)
    for(let i=0;i<k;i++){
        sum+=i+max
    }
    return sum
};