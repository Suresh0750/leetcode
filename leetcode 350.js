/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let res = []

    nums1.map((val)=>{
        if(nums2.includes(val)){
            res.push(val)
            let ind = nums2.indexOf(val)
            nums2[ind] = null
        }
    })

    return res
};