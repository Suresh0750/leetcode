/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {

    let starCount = 0
    let str = ''
    for(let i=s.length-1;i>=0;i--){
        if(s[i]=="*") starCount++
        else if(!starCount) str=s[i]+str
        else starCount--
    }
    return str
};