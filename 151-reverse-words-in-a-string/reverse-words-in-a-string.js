/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    s = s.split(' ')
    let i= s.length-1
    let res = ''
    while(i>=0){
       if(s[i].length>0) res+=s[i]+' '
       i--

    }
    return res.trim()
};