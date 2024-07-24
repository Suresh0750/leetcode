/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {

let even = low
let odd = low

let inc = low%2 == 0 ? 1 : 2

let c=0

do{
    if(low%2==1){
        c++
    }
  low =low+inc
}while(low<=high)


return c

};