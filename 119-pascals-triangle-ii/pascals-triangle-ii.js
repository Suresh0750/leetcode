/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = new Array(rowIndex+1)

    let i = 0
    let j = 0
    while(i<=rowIndex){
        j = 0
        arr[i]= []
         while(j<=i){
            if(j==0 || j==i){
                console.log(arr)
                arr[i][j] = 1
            }else{
                arr[i][j] = arr[i-1][j-1]+arr[i-1][j]
            }
            j++
        }
       i++
    }
    console.log(arr)
    return arr[arr.length-1]
};