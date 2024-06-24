/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    
    // buble sort
    let res = +Infinity
    function swap(num,i,j){
        let temp = num[i]
        num[i] = num[j]
        num[j] = temp
    }
    let again 
    do{
        again = false
        let i =1
        while(i<nums.length){

            if(nums[i-1]>nums[i]){
                swap(nums,i-1,i)
                again = true
            }
            i++
        }
    }while(again)

    let j = nums.length-1
    for(let i=0;i<nums.length/2;i++){
        let cal = (nums[i]+nums[j])/2
        if(res>cal){
            res = cal
        }
        j--
    }
    return res
};