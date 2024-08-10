/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

if(s.length==1) return s

let res = ''

let i=0

let obj = {}

while(i<s.length){
    if(obj[s[i]]){
       obj[s[i]].push(i)
    }else{
        obj[s[i]] = [i]
    }
    i++
}

function isPalindrome(sub){
    // console.log('sub',sub)
    return sub==sub.split('').reverse('').join('')
}
function findSubPalindrome(i,k,arr){
    return s.substr(arr[i],((arr[k]-arr[i])+1))
}
for(let key in obj){
    
    if(obj[key].length>1){
        let arr = obj[key]
        // console.log(key,obj[key])
        let i=0
      while(i<arr.length){
        for(let k=arr.length-1;k>i;k--){
            let subPalindrome = s.substr(arr[i],((arr[k]-arr[i])+1))
            if(subPalindrome.length>res.length){
             let sub = isPalindrome(subPalindrome)
             if(sub) {
                let val = s.substr(arr[i],((arr[k]-arr[i])+1))
                res = val
                break;
            }
            }
        }
        i++
      }
    }
    
}

return res.length==0 ? s[0] : res
   
    
};