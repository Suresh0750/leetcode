/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let res = 0

for(let i=0;i<colors.length;i++){
    let j = (i+1)%colors.length
    let z = (j+1)%colors.length
    if((colors[i]==colors[z]&&colors[j]!=colors[z])){
        res++
    }
}
 return res
};