/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    
 sentence = sentence.split(' ')
 let i = 0
 
 while(i<sentence.length){
     
     if(sentence[i].startsWith(searchWord)){
         return i+1
     console.log(sentence[i],i)
     }
     i++
 }
 return -1
};