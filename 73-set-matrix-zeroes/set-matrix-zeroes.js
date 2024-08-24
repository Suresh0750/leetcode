/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
   
let findZero = []
     
     function zeroAss(i,j){
         
         
         for(let z=0;z<matrix[i].length;z++){
             if(matrix[i][z]==0){
                 findZero([i,z])
             }
             matrix[i][z] = 0
         }
         
         for(let z = 0;z<matrix.length;z++){
             if(matrix[z][j]==0){
                 findZero.push(z,j)
             }
             matrix[z][j] = 0
         }
     }
     function secondAss(i,j){
         
         
         for(let z=0;z<matrix[i].length;z++){
             matrix[i][z] = 0
         }
         
         for(let z = 0;z<matrix.length;z++){
             
             matrix[z][j] = 0
         }
     }

    let i=0
    while(i<matrix.length){

        if(matrix[i].includes(0)){
             for(let j=0;j<matrix[i].length;j++){
                if(matrix[i][j]==0){
                    findZero.push([i,j])
                }
            }
        }
        i++
    }
    
    i = 0
    while(i<findZero.length){
        secondAss(findZero[i][0],findZero[i][1])
        i++
    }
    return matrix
     
   
};