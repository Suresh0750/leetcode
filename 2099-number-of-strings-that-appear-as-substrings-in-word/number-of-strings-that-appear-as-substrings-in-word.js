/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0
    patterns.forEach((val)=>{
        if(word.includes(val)){
            count++
        }
    })
    return count
};