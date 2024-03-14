// Input: nums = [2,1,3]
// Output: [2,3,1]
// Explanation: After the first 2 operations, arr1 = [2] and arr2 = [1].
// In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (2 > 1), append nums[3] to arr1.
// After 3 operations, arr1 = [2,3] and arr2 = [1].
// Hence, the array result formed by concatenation is [2,3,1].




var resultArray = function(nums) {

    let arr1=[nums[0]]
    let arr2 = [nums[1]]
    
    let i=2
    while(i<nums.length){  
        if(arr1[arr1.length-1]>arr2[arr2.length-1]){        
            arr1.push(nums[i])
        }else{
            arr2.push(nums[i])
        }   
        i++
    }
    let final = arr1.concat(arr2)
    return final
    
    };