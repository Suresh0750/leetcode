/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0, even = 0

    for(let key of position){
        if(key%2==0){
            even++
        }else{
            odd++
        }
    }
    return odd>even ? even:odd
};