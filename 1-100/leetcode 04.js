var findMedianSortedArrays = function(nums1, nums2) {
    

    let merge = nums1.concat(nums2)

    let i = 0
    let temp
    while(i<merge.length){

        let j = i+1
        while(j<merge.length){

            if(merge[i]>merge[j]){

                temp = merge[i]
                merge[i] = merge[j]
                merge[j] = temp

            }

            j++

        }
        i++
    }

if(merge.length%2 == 0){
        
    let mid1 = merge[(merge.length-2)/2]
    let mid2 = merge[(merge.length)/2]

    return (mid1+mid2)/2
    }else{
    
        return merge[(merge.length-1)/2]
    }
};