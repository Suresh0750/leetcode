/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    class HashTable{
        constructor(arr){
            this.table = arr
            this.size = arr.length
        }
        
        final(target){
            let arr = this.table
            let j 
            for(let i=0;i<arr.length;i++){
                j = i+1
                while(j<arr.length){

                    if(arr[i]+arr[j] == target){

                        return [i,j]
                    }
                    j++
                }
                
            }

            return [-1,-1]
        }
    }


    const table = new HashTable(nums)

    return table.final(target)
};

