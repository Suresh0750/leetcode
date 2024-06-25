/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = []

function recursion(t,v,r){
    
    if(t==0) return
    
    r.push(v)
    recursion(t-1,v,r)
}
let i =0
while(i<nums.length){
        recursion(nums[i],nums[i+1],result)
    i+=2
}

return result
};