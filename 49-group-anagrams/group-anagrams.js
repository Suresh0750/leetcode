/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

obj ={}

let i = 0


while(i<strs.length){
    let sortVal = strs[i].split('').sort().join('')
    if(obj[sortVal]){
     obj[sortVal].push(strs[i])
    }else{
        obj[sortVal] = [strs[i]]
    }
    i++
}
return Object.values(obj)









// console.log(Object.values(obj))

// console.log(obj)
    
// let newStrs = strs.map((val)=>{
//     return val.split('').sort().join('')
// })

// let res = []

// let i=newStrs.length-1

// while(i>=0){
//     let inarr = []
//     inarr.push(strs[i])
//     j = i-1
//     if(strs[i]!=null){
//     while(j>=0){
//         if(newStrs[i]==newStrs[j]){
//             inarr.push(strs[j])
//             strs[j]=null
//         }
//         j--
//     }
//     res.push(inarr)
//     }
//     i--
// }

//  return res

};