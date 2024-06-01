/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    
    let start= 0
    let result = {
        key : 'a',
        value : -Infinity
    }
    
    let i = 0
    while(i<releaseTimes.length){
        if(i==0 && start-releaseTimes[i]>result.value){
            result.value = releaseTimes[i]-start
            result.key = keysPressed[i]
        }else if(result.value == Math.abs(releaseTimes[i-1]-releaseTimes[i]) && result.key<keysPressed[i]){
        result.value =  Math.abs(releaseTimes[i-1]-releaseTimes[i])
            result.key = keysPressed[i]
            
        }else if(Math.abs(releaseTimes[i-1]-releaseTimes[i])>result.value){
            result.key = keysPressed[i]
            result.value = Math.abs(releaseTimes[i-1]-releaseTimes[i])
        }
        i++
    }
    return result.key
    };