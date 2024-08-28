/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {


function backtracking(arr,i){
   if(i>=nums.length) return arr
   let newArr = []
   
   for(let j=0;j<arr.length;j++){
       newArr.push(arr[j])
       newArr.push([...arr[j],nums[i]])
   }
   
    i+=1
    return backtracking(newArr,i)
}

 return backtracking([[]],0)

};