/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0
    let obj = {}
    while(i<nums.length){
       
        obj[nums[i]] = (obj[nums[i]] || 0)+1
        i++
    }

   for(let val of Object.entries(obj)){
       if(val[1]>1) return Number(val[0])
   }
    
};