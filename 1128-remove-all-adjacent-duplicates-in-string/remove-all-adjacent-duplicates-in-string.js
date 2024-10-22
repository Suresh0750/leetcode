/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    
    let i =0
    s = s.split('')
    while(i<s.length){
        if(s[i]==s[i+1]){
            s.splice(i,2)
            i-=2
        }
        if(!s.length) break
        i++
    }
    return s.join('')
};