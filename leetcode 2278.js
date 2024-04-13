var percentageLetter = function(s, letter) {
    

    let base = s.length
    let c=0

    let i=0
    while(i<s.length){

        if(letter == s[i]){
            c++
        }
        i++
    }

    return c !=0  ? Math.floor((c/base)*100) : 0;

};

