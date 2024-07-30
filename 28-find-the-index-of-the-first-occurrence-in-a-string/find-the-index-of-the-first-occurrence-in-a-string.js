/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
 

if(haystack.indexOf(needle[0])==haystack.lastIndexOf(needle[0])){
    let j = haystack.indexOf(needle[0])
      for(let i=0;i<needle.length;i++){
            if(needle[i]!==haystack[j++]){
                return -1
            }
        }
        return haystack.indexOf(needle[0])
}else{
    let arr = []
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]==needle[0]){
            arr.push(i)
        }
    }

    for(let i=0;i<arr.length;i++){
        let k = arr[i]
        for(let j=0;j<needle.length;j++){
                
            if(needle[j]!==haystack[k++]){
                k--
               break;
            }
        }
     
        if((arr[i]+needle.length)==k){
        
            return arr[i]
        }
       
    }
    return -1
}
   
};