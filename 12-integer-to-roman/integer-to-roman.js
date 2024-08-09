/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let sym = [["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]]
 
  let i =0
  let res = ''
  while(num>0){
      
      if(sym[i][1]<=num){
          num-=sym[i][1]
          res +=sym[i][0]
      }else{
          i++
      }
  }
  return res
//   console.log(res)
};