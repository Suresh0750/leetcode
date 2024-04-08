var largestGoodInteger = function(num) {
    let result = ""

let i=0

let max = -Infinity
while(i<num.length){
    
   if(max<num[i] && (num[i]==num[i+1] && num[i]==num[i+2])){
           
       max = num[i]
       result = `${num[i]}${num[i]}${num[i]}`
       i++
   }
   
    i++
}

return result
};

