/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    let res = []
    let distinct = new Set(nums)
    for(let i=1;i<=nums.length;i++){
        if(!distinct.has(i)){
            res.push(i)
        }
    }
    return res
};