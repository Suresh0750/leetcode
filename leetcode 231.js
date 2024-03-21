// Example 1:

// Input: n = 1
// Output: true
// Explanation: 2^0 = 1



var isPowerOfTwo = function(n) {

    let i=0
    
    do{
         
        if(Math.pow(2,i) == n){
           
            return true
        }else if(Math.pow(2,i) > n){
          
            return false
        }
        i++
        
        
    }while(i<n)
    
};