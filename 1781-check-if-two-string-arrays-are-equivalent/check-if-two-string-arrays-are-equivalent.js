/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    function concat(word){
        return word.reduce((acc,curr)=>acc+curr)
    }
    
    let word1Concat = concat(word1)
    let word2Concat = concat(word2)
    
    return word1Concat == word2Concat
};