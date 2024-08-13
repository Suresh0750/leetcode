/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

    function reCall(num,left){
        console.log(num,left)
          
        if((left+'').length>1){
            if(num%(left%10)==0){
                left = Math.floor(left/10)
                reCall(num,left)
            }else return 
        }else{
            if(num%left==0) res.push(num)
            else return
        }
    }
    
    let res = []
    while(left<=right){
        
        if((left+'').length==1){
            res.push(left)
       
        }else{
          console.log(left)
            reCall(left,left)
        }
        left++
    }
    console.log(res)
    return res

};