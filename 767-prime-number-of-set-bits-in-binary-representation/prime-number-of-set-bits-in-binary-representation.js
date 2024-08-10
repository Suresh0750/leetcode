/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {

 function isPrime(cin){
        
        let i = 2
        while(i<=cin){
            
            if(cin%i==0) break;
            
            i++
        }
        if(cin==i) c++
    //  console.log(cin, c)
    }
    
    let c= 0
    let cin = 0
    while(left<=right){
        let bits = ((left).toString(2))+''
      
        cin = 0
        for(let i=0;i<bits.length;i++){
            if(bits[i]==1){
                cin++
            }
        }
        //   console.log(bits, cin)
        isPrime(cin)
        left++
    }
    return c

};