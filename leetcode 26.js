let i=0

while(i<nums.length){
    let j=i+1
    while(j<nums.length){
        
        if(nums[i] == nums[j]){
            
            nums.splice(j,1)
            j--
        }
        j++
    }
    
    i++
}


return nums.length