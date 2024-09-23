/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let newArr = []

    nums.map((val,i)=>{
        if(!newArr[index[i]] && newArr[index[i]]!=0){
          newArr[index[i]] = val 
        }else{
            newArr.splice(index[i],0,val)
        }
    })

    return newArr
};