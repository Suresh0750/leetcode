/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    nums = nums.map((val)=> val*val)
 function buble(arr){
       let loop
        do{
            loop = false
            let i = 0
            while(i<arr.length-1){
                if(arr[i]>arr[i+1]){
                    [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                    loop = true
                }
                i++
            }

        }while(loop)
        return arr
    }
    return buble(nums)
};