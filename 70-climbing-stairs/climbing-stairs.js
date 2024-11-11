/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let step1 =1
  let step2 = 1
  for(let i=0;i<n;i++){
    let temp = step1
    step1 = step1+step2
     step2 = temp
  }
  return step2
};