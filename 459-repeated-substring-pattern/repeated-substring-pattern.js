/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

let str = s + s;
    let newStr = str.substring(1, str.length - 1);
    return newStr.includes(s)
};