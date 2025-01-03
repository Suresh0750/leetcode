/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {


    s = s.split(' ')
    if((new Set(pattern).size)!=(new Set(s)).size || s.length!=pattern.length) return false

    let obj = {}
    for(let i=0;i<s.length;i++){
        if(!obj[pattern[i]]){
            obj[pattern[i]] = s[i]
        }else if(obj[pattern[i]]!=s[i]) return false
    }
    return true
};