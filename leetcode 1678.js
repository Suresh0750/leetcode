/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    

    let i = 0
    let result = ''
    while(i<command.length){
        if(command[i]=='(' && command[i+1]==')'){
            result+='o'
        }else if(command[i]=="(" || command[i]==")"){
            i++
            continue;
        }else{
            result+= command[i]
        }
        i++
    }
    return result
    
};