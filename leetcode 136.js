/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map()

    let i = 0
    while(i<nums.length){
        map.set(nums[i],(map.get(nums[i]) || 0)+1)
        i++
    }

    for(let [key,count] of map.entries()){

        if(count==1){
            return key
        }
    }
};