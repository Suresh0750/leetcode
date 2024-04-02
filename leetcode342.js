var isPowerOfFour = function(n) {

    let base = 4
    
    let i=0
    
    
    while(n>0){
        
        let check =Math.pow(4,i)
        
        if(check == n){
    
            return true
           
        }else if(check>n){
            
            return false
    
        }
        i++
    }
    return false
    };