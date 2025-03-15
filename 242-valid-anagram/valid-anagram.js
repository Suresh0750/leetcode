/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!=t.length) return false

    let obj1 = {}
    let obj2 = {}
    for(let i=0;i<s.length;i++){
        obj1[s[i]] = (obj1[s[i]] || 0)+1
        obj2[t[i]] = (obj2[t[i]] || 0)+1
    }

    if(Object.keys(obj1).length!=Object.keys(obj2).length){
        return false
    }
    for(let [key,value] of Object.entries(obj1)){
        if(!obj2[key] || obj2[key]!=value) return false
    }
    return true
};