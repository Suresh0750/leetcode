let i=nums.length-1
while(i>=0){
    
   if(nums[i]==0){
        
       nums.splice(i,1)
      nums.push(0)
   }
   i--
}

return nums