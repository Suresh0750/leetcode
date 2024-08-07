/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
let newStrs = strs.map((val)=>{
    return val.split('').sort().join('')
})

let res = []

let i=newStrs.length-1

while(i>=0){
    let inarr = []
    inarr.push(strs[i])
    j = i-1
    if(strs[i]!=null){
    while(j>=0){
        if(newStrs[i]==newStrs[j]){
            inarr.push(strs[j])
            strs[j]=null
        }
        j--
    }
    res.push(inarr)
    }
    i--
}

 return res

};