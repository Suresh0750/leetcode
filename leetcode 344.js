var reverseString = function(s) {
    let temp
    let j = s.length-1
    let i=0

    while(i<s.length/2){
        
        temp = s[j]
        s[j]=s[i]
        s[i]=temp
        
        i++
        j--
        
    }
    return s
};
