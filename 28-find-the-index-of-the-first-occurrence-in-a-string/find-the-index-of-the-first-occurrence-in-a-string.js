/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
let output = -1

let lastIndex = needle.length

let i = 0
while(i<haystack.length){
    // console.log(haystack.substr(i,lastIndex))
    if(haystack[i]==needle[0] && needle==haystack.substr(i,lastIndex)){
        output = i
       
        break;
    }
    i++
}
return output
};