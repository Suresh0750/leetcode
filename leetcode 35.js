var searchInsert = function(nums, target) {
    
    let right = nums.length-1
    let left = 0

    if(nums.includes(target)){

        while(left<=right){

            let mid = Math.floor((right+left)/2)

            if(nums[mid] == target){

                return mid

            }else if(nums[mid]<target){

                left = mid+1

            }else if(nums[mid]>target){

                right = mid-1
            }


        }
    }else{

        let i = 0

        while(i<nums.length){

            if(nums[i]<target && nums[i+1]>target ){

                return i+1
            }
            i++
        }
    }


    return target<=1 ? 0: nums.length;
}