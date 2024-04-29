

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let c = 0
    let i = 1
    let sum = 0
    let value
    while(i<=num){
        sum = 0
        value = i
        while(value){
            sum+=value%10
            value = Math.floor(value/10)
        }
        
        if(sum%2==0){
            c++
        }
        i++
    }
    
    return c
    
    };