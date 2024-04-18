var singleNumber = function(nums) {
    
    let obj = {}
    
    let i = 0
    while(i<nums.length){
        
        if(obj[nums[i]]){
            
            obj[nums[i]]++
            
        }else{
            
            obj[nums[i]] = 1
        }
        
        i++
        
    }
    
    for(let key in obj){
        
        if(obj[key] == 1){
            
            return key
        }
    }
    };