/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let i =0
    let res = ''
    while(i<s.length){
        res +=(s.substr(i,k)).split('').reverse('').join('')+s.substr(i+k,k)
        console.log(res)
        i = i+2*k
    }

    return res

};