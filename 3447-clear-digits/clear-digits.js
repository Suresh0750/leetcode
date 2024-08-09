/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    s =s.split('')

    let i =0 

 while(i<s.length){
     
     if(!isNaN(s[i])){
         s.splice(i-1,2)
         i--
     }else{
     i++
     }
 }
 
 return s.join('')
 
};