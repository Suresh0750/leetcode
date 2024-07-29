/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleDigit = 0
    let doubleDigit = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]>9){
            doubleDigit+=nums[i]
        }else{
            singleDigit+=nums[i]
        }
    }
    return singleDigit==doubleDigit ? false : true;
};