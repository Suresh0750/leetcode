/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let obj = {}
    let i = 0
    while(i<s.length){     
        if(obj[s[i]]){
            return s[i]
        }else{
            obj[s[i]] = 1
        }
        i++
    }
};