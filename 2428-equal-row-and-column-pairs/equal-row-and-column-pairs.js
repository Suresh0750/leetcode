/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    
   
function isEqualRowCol(j,i){
    let k = 0
    for(k;k<n;k++){
        if(grid[k][j]!==grid[i][k]) break
    }
    if(k==n) c++
}

    let c = 0
    let row = grid[0]
    let n = grid.length
    for(let i=0;i<n;i++){
        if(row.includes(grid[i][0])){
            let find = 0
            while(row.indexOf(grid[i][0],find)!=-1){
                let j = row.indexOf(grid[i][0],find)
                isEqualRowCol(j,i)
                find =j+1
            }
        }
    }
    return c
};