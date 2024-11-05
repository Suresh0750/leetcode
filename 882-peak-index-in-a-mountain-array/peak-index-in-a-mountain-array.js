/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    if(!arr.length) return -1

    return arr.indexOf(Math.max(...arr))
};