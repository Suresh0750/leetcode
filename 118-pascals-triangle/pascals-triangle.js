/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
let i = 1
let result = []
let inerArr;
let j;
let k ;
let sample = [1]
while(i<=numRows){
    inerArr = new Array(i)
    k = inerArr.length-1
    j = 0
    while(j<Math.round(inerArr.length/2)){
        if(j==0 || k==inerArr.length-1){
            inerArr[j]=1
            inerArr[k] = 1
        }else{
            inerArr[j] = sample[j-1]+sample[j]
            inerArr[k] = sample[j-1]+sample[j]
        }
        j++
        k--
    }
    sample = inerArr
    result.push(inerArr)
    i++
}
return result;
};