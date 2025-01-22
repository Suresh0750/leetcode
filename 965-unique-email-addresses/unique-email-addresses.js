/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let obj = {}
    for(let key of emails){
        
        let wholeWord = ''
        for(let i=0;i<key.length;i++){
            if(key[i]=='+' || key[i]=='@'){
                wholeWord+=key.substr(key.indexOf('@'),key.length)
                break;
            }else if(key[i]!='.'){
                wholeWord+=key[i]
            }
        }
        if(wholeWord){
            obj[wholeWord] = true
        }
    }
    console.log(obj)
    return Object.keys(obj).length
};