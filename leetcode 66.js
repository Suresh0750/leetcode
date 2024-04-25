/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let i=1
    let final = digits[0]
    while(i<digits.length){
        
        
        final+=digits[i].toString()
        
        i++
    }
    final =(BigInt(final)) + BigInt(1)
    let result = []
    final = final+''
    
     i=0
    while(i<final.length){
     
      
      result[i]=final[i]
        
       
        i++
    }
    return result
    
    
    };