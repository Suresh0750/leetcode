
var countSegments = function(s) {

    s = s.trim(' ') 
    if(s.length==0) return 0
    s = s.split(' ')
        
    let c = 0
    let i =0
    while(i<s.length){
        
        if((s[i].trim(' ')).length!==0){
            c++
        }
        i++
    }

    return c
};