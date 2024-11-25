/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    let sum = 0
    let max = 0
   gain.reduce((acc,curr)=>{
        sum+=curr
       max = Math.max(sum,max)
    },0)
    return max
};