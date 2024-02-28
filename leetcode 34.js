

let nums = [4,5,6,7,0,1,2], target = 0


let final = -1
let i=0
let j=nums.length-1
while(i<nums.length/2){
    
    if(nums[i]==target){
        console.log(i)
       return i
    }
    if(nums[j]==target){
        console.log(j)
        return j
    }
    j--
    
}

return final

