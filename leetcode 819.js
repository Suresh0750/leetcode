/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

    paragraph = paragraph.split(/[\s,]+/)
    
     let word = paragraph.map((str)=>{
       return str.replace(/[!,?,;,','\.]/g,' ').trim('')
      })
    
    const map = new Map()
    
    let i = 0
    while(i<word.length){
        map.set((word[i]).toLowerCase(''),(map.get(word[i].toLowerCase('')) || 0)+1)
        i++
    }
    
    let result ={
        index : 0
    }
    for(const [key,val] of map.entries('')){
        if(result.index<val && banned.indexOf(key)==-1){
            result.index = val
            result.value = key
        }
        
    }
    
    return result.value
    
    };