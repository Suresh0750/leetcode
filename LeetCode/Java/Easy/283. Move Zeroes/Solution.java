class Solution {
    public void moveZeroes(int[] nums) {
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0 && i!=nums.length-1){
            int j = i+1;
                for(;j<nums.length;j++){
                    if(nums[j]!=0)break;
                }
                if(j<nums.length && nums[j]!=0){
                    int temp = nums[i];
                    nums[i]= nums[j];
                    nums[j] = temp;
                }
            }
        }
       
    }
}