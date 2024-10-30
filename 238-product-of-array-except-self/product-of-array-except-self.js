/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
let sum = 1
let zero = []
nums.reduce((_,val,i)=>{
    
    if(val==0){
       zero.push(i)
    }
    return sum*= val==0 ? 1 : val
},0)

if(zero.length>1) return nums.map((val)=> 0)

let res = nums.map((val,i)=>{
    if(val==0) return sum
    else if(zero.length==1 &&val!=0) return 0
    else return sum/val
})

return res
};