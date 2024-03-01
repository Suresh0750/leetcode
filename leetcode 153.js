const nums = [3,4,5,1,2]


let min=nums[0]

let i=0
let j=nums.length-1
while(i<nums.length/2){
    
    
    if(min>nums[i]){
        min = nums[i]
    }
    if(min>nums[j]){
        min = nums[j]
    }
    i++
    j--
}

return min