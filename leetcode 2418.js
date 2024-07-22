/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    let shadow = [...heights]
    shadow.sort((a,b)=> b-a)
    console.log(shadow)
    let k = []
    let i=0;
    while(i<heights.length){
        k.push(names[heights.indexOf(shadow[i])])
        i++
    }
    console.log(k)
    return k
};