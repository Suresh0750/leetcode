/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length<=2) return false

    const regex = /^(?=.*[AEIOUaeiou])(?=.*[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz])(?=.*[A-Za-z0-9]{3,}$).{3,}$/;

    const regex1 = /[#,$,@]/

    if(regex1.test(word)) return false

   const res = regex.test(word)
    
    return res
};