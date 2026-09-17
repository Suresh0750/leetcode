import java.util.HashSet;
class Solution {
    public boolean isHappy(int n) {
        HashSet<Integer> stack = new HashSet<>();
        if(n<0) return false;
        int res = helper(n,0,stack);
        System.out.println(res);
        return res==1;
    }
    int helper(int n,int sum,HashSet<Integer> stack){
        int rem = n%10;
        sum += (rem*rem);
        int pass = n/10;
         if(n==n%10 && !stack.contains(sum)){
            pass = sum;
            stack.add(sum);
            sum = 0;
        }else if(n==n%10) return sum;
        return helper(pass,sum,stack);
    }
}