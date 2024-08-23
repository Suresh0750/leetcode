/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    

let res = []
let i = 0
while(i<boxes.length){
    
    if(boxes[i]=='1'){
        res.push(i)
    }
    i++
}
let final = []

for(let i=0;i<boxes.length;i++){
    let sum = 0
    let cal = 0
    for(let j=0;j<res.length;j++){
         cal -=Math.abs(i-res[j])
         sum +=Math.abs(cal)
         cal = 0
    }
    final.push(sum)
}

return final

};