/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let i = 1
        while(i<=n){
            let mid = Math.floor((i+n)/2)
            let isBad = isBadVersion(mid)
            if(isBad){
                let prev = isBadVersion(mid-1)
                if(!prev) return mid
                if(prev) i--
                if(isBad && prev) n = mid-1
            }else if(!isBad) i = mid+1
           
        }
    };
};