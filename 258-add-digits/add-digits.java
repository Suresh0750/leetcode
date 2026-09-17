class Solution {
    public int addDigits(int num) {
        return num==0 ? 0 : num%9==0 ? 9 : num%9;
    }
    // public int addDigits(int num) {
    //     return helper(num,0);
    // }
    // public int helper(int num, int cal){
    //     cal += num%10;
    //     int nextInt = num/10;
    //     if(nextInt==num && cal%10==cal){
    //         return cal;
    //     }else if(nextInt==num){
    //         nextInt = cal;
    //         cal = 0;
    //     }
    //     return helper(nextInt,cal);
    // }
}
