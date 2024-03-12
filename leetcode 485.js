var findMaxConsecutiveOnes = function(nums) {
    let final =0
    
    let c=0
    let i=0
    while(i<nums.length){
        
        
        if(nums[i]==1){
            
            c++
        }else{
            
            final = final<c ? c : final
            
            c=0
        }
            
        i++
    }
    
    if(final<c){
        
        final=c
    }
        return final
    };