/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let isLate = s.includes('LLL')
    return !isLate && !(s.indexOf('A')!==s.lastIndexOf('A'))
};