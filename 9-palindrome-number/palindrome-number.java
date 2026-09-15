class Solution {
    int rev = 0;
    public boolean isPalindrome(int x) {
        if(x<0) return false;
        if(x==0) return true;
        helper(x);
        return x==rev;
    }
    public void helper(int x){
        if(x==0) return;
        int rem = x%10;
        rev = rev*10+rem;
        helper(x/10);
    }
}