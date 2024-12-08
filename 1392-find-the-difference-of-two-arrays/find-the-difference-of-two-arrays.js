/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  

  function hashTable(arr){
         let i = 0
          let obj1 = {}
        while(i<arr.length){
                obj1[arr[i]] = true
                i++
            }
        return obj1
    }

function pushVal(arr,obj,res=[]){
     let i = 0
     while(i<arr.length){
        if(!obj[arr[i]] && !res.includes(arr[i])){
            res.push(arr[i])
        }
        i++
    }
    return res
}
let obj1 = hashTable(nums1)
let obj2 = hashTable(nums2)

 
    let resNum1 = pushVal(nums1,obj2)
    let resNum2 = pushVal(nums2,obj1)
  
   
    return [resNum1,resNum2]
};