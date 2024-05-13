/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let final = []

    let i = 0
    while(i<words.length){
        let j = 0
        while(j<words[i].length){
            if(words[i][j]==x){
                final.push(i)
                break;
            }
            j++
        }
        i++
    }
    return final
};