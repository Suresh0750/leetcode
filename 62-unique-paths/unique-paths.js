/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {


let newArr = Array.from(Array(m),()=> new Array(n))
    for(let i=0;i<newArr.length;i++) newArr[i][0]=1

for(let i=0;i<newArr[0].length;i++) newArr[0][i]=1
console.log(newArr)
for(let i=1;i<newArr.length;i++){
    for(let j=1;j<newArr[0].length;j++){
       newArr[i][j] = newArr[i-1][j] + newArr[i][j-1]
    }
}

 return newArr[m-1][n-1]
};