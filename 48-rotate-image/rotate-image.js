/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let l = matrix.length-1

for(let i=0;i<Math.floor(matrix.length/2);i++){

    for(let j=0;j<matrix.length-(i+i+1);j++){
    let temp = matrix[i][i+j]
    matrix[i][i+j] = matrix[l-j-i][i]
    matrix[l-j-i][i] = matrix[l-i][l-j-i]
    matrix[l-i][l-j-i] = matrix[i+j][l-i]
    matrix[i+j][l-i] = temp

    }
    
}
return matrix
};