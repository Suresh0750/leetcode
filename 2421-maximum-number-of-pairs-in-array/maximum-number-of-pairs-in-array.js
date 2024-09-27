/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    
    if(nums.length==1) return [0,1]

    let res = [0,0]
    let obj = {}

    for(let key of nums){
        if(obj[key]){
            obj[key]++
        }else{
            obj[key] = 1
        }
    }
    function add(val){
        if(val==1){
            res[1]++
        }else{
            res
        }
    }
    console.log(obj)
    Object.values(obj).forEach((val)=>{
        if(val%2==0){
            res[0]+=(val/2)
        }else if(val==1){
            res[1]++
        }else{
            res[1]++
            res[0] +=(val-1)/2
        }
    })
    console.log(res)
    return res
};