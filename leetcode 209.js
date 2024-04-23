

function subArray(search,arr){
    
    let result = Number.MAX_SAFE_INTEGER
    let left = 0
    let sum = 0
    
    for(let i=0;i<arr.length;i++){
        
        sum+=arr[i]  
        
        while(sum>=search){
            
            result = Math.min(result,i-left+1)
            sum -= arr[left++]
            
        }
        
    }
    
    return result == Number.MAX_SAFE_INTEGER ? 0 : result;
    
}
