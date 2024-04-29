/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

    class circularQueue{
        constructor(size){
            this.arr = new Array(size)
            this.size = size
            this.curLength = 0
            this.rear = -1
            this.front = -1
        }
        
        print(){
            let i = 0
            console.log(this.arr)
        }
        
        enqueue(val){
            if(this.curLength!=this.size){
                this.rear = (this.rear+1)%this.size
                this.arr[this.rear] = val
                this.curLength++
                if(this.front==-1){
                    this.front = this.rear
                }
                return val
            }
        }
          final(){
            let result = new Array(this.size).fill(-1)
            let arr = this.arr
            let i = 0
            while(i<arr.length){
                let start = i==arr.length-1 ? 0: i+1;
                while(start!=i){
                    if(arr[i]<arr[start]){
                        result[i]=arr[start]
                        break;
                    }
                    start++
                    start = start%this.size
                }
                i++
            }
            return result
            
        }  
            
    }
    
    
    const list = new circularQueue(nums.length)
    
    let i = 0
    
    while(i<nums.length){
        list.enqueue(nums[i])
        i++
    }
    
    
     return list.final()
    
    };