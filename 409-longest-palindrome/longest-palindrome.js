/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {


     
    let obj = {}

    let i = 0
    while(i<s.length){
        obj[s[i]] = (obj[s[i]] || 0)+1
        i++
    }
    let sum = 0
    let arrOfValues = Object.values(obj)
    if(arrOfValues.length==1) return arrOfValues[0]
    arrOfValues?.reduce((acc,curr)=>{
        console.log(curr)
        if(curr%2==0){
            sum+=curr
        }else if((curr-1)%2==0){
            sum+=(curr-1)
        }
    },0)

    let isOdd = arrOfValues.some((val)=> val%2!==0)

    return isOdd ? sum+1 : sum;
    
};