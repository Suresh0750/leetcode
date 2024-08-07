/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
 return arr.some((val,i)=>{
    
    return arr.includes(val*2) && i!=arr.indexOf(val*2)
})
};