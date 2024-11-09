/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
 
// [["bat"],["nat","tan"],["ate","eat","tea"]]

let newStrs = strs.map((val)=> val.split('').sort().join(''))

let obj = {}
let i = 0
while(i<newStrs.length){
    if(obj[newStrs[i]]){
        obj[newStrs[i]].push(i)
    }else{
        obj[newStrs[i]] = [i]
    }
    i++
}
let res = []
 Object.values(obj).map((val)=>{
     let inArr = []
   val.map((v1)=>{
       inArr.push(strs[v1])
   })
   res.push(inArr)
})

return res
};