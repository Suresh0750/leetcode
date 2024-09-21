/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let final=-1;
    for(let i=0;i<nums.length;i++)
{
    for(let j=i+1;j<nums.length;j++)
    {
        if(nums[j]-nums[i]>final && nums[i]<nums[j])
        {
        final=nums[j]-nums[i]
        }
    }
    
}
return final;

};
