/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

let row = 0 
let rowEnd = matrix.length-1
let col = 0
let colEnd= matrix[0].length-1

let res = []
let count = matrix.length*(matrix[0].length)

function insert(i,j){
     res.push(matrix[i][j]) 
     count--
}

while(row<=rowEnd && col<=colEnd && count){
  for(let i=col;i<=colEnd;i++){
   if(!count) break
   
   insert(row,i)
  }
  row++
  for(let i=row;i<=rowEnd;i++){
       if(!count) break
      insert(i,colEnd)
  }
  colEnd--
  for(let i=colEnd;i>=col;i--){
      if(!count) break
      insert(rowEnd,i)
  }

  rowEnd--
  for(let i=rowEnd;i>=row;i--){
      
       if(!count) break
      insert(i,col)
  }
  col++
}


return res


};