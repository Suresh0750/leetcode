/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
   let store = nums[0]

    let i = 0
    let res = []
    while(i<nums.length){
        if(nums[i]+1==nums[i+1]){
        i++
        continue
        }else{
            if(store==nums[i]) res.push(`${nums[i]}`)
            else res.push(`${store}->${nums[i]}`)
            store = nums[i+1]
        }
        i++
    }
 return res 
};