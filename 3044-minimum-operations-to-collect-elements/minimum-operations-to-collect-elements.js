/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    
let smal = nums.length

let i = 0
while(i<=k){
    if(nums.includes(i)){
        let index = nums.lastIndexOf(i)
        smal = smal>index ? index : smal
    }
    i++
}

return nums.length-smal

};