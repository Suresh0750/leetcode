/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

let i =0
let j = s.length-1
while(i<Math.floor(s.length/2)){
    if(s[i]==s[j]){
        i++
        j--
    }else{
        break;
    }
}
console.log(i,j)

if(i==j){
     return true
}else if(s.substring(i,j) ==(s.substring(i,j)).split('').reverse('').join('')){
    return true
} else if(s.substring(i+1,j+1) ==(s.substring(i+1,j+1)).split('').reverse('').join('')) {
    return true
}

 return false



   
};