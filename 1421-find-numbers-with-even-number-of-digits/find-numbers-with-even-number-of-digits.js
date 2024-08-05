/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let c =0
    nums.reduce((acc,cur)=>{
        if((cur+'').length%2==0) c++
    },0)
    console.log(c)
    return c
};