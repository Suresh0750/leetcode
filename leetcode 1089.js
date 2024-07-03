/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
    let i=0

    while(i<arr.length-1){

        if(arr[i]==0){
            arr.splice(i,0,0)
            arr.length--
            i++
        }
        i++
    }

    return arr
};