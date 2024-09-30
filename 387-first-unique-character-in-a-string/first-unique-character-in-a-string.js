/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let i= 0
    let obj = {}
    while(i<s.length){
      if(obj[s[i]]) obj[s[i]]++
      else obj[s[i]] =1
      i++
    }
    i = 0
    while(i<s.length){
        if(obj[s[i]]==1) return s.indexOf(s[i])
        i++
    }
    return -1
};