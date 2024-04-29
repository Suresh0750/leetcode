/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let result = []
    let i = 0
    while(i<nums1.length){
        let value = nums1[i]
        let index = nums2.indexOf(value)
        while(index<nums2.length){
            if(value<nums2[index]){
                result.push(nums2[index])
                break;
            }
            index++
        }
        if(index==nums2.length){
            result.push(-1)
        }
        i++
    }
    return result 
};