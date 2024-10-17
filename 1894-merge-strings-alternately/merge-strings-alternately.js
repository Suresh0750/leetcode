/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let j = word1.length<word2.length ? word1.length : word2.length
    let res = ''
    let i=0
    for(i=0;i<j;i++){
        res+=word1[i]+word2[i]
    }
    if(word1.length!=word2.length){
        let newStr = word1.length<word2.length ? word2 : word1
        res+=(newStr).slice(i,newStr.length)
    }
    return res
};