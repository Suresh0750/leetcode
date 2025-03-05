/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    
    let sum = 0
    let newGrid = grid.map((arr)=>arr.sort((a,b)=>b-a))

    for(let i=0;i<newGrid[0]?.length;i++){
        let max = 0
        for(let j=0;j<newGrid.length;j++){
            max = max<newGrid[j][i] ? newGrid[j][i] : max
        }
        sum+=max
    }

    return sum
};