/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
let arr = []
let i =0
while(i<image.length){
    let j = image[i].length-1
    arr.push(new Array(image[i].length))
    while(j>=0){
        arr[i][(image[i].length-1)-j] = image[i][j] ? 0 : 1
        j--
    }
    i++
}
return arr
};