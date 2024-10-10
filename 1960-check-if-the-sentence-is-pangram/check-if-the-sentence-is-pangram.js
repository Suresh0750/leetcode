/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let map = {}
    let i = 0
    while(i<sentence.length){
        map[sentence[i]] = (( map[sentence[i]] || 0)+1)
        i++
    }
    return Object.values(map).length==26
};