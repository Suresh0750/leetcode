/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let sum = numBottles

    while(numBottles>=numExchange){
        let find = Math.floor(numBottles/numExchange)
        sum+=find
        numBottles=(numBottles+find)-(find*numExchange)
    }
    return sum
};