var halvesAreAlike = function(s) {
    
    let c1=0
let c2=0

let vowels=["a","e","i","o","u","A","E","I","O","U"]

let i=0
let j= s.length-1

while(i<s.length/2){
    
    if(vowels.includes(s[i])){
        c1++
    }
    if(vowels.includes(s[j])){
        c2++
    }
    
    i++
    j--
}

 return c1==c2 ?  true : false;

};