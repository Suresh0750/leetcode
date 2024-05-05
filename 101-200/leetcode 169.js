/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    

    if(!nums.length) return undefined

    let obj = {}

    let i = 0
    while(i<nums.length){

        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        }else{
            obj[nums[i]]++
        }
        i++
    }
    let max = 0
    let result = 0
    for(let key in obj){

        if(obj[key]>max){
            max = obj[key]
            result = key
        }
    }
    return result
};