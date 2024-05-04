/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    function insert(num1,num2){
        
    
        let result =[]
        
        nums1.map((val)=>{
            
            nums2.map((val1)=>{
                
                if(val==val1 && !result.includes(val)){
                    
                    result.push(val)
                }
            })
        })
        
        return result
    }
    
    
    if(nums1.length<nums2.length){
        return insert(nums1,nums2)
    }else{
        return insert(nums2,nums1)
    }
    };