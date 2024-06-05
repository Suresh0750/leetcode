/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    let result = ''

    for(let i=0;i<words.length;i++){
        let j = 0
        let k = words[i].length-1

        while(j<k){

            if(words[i][j]!==words[i][k]) break;
            
            j++
            k--
        }

        if(j==k || words[i][j]==words[i][k]){
            return words[i]
        }

    }

    return result
};