/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    s = s.split('')
    let i=0
    while(i<t.length){

        if(!s.includes(t[i])){
            return t[i]
        }else if(s.includes(t[i])){
        
            let index = s.indexOf(t[i])
            
            s.splice(index,1)
        }
        i++
    }
};