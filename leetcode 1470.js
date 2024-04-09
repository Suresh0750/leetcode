var shuffle = function(nums, n) {
  


    var i=0
    
    var j=n 
    
    var final = []
    
    
    while(i<n)
    {    
        final.push(nums[i++])
        final.push(nums[j++])
    }
    
    return final
    
    
    };