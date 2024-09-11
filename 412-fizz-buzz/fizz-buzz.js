/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

    let i = 1
    let final = []
    while(i<=n){

        if(i%3==0 & i%5==0){
            final.push("FizzBuzz")
        }else if(i%3==0){
            final.push("Fizz")
        }else if(i%5==0){
            final.push('Buzz')
        }else{

            final.push(`${i}`)
        }

        i++
    }

    return final
    
};