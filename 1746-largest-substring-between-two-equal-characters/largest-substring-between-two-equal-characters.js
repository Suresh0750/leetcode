/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let res = -1
for(let i=0;i<s.length;i++){
    if(s.indexOf(s[i])!==s.lastIndexOf(s[i])){
       let start = s.indexOf(s[i])
       let last = s.lastIndexOf(s[i])
       let l = s.length
       let check = l-((start+1)+(l-last))
        res = res<check ? check : res;     
    }
}
 return res
};