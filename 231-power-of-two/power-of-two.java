class Solution {
    public boolean isPowerOfTwo(int n) {
        double power =  (Math.log(n) / Math.log(2));
        if(Math.abs(power- Math.round(power))<1e-10){
            return true;
        }
        return false;
    }
}