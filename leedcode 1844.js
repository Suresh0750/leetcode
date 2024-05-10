/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let result = ""
    
    let i = 0
    let val
    while(i<s.length){
        
        if(i%2==0){
            result += s[i]
        }else{
           val = s.charCodeAt(i-1)+Number(s[i])
           result+= String.fromCharCode(val)
        }
        i++
    }
    return result
    };