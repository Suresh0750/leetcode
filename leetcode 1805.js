/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {

    let k = word.match(/\d+/g) || 0
    
    let i=0
    let c=0
    let final = []
    
    
    while(i<k.length){
        
        final [i] = Number(k[i])
        i++
    }
    
    
    final =[...new Set(final)]
    
    
    return (final[0]==Infinity)&&final.length!=1 ?  final.length+1 : final.length
    
    };