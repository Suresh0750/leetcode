/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return backspace(s)==backspace(t)
};

const backspace = (string)=>{

    let output = []
    for(let i=0;i<string.length;i++){
        if(string[i]=='#'){
            output.pop()
        }else{
            output.push(string[i])
        }
    }
    return output.join('')
}