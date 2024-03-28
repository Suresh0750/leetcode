// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.





/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {


    //first method

    
    // while(num>9){
    //     num=num%10+Math.floor(num/10)
    // }
    // return num



// second method
 function add (num){
    num = String(num)
    let sum = 0
    let i=0
    while(i<num.length){
        
        sum += Number(num[i])
        
        i++
    }
        
    if(String(sum).length !=1){
      let call =  add(sum) 
      return call
    }else{
      return sum
    }
    
}

let result = add(num)

return result

};