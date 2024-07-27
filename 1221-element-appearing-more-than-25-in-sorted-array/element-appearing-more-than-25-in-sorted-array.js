/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let obj = {
        count :0,
        val : arr[0]
    }
    let c = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            c++
        }else{
            c++
            if(obj.count<c){
                obj.count = c
                obj.val = arr[i]
            }
            c = 0
        }
    }
    console.log(obj)
    return obj.val
};