const  nums = [1,2,5,2,3], target = 2


let i=0
let temp;
let j
while(i<nums.length){

    j=i+1
    while(j<nums.length){
        
        if(nums[i]>nums[j]){
            
            temp = nums[i]
            nums[i] = nums[j]
            nums[j]= temp
        }
        j++
    }
    i++
}

i=0
let final=[]

while(i<nums.length){
    
    if(nums[i]==target){
        
        final.push(i)
    }
    i++
}

return final