/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let c = 0
    n = (n).toString(2)
    for(let i=0;i<n.length;i++){
        if(n[i]=='1')c++
    }
    return c
};