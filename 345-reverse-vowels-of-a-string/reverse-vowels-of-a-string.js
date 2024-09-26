/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {   

s = s.split('')

let i =0 
let j = s.length-1

let vowels = 'aeiouAEIOU'

while(i<j){
    if(vowels.includes(s[i]) && vowels.includes(s[j])){
        [s[j],s[i]] = [s[i],s[j]]
        i++
        j--
    }else if(vowels.includes(s[i])){
        j--
    }else if(vowels.includes(s[j])){
        i++
    }else{
        i++
        j--
    }
}
 return s.join('')

};