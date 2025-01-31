/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}

    for(let key of arr){
        obj[key] = obj[key] ? obj[key]+1 : 1;
    }
    
    return Object.values(obj).length==new Set(Object.values(obj)).size
};