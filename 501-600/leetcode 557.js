/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ')
     let inval 
     let result ='' 
     for(let i=0;i<s.length;i++){
         inval = s[i]
         for(let j=inval.length-1;j>=0;j--){
             result+=inval[j]
         }
         result += " "
     }
 
     return (result).trim()
 };