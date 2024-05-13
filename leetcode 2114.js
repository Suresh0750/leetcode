/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let i = 0

    let final = 0
    while(i<sentences.length){
        let inVal = sentences[i].split(' ')
        final = final<inVal.length ? inVal.length : final
        i++
    }
    return final
};