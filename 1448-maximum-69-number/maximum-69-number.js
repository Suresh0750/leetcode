/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
let final = num
num = String(num)

for(let i=0;i<num.length;i++){
    let temp = num
    if(num[i]=='9'){
        temp = num.slice(0,i)+'6'+num.substr(i+1,num.length)
    }else{
        temp = num.slice(0,i)+'9'+num.substr(i+1,num.length)
    }
    final = final<temp ? temp : final
}
return final
    console.log(final)
};