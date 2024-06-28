/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    
    let result = 0
    
     n=n+''
    let i=0
    
    while(i<n.length){
        
        if(i%2==0){
            result+=Number(n[i])
        }else{
            result-=Number(n[i])
        }
       i++
    }
    
    return result
    
    };