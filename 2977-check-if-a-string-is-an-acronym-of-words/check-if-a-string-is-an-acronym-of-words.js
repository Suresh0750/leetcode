/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if(words.length!=s.length) return false

    let i=0;
    while(i<words.length){
        if(words[i][0] != s[i]) return false
        
        i++
    }
    return true
};