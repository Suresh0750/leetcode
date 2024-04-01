
// Input: n = 7
// Output: 6
// Explanation: Details of the tournament: 
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.


var numberOfMatches = function(n) {
    let sum=0

while(n){
    
    if(n%2 == 0){
        
        let old = n
        n = n/2
        
        sum = sum+(old-n)
    }else{
        
        let old = n
        n= n==1 ? 1 :(n-1)/2
        
        sum = sum+(old-n)
    }
    
    if(n == 1){
        
        break;
    }
}
return sum
};