class Solution {
    public void moveZeroes(int[] nums) {
        // for(int i=0;i<nums.length;i++){
        //     if(nums[i]==0 && i!=nums.length-1){
        //     int j = i+1;
        //         for(;j<nums.length;j++){
        //             if(nums[j]!=0)break;
        //         }
        //         if(j<nums.length && nums[j]!=0){
        //             nums[i]= nums[j];
        //             nums[j] = 0;
        //         }else break;
        //     }
        // }
        int j=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]!=0){
                if(i!=j){
                    nums[j] = nums[i];
                    nums[i] = 0;
                }
                j++;
            }
        }
    }
}