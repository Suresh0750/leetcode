/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  

let res = []

let i=1
intervals = intervals.sort((a,b)=>a[0]-b[0])

let maxPoint = intervals[0][1]
res.push(intervals[0])
// console.log(res)
console.log(maxPoint)

while(i<intervals.length){
    if(intervals[i][0]<=maxPoint){
        let inArr = [Math.min(res[res.length-1][0],intervals[i][0]),Math.max(intervals[i][1],res[res.length-1][1])]
        res.pop()
        res.push(inArr)
        maxPoint = Math.max(intervals[i][1],res[res.length-1][1])
    }else{
        res.push(intervals[i])
        maxPoint = intervals[i][1]
    }
    i++
}
return res
// console.log(res)  
};