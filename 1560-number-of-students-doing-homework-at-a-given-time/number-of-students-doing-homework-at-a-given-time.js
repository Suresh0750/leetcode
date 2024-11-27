/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let  c = 0
    let i = 0
    while(i<startTime.length){
        if(startTime[i]<=queryTime && queryTime<=endTime[i]){
             c++
        }
        i++
    }
    return c
};