/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    let sample = map(words[0])
    
    function map(arr){
       let sampMap = new Map()
        
        let i =0
        
        while(i<arr.length){
            
            sampMap.set(arr[i],(sampMap.get(arr[i]) || 0)+1)
            i++
        }
        
        return sampMap
    }
    
    for(let i=1;i<words.length;i++){
        
        let inArr = map(words[i])
        
        for(let [key,value] of sample){
            
            if(inArr.has(key)){
                sample.set(key, Math.min(sample.get(key),inArr.get(key))) 
            }else{
                sample.delete(key)
            }
        }
    }
            let result = []
    
            for(let [key,value] of sample.entries()){
               
                while(value){
                    result.push(key)
                    value--
                }
            }
    
            return result
    };