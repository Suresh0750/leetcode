/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr = new Array(indices.length)

    let i = 0
    while(i<s.length){
        arr[indices[i]] = s[i]
        i++
    }
    return arr.join('')
};