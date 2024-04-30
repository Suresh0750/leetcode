/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {

    let again 
    let ind= num.length-1
    do{
        again = false
        
     
        if(num[ind]==0){
            ind--
            again=true
        }
        
        
    }while(again)
      
   num = num.substring(0,ind+1)

    return num
};