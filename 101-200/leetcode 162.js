
let nums = [1,2,1,3,5,6,4] 

let i=0

final = 0
max = -Infinity
while(i<nums.length){
    
    if(max<nums[i]){
        
        max = nums[i]
        final = i
    }
    i++
}

console.log(final)