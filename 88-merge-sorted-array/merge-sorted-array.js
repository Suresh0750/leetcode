/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let j = nums1.length-1

    for(j;n;j--){
        nums1[j] = nums2[(n--)-1]
    }
    console.log(nums1)
    return nums1.sort((a,b)=> a-b)
};