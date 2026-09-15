class Solution {
    static int maxValidation = (int) Math.pow(2,31)-1;
    static int minValidation = -((int) Math.pow(2,31));
    public int reverse(int x) {
        boolean isNegative = x<0 ? true : false;
        long reverseNum = helper(Math.abs((long)x));
        if(reverseNum>maxValidation || reverseNum<minValidation) return 0;
        return isNegative ? -(int)reverseNum : (int)reverseNum;
    }
    public long helper(long x){
        int digits =(int) Math.log10(x)+1;
        return reverseLogic(x,digits);
    }
    public long reverseLogic(long x, int base){
        if(x%10==x) return x;
        long rem = x%10;
        long base10 = (long) Math.pow(10,base-1);
        return rem*base10+reverseLogic(x/10,base-1);
    }
}