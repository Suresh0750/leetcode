/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    
let c=0
let res = []
let i=0
let inArr = []
while(i<s.length){
    if(c==0){
        console.log(s[i],i)
        inArr = [i]
    }
    
    if(s[i]==s[i+1]){
        c++
    }else{
        
        if(c>=2){
            inArr.push(i)
            res.push(inArr)
        }
          c = 0
    }
    i++
}
return res

};