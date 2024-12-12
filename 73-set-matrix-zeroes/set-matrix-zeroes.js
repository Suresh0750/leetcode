/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

let row = new Set()
let col = new Set()

let i = 0


while(i<matrix.length){
    let j = 0
    while(j<matrix[i].length){
        // console.log(matrix[i][j],i,j)
        if(matrix[i][j]==0){
            row.add(i)
            col.add(j)
        }
        j++
    }
    i++
}


 i =0 
while(i<matrix.length){
    let j = 0
    while(j<matrix[i].length){
        if(row.has(i) || col.has(j)){
            matrix[i][j]=0
        }
        j++
    }
    i++
}

 return matrix
};