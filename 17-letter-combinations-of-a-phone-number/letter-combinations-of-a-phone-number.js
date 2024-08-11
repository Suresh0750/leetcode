/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

let container = ['','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
if(digits.length==1) return container[digits[0]-1].split('')

let i = 0
console.log(container[digits[0]-1])
let total = 1
while(i<digits.length){
    total*=container[digits[i]-1].length
    i++
}

function containerfun(digits){
    if(digits.length==1){
        return [container[digits[0]-1]]
    }else if(digits.length==2){
        
        return [container[digits[0]-1],container[digits[1]-1]]

    }else if(digits.length==3){

        return [container[digits[0]-1],container[digits[1]-1],container[digits[2]-1]]
        
    }else if(digits.length==4){
        return [container[digits[0]-1],container[digits[1]-1],container[digits[2]-1],container[digits[3]-1]]
    }
}

let insideContain = containerfun(digits)

i = 0

function call(m,j,k,z){
    
    if(digits.length==1){
       
      return insideContain[0][(((i/1)%(z+1)))]
    }else if(digits.length==2) {
        console.log(k,z,i,((Math.floor(i/3)%(k+1))),((((i/1)%(z+1)))))
        return insideContain[0][((Math.floor(i/k)%(k+1)))] +insideContain[1][((Math.floor(i/1)%(z)))]
    }else if(digits.length==3){
console.log(j,k,z,((Math.floor(i/(j*k))%(j))),((Math.floor(i/k)%(k))),((Math.floor(i/1)%(z))))
        return insideContain[0][((Math.floor(i/(j*k))%(j)))]+insideContain[1][((Math.floor(i/k)%(k)))] +insideContain[2][((Math.floor(i/1)%(z)))]
    }else if(digits.length==4){
        return insideContain[0][((Math.floor(i/(z*k*j))%(m)))]+insideContain[1][((Math.floor(i/(z*k))%(j)))]+insideContain[2][((Math.floor(i/z)%(k)))] +insideContain[3][((Math.floor(i/1)%(z)))]
    }
  
}

let res = []
while(total){
    
    if(digits.length==1){
        res.push(call(0,0,0,insideContain[0].length))
        
    }else if(digits.length==2){
         res.push(call(0,0,insideContain[1].length,insideContain[0].length))
        
    }else if(digits.length==3){
         res.push( call(0,insideContain[2].length,insideContain[1].length,insideContain[0].length))
        
    }else if(digits.length==4){
         res.push(call(insideContain[0].length,insideContain[1].length,insideContain[2].length,insideContain[3].length))
    }
    i++
    total--
}

return res

};