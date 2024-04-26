/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    let i = 1
    let v = 1
    while(v<n){
        i++
        v = i+v
    }
    return v==n ?  i :  i-1;

};