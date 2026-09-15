class Solution {
    
    public boolean isPalindrome(int x) {
        if(x<0) return false;
        int rev = helper(x,0);
        return x==rev;
    }
    public int helper(int x,int rev){
        if(x==0) return rev;
        int rem = x%10;
        rev = rev*10+rem;
       return helper(x/10,rev);
    }
}