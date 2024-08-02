/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
 
if(!n) return []
else if(n==1) return [[1]]

let row = 0
let rowEnd = n-1
let col = 0
let colEnd = n-1
let val = 1
let arr = Array.from({length:n},()=>[])


while(row<=rowEnd&& col<=colEnd){

    for(let i=col;i<=colEnd;i++){
        arr[col][i] = val
        val++
    }
    row++
    for(let i=row;i<=rowEnd;i++){
        arr[i][rowEnd] =val
         val++
    }
    colEnd--
    for(let i=colEnd;i>=col;i--){
        arr[rowEnd][i] = val
         val++
    }
    rowEnd--
    for(let i=rowEnd;i>=row;i--){
        arr[i][col] = val
         val++
    }
    col++
}

return arr
};