/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

if(s.length<2) return s.length

let i =0 

let j =0
let max = 0

while(j<s.length){
      
    if(s.substr(i,(j-i)).includes(s[j])){
        let newSub = s.substr(i,(j-i))
        // console.log(s.substr(i,(j-i)).length,newSub,s[j])
        max = Math.max(s.substr(i,(j-i)).length,max)
       i++
       j--
    }
    j++
}

 max = Math.max(s.substr(i,(j-i)).length,max)

return max
};