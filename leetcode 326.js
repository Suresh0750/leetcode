var isPowerOfThree = function(n) {
    
    if(n<=0){
        return false
    }
    
    let i =0
    let j=0
    
    while(i<=n){
        
        i=Math.pow(3,j)
       
        if(i == n ){
            
            return true
            
        }
        
        j++
    }
    return false
    };