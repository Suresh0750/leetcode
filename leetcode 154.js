var findMin = function(nums) {
   

    let min = nums[0]
  
          nums.filter((val)=> {
              
              if(val<min){
                  min = val
              }
          })
  
  
          return min
  
  
  };