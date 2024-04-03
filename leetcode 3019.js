var countKeyChanges = function(s) {
    s = s.toLowerCase()

let c=0
let i=0
while(i<s.length-1){
    
    if(s[i] != s[i+1]){
        c++
    }
    i++
}
return c

};