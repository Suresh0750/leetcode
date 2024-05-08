/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    let heap = []
    
    function maxHeap(val){
        heap.push(val)
        let index = heap.length-1
        let parentInd
        while(index>0){
            parentInd = Math.floor((index-1)/2)
            if(heap[parentInd]>heap[index]) return heap
            heap[index] = heap[parentInd]
            heap[parentInd] = val
            index = parentInd
        }
        return heap
    }
    
    function swap(heap,i,j){
        let temp = heap[i]
        heap[i] = heap[j]
        heap[j] = temp
    }
    function extracMax(){
        
        if(!heap.length) return undefined
        
        
        let removed = heap[0] 
        heap[0] = heap.pop()
        let left,right,largest
        let index = 0
        let length = heap.length
        while(true){
            left = (index*2)+1
            right = (index*2)+2
            
            if(left<length){
                largest = left
            }
            if(right<length && heap[right]>heap[largest]){
                largest = right
            }
                
            if(heap[index]<heap[largest]){
            swap(heap,index,largest)
            index = largest
            }else{
                break
            }
            
        }
        return removed
    }
    
    let i = 0
    let result
    while(i<nums.length){
        maxHeap(nums[i])
        i++
    }
    
    
    i = 1
    
    while(i<=k){
    
        if(i==k){
        result =  extracMax()
        break;
        }
        extracMax()
        i++
    }
    
    return result
    
    };