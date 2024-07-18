/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if(num==0) return num
    let c =0 
    function recursion(num){
        if(num==1){
            c++
            return 
        }else if(num%2==0){
            c++
            recursion(num/2)
        }else{
            c++
            recursion(num-1)
        }
    }
    recursion(num)
    return  c
};