/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let result = []
let i = 0
let dupCount ;
while(i<temperatures.length){
    let j = i+1

    if(temperatures[i]!=temperatures[i-1]){
        for(j;j<temperatures.length;j++){
            if(temperatures[i]<temperatures[j]){
                result.push(j-i)
                break;
            }
    }
    }else{
        result.push( result.at(-1) ? (result.at(-1))-1 : result.at(-1))
    }
    
    if(j==temperatures.length){
        result.push(0)
    }
    i++
}

if(result.length<temperatures.length){
        for(let i=result.length;i<temperatures.length;i++){
             result.push(0)
        }
}
result.length =temperatures.length
return result
    
};