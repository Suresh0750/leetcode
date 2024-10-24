/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 let hold = null
let sum = 0

let i = 0
while(i<prices.length){
    // console.log(prices[i])
    if(hold==null && prices[i]<prices[i+1]){
        // console.log(prices[i])
        hold = prices[i]
    }else if((hold!=null && prices[i]>hold && prices[i]>prices[i+1]) || (hold && i==prices.length-1) || hold==0&&i==prices.length-1){
        sum+= prices[i]-hold
        hold = null
    }
//   console.log(sum,hold)
    i++
}
// console.log(sum)
return sum
};