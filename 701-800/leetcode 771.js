/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let obj = new Map()
    
    let i = 0
    
    while(i<stones.length){
        
        obj.set(stones[i],(obj.get(stones[i]) || 0)+1)
        i++
    }
    
    
    let sum = 0
    
    i  = 0
    
    while(i<jewels.length){
        
        if(obj.has(jewels[i])){
            sum+= obj.get(jewels[i])
        }
        i++
    }
    
    return sum
    };